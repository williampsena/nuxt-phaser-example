import { Physics, Types } from 'phaser'
import TuxPlayer from './player'
const tux = require('~/assets/tux.png')
const tuxJSON = require('~/assets/tux.json')

export class BootScene extends Phaser.Scene {
    player!: TuxPlayer
    cursors!: Types.Input.Keyboard.CursorKeys

    constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
        super(config)
    }

    preload() {
        this.load.atlas('tux', tux, tuxJSON)
    }

    create() {
        this.physics.world.gravity.y = 60
        this.cursors = this.input.keyboard.createCursorKeys()
        this.player = new TuxPlayer(this, 100, 10)
    }

    update() {
        const { cursors, player } = this

        if (cursors!.left!.isDown) return player.walkLeft()
        else if (cursors!.right!.isDown) return player.walkRight()
        else if (cursors!.up!.isDown) return player.jump()

        if (cursors!.up!.isDown && player.body.touching.down)
            player.setVelocityY(-330)
            
        player.idle()
    }
}
