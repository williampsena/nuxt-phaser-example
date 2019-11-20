import { BootScene } from './scene'

export const getPaserConfig = () =>
    ({
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: [BootScene],
    } as Phaser.Types.Core.GameConfig)

export class Game extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config)
    }
}

export const run = () => new Game(getPaserConfig())

export default run
