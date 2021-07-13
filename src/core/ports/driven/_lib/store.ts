import { Entity, Value } from '../../../domain';

export type Filters<T> = { [P in keyof T]?: T[P] };
export type Order<T> = { [P in keyof T]?: 'ASC' | 'DESC' };

export interface FindManyOptions<T> {
  filters?: Filters<T>;
  order?: Order<T>;
  skip?: number;
  take?: number;
}

export interface Store<TId extends Value<string>, T extends Entity<TId>> {
  count(filters?: Filters<T>): Promise<number>;
  create(entity: T): Promise<T>;
  getOneById(id: number): Promise<T>;
  getOneByUid(uid: string): Promise<T>;
  findMany(where: FindManyOptions<T>): Promise<T[]>;
  findOne(filters: Filters<T>): Promise<T>;
}
