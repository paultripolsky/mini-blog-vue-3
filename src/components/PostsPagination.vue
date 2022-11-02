<template>
  <div class="page__wrapper">
    <div
        v-for="pageNumber of totalPages"
        :key="pageNumber"
        class="page"
        :class="{
            'current-page': pageNumber === page
          }"
        @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true
    }
  },
  methods: {
    changePage(pageNumber) {
      this.$emit('update:page', pageNumber)
    }
  }
}
</script>

<style scoped>

</style>