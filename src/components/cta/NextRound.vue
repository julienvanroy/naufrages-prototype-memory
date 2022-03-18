<template>
  <TheCta class="next-round" @click="nextRound" :text="text"/>
</template>

<script>
import TheCta from "@/components/cta/TheCta";
import {createNamespacedHelpers} from "vuex";
const { mapMutations } = createNamespacedHelpers('game')

export default {
  name: "NextRound",
  props: {
    text: {
      type: String,
      default: "Next Round"
    }
  },
  components: {TheCta},
  methods: {
    ...mapMutations(['nextRound']),
  }
}
</script>

<style lang="scss" scoped>
.next-round {
  background-color: $red-color;
  color: $white-color;
}
</style>
