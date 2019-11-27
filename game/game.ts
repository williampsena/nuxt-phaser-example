import { BootScene } from './scene'

const createGame = (config: Phaser.Types.Core.GameConfig = {}) =>
    new Phaser.Game({
        parent: 'phaser',
        type: Phaser.AUTO,
        width: 220,
        height: 200,
        scene: [BootScene],
        backgroundColor: '#bdae58',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 500 },
            },
        },
        render: {
            pixelArt: true
        },
        ...config,
    })

export default createGame
