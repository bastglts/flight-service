import { GraphQLError } from 'graphql';

import { Logger } from '../../../../core/ports/driven';

/**
 * TODO: add custom error class and a generic way to transform Domain errors to GraphQL errors (e.g. resolver decoraters)
 */

export const errorHandler = (logger: Logger) => (error: GraphQLError) => {
  logger.error(error);

  return error;
};
