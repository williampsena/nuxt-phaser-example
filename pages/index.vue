
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
                        <div class="vertical"></div>
                        <div class="horizontal"></div>
                    </div>
                    <div class="btn-AB"></div>
                    <div class="btn-start-select"></div>
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

export default Vue.extend({
    name: 'IndexPage',
    components: { PhaserGame },
    data(): IndexPageData {
        return {
            createGame: undefined,
        }
    },
    async mounted() {
        this.createGame = await getGame()
    }
})
</script>

<style scoped>
.screen {
    position: relative
}

#phaser {
    position: absolute;
    top: 0;
    left: 0;
}
</style>
