<template>
<div :style="{backgroundColor: color}">
  <button v-if="canEdit && index !== null" @click="setAvatar(avatar - 1)"> {{ '<' }} </button>
  <img :src="src" :alt="name">
  <button v-if="canEdit && index !== null" @click="setAvatar(avatar+1)"> {{ '>' }} </button>
</div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
const { mapMutations } = createNamespacedHelpers('players')

export default {
  name: "AvatarPlayer",
  props: {
    index: {
      type: Number,
      default: null
    },
    avatar: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    canEdit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    src() {
      return `avatar/${this.avatar}.png`
    }
  },
  methods: {
    ...mapMutations(['setPlayerAvatar']),
    setAvatar(number) {
      if(!number) return
      if(number < 0) number = 8
      else if(number > 8) number = 0
      this.setPlayerAvatar({indexPlayer: this.index, avatar: number})
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  max-width: 4rem;
  max-height: 4rem;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  display: flex;

  > button {
    position: absolute;
    bottom: -0.25rem;
    height: 2rem;
    margin: auto;
    background: transparent;
    border: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 1.25rem;

    &:first-child {
      left: -0.5rem;
    }

    &:last-child {
      right: -0.5rem;
    }
  }
}

img {
  width: 100%;
}
</style>
