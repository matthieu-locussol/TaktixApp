import { makeAutoObservable } from 'mobx';
import {
   getExperienceForNextLevel,
   getFloorExperience,
   getLevelFromExperience,
} from '../utils/levels';

export class CharacterStore {
   public name: string = '';

   public health: number = 0;

   public maxHealth: number = 0;

   public experience: number = 0;

   constructor() {
      makeAutoObservable(this);
   }

   get level() {
      return getLevelFromExperience(this.experience);
   }

   get healthPercentage() {
      if (this.maxHealth === 0) {
         return 0;
      }

      return (this.health / this.maxHealth) * 100;
   }

   get experiencePercentage() {
      const floorExperience = getFloorExperience(this.experience);
      const experienceForNextLevel = getExperienceForNextLevel(this.experience);

      // 678_000 - 810_000

      const min = this.experience - floorExperience;
      const max = experienceForNextLevel - floorExperience;

      const percentage = (min / max) * 100;
      return percentage;
   }

   public setName(name: string) {
      this.name = name;
   }

   public setHealth(health: number) {
      this.health = health;
   }

   public setMaxHealth(maxHealth: number) {
      this.maxHealth = maxHealth;
   }

   public setExperience(experience: number) {
      this.experience = experience;
   }
}
