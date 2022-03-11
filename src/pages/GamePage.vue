<template>
  <div>Memory Game</div>
  <TheCard color="blue"/>
</template>

<script>
import TheCard from "@/components/game/TheCard";

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
}
</script>
