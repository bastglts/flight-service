import { Entity } from '../_lib';
import { PlanetId } from './planet-id';
import { SpaceCenterId } from './space-center-id';

export type PlanetProps = {
  name: string;
  code: string;
  spaceCenterIds?: SpaceCenterId[];
  uid: PlanetId;
  createdAt: Date;
};

export class Planet extends Entity<PlanetId> {
  public id?: number;
  public name: string;
  public code: string;
  private _spaceCenterIds: SpaceCenterId[];
  get spaceCenterIds(): ReadonlyArray<SpaceCenterId> {
    return this._spaceCenterIds;
  }

  constructor(props: PlanetProps) {
    super(props);

    this.name = props.name;
    this.code = props.code;
    this._spaceCenterIds = props.spaceCenterIds || [];
  }
}
