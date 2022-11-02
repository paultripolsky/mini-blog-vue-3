<template>
  <div>
    <h2>Создать новый пост</h2>
    <div>
      <my-input
          v-focus
          class="search"
          v-model="searchQuery"
          placeholder="Поиск по заголовку"
          style="padding-left: 10px"
      />
    </div>
    <div class="app__buttons">
      <my-button
          @click="showDialog"
      >
        Добавить пост
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="selectedOptions"
      />
    </div>
    <my-dialog
        v-model:show="dialogVisible"
    >
      <post-form
          @create="addPost"
      />
    </my-dialog>
    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyButton from "@/components/UI/MyButton";
import PostsPagination from "@/components/PostsPagination";
import axios from 'axios'

export default {
  components: {
    PostForm,
    PostList,
    MyButton,
    PostsPagination
  },
  data () {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      selectedOptions: [
        {value: 'title', name: 'Заголовок'},
        {value: 'body', name: 'Описание'}
      ],
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
    }
  },
  methods: {
    addPost(post) {
      if (post.title.length && post.body.length) {
        this.posts.push(post)
      }
      this.dialogVisible = false
    },
    removePost (post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog () {
      this.dialogVisible = true
    },
    async fetchPosts() {
      try {
        this.isPostsLoading = true
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data
      }
      catch (e) {
        console.log(e)
      }
      finally {
        this.isPostsLoading = false
      }
    },
    async loadMorePosts() {
      try {
        this.page++
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        })
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data]
      }
      catch (e) {
        console.log(e)
      }
    },
  },
  mounted() {
    this.fetchPosts()

  },
  computed: {
    sortedPosts () {
      return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
  watch: {

  }
}
</script>

<style>
.app__buttons {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
.search {
  width: 100%;
  height: 35px;
  margin: 10px 0;
}
.observer {
  height: 10px;
}
</style>