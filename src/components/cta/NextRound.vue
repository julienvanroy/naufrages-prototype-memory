<template>
  <TheCta class="next-round" @click="nextRound" :text="text"/>
</template>

<script>
import TheCta from "@/components/cta/TheCta";
import {createNamespacedHelpers} from "vuex";
const { mapActions } = createNamespacedHelpers('game')

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
    ...mapActions(['nextRound']),
  }
}
</script>

<style lang="scss" scoped>
.next-round {
  background-color: $red-color;
  color: $white-color;
}
</style>
