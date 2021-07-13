import {Uuid} from '../../../../../src/core/domain/_lib'

describe('Uuid', () => {
  describe('from', () => {
    it('throws when given an invalid UUID', () => {
      const invalidValue = 'not-a-uuid-hehe';
      expect(() => Uuid.from(invalidValue)).toThrow(`Invalid value provided, expected a UUID (${invalidValue})`);
    });

    it('is instantiated when given a valid UUID', () => {
      const value = '95ecc380-afe9-11e4-9b6c-751b66dd541e';
      const instance = Uuid.from(value);

      expect(instance.value).toEqual(value);
    });
  });

  describe('generate', () => {
    it('creates an instance of UUID with a valid value', () => {
      const instance = Uuid.generate();
      const copy = Uuid.from(instance.value);

      expect(copy.value).toEqual(instance.value);
    });
  });
});
