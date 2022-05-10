import assert from 'assert';

/**
 * Checks that value is not null nor undefined.
 * @param value
 * @param message
 */
export function _assert<T>(value: T, message?: string | Error): asserts value is NonNullable<T> {
   if (typeof value === 'boolean') {
      throw new Error('Use _assertTrue for boolean instead.');
   }

   if (typeof value === 'boolean' || value === undefined || value === null) {
      const err = typeof message === 'object' ? message : new Error(message);
      throw err;
   }
}

/**
 * Checks that value is stricly true.
 * @param value
 * @param message
 */
export function _assertTrue(value: boolean, message?: string | Error): asserts value is true {
   if (value !== true) {
      const err = typeof message === 'object' ? message : new Error(message);
      throw err;
   }
}

/**
 * Checks that actual is stricly equal to expected.
 * @param actual
 * @param expected
 * @param message
 */
export function _assertStrictEqual<T>(
   actual: unknown,
   expected: T,
   message?: string | Error | undefined,
): asserts actual is T {
   return assert.strictEqual(actual, expected, message);
}
