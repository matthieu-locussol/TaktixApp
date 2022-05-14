import { expect, test } from 'vitest';
import { LEVELS } from './levels';

test('all levels are ordered ascending', () => {
   const levelsOrderedDesc = LEVELS.sort((a, b) => a.level - b.level);
   expect(levelsOrderedDesc).toEqual(LEVELS);
});

test('all levels experience points are ordered ascending', () => {
   const levelsOrderedAsc = LEVELS.sort((a, b) => a.experiencePoints - b.experiencePoints);
   expect(levelsOrderedAsc).toEqual(LEVELS);
});
