import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from "../views/Blog.vue"
import Forget from "../views/Forget.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog
    },
	{
		path: "/forget",
		name: "forget",
		component: Forget
	}
  ]
})

export default router
