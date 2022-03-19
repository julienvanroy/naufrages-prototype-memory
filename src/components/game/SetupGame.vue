<template>
  <div>
    <PlayersList/>
    <GenerateGame text="Start Game"/>
  </div>
</template>

<script>
import GenerateGame from "@/components/cta/GenerateGame";
import PlayersList from "@/components/player/PlayersList";

export default {
  name: "SetupGame",
  components: {PlayersList, GenerateGame}
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
