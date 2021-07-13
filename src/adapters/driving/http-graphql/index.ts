import { GraphQLApiBase, GraphQLApiConfig } from './_lib';
import { Logger } from '../../../core/ports/driven';
import {
  FlightService,
  PlanetService,
  SpaceCenterService,
} from '../../../core/ports/driving';

import { buildSchema } from 'type-graphql';

class GraphQLApi extends GraphQLApiBase {
  constructor(
    flightService: FlightService,
    planetService: PlanetService,
    spaceCenterService: SpaceCenterService,
    options: { config?: GraphQLApiConfig; logger?: Logger } = {}
  ) {
    super(
      options.config || new GraphQLApiConfig(),
      buildSchema(),
      options.logger || console
    );
  }
}

export default GraphQLApi;
export { GraphQLApiConfig, GraphQLApi };
