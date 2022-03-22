<template>
  <div>
    <PlayersList :players="players" :can-edit="true"/>
    <AddPlayer/>
    <hr/>
    Todo: Set up Avatar
    <hr/>
    Todo: Nombres de carte par joueur
    <hr/>
    Todo: Nombes de carte neutre
    <hr/>
    <InputSwitch/>
    Todo: Set up Timer
    <hr/>
    <GenerateGame text="Start Game"/>
  </div>
</template>

<script>
import GenerateGame from "@/components/cta/GenerateGame";
import PlayersList from "@/components/player/PlayersList";
import {createNamespacedHelpers} from "vuex";
import AddPlayer from "@/components/player/AddPlayer";
import InputSwitch from "@/components/form/InputSwitch";
const { mapState } = createNamespacedHelpers('players')


export default {
  name: "SetupGame",
  components: {InputSwitch, AddPlayer, PlayersList, GenerateGame},
  computed: {
    ...mapState(['players'])
  }
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
