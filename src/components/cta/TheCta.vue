<template>
  <button :disabled="disabled">{{ text }}</button>
</template>

<script>
export default {
  name: "TheCta",
  props: {
    text: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  flex-direction: row;
  text-transform: uppercase;
  font-weight: bold;
  background-color: $grey-color;
  transition:  0.1s ease;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.9);
  }
}
</style>
