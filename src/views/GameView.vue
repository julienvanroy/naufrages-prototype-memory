<template>
  <div class="game">
    <h1>Prototype Memory Game</h1>
    <TheTimer :duration="15" :debug="true" v-if="gameHasStarted"/>
    <hr/>
    <SetupGame v-if="!gameHasStarted"/>
    <TheGame v-else/>
  </div>
</template>

<script>
import SetupGame from "@/components/game/SetupGame";
import {createNamespacedHelpers} from "vuex";
const { mapGetters } = createNamespacedHelpers('game')
import TheGame from "@/components/game/TheGame";
import TheTimer from "@/components/TheTimer";

export default {
  name: 'GameView',
  components: {TheGame, SetupGame, TheTimer},
  computed: {
    ...mapGetters(['gameHasStarted']),
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  transition: transform 0.6s ease;

  > div {
    margin: 1rem;
  }

  > button {
    margin: 0 0.5rem;
  }
}

.game {
  position: relative;

  .timer {
    position: absolute;
    inset: 0.5rem 0.5rem auto auto;
  }
}
</style>
