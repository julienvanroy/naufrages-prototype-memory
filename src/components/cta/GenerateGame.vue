<template>
  <TheCta class="generate-game" @click="generateGame({numberByPlayers,numberByDefault})" :text="text"/>
</template>

<script>
import TheCta from "@/components/cta/TheCta";
import {createNamespacedHelpers} from "vuex";
const { mapActions } = createNamespacedHelpers('game')

export default {
  name: "GenerateGame",
  props: {
    text: {
      type: String,
      default: "Generate Game"
    },
    numberByPlayers: {
      type: Number,
      default: 5
    },
    numberByDefault: {
      type: Number,
      default: 5
    },
  },
  components: {TheCta},
  methods: {
    ...mapActions(['generateGame']),
  }
}
</script>

<style lang="scss" scoped>
.generate-game {
  background-color: $green-color;
  color: $white-color;
  margin: 0 auto;
}
</style>
