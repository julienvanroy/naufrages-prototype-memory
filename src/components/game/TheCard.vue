<template>
  <div class="card" :style="isReveal ? {backgroundColor: color}: null"/>
</template>

<script>
export default {
  name: 'TheCard',
  props: {
    color: {
      type: String,
      required: true
    },
    isReveal: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border-radius: 10%;
  width: 10rem;
  height: 10rem;
  background: black;
  margin: 1rem;
}
</style>
