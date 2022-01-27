import { defineStore } from 'pinia'
export const usePlayerStore = defineStore({
	id: 'player',
	state: () => {
		return {
			state: 0,
			epId: 0
		}
	},
	actions: {
		setState(state: 0 | 1) {
			this.state = state
		},
		setEpId(epId: number) {
			this.epId = epId
		}
	}
})
