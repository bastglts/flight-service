export class DomainError extends Error {
  public errors: object[];

  constructor(errors: object[]) {
    super();
    this.errors = errors;
  }
}

export class NotFoundError extends DomainError {
  constructor(error: object) {
    super([error]);
  }
}
