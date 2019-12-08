
<template>
    <section>
        <div class="console">
            <div class="gameboy">
                <div class="screen-cont">
                    <div class="power"></div>
                    <div class="screen">
                        <PhaserGame :createGame="createGame" v-if="createGame" />
                        <div class="header">DOT MATRIX WITH STEREO SOUND</div>
                        <div class="animated-text">
                            Nintendo
                            <div class="copy">®</div>
                        </div>
                    </div>
                </div>
                <div class="controls-cont">
                    <div class="btn-direction">
                        <div class="vertical">
                            <div class="jump-button" v-on:click="jump"></div>
                        </div>
                        <div class="left-button" v-on:click="walkLeft"></div>
                        <div class="right-button" v-on:click="walkRight"></div>
                        <div class="horizontal"></div>
                    </div>
                    <div class="btn-AB"></div>
                    <div class="btn-start-select">
                        <div class="pause-button" v-on:click="pause">pause</div>
                        <div class="resume-button" v-on:click="resume">resume</div>
                    </div>
                </div>
                <div class="speakers"></div>
                <div class="on-off">&lt; off-on &gt;</div>
                <div class="phones">phones</div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
import PhaserGame from 'nuxtjs-phaser/dist/phaserGame.vue'

const getGame = async (config = {}) => {
    const { default: createGame } = await import('../game/game')
    return createGame
}

declare interface IndexPageData {
    createGame?: () => Phaser.Game
}

const setPhaserFocus = () => {
    const phaser = document.getElementById('phaser')
    if (phaser) phaser.focus()
}

export default Vue.extend({
    name: 'IndexPage',
    components: { PhaserGame },
    data(): IndexPageData {
        return {
            createGame: undefined,
        }
    },
    methods: {
        emitPhaserEvent(eventName: string) {
            this.$phaser!.eventEmitter!.emit(eventName, 'default')
        },
        jump() {
            this.emitPhaserEvent('jump')
        },
        walkLeft() {
            this.emitPhaserEvent('walkLeft')
        },
        walkRight() {
            this.emitPhaserEvent('walkRight')
        },
        pause() {
            this.emitPhaserEvent('pause')
        },
        resume() {
            this.emitPhaserEvent('resume')
        },
    },
    async mounted() {
        this.createGame = await getGame()
        this.$nextTick(() => setPhaserFocus())
    },
})
</script>

<style scoped>
.screen {
    position: relative;
}

#phaser {
    position: absolute;
    top: 0;
    left: 0;
}

.pause-button {
    position: absolute;
    left: 11px;
    top: -2px;
    font-size: 0.7rem;
}

.resume-button {
    position: absolute;
    left: 65px;
    top: 25px;
    font-size: 0.7rem;
}

.jump-button {
    position: absolute;
    top: 0;
    left: 0;
    width: 1.9rem;
    height: 1.9rem;
}

.left-button {
    position: absolute;
    z-index: 1;
    top: 2rem;
    left: 0;
    width: 1.9rem;
    height: 1.9rem;
}

.right-button {
    position: absolute;
    z-index: 1;
    top: 2rem;
    left: 4rem;
    width: 1.9rem;
    height: 1.9rem;
}
</style>
