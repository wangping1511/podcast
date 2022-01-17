export interface ProgrammeProp {
	id: number
	name: string
	author: string
	score: number
	quantity: number,
	description?: string
	coverImg: string
}

export const programmeData: ProgrammeProp[] = [
	{
		id: 1,
		name: '贤者时间',
		author: 'Marcast',
		quantity: 19,
		score: 4.9,
		description: '《贤者时间》是一档从普通人视角观察其他普通人的播客节目，由小张和治治两个普通人主持。wb: @贤者时间播客 | 出品方：Marcast Media 合作联系: hello@marcastmedia.com',
		coverImg: 'https://imagev2.xmcdn.com/group54/M05/14/A5/wKgLcl3_boDA9i-9AAOkZiUzcmI662.png!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
	},
	{
		id: 2,
		name: '黑水公园',
		author: '赵艾文',
		quantity: 19,
		score: 4.9,
		coverImg: 'https://imagev2.xmcdn.com/group83/M0A/66/BC/wKg5HV9eLwrxpOUZAAHooV4-0A8980.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
	},
	{
		id: 3,
		name: '嘻谈录',
		author: '喜剧联盒国',
		quantity: 19,
		score: 4.9,
		description: '嘻谈录是喜剧联盒国旗下podcast，喜剧演员的搞笑分贝制造机，专注嘻谈录。每期邀请不同的单口喜剧演员和观众，基于各类话题聊天。每一期我们都会邀请听众来现场录制，如果你想当面和嘉宾聊天并录入节目，欢迎关注微信听友群，每周都有售票.',
		coverImg: 'https://imagev2.xmcdn.com/storages/d208-audiofreehighqps/26/DD/CMCoOSQED90CAANJoQCMdQaR.jpeg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
	},
	{
		id: 4,
		name: '日谈公园',
		author: '日谈公园',
		quantity: 19,
		score: 4.9,
		description: '“日谈公园“是由文娱领域资深人士李叔（李志明）和小伙子（冯广健）共同主持的脱口秀播客节目，畅聊电影音乐文学动漫热门作品，分享旅行美食消费时尚生活方式，更有各路名人趣士谈天谈地谈笑风生谈未来过去。我想说的，你想听的，都在日谈公园。',
		coverImg: 'https://imagev2.xmcdn.com/group53/M0A/CE/45/wKgLfFwq37GD6hw7AAG9L8UTFaI454.jpg!strip=1&quality=7&magick=jpg&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
	},
	{
		id: 5,
		name: '跳岛FM',
		author: '跳岛FM',
		quantity: 19,
		score: 4.9,
		description: '「跳岛FM」（Talking Literature）是一档文学主题播客，一份可以听的文学杂志。节目每周三更新，由中信出版·大方出品。入选“苹果播客2020年度编辑推荐”。我们跟随作家探寻文学作品的诞生起点，听各行各业的创意头脑分享文学灵感，让谈论文学也成为艺术创作。',
		coverImg: 'https://imagev2.xmcdn.com/group73/M05/53/01/wKgO0V594N6wlO1jAAC2Jx3FZr4812.png!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
	},
	{
		id: 6,
		name: '日谈物语',
		author: '日谈公园',
		quantity: 19,
		score: 4.9,
		coverImg: 'https://imagev2.xmcdn.com/group70/M08/88/42/wKgO2F4Iw9XhjLCHAA_x4EpWPek226.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
	}
]

export const getRandomList = (size: number): ProgrammeProp[] => {
	let list = new Array<ProgrammeProp>()
	for (let i = 0; i < size; i++) {
		list.push(programmeData[Math.floor(Math.random() * programmeData.length)])
	}
	return list
}

export const getOne = (id: number): ProgrammeProp | null => {
	const one = programmeData.find(item => item.id === id)
	return one ? one : null
}
