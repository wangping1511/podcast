import { defineStore } from 'pinia'
import { routes } from '@/router'
export const useAppStore = defineStore({
	id: 'app',
	state: () => {
		return {
			cacheViews: routes.filter(item => item.meta?.keepAlive).map(item => item.name ? item.name.toString() : '')
		}
	},
	actions: {
		addCacheView(name: string) {
			if (!this.cacheViews.includes(name)) {
				this.cacheViews.push(name)
			}
		},
		removeCacheView(name: string) {
			if (this.cacheViews.includes(name)) {
				const index = this.cacheViews.indexOf(name)
				this.cacheViews.splice(index, 1)
			}
		}
	}
})
