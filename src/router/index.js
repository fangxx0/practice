import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
	{
		path: '/class',
		name: 'Class',
		component: () => import(/* webpackChunkName: "about" */ '../views/Class.vue')
	},
	{
		path: '/car',
		name: 'Car',
		component: () => import(/* webpackChunkName: "about" */ '../views/Car.vue')
	},
	// {
	// 	path: '/class',
	// 	name: 'class',
	// 	component: Class
	// }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
