import { describe, expect, test } from 'vitest';
import { clamp } from './number';

describe('clamp', () => {
   test('should return the value if test is between min and max', () => {
      expect(clamp(0, 0, 1)).toBe(0);
      expect(clamp(0.5, 0, 1)).toBe(0.5);
      expect(clamp(1, 0, 1)).toBe(1);
   });

   test('should return the min if the value is less than min', () => {
      expect(clamp(-1, 0, 1)).toBe(0);
   });

   test('should return the max if the value is greater than max', () => {
      expect(clamp(2, 0, 1)).toBe(1);
   });

   test('should return the min if the value is equal to min', () => {
      expect(clamp(0, 0, 1)).toBe(0);
   });

   test('should return the max if the value is equal to max', () => {
      expect(clamp(1, 0, 1)).toBe(1);
   });

   test('should return the min if the value is equal to min and max', () => {
      expect(clamp(0, 0, 0)).toBe(0);
   });
});
