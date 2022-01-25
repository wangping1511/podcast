import axios, {AxiosResponse} from 'axios'

const instance = axios.create({
	baseURL: '/api',
	timeout: 1000,
})
// 请求拦截
instance.interceptors.request.use(
	(config) => {
	return config
	},
	error => {
		return error
	}
)

// 响应拦截
instance.interceptors.response.use((res: AxiosResponse<ResType<any>>) => {
	const { code, message, data } = res.data
	if (code === 200) {
		return data
	}
})

interface ResType<T> {
	code: number,
	message?: string,
	data?: T
}

interface Http {
	get<T>(url: string, params?: unknown): Promise<T>
	post<T>(url: string, params?: unknown): Promise<T>
}

const http: Http = {
	get(url, params) {
		return new Promise((resolve, reject) => {
			instance.get(url, { params })
				.then((res: any) => {
				resolve(res)
				})
				.catch((error) => {
					console.error(error)
				})
		})
	},
	post(url, params) {
		return new Promise((resolve, reject) => {
			instance.post(url, JSON.stringify(params))
				.then((res: any) => {
					resolve(res)
				})
				.catch((error) => {
					console.error(error)
				})
		})
	}
}
export default http
