<template>
  <div>
    <div class="post">
      <div>
        <div><strong>Название:</strong> {{ post.title }} </div>
        <div><strong>Описание:</strong> {{ post.body }} </div>
      </div>
      <div class="post__buttons">
        <my-button
            @click="$emit('remove', post)"
        >
          Удалить
        </my-button>
        <my-button
            style="margin-left: 12px"
            @click="$router.push(`/posts/${post.id}`)"
        >
          Открыть
        </my-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
  .post {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
  }

  .post__buttons {
    display: flex;
  }
</style>