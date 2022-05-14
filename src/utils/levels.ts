import { LEVELS } from '../data/levels';
import { _assert, _assertTrue } from './_assert';

export const getLevel = (level: number) => {
   _assertTrue(level > 0, 'Level must be greater than 0.');
   _assertTrue(level <= LEVELS.length, 'Level must be less than or equal to the number of levels.');

   return LEVELS[level - 1];
};

export const getLevelFromExperience = (experience: number) => {
   const levelsOrderedDesc = [...LEVELS].sort((a, b) => b.level - a.level);
   const foundLevel = levelsOrderedDesc.find((entry) => entry.experiencePoints <= experience);
   _assert(foundLevel, `No level has been found for '${experience}' experience points.`);

   return foundLevel;
};

export const getMaximumLevel = () => {
   const levelsOrderedDesc = [...LEVELS].sort((a, b) => b.level - a.level);
   return levelsOrderedDesc[0];
};

export const getExperienceFromLevel = (level: number) => {
   const foundLevel = LEVELS.find((entry) => entry.level === level);
   _assert(foundLevel, `Level '${level}' is not defined.`);

   return foundLevel.experiencePoints;
};

export const getExperienceForNextLevel = (experience: number) => {
   try {
      const { level } = getLevelFromExperience(experience);
      const { experiencePoints } = getLevel(level + 1);
      return experiencePoints;
   } catch (e) {
      return experience;
   }
};

export const getFloorExperience = (experience: number) => {
   const { experiencePoints } = getLevelFromExperience(experience);
   return experiencePoints;
};
