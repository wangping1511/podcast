import { defineStore } from 'pinia'
import { SingleEpisodeProp } from '../../mock/SingleEpisodeData'

export const usePlayerStore = defineStore({
	id: 'player',
	state: () => {
		return {
			play: false,
			programmeId: 0,
			epId: 0,
			epTitle: '暂无播放',
			programmeName: '',
			coverImg: '',
		}
	},
	actions: {
		setPlay(state: boolean) {
			this.play = state
		},
		setPlayInfo(playInfo: SingleEpisodeProp) {
			const { id, programmeId, coverImg, title, programmeName } = playInfo
			this.epId = id
			this.epTitle = title
			this.programmeId = programmeId
			this.programmeName = programmeName
			this.coverImg = coverImg
		}
	},
	persist: {
		enabled: true,
		strategies: [
			{
				storage: localStorage
			}
		]
	}
})
