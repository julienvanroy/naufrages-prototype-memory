<template>
  <div>
    <strong v-if="canReveal"><span :style="{color: currentPlayerColor}">{{ currentPlayerName }}</span> peut reveal une
      carte</strong>
    <strong v-else-if="canSwitch"><span :style="{color: currentPlayerColor}">{{ currentPlayerName }}</span> peut switch 2
      cartes</strong>
    <strong v-else-if="isGameOver"><span :style="{color: currentPlayerColor}">{{ currentPlayerName }}</span> a gagnée !</strong>
    <strong v-else>Au tour du joueur suivant</strong>
  </div>
  <hr/>
</template>

<script>
import {createNamespacedHelpers} from "vuex";

const {mapState: mapStateGame} = createNamespacedHelpers('game')
const {mapGetters: mapGettersPlayers} = createNamespacedHelpers('players')

export default {
  name: "MessageGame",
  computed: {
    ...mapStateGame(['canReveal', 'canSwitch', 'isGameOver']),
    ...mapGettersPlayers(['currentPlayerName', 'currentPlayerColor'])
  }
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
