<template>
  <div>
    <MessageGame/>
    <ActionsGame/>
    <div class="cards" :style="{transform: `rotate(${rotationAngle}deg)`, height: '100vw'}">
      <TheCard v-for="(card, indexCard) in cards" :key="indexCard" :color="card.color" :is-reveal="card.isReveal"
               @click="clickCard({card: card, indexCard: indexCard})" :style="{transform: indexCardWantToSwitch === indexCard ? 'scale(1.1)' : null}"/>
    </div>
    <hr/>
    <ResetGame text="Reset/Stop Game"/>
  </div>
</template>

<script>
import TheCard from "@/components/game/TheCard";
import {createNamespacedHelpers} from "vuex";
import ResetGame from "@/components/cta/ResetGame";
import ActionsGame from "@/components/game/ActionsGame";
import MessageGame from "@/components/game/MessageGame";
const { mapState, mapActions } = createNamespacedHelpers('game')


export default {
  name: "TheGame",
  components: {
    MessageGame,
    ActionsGame,
    ResetGame,
    TheCard
  },
  methods: {
    ...mapActions(['clickCard'])
  },
  computed: {
    ...mapState(['cards', 'rotationAngle', 'indexCardWantToSwitch', "isGameOver"]),
  }
}
</script>

<style lang="scss" scoped>
.cards {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transition: 0.6s transform ease;
}

.reset-game {
  margin: 1rem auto;
}
</style>
