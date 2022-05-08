import { Direction } from "../utils/direction";

export const TILE_SIZE = 48;

export class Player {
  constructor(
    private sprite: Phaser.GameObjects.Sprite,
    private tilePos: Phaser.Math.Vector2
  ) {
    const offsetX = TILE_SIZE / 2;
    const offsetY = TILE_SIZE;

    this.sprite.setOrigin(0.5, 1);
    this.sprite.setPosition(
      tilePos.x * TILE_SIZE + offsetX,
      tilePos.y * TILE_SIZE + offsetY
    );
    this.sprite.setFrame(55);
  }

  getPosition(): Phaser.Math.Vector2 {
    return this.sprite.getBottomCenter();
  }

  setPosition(position: Phaser.Math.Vector2): void {
    this.sprite.setPosition(position.x, position.y);
  }

  stopAnimation(direction: Direction) {
    const animationManager = this.sprite.anims.animationManager;
    const standingFrame = animationManager.get(direction).frames[1].frame.name;
    this.sprite.anims.stop();
    this.sprite.setFrame(standingFrame);
  }

  startAnimation(direction: Direction) {
    this.sprite.anims.play(direction);
  }

  getTilePos(): Phaser.Math.Vector2 {
    return this.tilePos.clone();
  }

  setTilePos(tilePosition: Phaser.Math.Vector2): void {
    this.tilePos = tilePosition.clone();
  }
}