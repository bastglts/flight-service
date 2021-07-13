import R from 'ramda';
import { Entity, NotFoundError, Value } from '../../../../core/domain';
import { Filters, FindManyOptions, Logger, Store } from '../../../../core/ports/driven';

export class InMemoryStore<TId extends Value<string>, T extends Entity<TId>> implements Store<TId, T> {
  private _entities: { [id: number]: T } = {};

  constructor(private _logger: Logger = console) {}

  async count(filters?: Filters<T>) {
    return R.filter(R.whereEq(filters), Object.values(this._entities)).length;
  }

  async create(entity: T) {
    entity.id = entity.id || Object.keys(this._entities).length;
    this._entities[entity.id] = entity;
    this._logger.debug({ created: entity });
    return entity;
  }

  async createMany(entities: T[]) {
    const created = await Promise.all(entities.map(entity => this.create(entity)));
    this._logger.debug({ created });
    return created;
  }

  async getOneById(id: number) {
    const entity = this._entities[id];
    if (entity == null) throw new NotFoundError({ id });
    return entity;
  }

  async getOneByUid(uid: string) {
    return await this.findOne({ _uid: uid });
  }

  async findMany(where: FindManyOptions<T>) {
    return R.filter(R.whereEq(where.filters), Object.values(this._entities));
  }

  async findOne(filters: object) {
    const results = await this.findMany({ filters });
    if (R.isEmpty(results)) throw new NotFoundError({ filters });
    return results[0];
  }
}
