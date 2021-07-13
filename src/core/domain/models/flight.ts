import { Entity } from '../_lib';
import { FlightId } from './flight-id';
import { SpaceCenterId } from './space-center-id';

export type FlightProps = {
  code: string;
  departureAt: Date;
  seatCount: number;
  lauchingSiteId: SpaceCenterId;
  landingSiteId: SpaceCenterId;
  uid: FlightId;
  createdAt: Date;
};

export class Flight extends Entity<FlightId> {
  public id?: number;
  public code: string;
  public departureAt: Date;
  private _lauchingSiteId: SpaceCenterId;
  get lauchingSideId() {
    return this._lauchingSiteId.value;
  }
  private _landingSiteId: SpaceCenterId;
  get landingSideId() {
    return this._landingSiteId.value;
  }

  constructor(props: FlightProps) {
    super(props);

    this.code = props.code;
    this.departureAt = props.departureAt;
    this._lauchingSiteId = props.lauchingSiteId;
    this._landingSiteId = props.landingSiteId;
  }
}
