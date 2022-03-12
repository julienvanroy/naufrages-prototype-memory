<template>
  <br/>
  <br/>
  <div class="flex">
    <button @click="generateGame" v-if="cards.length === 0">Generate Game</button>
    <button @click="nextRound" v-if="cards.length !== 0">Next Round</button>
    <button @click="() => {canReveal = true; canSwitch = false }" v-if="cards.length !== 0 && !canReveal">Can Reveal Card</button>
    <button @click="() => {canReveal = false; canSwitch = true}" v-if="cards.length !== 0 && !canSwitch">Can Switch Card</button>
    <button @click="rotation" v-if="cards.length !== 0">Rotate Round</button>
    <button @click="clear" v-if="cards.length !== 0">Clear Game</button>
  </div>
  <br/>
  <div>
    <span>Memory Game : </span>
    <strong v-if="cards.length === 0">Need Generate Cards</strong>
    <strong v-else-if="canReveal" :style="{color: players[roundPlayer].color}">{{ players[roundPlayer].name }} can reveal card</strong>
    <strong v-else-if="canSwitch" :style="{color: players[roundPlayer].color}">{{ players[roundPlayer].name }} can switch card</strong>
    <strong v-else-if="isGameOver" :style="{color: players[roundPlayer].color}">{{ players[roundPlayer].name }} WIN !!! ( you can reset the board )</strong>
    <strong v-else :style="{color: players[roundPlayer].color}">
      <span v-if="indexCardWantToSwitch !== null">Switch is Ok /</span>
      Next Player / Next Round
    </strong>
  </div>
  <br/>
  <div class="flex" v-if="cards.length !== 0" :style="{transform: `rotate(${rotationAngle}deg)`, height: '100vw'}">
    <TheCard v-for="(card, index) in cards" :key="index" :color="card.color" :is-reveal="card.isReveal"
             @click="clickCard(card,index)" :style="{transform: this.indexCardWantToSwitch === index ? 'scale(1.1)' : null}"/>
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
      canSwitch: false,
      indexCardWantToSwitch: null,
      isGameOver: false,
      numberCardReveal: 0,
      rotationAngle: 0
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
    switchCard(card, index) {
      if (!this.canSwitch) return
      if(this.indexCardWantToSwitch !== null) {
        if(this.indexCardWantToSwitch !== index) {
          [this.cards[this.indexCardWantToSwitch], this.cards[index]] = [this.cards[index], this.cards[this.indexCardWantToSwitch]]
          this.canSwitch = false
          this.indexCardWantToSwitch = index
        } else this.indexCardWantToSwitch = null
      } else {
        this.indexCardWantToSwitch = index
      }
    },
    clickCard(card, index) {
      this.revealCard(card)
      this.switchCard(card, index)
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
      this.indexCardWantToSwitch = null

      // Reset reveal cards
      this.cards.map(card => card.isReveal = false)

      // Next Player
      if (++this.roundPlayer >= this.players.length) this.roundPlayer = 0

      // Can reveal card
      this.canReveal = true
    },
    rotation() {
      this.rotationAngle += 90
    },
    clear() {
      this.cards = []
      this.roundPlayer = 0
      this.canReveal = false
      this.canSwitch = false
      this.isGameOver =  false
      this.numberCardReveal = 0
      this.indexCardWantToSwitch = null
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
  transition: transform 0.6s ease;

  > div {
    margin: 1rem;
  }

  > button {
    margin: 0 0.5rem;
  }
}
</style>
