import { Flight, FlightId, Planet, PlanetId, SpaceCenter, SpaceCenterId } from '../../../../core/domain';
import { FlightStore, PlanetStore, SpaceCenterStore } from '../../../../core/ports/driven';
import { InMemoryStore } from './_lib';

export class InMemoryFlightStore extends InMemoryStore<FlightId, Flight> implements FlightStore {}

export class InMemoryPlanetStore extends InMemoryStore<PlanetId, Planet> implements PlanetStore {}

export class InMemorySpaceCenterStore extends InMemoryStore<SpaceCenterId, SpaceCenter> implements SpaceCenterStore {}
