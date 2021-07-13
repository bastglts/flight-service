import { v4 as uuid } from 'uuid';

import { UUID_V4_PATTERN } from './constants';
import { Value } from './value';

export class Uuid extends Value<string> {
  protected constructor(value: string) {
    if (!UUID_V4_PATTERN.test(value)) {
      throw new Error(`Invalid value provided, expected a UUID (${value})`);
    }

    super(value);
  }

  /**
   * Try to to create an instance of `Uuid` using the given value as an id.
   *
   * @param id Target value.
   *
   * @throws {Error} If an invalid UUID value is provided.
   *
   * @return `Uuid` instance.
   */
  static from(id: string) {
    return new Uuid(id);
  }

  /**
   * Create an instance of `Uuid` with a randomly generated UUID.
   *
   * @return `Uuid` instance.
   */
  static generate(): Uuid {
    return new Uuid(uuid());
  }
}