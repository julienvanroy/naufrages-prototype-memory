<template>
  <TheCta class="generate-game" @click="generateGame" :text="text"/>
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
    }
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
