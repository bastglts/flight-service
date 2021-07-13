import Koa from 'koa';
import helmet from 'koa-helmet';
import cors from '@koa/cors';
import { GraphQLSchema } from 'graphql';
import KoaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { ApolloServer } from 'apollo-server-koa';

import { Logger } from '../../../../core/ports/driven';
import { errorHandler } from './error-handling';

class GraphQLApiConfig {
  corsOrigin: string;
  hostname: string;
  port: string | number;

  constructor(
    port: string | number = 3000,
    corsOrigin = '*',
    hostname = 'localhost'
  ) {
    this.corsOrigin = corsOrigin;
    this.hostname = hostname;
    this.port = port;
  }
}

class GraphQLApiBase {
  public app: Koa;

  constructor(
    public config: GraphQLApiConfig,
    schema: GraphQLSchema,
    private _logger: Logger
  ) {
    this.app = new Koa();

    // Setup some middleware...
    this.app.use(cors({ origin: config.corsOrigin }));
    this.app.use(koaBody());
    this.app.use(
      helmet({
        contentSecurityPolicy:
          process.env.NODE_ENV === 'production' ? undefined : false,
      })
    );

    const server = new ApolloServer({
      schema,
      formatError: errorHandler(_logger),
    });

    const router = new KoaRouter();

    router.post('/graphql', server.getMiddleware());
    router.get('/graphql', server.getMiddleware());
    router.get('/healthcheck', ctx => {
      ctx.body = { success: true };
    });

    this.app.use(router.routes());
    this.app.use(router.allowedMethods());
  }

  start() {
    return new Promise<void>((resolve, reject) => {
      try {
        this.app.listen(this.config.port, () => {
          this._logger.info(
            `GraphQL API up and running on http://${this.config.hostname}:${this.config.port}/graphql`
          );
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default GraphQLApiBase;
export { GraphQLApiBase, GraphQLApiConfig };
