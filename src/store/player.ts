import { defineStore } from 'pinia'
export const usePlayerStore = defineStore({
	id: 'player',
	state: () => {
		return {
			play: false,
			programmeId: 0,
			epId: 0
		}
	},
	actions: {
		setPlay(play: boolean) {
			this.play = play
		},
		setProgrammeId(programmeId: number) {
			this.programmeId = programmeId
		},
		setEpId(epId: number) {
			this.epId = epId
		}
	}
})
