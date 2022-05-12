import { GridEngine } from 'grid-engine';

interface IScene extends Phaser.Scene {
   gridEngine: GridEngine;
}

export class Scene extends Phaser.Scene {
   protected gridEngine: GridEngine;

   constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
      super(config);
      this.gridEngine = (this as unknown as IScene).gridEngine;
   }
}
