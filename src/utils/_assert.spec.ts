import { _assert, _assertStrictEqual, _assertTrue } from './_assert';

describe('_assert', () => {
   test('_assert', () => {
      expect(() => _assert(true)).toThrow();
      expect(() => _assert(false)).toThrow();
      expect(() => _assert(null)).toThrow();
      expect(() => _assert(undefined)).toThrow();

      const variable: string | null = 'value';
      expect(() => _assert(variable)).not.toThrow();
   });

   test('_assertTrue', () => {
      expect(() => _assertTrue(true)).not.toThrow();
      expect(() => _assertTrue(false)).toThrow();
   });

   test('_assertStrictEqual', () => {
      expect(() => _assertStrictEqual('', '')).not.toThrow();
      expect(() => _assertStrictEqual('', 'value')).toThrow();
   });
});
