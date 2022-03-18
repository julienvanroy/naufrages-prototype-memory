<template>
  <div>
    <strong v-if="canReveal"><span :style="{color: playerColor}">{{ playerName }}</span> peut reveal une
      carte</strong>
    <strong v-else-if="canSwitch"><span :style="{color: playerColor}">{{ playerName }}</span> peut switch 2
      cartes</strong>
    <strong v-else-if="isGameOver"><span :style="{color: playerColor}">{{ playerName }}</span> a gagnée !</strong>
    <strong v-else>Au tour du joueur suivant</strong>
  </div>
  <hr/>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

const {mapState, mapGetters} = createNamespacedHelpers('game')

export default {
  name: "MessageGame",
  computed: {
    ...mapState(['canReveal', 'canSwitch', 'isGameOver']),
    ...mapGetters(['currentPlayer']),
    playerName() {
      return this.currentPlayer.name
    },
    playerColor() {
      return this.currentPlayer.color
    },
  }
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
