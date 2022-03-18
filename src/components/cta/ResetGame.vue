<template>
  <TheCta class="reset-game" @click="resetGame" :text="text"/>
</template>

<script>
import TheCta from "@/components/cta/TheCta";
import {createNamespacedHelpers} from "vuex";
const { mapMutations } = createNamespacedHelpers('game')

export default {
  name: "ResetGame",
  props: {
    text: {
      type: String,
      default: "Reset Game"
    }
  },
  components: {TheCta},
  methods: {
    ...mapMutations(['resetGame']),
  }
}
</script>

<style lang="scss" scoped>
.reset-game {
  background-color: $red-color;
  color: $white-color;
  margin: 0 auto;
}
</style>
