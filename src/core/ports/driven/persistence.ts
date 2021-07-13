import { Flight, FlightId, Planet, PlanetId, SpaceCenter, SpaceCenterId } from '../../domain/models';

import { Store } from './_lib';

export interface PlanetStore extends Store<PlanetId, Planet> {}

export interface SpaceCenterStore extends Store<SpaceCenterId, SpaceCenter> {}

export interface FlightStore extends Store<FlightId, Flight> {}
