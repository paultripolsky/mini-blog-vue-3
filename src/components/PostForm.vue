<template>
    <form @submit.prevent class="form">
      <h4>Создание поста</h4>
      <my-input
          v-focus
          v-model="post.title"
          class="input"
          type="text"
          placeholder="Название поста"
      />
      <my-input
          v-model="post.body"
          class="input"
          type="text"
          placeholder="Описание поста"
      />
      <my-button
          @click="addPost"
          class="btn"
          style="align-self: flex-end; margin-top: 15px"
      >
        Создать
      </my-button>
    </form>
</template>

<script>

export default {
  data () {
    return {
      post: {
        title: '',
        body: '',
      },
    }
  },
  methods: {
    addPost () {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    },
  },
}
</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
  }
  .input {
    padding: 10px 15px;
    border: 1px solid teal;
    margin-top: 15px;
  }
</style>