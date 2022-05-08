import Phaser from 'phaser'

import CloudsScene from './scenes/CloudsScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: "#48C4F8",
  parent: 'phaser-container',
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.innerWidth,
    height: window.innerHeight,
  },
  scene: [CloudsScene],
  render:{
    pixelArt: true,
    antialias: false,
  }
}

export default new Phaser.Game(config)
