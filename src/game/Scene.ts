import { Direction, GridEngine, Position } from 'grid-engine';
import { TELEPORTATION_SPOTS } from '../data/teleportationSpots';
import { teleportPlayer } from '../utils/game';

export interface SceneData {
   entrancePosition?: Position;
   entranceDirection?: Direction;
}

interface IScene extends Phaser.Scene {
   gridEngine: GridEngine;
}

export abstract class Scene extends Phaser.Scene {
   public gridEngine: GridEngine;

   constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
      super(config);
      this.gridEngine = (this as unknown as IScene).gridEngine;
   }

   public override update() {
      this.updateMoves();
      this.updateTeleportationSpots();
   }

   public updateMoves() {
      const cursors = this.input.keyboard.createCursorKeys();

      if (cursors.left.isDown) {
         this.gridEngine.move('player', Direction.LEFT);
      } else if (cursors.right.isDown) {
         this.gridEngine.move('player', Direction.RIGHT);
      } else if (cursors.up.isDown) {
         this.gridEngine.move('player', Direction.UP);
      } else if (cursors.down.isDown) {
         this.gridEngine.move('player', Direction.DOWN);
      } else if (cursors.space.isDown) {
         teleportPlayer({ x: 10, y: 10 });
      }
   }

   public updateTeleportationSpots() {
      const playerPosition = this.gridEngine.getPosition('player');
      const teleportationSpots = TELEPORTATION_SPOTS[this.scene.key];

      for (const { x, y, destinationMapName, destinationMapData } of teleportationSpots) {
         if (playerPosition.x === x && playerPosition.y === y) {
            this.scene.start(destinationMapName, destinationMapData);
         }
      }
   }
}
