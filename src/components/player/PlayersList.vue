<template>
  <div>
    <PlayerCard v-for="(player, indexPlayer) in players" :key="indexPlayer" :index="indexPlayer" :name="player.name" :color="player.color" :can-edit="canEdit"/>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
import PlayerCard from "@/components/player/PlayerCard";

const { mapState } = createNamespacedHelpers('players')

export default {
  name: "PlayersList",
  components: {PlayerCard},
  props: {
    canEdit: {
      type: Boolean,
      default: false
    }
  },
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

    > div {
      margin: 0 0.5rem;
    }
  }
</style>
