<template>
  <div v-if="players.length !== 0">
    <PlayerCard v-for="(player, indexPlayer) in players" :key="indexPlayer" :index="indexPlayer" :avatar="player.avatar" :name="player.name" :color="player.color" :can-edit="canEdit"/>
  </div>
</template>

<script>
import PlayerCard from "@/components/player/PlayerCard";

export default {
  name: "PlayersList",
  components: {PlayerCard},
  props: {
    players: {
      type: Array,
      required: true
    },
    canEdit: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    > div {
      margin: 0 0.5rem;
    }
  }
</style>
