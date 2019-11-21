import { Physics, Types } from 'phaser'
const ship = require('~/assets/ship.png')

export class BootScene extends Phaser.Scene {
    player!: Physics.Arcade.Sprite
    cursors!: Types.Input.Keyboard.CursorKeys

    preload() {
        this.load.image('ship', ship)
    }

    create() {
        this.physics.world.gravity.y = 60

        this.player = this.physics.add.sprite(100, 450, 'ship')
        this.player.setBounce(0.2)
        this.player.setCollideWorldBounds(true)

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        if (this.cursors!.left!.isDown) {
            this.player.setVelocityX(-160)
        } else if (this.cursors!.right!.isDown) {
            this.player.setVelocityX(160)
        } else {
            this.player.setVelocityX(0)
        }

        if (this.cursors!.up!.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330)
        }
    }
}
