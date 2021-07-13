// Driven adapters
import { StdoutLogger } from './adapters/driven/logging/stdout-logger';
import {
  InMemoryFlightStore,
  InMemoryPlanetStore,
  InMemorySpaceCenterStore,
} from './adapters/driven/persistence';

// Driving adapters
import { GraphQLApiBase } from './adapters/driving/http-graphql/_lib/graphql-api-base';

// Driving ports
import {
  FlightService,
  PlanetService,
  SpaceCenterService,
} from './core/ports/driving';

// Driven ports
import {
  Logger,
  FlightStore,
  PlanetStore,
  SpaceCenterStore,
} from './core/ports/driven';

import { Config } from './config';
import { GraphQLApi } from './adapters/driving/http-graphql';

export class Backend {
  logger: Logger;

  // Driven adapters
  flightStore: FlightStore;
  planetStore: PlanetStore;
  spaceCenterStore: SpaceCenterStore;

  // Driving ports
  flightService: FlightService;
  planetService: PlanetService;
  spaceCenterService: SpaceCenterService;

  // Driving adapters
  graphQLApi: GraphQLApiBase;

  constructor(
    public config: Config,
    logger: Logger = new StdoutLogger(config.logLevel)
  ) {
    this.logger = logger;

    // Driven adapters
    this.flightStore = new InMemoryFlightStore(logger);
    this.planetStore = new InMemoryPlanetStore(logger);
    this.spaceCenterStore = new InMemorySpaceCenterStore(logger);

    // Driving ports
    this.flightService = new FlightService(this.flightStore);
    this.planetService = new PlanetService(this.planetStore);
    this.spaceCenterService = new SpaceCenterService(this.spaceCenterStore);

    // Driving adapters
    this.graphQLApi = new GraphQLApi(
      this.flightService,
      this.planetService,
      this.spaceCenterService,
      {
        config: config.graphQLApi,
        logger,
      }
    );
  }

  async start(): Promise<void> {
    return this.graphQLApi.start();
  }
}
