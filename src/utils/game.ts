import type { Position } from 'grid-engine';
import { game } from '../game/PhaserGame';
import type { Scene, SceneData } from '../game/Scene';
import { store } from '../store';
import { _assertTrue } from './_assert';

export const getCurrentScene = (): Scene => {
   const { scenes } = game.scene;
   const activeScenes = scenes.filter(({ scene }) => game.scene.isActive(scene.key));
   _assertTrue(activeScenes.length === 1, 'There should be only one active scene at a time.');
   return activeScenes[0] as Scene;
};

export const teleportPlayer = (position: Position) => {
   const scene = getCurrentScene();
   scene.gridEngine.setPosition('player', position, 'player');

   const { characterStore } = store;
   characterStore.setPosition(position);
};

export const changeMapPlayer = (map: string, data: SceneData) => {
   const scene = getCurrentScene();
   scene.scene.start(map, data);

   const { characterStore } = store;
   if (data.entrancePosition !== undefined) {
      characterStore.setPosition(data.entrancePosition);
   }
};
