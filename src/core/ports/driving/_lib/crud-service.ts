import { Entity, EntityMaker, NotFoundError, Value } from '../../../domain';
import { Store } from '../../driven';

export class CrudService<TId extends Value<string>, T extends Entity<TId>> {
  constructor(protected _maker: EntityMaker<TId, T>, protected _store: Store<TId, T>) {}

  async create(obj: object) {
    const entity = new this._maker(obj);

    const created = await this._store.create(entity);

    return created;
  }

  async findOne(filters: object = {}) {
    const entities = await this._store.findOne(filters);

    return entities;
  }

  async findMany(where: object = {}) {
    const entities = await this._store.findMany(where);

    return entities;
  }
}
