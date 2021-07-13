import { Value } from './value';

type EntityProps<T> = {
  createdAt: Date;
  uid: T;
};

export abstract class Entity<T extends Value<string>> {
  protected _uid: T;
  get uid() {
    return this._uid.value;
  }
  public id?: number;
  public createdAt: Date;

  constructor(props: EntityProps<T>) {
    this._uid = props.uid;
    this.createdAt = props.createdAt;
  }
}

export interface EntityMaker<TId extends Value<string>, T extends Entity<TId>> {
  new (...args: any[]): T;
}
