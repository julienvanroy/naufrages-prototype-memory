<template>
  <div>
    <label>{{ label }}</label>
    <input
        class="input"
        type="text"
        :id="id"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :value="value"
        @input="$emit('update:value', $event.target.value)"/>
  </div>
</template>

<script>
import Input from "@/mixins/input";

export default {
  name:"InputText",
  mixins: [Input]
}
</script>
