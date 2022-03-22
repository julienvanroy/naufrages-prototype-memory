<template>
  <TheCta class="delete" @click="removePlayer(index)" :text="text"/>
</template>

<script>
import TheCta from "@/components/cta/TheCta";
import {createNamespacedHelpers} from "vuex";
const { mapMutations } = createNamespacedHelpers('players')

export default {
  name: "DeletePlayer",
  props: {
    index: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      default: "Delete"
    }
  },
  components: {TheCta},
  methods: {
    ...mapMutations(['removePlayer']),
  }
}
</script>

<style lang="scss" scoped>
.delete {
  background-color: $red-color;
  color: $white-color;
}
</style>
