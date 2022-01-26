import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// @ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useAppStore } from '@/store/app'

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('@/views/discover/index.vue'),
		name: 'Discover',
		meta: { title: '发现', keepAlive: true }
	},
	{
		path: '/subscription',
		component: () => import('@/views/subscription/index.vue'),
		name: 'Subscription',
		meta: { title: '订阅', keepAlive: true }
	},
	{
		path: '/me',
		component: () => import('@/views/me/index.vue'),
		name: 'Me',
		meta: { title: '我的', keepAlive: true }
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

router.beforeEach((to, from) => {
	NProgress.start()
	const appStore = useAppStore()
	if (to.name === 'ProgrammeDetail') {
		appStore.addCacheView('ProgrammeDetail')
	}
	if (from.name === 'ProgrammeDetail') {
		if (to.name !== 'SingleEpisodeDetail') {
			appStore.removeCacheView('ProgrammeDetail')
		}
	}

})

router.afterEach(() => {
	NProgress.done()
})
export default router
