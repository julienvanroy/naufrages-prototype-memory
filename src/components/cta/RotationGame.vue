<template>
  <TheCta class="rotation-game" @click="rotationGame" :text="text"/>
</template>

<script>
import TheCta from "@/components/cta/TheCta";
import {createNamespacedHelpers} from "vuex";
const { mapMutations } = createNamespacedHelpers('game')

export default {
  name: "RotationGame",
  props: {
    text: {
      type: String,
      default: "Rotation Game"
    }
  },
  components: {TheCta},
  methods: {
    ...mapMutations(['rotationGame']),
  }
}
</script>
