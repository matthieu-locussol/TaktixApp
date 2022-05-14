import { describe, expect, test } from 'vitest';
import {
   getExperienceForNextLevel,
   getExperienceFromLevel,
   getFloorExperience,
   getLevel,
   getLevelFromExperience,
   getMaximumLevel,
} from './levels';

describe('getLevel', () => {
   test('should return the level', () => {
      expect(getLevel(1)).toEqual({ level: 1, experiencePoints: 0 });
      expect(getLevel(2)).toEqual({ level: 2, experiencePoints: 110 });
      expect(getLevel(21)).toEqual({ level: 21, experiencePoints: 202_000 });
   });

   test('should throw an error if the level is not defined', () => {
      expect(() => getLevel(0)).toThrowError();
      expect(() => getLevel(43)).toThrow();
   });
});

describe('getLevelFromExperience', () => {
   test('should return the level', () => {
      expect(getLevelFromExperience(0).level).toBe(1);
      expect(getLevelFromExperience(877_000).level).toBe(33);
   });

   test('should throw an error if the experience is not defined', () => {
      expect(() => getLevelFromExperience(-1)).toThrowError();
   });
});

describe('getMaximumLevel', () => {
   test('should return level 40', () => {
      expect(getMaximumLevel().level).toBe(40);
   });
});

describe('getExperienceFromLevel', () => {
   test('should return the experience', () => {
      expect(getExperienceFromLevel(1)).toBe(0);
      expect(getExperienceFromLevel(33)).toBe(829_000);
   });

   test('should throw an error if the level is not defined', () => {
      expect(() => getExperienceFromLevel(0)).toThrowError();
      expect(() => getExperienceFromLevel(43)).toThrowError();
   });
});

describe('getExperienceForNextLevel', () => {
   test('should return the experience for the next level', () => {
      expect(getExperienceForNextLevel(0)).toBe(110);
      expect(getExperienceForNextLevel(863_858)).toBe(910_000);
   });
});

describe('getFloorExperience', () => {
   test('should return the floor experience', () => {
      expect(getFloorExperience(0)).toBe(0);
      expect(getFloorExperience(877_000)).toBe(829_000);
      expect(getFloorExperience(829_000)).toBe(829_000);
   });
});
