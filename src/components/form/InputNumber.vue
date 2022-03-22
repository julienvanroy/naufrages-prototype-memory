<template>
  <div>
    <label>{{ label }}</label>
    <input
        class="input"
        type="number"
        :id="id"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :value="value"
        :min="min"
        :max="max"
        :step="step"
        @input="$emit('update:value', $event.target.value)"/>
  </div>
</template>

<script>
import Input from "@/mixins/input";

export default {
  name:"InputNumber",
  mixins: [Input],
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number
    },
    step: {
      type:Number,
      default: 1
    }
  }
}
</script>
