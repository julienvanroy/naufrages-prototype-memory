<template>
  <div>
    <CanReveal/>
    <CanSwitch/>
    <RotationGame/>
    <NextRound/>
  </div>
  <hr />
</template>

<script>
import RotationGame from "@/components/cta/RotationGame";
import NextRound from "@/components/cta/NextRound";
import CanReveal from "@/components/cta/CanReaveal";
import CanSwitch from "@/components/cta/CanSwitch";
export default {
  name: 'ActionsGame',
  components: {CanSwitch, CanReveal, NextRound, RotationGame},
}
</script>

<style lang="scss" scoped>
div {
  display: inline-flex;

  > button {
    margin: 0 0.25rem;
  }
}
</style>
