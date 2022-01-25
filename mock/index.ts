import { MockMethod } from 'vite-plugin-mock'
import { ProgrammeProp, getRandomList as getProgrammeRandomList, getOne as getProgrammeOne } from './ProgrammeData'
import { SingleEpisodeProp, getRandomList as getSingleEpisodeRandomList, getListByProgrammeId, getOne as getSingleEpisodeOne } from './SingleEpisodeData'

export default [
	{
		url: '/api/programme/list',
		method: 'get',
		response: ({ query }: Record<any, any>) => {
			const { pageNum, pageSize } = query
			console.log(query)
			return {
				code: 200,
				data: {
					pageNum,
					pageSize,
					list: getProgrammeRandomList(Number(pageSize))
				}
			}
		}
	},
	{
		url: '/api/programme/:id',
		method: 'get',
		response: ({ query } : Record<string, any>) => {
			return {
				code: 200,
				data: getProgrammeOne(Number(query.id))
			}
		}
	},
	{
		url: '/api/single-episode/list',
		method: 'get',
		response: ({ query }: Record<string, any>) => {
			const { pageNum, pageSize, programmeId } = query
			return {
				code: 200,
				data: {
					pageNum,
					pageSize,
					list: programmeId ? getListByProgrammeId(programmeId) : getSingleEpisodeRandomList(pageSize)
				}
			}
		}
	},
	{
		url: '/api/single-episode/:id',
		method: 'get',
		response: ({ query }: Record<string, any>) => {
			return {
				code: 200,
				data: getSingleEpisodeOne(Number(query.id))
			}
		}
	}
] as MockMethod[]
