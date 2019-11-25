import 'phaser'
import Vue from 'vue'
// import { run } from '~/game/game'

export type StartPhaserEvent = () => Phaser.Game

declare module 'vue/types/vue' {
    export interface Vue {
        $startPhaser: StartPhaserEvent
    }
}

// Vue.prototype.$startPhaser = () => run()
