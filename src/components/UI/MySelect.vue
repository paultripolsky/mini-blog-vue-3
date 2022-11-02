<template>
  <select v-model="modelValue" @change="updateOption">
    <option disabled value="">Выберите из списка</option>
    <option
        v-for="option of options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: []
    }
  },
  methods: {
    updateOption (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>