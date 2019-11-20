import 'phaser'
import Vue from 'vue'
import { run } from '~/game/game'

type StartPhaserEvent = () => Phaser.Game

declare module 'vue/types/vue' {
    interface Vue {
        $startPhaser: StartPhaserEvent
    }
}

Vue.prototype.$startPhaser = () => run()
