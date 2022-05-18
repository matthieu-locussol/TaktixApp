import { store } from '../../store';
import { Scene } from '../Scene';

export class CloudsScene extends Scene {
   constructor() {
      super('clouds');
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
               startPosition: { x: 12, y: 7 },
               charLayer: 'player',
            },
         ],
      };

      this.gridEngine.create(cloudCityTilemap, gridEngineConfig);

      this.sound.play('background', { loop: true, volume: 0.05 });
   }
}
