import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('@/views/discover/index.vue'),
		name: 'Discover',
		meta: { title: '发现', keepAliveFlag: true }
	},
	{
		path: '/subscription',
		component: () => import('@/views/subscription/index.vue'),
		name: 'Subscription',
		meta: { title: '订阅', keepAliveFlag: true }
	},
	{
		path: '/me',
		component: () => import('@/views/me/index.vue'),
		name: 'Me',
		meta: { title: '我的', keepAliveFlag: true }
	},
	{
		path: '/programme-detail/:id',
		name: 'ProgrammeDetail',
		component: () => import('@/views/ProgrammeDetail.vue')
	},
	{
		path: '/single-episode-detail/:id',
		name: 'SingleEpisodeDetail',
		component: () => import('@/views/SingleEpisodeDetail.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory('/podcast/#/'),
	routes,
	scrollBehavior: (to, from, savedPosition) => {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	}
})

export default router
