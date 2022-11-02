import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router";
import PostsPage from "@/pages/PostsPage";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";
import PostsPageWithStore from "@/pages/PostsPageWithStore";

const routes = [
	{
		path: '/',
		component: Main
	},
	{
		path: '/posts',
		component: PostsPage
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/posts/:id',
		component: PostIdPage
	},
	{
		path: '/store',
		component: PostsPageWithStore
	}
]

const router = createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
})

export default router