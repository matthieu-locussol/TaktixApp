import Phaser from 'phaser'
import { GridControls } from '../controls/GridControls';
import { Player } from '../entities/Player';
import { GridPhysics } from '../physics/GridPhysics';
import { Direction } from '../utils/direction';
import { _assert } from '../utils/_assert';

export default class CloudsScene extends Phaser.Scene {
  private gridControls: GridControls | null = null;
  private gridPhysics: GridPhysics | null = null;

  constructor() {
    super('clouds')
  }

  public preload() {    
    this.load.image("tiles", "assets/tilesets/cloud_tileset.png");
    this.load.tilemapTiledJSON("cloud-city-map", "assets/maps/clouds_1.json");

    this.load.spritesheet("player", "assets/characters/characters.png", {
      frameWidth: 26,
      frameHeight: 36,
    });
  }

  public create() {
    const cloudCityTilemap = this.make.tilemap({ key: "cloud-city-map" });
    cloudCityTilemap.addTilesetImage("Cloud City", "tiles");
    
    for (let i = 0; i < cloudCityTilemap.layers.length; i++) {
      const layer = cloudCityTilemap.createLayer(i, "Cloud City", 0, 0);
      layer.setDepth(i);
      layer.scale = 3;
    }

    const playerSprite = this.add.sprite(0, 0, "player");
    playerSprite.setDepth(3);
    playerSprite.scale = 3;
    this.cameras.main.startFollow(playerSprite);
    this.cameras.main.roundPixels = true;
    const player = new Player(playerSprite, new Phaser.Math.Vector2(6, 6));

    this.gridPhysics = new GridPhysics(player, cloudCityTilemap);
    this.gridControls = new GridControls(
      this.input,
      this.gridPhysics
    );


    this.createPlayerAnimation(Direction.UP, 90, 92);
    this.createPlayerAnimation(Direction.RIGHT, 78, 80);
    this.createPlayerAnimation(Direction.DOWN, 54, 56);
    this.createPlayerAnimation(Direction.LEFT, 66, 68);
  }

  public update(_time: number, delta: number) {
    _assert(this.gridPhysics, "GridPhysics is not defined");
    _assert(this.gridControls, "GridControls is not defined");
    
    this.gridControls.update();
    this.gridPhysics.update(delta);
  }


  private createPlayerAnimation(
    name: string,
    startFrame: number,
    endFrame: number
  ) {
    this.anims.create({
      key: name,
      frames: this.anims.generateFrameNumbers("player", {
        start: startFrame,
        end: endFrame,
      }),
      frameRate: 10,
      repeat: -1,
      yoyo: true,
    });
  }
}
