<template>
<div :style="{backgroundColor: color}">
  <img :src="src" :alt="name">
</div>
</template>

<script>
import {getRandomInt} from "@/utils";

export default {
  name: "AvatarPlayer",
  props: {
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
      return `avatar/${getRandomInt(0,8)}.png`
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
}

img {
  width: 100%;
}
</style>
