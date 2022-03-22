<template>
  <TheCta v-if="!showForm" text="Add Player" @click="setShowForm(true)"/>
  <div v-else>
    <hr/>
    <form @submit.prevent="submit">
      <InputText label="Name" v-model:value="name"/>
      <InputColor label="Color" v-model:value="color"/>
      <input type="submit" value="Ajouter"/>
    </form>
  </div>
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
}

form {
  &:deep {
    div {
      margin: 0.5rem auto;

      label {
        margin: 0 0.5rem;
        font-weight: bold;
      }
    }
  }
}

input[type="submit"] {
  padding: 0.5rem 1rem;
  display: flex;
  margin: 0.5rem auto;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  flex-direction: row;
  text-transform: uppercase;
  font-weight: bold;
  background-color: $grey-color;
  transition: 0.1s ease;
}
</style>
