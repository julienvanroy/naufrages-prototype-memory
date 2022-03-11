<template>
  <div>Memory Game</div>
  <div class="flex">
    <button @click="generateGame">Generate Game</button>
    <button @click="clear">Clear</button>
  </div>
  <div class="flex">
    <TheCard v-for="(card, index) in cards" :key="index" :color="card.color" :is-reveal="card.isReveal" @click="() => card.isReveal = true"/>
  </div>
</template>

<script>
import TheCard from "@/components/game/TheCard";
import {shuffle} from "@/utils";

export default {
  name: 'GamePage',
  data() {
    return {
      players: [
        {
          name: 'Joueur 1',
          color: 'red'
        }, {
          name: 'Joueur 2',
          color: 'blue'
        }, {
          name: 'Joueur 3',
          color: 'yellow'
        },
        {
          name: 'Joueur 4',
          color: 'green'
        },
      ],
      cards: []
    }
  },
  components: {TheCard},
  methods: {
    generateGame() {
      const length = this.players.length

      // push neutral cards
      this.pushCards(length, 'grey')

      // push player cards
      this.players.map(player => {
        this.pushCards(length, player.color)
      })

      shuffle(this.cards)
    },
    pushCards(number, color) {
      for(let i = 0; i < number; i++) {
        const card = {
          color: color,
          isReveal: false
        }
        this.cards.push(card)
      }
    },
    clear() {
      this.cards = []
    }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;

  > div {
    margin: 1rem;
  }
}
</style>
