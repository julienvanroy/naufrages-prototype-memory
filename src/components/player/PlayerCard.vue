<template>
  <div>
    {{name}} {{color}}
  </div>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
