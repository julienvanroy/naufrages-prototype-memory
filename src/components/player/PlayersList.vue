<template>
  <div>
    <PlayerCard v-for="(player, indexPlayer) in players" :key="indexPlayer" :name="player.name" :color="player.color"/>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
import PlayerCard from "@/components/player/PlayerCard";

const { mapState } = createNamespacedHelpers('game')

export default {
  name: "PlayersList",
  components: {PlayerCard},
  computed: {
    ...mapState(['players'])
  }
}
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
