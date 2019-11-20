export class BootScene extends Phaser.Scene {
    preload() {
        console.log('preload')
    }
    create() {
        const graphics = this.add.graphics()
        const circle = new Phaser.Geom.Circle(100, 100, 100)
        graphics.fillStyle(0x0000ff)
        graphics.fillCircleShape(circle)
        console.log('created')
    }
    update() {
        console.log('update')
    }
}
