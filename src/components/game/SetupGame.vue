<template>
  <div>
    <GenerateGame text="Start Game"/>
  </div>
</template>

<script>
import GenerateGame from "@/components/cta/GenerateGame";

export default {
  name: "SetupGame",
  components: {GenerateGame}
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>
