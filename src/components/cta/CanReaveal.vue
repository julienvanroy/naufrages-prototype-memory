<template>
  <TheCta class="can-reveal" @click="reveal" :text="text" :disabled="canReveal"/>
</template>

<script>
import TheCta from "@/components/cta/TheCta";
import {createNamespacedHelpers} from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers('game')

export default {
  name: "CanReveal",
  props: {
    text: {
      type: String,
      default: "Reveal Card"
    }
  },
  components: {TheCta},
  methods: {
    ...mapMutations(['setCanReveal', 'setCanSwitch', 'setIndexCardWantToSwitch']),
    reveal() {
      this.setCanReveal(true)
      this.setCanSwitch(false)
      this.setIndexCardWantToSwitch(null)
    }
  },
  computed: {
    ...mapState(['canReveal']),
  }
}
</script>
