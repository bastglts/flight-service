import { Uuid } from "../_lib/uuid";

export class SpaceCenterId extends Uuid {
  public readonly type = 'SpaceCenterId' as const;

  constructor(value: string) {
    super(value);
  }
}
