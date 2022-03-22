<template>
  <TheCta v-if="!showForm" text="Add Player" @click="setShowForm(true)"/>
  <form v-else @submit.prevent="submit">
    <InputText label="Name" v-model:value="name"/>
    <InputColor label="Color" v-model:value="color"/>
    <input type="submit"/>
  </form>
</template>

<script>
import InputText from "@/components/form/InputText";
import InputColor from "@/components/form/InputColor";
import {createNamespacedHelpers} from "vuex";
import TheCta from "@/components/cta/TheCta";

const {mapMutations} = createNamespacedHelpers('players')

export default {
  name: "AddPlayer",
  components: {TheCta, InputText, InputColor},
  data() {
    return {
      showForm: false,
      name: null,
      color: null
    }
  },
  methods: {
    ...mapMutations(['addPlayer']),
    setShowForm(value) {
      this.showForm = value
    },
    submit() {
      if (!this.name || !this.color) return
      const player = {
        name: this.name,
        color: this.color
      }
      this.addPlayer(player)
      this.name = null
      this.color = null
      this.setShowForm(false)
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  margin: 0.5rem auto;
  background-color: $green-color;
  color: $white-color;
}
</style>
