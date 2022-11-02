<template>
  <div class="navbar">
    <div class="logo" @click="$router.push('/')">Vue 3</div>
    <div class="navbar__buttons">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/about')">About</my-button>
      <my-button style="margin-left: 20px" @click="$router.push('/store')">Store</my-button>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border: 1px solid teal;
  padding: 0 20px;
}
.logo  {
  cursor: pointer;
}
</style>