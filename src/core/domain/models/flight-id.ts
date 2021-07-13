import { Uuid } from "../_lib/uuid";

export class FlightId extends Uuid {
  public readonly type = 'FlightId' as const;

  constructor(value: string) {
    super(value);
  }
}
