import { Physics, Types } from 'phaser'
const tux = require('~/assets/tux.png')

export class BootScene extends Phaser.Scene {
    player!: Physics.Arcade.Sprite
    cursors!: Types.Input.Keyboard.CursorKeys

    constructor(config: string | Phaser.Types.Scenes.SettingsConfig) {
        super(config)
    }

    preload() {
        this.load.spritesheet('tux', tux, {
            frameWidth: 16,
            frameHeight: 16,
            spacing: 0
        })
    }

    create() {
        this.physics.world.gravity.y = 60

        this.player = this.physics.add.sprite(100, 10, 'tux').setScale(3)
        this.player.setBounce(0.2)
        this.player.setCollideWorldBounds(true)

        this.anims.create({
            key: 'idle',
            frames: [ { key: 'tux', frame: 1 }, { key: 'tux', frame: 4 } ],
            frameRate: 10,
            repeat: -1,
        })

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('tux', {
                start: 7,
                end: 12,
            }),
            frameRate: 10,
            repeat: 0,
        })

        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('tux', {
                start: 18,
                end: 23,
            }),
            frameRate: 10,
            repeat: 0,
        })


        this.player.anims.play('idle', true)

        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update() {
        if (this.cursors!.left!.isDown) {
            this.player.setVelocityX(-100)
            this.player.anims.play('walk')
            this.player.flipX = true
        } else if (this.cursors!.right!.isDown) {
            this.player.setVelocityX(100)
            this.player.anims.play('walk')
            this.player.flipX = false
        } else if (this.cursors!.up!.isDown) {
            this.player.setVelocityY(-50)
            this.player.anims.play('jump')
        } else {
            this.player.setVelocityX(0)
            this.player.anims.play('idle')
        }

        if (this.cursors!.up!.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330)
        }
    }
}
