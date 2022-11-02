<template>
  <input
      type="text"
      :value="modelValue"
      @input="updateInput"
  >
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    }
  },
  methods: {
    updateInput (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>