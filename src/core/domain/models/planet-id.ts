import { Uuid } from "../_lib/uuid";

export class PlanetId extends Uuid {
  public readonly type = 'PlanetId' as const;

  constructor(value: string) {
    super(value);
  }
}
