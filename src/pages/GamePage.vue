<template>
  <br/>
  <br/>
  <div class="flex">
    <button @click="generateGame" v-if="cards.length === 0">Generate Game</button>
    <button @click="nextRound" v-if="cards.length !== 0">Next Round</button>
    <button @click="clear" v-if="cards.length !== 0">Clear Game</button>
  </div>
  <br/>
  <div>
    <span>Memory Game : </span>
    <strong v-if="cards.length === 0">Need Generate Cards</strong>
    <strong v-else-if="canReveal" :style="{color: players[roundPlayer].color}">{{ players[roundPlayer].name }} can play</strong>
    <strong v-else-if="isGameOver" :style="{color: players[roundPlayer].color}">{{ players[roundPlayer].name }} WIN !!! ( you can reset the board )</strong>
    <strong v-else :style="{color: players[roundPlayer].color}">Next Player / Next Round</strong>
  </div>
  <br/>
  <div class="flex">
    <TheCard v-for="(card, index) in cards" :key="index" :color="card.color" :is-reveal="card.isReveal"
             @click="revealCard(card)"/>
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
      roundPlayer: 0,
      cards: [],
      canReveal: false,
      isGameOver: false,
      numberCardReveal: 0
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

      this.roundPlayer = 0
      this.canReveal = true
    },
    pushCards(number, color) {
      for (let i = 0; i < number; i++) {
        const card = {
          color: color,
          isReveal: false
        }
        this.cards.push(card)
      }
    },
    revealCard(card) {
      if (card.isReveal || !this.canReveal) return
      card.isReveal = true
      this.checkCard(card)
    },
    checkCard(card) {
      if(card.color === this.players[this.roundPlayer].color) {
        this.numberCardReveal++
        this.checkGameOver()
      } else this.canReveal = false
    },
    checkGameOver() {
      if(this.numberCardReveal >= this.players.length) {
        this.isGameOver = true
        this.canReveal = false
      }
    },
    nextRound() {
      // Reset reveal cards
      this.cards.map(card => card.isReveal = false)

      // Next Player
      if (++this.roundPlayer >= this.players.length) this.roundPlayer = 0

      // Can reveal card
      this.canReveal = true
    },
    clear() {
      this.cards = []
      this.roundPlayer = 0
      this.canReveal = false
      this.isGameOver =  false
      this.numberCardReveal = 0
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

  > button {
    margin: 0 0.5rem;
  }
}
</style>
