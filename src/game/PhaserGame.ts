import { GridEngine } from 'grid-engine';
import Phaser from 'phaser';
import { CloudsScene } from './scenes/CloudsScene';

export const config: Phaser.Types.Core.GameConfig = {
   type: Phaser.AUTO,
   backgroundColor: '#48C4F8',
   parent: 'root-game',
   scene: [CloudsScene],
   pixelArt: true,
   scale: {
      mode: Phaser.Scale.ENVELOP,
      autoCenter: Phaser.Scale.CENTER_BOTH,
   },
   plugins: {
      scene: [
         {
            key: 'gridEngine',
            plugin: GridEngine,
            mapping: 'gridEngine',
         },
      ],
   },
};

export const game = new Phaser.Game(config);
