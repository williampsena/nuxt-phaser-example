
<template>
    <section>
        <h1 class="header">Nuxt Phaser Game</h1>
    </section>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component({
  name: 'IndexPage'
})
export default class IndexPage extends Vue  {
  mounted() {
    console.log('mounted component')
    const game = this.$startPhaser()
    console.log('this is game instance', game)
  }
}
</script>

<style scoped>
.header {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
