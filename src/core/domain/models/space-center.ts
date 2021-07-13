import { Entity } from '../_lib';
import { SpaceCenterId } from './space-center-id';

export type SpaceCenterProps = {
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  uid: SpaceCenterId;
  createdAt: Date;
};

export class SpaceCenter extends Entity<SpaceCenterId> {
  public id?: number;
  public name: string;
  public description: string;
  public latitude: number;
  public longitude: number;

  constructor(props: SpaceCenterProps) {
    super(props);

    this.name = props.name;
    this.description = props.description;
    this.latitude = props.latitude;
    this.longitude = props.longitude;
  }
}
