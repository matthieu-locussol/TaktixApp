import { Direction, Position } from 'grid-engine';
import { store } from '../../store';
import { Scene, SceneData } from '../Scene';

export class HouseScene extends Scene {
   public entrancePosition: Position = { x: 8, y: 8 };

   public entranceDirection: Direction = Direction.DOWN;

   constructor() {
      super('house');
   }

   public init({ entrancePosition, entranceDirection }: SceneData) {
      if (entrancePosition !== undefined) {
         this.entrancePosition = entrancePosition;
      }

      if (entranceDirection !== undefined) {
         this.entranceDirection = entranceDirection;
      }
   }

   public preload() {
      const { loadingScreenStore } = store;

      this.load.on('progress', (value: number) => {
         loadingScreenStore.setProgress(value);
      });

      this.load.on('fileprogress', (file: Phaser.Loader.File) => {
         loadingScreenStore.setCurrentAssetPath(file.src);
      });

      this.load.on('complete', () => {
         loadingScreenStore.setLoadingAssets(false);
      });

      this.load.audio('background', '/assets/musics/background.mp3');
      this.load.image('house_tiles', '/assets/tilesets/house_tileset.png');
      this.load.tilemapTiledJSON('house-map', '/assets/maps/house.json');
      this.load.spritesheet('player', '/assets/characters/characters.png', {
         frameWidth: 26,
         frameHeight: 36,
      });
   }

   public create() {
      const houseTilemap = this.make.tilemap({ key: 'house-map' });
      houseTilemap.addTilesetImage('House', 'house_tiles');

      for (let i = 0; i < houseTilemap.layers.length; i += 1) {
         const layer = houseTilemap.createLayer(i, 'House', 0, 0);
         layer.setDepth(i);
         layer.scale = 3;
      }

      const playerSprite = this.add.sprite(0, 0, 'player');
      playerSprite.setDepth(3);
      playerSprite.scale = 3;
      this.cameras.main.startFollow(playerSprite, true);
      this.cameras.main.setFollowOffset(-playerSprite.width, -playerSprite.height);

      const gridEngineConfig = {
         characters: [
            {
               id: 'player',
               sprite: playerSprite,
               walkingAnimationMapping: 6,
               startPosition: this.entrancePosition,
               charLayer: 'player',
            },
         ],
      };

      this.gridEngine.create(houseTilemap, gridEngineConfig);
      this.gridEngine.turnTowards('player', this.entranceDirection);
   }
}
