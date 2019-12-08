import { Types } from 'phaser'
import TuxPlayer from './player'
const tux = require('~/assets/tux.png')
const tuxJSON = require('~/assets/tux.json')

export class BootScene extends Phaser.Scene {
    player!: TuxPlayer
    cursors!: Types.Input.Keyboard.CursorKeys

    constructor(config: Phaser.Types.Scenes.SettingsConfig) {
        super({
            ...config,
            key: 'default',
        })
    }

    preload() {
        this.load.atlas('tux', tux, tuxJSON)
    }

    create() {
        this.physics.world.gravity.y = 60
        this.cursors = this.input.keyboard.createCursorKeys()
        this.player = new TuxPlayer(this, 100, 10)

        PhaserNuxt.eventEmitter!.addListener('jump', this.jump, this)
        PhaserNuxt.eventEmitter!.addListener('walkLeft', this.walkLeft, this)
        PhaserNuxt.eventEmitter!.addListener('walkRight', this.walkRight, this)
    }

    jump() {
        this.cursors.up!.isDown = true
        setTimeout(() => this.cursors.up!.isDown = false, 100)
    }

    walkLeft() {
        this.cursors.left!.isDown = true
        setTimeout(() => this.cursors.left!.isDown = false, 100)
    }

    walkRight() {
        this.cursors.right!.isDown = true
        setTimeout(() => this.cursors.right!.isDown = false, 100)
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
