import http from '@/utils/request'

export function getProgrammeList(params: any) {
	return http.get<any>('/programme/list', params);
}

export function getProgrammeOne(id: number) {
	return http.get('/programme/' + id)
}

export function getSingleEpisodeList(params: any) {
	return http.get('/single-episode/list', params)
}

export function getSingleEpisodeOne(id: number) {
	return http.get('/single-episode/' + id)
}
