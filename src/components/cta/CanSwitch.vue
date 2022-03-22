<template>
  <TheCta class="can-switch" @click="switchCards" :text="text" :disabled="canSwitch"/>
</template>

<script>
import TheCta from "@/components/cta/TheCta";
import {createNamespacedHelpers} from "vuex";
const { mapState, mapMutations } = createNamespacedHelpers('game')

export default {
  name: "CanSwitch",
  props: {
    text: {
      type: String,
      default: "Switch Cards"
    }
  },
  components: {TheCta},
  methods: {
    ...mapMutations(['setCanReveal', 'setCanSwitch', 'setIndexCardWantToSwitch']),
    switchCards() {
      this.setCanReveal(false)
      this.setCanSwitch(true)
      this.setIndexCardWantToSwitch(null)
    }
  },
  computed: {
    ...mapState(['canSwitch']),
  }
}
</script>
