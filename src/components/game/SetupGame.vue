<template>
  <div>
    <PlayersList :can-edit="true"/>
    <hr/>
    Todo: Add Player
    <hr/>
    Todo: Set up Avatar
    <hr/>
    Todo: Nombres de carte par joueur
    <hr/>
    Todo: Nombes de carte neutre
    <hr/>
    Todo: Set up Timer
    <hr/>
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
