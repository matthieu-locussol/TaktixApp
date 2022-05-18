import { expect, test } from 'vitest';
import { CharacterStore } from './CharacterStore';

test('should have a name', () => {
   const store = new CharacterStore();
   expect(store.name).toBe('');
});

test('should have a health', () => {
   const store = new CharacterStore();
   expect(store.health).toBe(0);
});

test('should have a max health', () => {
   const store = new CharacterStore();
   expect(store.maxHealth).toBe(0);
});

test('should have an experience', () => {
   const store = new CharacterStore();
   expect(store.experience).toBe(0);
});

test('should have a level', () => {
   const store = new CharacterStore();
   expect(store.level).toEqual({
      level: 1,
      experiencePoints: 0,
   });
});

test('should have a health percentage', () => {
   const store = new CharacterStore();
   expect(store.healthPercentage).toBe(0);
});

test('should have an experience percentage', () => {
   const store = new CharacterStore();
   expect(store.experiencePercentage).toBe(0);
});

test('should set the name', () => {
   const store = new CharacterStore();
   store.setName('John');
   expect(store.name).toBe('John');
});

test('should set the health', () => {
   const store = new CharacterStore();
   store.setHealth(100);
   expect(store.health).toBe(100);
});

test('should set the max health', () => {
   const store = new CharacterStore();
   store.setMaxHealth(100);
   expect(store.maxHealth).toBe(100);
});

test('should set the experience', () => {
   const store = new CharacterStore();
   store.setExperience(100);
   expect(store.experience).toBe(100);
});

test('should set the level', () => {
   const store = new CharacterStore();
   store.setExperience(200);
   expect(store.level).toEqual({
      level: 2,
      experiencePoints: 110,
   });
});

test('should set the health percentage', () => {
   const store = new CharacterStore();
   store.setHealth(100);
   store.setMaxHealth(230);
   expect(store.healthPercentage).toBe(43.47826086956522);
});

test('should set the experience percentage', () => {
   const store = new CharacterStore();
   store.setExperience(100);
   expect(store.experiencePercentage).toBe(90.9090909090909);
});

test('should set the position', () => {
   const store = new CharacterStore();
   store.setPosition({ x: 1, y: 2 });
   expect(store.position).toEqual({ x: 1, y: 2 });
});

test('should set the position x', () => {
   const store = new CharacterStore();
   store.setPositionX(1);
   expect(store.position).toEqual({ x: 1, y: 0 });
});

test('should set the position y', () => {
   const store = new CharacterStore();
   store.setPositionY(2);
   expect(store.position).toEqual({ x: 0, y: 2 });
});
