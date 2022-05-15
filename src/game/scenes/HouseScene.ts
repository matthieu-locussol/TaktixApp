import { Direction } from 'grid-engine';
import { store } from '../../store';
import { Scene } from '../Scene';

export class HouseScene extends Scene {
   constructor() {
      super('house');
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
               startPosition: { x: 8, y: 8 },
               charLayer: 'player',
            },
         ],
      };

      this.gridEngine.create(houseTilemap, gridEngineConfig);
      this.gridEngine.turnTowards('player', Direction.UP);
   }

   public update() {
      const cursors = this.input.keyboard.createCursorKeys();

      if (cursors.left.isDown) {
         this.gridEngine.move('player', Direction.LEFT);
      } else if (cursors.right.isDown) {
         this.gridEngine.move('player', Direction.RIGHT);
      } else if (cursors.up.isDown) {
         this.gridEngine.move('player', Direction.UP);
      } else if (cursors.down.isDown) {
         this.gridEngine.move('player', Direction.DOWN);
      }

      if (
         (this.gridEngine.getPosition('player').x === 8 ||
            this.gridEngine.getPosition('player').x === 9) &&
         this.gridEngine.getPosition('player').y === 9
      ) {
         this.scene.start('clouds');
      }
   }
}
