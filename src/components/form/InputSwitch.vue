<template>
  <div>
    <input
        class="input"
        type="checkbox"
        :id="id"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :value="value"
        :checked="value"
        @input="$emit('update:value', $event.target.value)"/>
    <label>{{ label }}</label>
  </div>
</template>

<script>
import Input from "@/mixins/input";

export default {
  name: "InputSwitch",
  mixins: [Input]
}
</script>

<style lang="scss" scoped>
input {
  &[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  &:checked {
    + label {
      background: #bada55;

      &:after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
      }
    }
  }
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 200px;
  height: 100px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 90px;
    height: 90px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
  }

  &:active:after {
    width: 130px;
  }
}
</style>
