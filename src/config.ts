import dotenv from 'dotenv';

import { GraphQLApiConfig } from './adapters/driving/http-graphql';
import { LogLevel } from './core/ports/driven';

export class Config {
  logLevel: LogLevel;
  graphQLApi: GraphQLApiConfig;

  constructor() {
    dotenv.config();

    const {
      LOG_LEVEL,
      GRAPHQL_PORT,
      GRAPHQL_CORS_ORIGIN,
      GRAPHQL_HOSTNAME,
    } = process.env;

    this.logLevel = (LOG_LEVEL as LogLevel) || LogLevel.Info;

    this.graphQLApi = new GraphQLApiConfig(
      GRAPHQL_PORT,
      GRAPHQL_CORS_ORIGIN,
      GRAPHQL_HOSTNAME
    );
  }
}

export default new Config();
