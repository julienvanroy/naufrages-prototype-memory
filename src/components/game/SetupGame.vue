<template>
  <div>
    <PlayersList :players="players" :can-edit="true"/>
    <AddPlayer/>
    <hr/>
    <InputNumber label="Nombres de cartes par joueurs" v-model:value="numberByPlayers"/>
    <InputNumber label="Nombres de cartes neutres" v-model:value="numberByDefault"/>
    <hr/>
    <GenerateGame text="Start Game" :number-by-default="numberByDefault" :number-by-players="numberByPlayers"/>
  </div>
</template>

<script>
import GenerateGame from "@/components/cta/GenerateGame";
import PlayersList from "@/components/player/PlayersList";
import {createNamespacedHelpers} from "vuex";
import AddPlayer from "@/components/player/AddPlayer";
import InputNumber from "@/components/form/InputNumber";
const { mapState } = createNamespacedHelpers('players')


export default {
  name: "SetupGame",
  components: {InputNumber, AddPlayer, PlayersList, GenerateGame},
  data() {
    return {
      numberByPlayers: 5,
      numberByDefault: 5
    }
  },
  computed: {
    ...mapState(['players'])
  }
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}

:deep {
  label {
    font-weight: bold;
    margin: 0 0.25rem;
  }

  input {
    margin: 0.5rem 0;
  }
}
</style>
