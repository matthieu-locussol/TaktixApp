import { Direction } from 'grid-engine';
import { CustomScene } from '../CustomScene';

export default class CloudsScene extends CustomScene {
   constructor() {
      super('clouds');
   }

   public preload() {
      this.load.image('tiles', '/assets/tilesets/cloud_tileset.png');
      this.load.tilemapTiledJSON('cloud-city-map', '/assets/maps/clouds_1.json');
      this.load.spritesheet('player', '/assets/characters/characters.png', {
         frameWidth: 26,
         frameHeight: 36,
      });
   }

   public create() {
      const cloudCityTilemap = this.make.tilemap({ key: 'cloud-city-map' });
      cloudCityTilemap.addTilesetImage('Cloud City', 'tiles');

      for (let i = 0; i < cloudCityTilemap.layers.length; i += 1) {
         const layer = cloudCityTilemap.createLayer(i, 'Cloud City', 0, 0);
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
               startPosition: { x: 4, y: 4 },
               charLayer: 'player',
            },
         ],
      };

      this.gridEngine.create(cloudCityTilemap, gridEngineConfig);
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
   }
}
