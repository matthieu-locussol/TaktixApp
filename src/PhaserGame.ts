import { GridEngine } from 'grid-engine';
import Phaser from 'phaser';
import CloudsScene from './game/CloudsScene';

const config: Phaser.Types.Core.GameConfig = {
   type: Phaser.AUTO,
   backgroundColor: '#48C4F8',
   parent: 'phaser-container',
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

export default new Phaser.Game(config);
