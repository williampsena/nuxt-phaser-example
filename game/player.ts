export default class TuxPlayer extends Phaser.Physics.Arcade.Sprite {
    jumpTimer = 0

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'tux', 0)

        scene.add.existing(this)
        scene.physics.add.existing(this)
        scene.physics.world.enable(this)

        this.setScale(3)
        this.setBounce(0.2)
        this.setCollideWorldBounds(true)

        scene.anims.create({
            key: 'idle',
            frames: scene.anims.generateFrameNames('tux', {
                start: 0,
                end: 4,
                zeroPad: 3,
                prefix: 'tux',
                suffix: '.png',
            }),
            frameRate: 10,
            repeat: -1,
        })

        scene.anims.create({
            key: 'walk',
            frames: scene.anims.generateFrameNames('tux', {
                start: 6,
                end: 12,
                zeroPad: 3,
                prefix: 'tux',
                suffix: '.png',
            }),
            frameRate: 10,
            repeat: -1,
        })

        scene.anims.create({
            key: 'jump',
            frames: scene.anims.generateFrameNames('tux', {
                start: 18,
                end: 23,
                zeroPad: 3,
                prefix: 'tux',
                suffix: '.png',
            }),
            frameRate: 10,
            repeat: -1,
        })

        this.anims.play('idle')
    }

    update() {}

    walkRight() {
        this.setVelocityX(100)
        this.anims.play('walk', true)
        this.flipX = false
    }

    walkLeft() {
        this.setVelocityX(-100)
        this.anims.play('walk', true)
        this.flipX = true
    }

    isJumping = () =>
        !this.body.touching.down && this.scene.time.now < this.jumpTimer

    jump() {
        if (this.isJumping()) return

        this.setVelocityY(-50)
        this.anims.play('jump', true)
        this.jumpTimer = this.scene.time.now + 3000
    }

    idle() {
        this.setVelocityX(0)
        this.anims.play('idle', true)
    }
}
