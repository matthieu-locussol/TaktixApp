import Phaser from 'phaser'

import CloudsScene from './scenes/CloudsScene'

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  backgroundColor: "#48C4F8",
  parent: 'phaser-container',
  scene: [CloudsScene],
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.ENVELOP,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

export default new Phaser.Game(config)
