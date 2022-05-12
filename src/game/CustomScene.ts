import { GridEngine } from 'grid-engine';

interface ICustomScene extends Phaser.Scene {
   gridEngine: GridEngine;
}

export class CustomScene extends Phaser.Scene {
   protected gridEngine: GridEngine;

   constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
      super(config);
      this.gridEngine = (this as unknown as ICustomScene).gridEngine;
   }
}
