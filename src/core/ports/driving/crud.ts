import { Flight, FlightId, Planet, PlanetId, SpaceCenter, SpaceCenterId } from '../../domain';
import { FlightStore, PlanetStore, SpaceCenterStore } from '../driven';
import { CrudService } from './_lib';

export class FlightService extends CrudService<FlightId, Flight> {
  constructor(store: FlightStore) {
    super(Flight, store);
  }
}

export class PlanetService extends CrudService<PlanetId, Planet> {
  constructor(store: PlanetStore) {
    super(Planet, store);
  }
}

export class SpaceCenterService extends CrudService<SpaceCenterId, SpaceCenter> {
  constructor(store: SpaceCenterStore) {
    super(SpaceCenter, store);
  }
}
