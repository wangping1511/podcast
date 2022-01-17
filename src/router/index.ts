import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('@/views/index.vue'),
		redirect: 'discover',
		children: [
			{
				path: 'discover',
				component: () => import('@/views/discover/index.vue'),
				meta: { index: 0 }
			},
			{
				path: 'subscription',
				component: () => import('@/views/subscription/index.vue'),
				meta: { index: 1 }
			},
			{
				path: 'me',
				component: () => import('@/views/me/index.vue'),
				meta: { index: 2 }
			}
		]
	}
]

const router = createRouter({
	history: createWebHashHistory('/podcast/#/'),
	routes
})

export default router
