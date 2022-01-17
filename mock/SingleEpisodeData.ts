import {programmeData, ProgrammeProp} from "./ProgrammeData";

export interface SingleEpisodeProp {
	id: number,
	title: string
	coverImg: string
	duration: number
	description?: string
	createTime: number
	programmeId: number
	programmeName: string
}

export const singleEpisodeData: SingleEpisodeProp[] = [
	{
		id: 1,
		title: '你说得很好，可是我不想啊',
		coverImg: 'https://imagev2.xmcdn.com/group54/M05/14/A5/wKgLcl3_boDA9i-9AAOkZiUzcmI662.png!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
		duration: 89,
		description: '赶着月底，咱又更新了。这是随心漫谈的一期，小张和治治从最近生活中的几个重要变化聊起，发出感叹：不被社会评价体系左右的每一天，都值得庆祝。\n' +
			'\n' +
			'\n' +
			'Highlights:\n' +
			'\n' +
			'[08:14]  人类进化史上的重要一步：主播终于直立录音了\n' +
			'\n' +
			'[14:00]  用自己的尺子来丈量生活\n' +
			'\n' +
			'[19:09]  如何在春运抢票时假装自己的家乡通了高铁\n' +
			'\n' +
			'[22:50] 上海静安区出不了一个我，只有我们家才能长出一个治治\n' +
			'\n' +
			'[32:10]  每次听到实习生叫我张姐坦白讲心里就很痛\n' +
			'\n' +
			'[39:04]  他人审视的目光像开水一样烫到了我\n' +
			'\n' +
			'\n' +
			'\n' +
			'*** 本集节目由「简单森林」和你一起收听 ***\n' +
			'\n' +
			'\n' +
			'「简单森林 · 心理健康中心」是简单心理旗下的心理健康服务中心，分别位于北京市朝阳区丽都区域和海淀区中关村。在简单森林，你和你的家庭将获得由专业团队提供循证有效的、定制化的专业心理健康服务。\n' +
			'\n' +
			'\n' +
			'「简单森林 · 北京中关村中心」已于 11 月 12 日正式开业，上海永嘉路等区域也将陆续开设新的中心。欢迎有需要的听众朋友们关注和了解简单森林。\n' +
			'\n' +
			'\n' +
			'官方服务号：「简单森林心理健康中心」\n' +
			'\n' +
			'简单森林预约链接：https://op.jiandanxinli.com/daily/adv_podcast_xzsj/index.htm\n' +
			'\n' +
			'更多心理健康服务：简单心理 App\n' +
			'\n' +
			'\n' +
			'贤者听众专属优惠领取办法：关注「简单森林心理健康中心」服务号，回复暗号「贤者时间」，你就可以领取到 350 元专属优惠券，用于简单森林心理评估服务。\n' +
			'\n' +
			'\n' +
			'如果你不在北京，也可以领到简单心理线上心理评估的专属优惠。\n' +
			'\n' +
			'\n' +
			'Music credits:\n' +
			'\n' +
			'1. Sugar Plum Jangle – Logan\n' +
			'\n' +
			'2. Melody – Op.68, No.1 – Robert Schumann\n' +
			'\n' +
			'3. Pipe Dream – Logan\n' +
			'\n' +
			'4. let\'s try again – burbank\n' +
			'\n' +
			'\n' +
			'《贤者时间》是一档从普通人视角观察其他普通人的播客节目，由小张和治治两个普通人主持。微博：@贤者时间播客 https://weibo.com/u/7350110112 | 出品方：Marcast Media 合作联系: hello@marcastmedia.com https://weibo.com/u/2743283854',
		createTime: 1638177595,
		programmeId: 1,
		programmeName: '贤者时间'
	},
	{
		id: 2,
		title: '当我切土豆时，我就只在意土豆',
		coverImg: 'https://imagev2.xmcdn.com/group54/M05/14/A5/wKgLcl3_boDA9i-9AAOkZiUzcmI662.png!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
		duration: 81,
		description: '冬天来了，炖锅热汤。\n' +
			'\n' +
			'Highlights:\n' +
			'[12:23] 做饭是一种微小的禅修\n' +
			'[19:26] 炸鸭子，自制西餐，和总想让我们高兴的爸妈\n' +
			'[32:33] 最喜欢 4399.com 的厨房做饭小游戏啦！\n' +
			'[36:24] 在你身边剥蒜，心会慢慢苏醒\n' +
			'[47:35] 没有灵感时，我就创造一锅鱼汤\n' +
			'[53:41] 我给全班同学带早饭，我只想给你带早饭',
		createTime: 1634808621,
		programmeId: 1,
		programmeName: '贤者时间'
	},
	{
		id: 3,
		title: '没有人应该在谁的身边觉得自己好黯淡｜再见爱人',
		coverImg: 'https://imagev2.xmcdn.com/group54/M05/14/A5/wKgLcl3_boDA9i-9AAOkZiUzcmI662.png!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
		duration: 108,
		description: '这是一个恰恰很难假起来的综艺节目。\n' +
			'\n' +
			'\n' +
			'Highlights:\n' +
			'\n' +
			'[09:57]「我好不容易有灵感开始打字，你竟然让我抱抱你？」\n' +
			'\n' +
			'[18:00] 歇斯底里的妻子和受气包老公，也许是反应性虐待\n' +
			'\n' +
			'[37:00] 喜欢一个郭柯宇是容易的，理解一个朱雅琼是难的\n' +
			'\n' +
			'[42:18] 少自省，多发疯，熬过无序，柳暗花明\n' +
			'\n' +
			'[01:04:22] 当你不在乎一个人，你就可以随便体面\n' +
			'\n' +
			'[01:11:23] 男子汉也是可以哭哭的哦\n' +
			'\n' +
			'\n' +
			'对了！即日起，贤者时间发起的「声音小偷」特别活动正式开启，因为我们也很想听听你生活中，那些日常、跳脱或奇形怪状的声音',
		createTime: 1631609696,
		programmeId: 1,
		programmeName: '贤者时间'
	},
	{
		id: 4,
		title: '元大都城垣遗址公园 69\'30".mp3',
		coverImg: 'https://imagev2.xmcdn.com/group54/M05/14/A5/wKgLcl3_boDA9i-9AAOkZiUzcmI662.png!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
		duration: 69,
		description: '元大都遗址公园含北土城和西土城两段，城墙全部夯土筑成。明洪武于 1368 年进军并攻占大都，并对大都城进行了改建。放弃了北部城区，将北城南移 5 公里后另筑新墙。北部元代城墙便成为遗址命名为土城。\n' +
			'\n' +
			'\n' +
			'为保护元大都城垣遗址，配合奥运景观建设，2003 年朝阳区绿化局对元大都城垣遗址公园进行了整体改造。改造后的元大都城垣遗址公园创下 4 个北京之最和 1 项全国第一：最大的城市带状公园、最大的室外组雕、最大的人工湿地、最先完成北京市应急避难所建设的试点公园。\n' +
			'\n' +
			'\n' +
			'元大都城垣遗址公园西起海淀区学院南路明光村附近，向北到黄亭子，折向东经马甸、祁家豁子。公园呈狭长带状，全长 9 公里，跨朝阳、海淀两区。公园中“蓟门烟树”、“大都建典”、“古垣新韵”、“大都盛典”和“龙泽鱼跃”五大节点把朝阳段和海淀段连接起来，从西到东展示了元大都至今北京城市 700 多年的发展脉络。元大都城垣遗址公园为国家 4A 级旅游景区，是集历史遗迹保护、市民休闲游憩、改善生态环境、防灾应急避难于一体的有文化历史内涵的现代城市遗址公园。\n' +
			'\n' +
			'\n' +
			'夏末，我们去了这儿。\n' +
			'\n' +
			'\n' +
			'Music credits:\n' +
			'\n' +
			'1. Sugar Plum Jangle – Logan\n' +
			'\n' +
			'2. When You Sleep – Freddie Joachim\n' +
			'\n' +
			'3. finstagram – jinjae\n' +
			'\n' +
			'4. Melody – Op.68, No.1 – Robert Schumann\n' +
			'\n' +
			'5. blink – oatmello\n' +
			'\n' +
			'\n' +
			'《贤者时间》是一档从普通人视角观察其他普通人的播客节目，由小张和治治两个普通人主持。微博：@贤者时间播客 https://weibo.com/u/7350110112 | 出品方：Marcast Media 合作联系: hello@marcastmedia.com https://weibo.com/u/2743283854',
		createTime: 1630342882,
		programmeId: 1,
		programmeName: '贤者时间'
	},
	{
		id: 5,
		title: '展开时间，在每一个倍速日常',
		coverImg: 'https://imagev2.xmcdn.com/group54/M05/14/A5/wKgLcl3_boDA9i-9AAOkZiUzcmI662.png!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
		duration: 183,
		description: '六月末，小张和治治和我们非常喜欢的播客“展开讲讲”的三位主播——洞姐、康堤、王老师，举办了罕见的五方会谈。\n' +
			'\n' +
			'我们度过了把揉皱的时间展开的几个小时。\n' +
			'\n' +
			'\n' +
			'Highlights：\n' +
			'\n' +
			'[10:45] “我先说，我们这个行业快没了”\n' +
			'\n' +
			'[28:24] 当你在现实里，成为日剧《我要准时下班》的女主角……\n' +
			'\n' +
			'[36:03] 学生时代完全不一样的五位同学\n' +
			'\n' +
			'[01:25:57] 长大后，我们开始代入影视剧里的配角\n' +
			'\n' +
			'[01:31:00] 在场唯一的男人突然控诉男权社会！\n' +
			'\n' +
			'[01:57:58] 五位内容从业者的表达危机\n' +
			'\n' +
			'[02:35:55] 张治，彩蛋时间\n' +
			'\n' +
			'\n' +
			'Music credits:\n' +
			'\n' +
			'1.Sugar Plum Jangle – Logan\n' +
			'\n' +
			'2.Melody – Op.68, No.1 – Robert Schumann\n' +
			'\n' +
			'3.W – 関口シンゴ\n' +
			'\n' +
			'4.Chill – Joakim Karud\n' +
			'\n' +
			'5.Honey – Maxzwell\n' +
			'\n' +
			'5.As she passes – Levi Patel',
		createTime: 1625999521,
		programmeId: 1,
		programmeName: '贤者时间'
	},
	{
		id: 6,
		title: '09: 你不是一枚 U 盘，你的身体曾属于旷野',
		coverImg: 'https://imagev2.xmcdn.com/group54/M05/14/A5/wKgLcl3_boDA9i-9AAOkZiUzcmI662.png!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
		duration: 86,
		description: '在刚刚过去的 5 月，小张开启了她人生中第一项正儿八经的运动：瑜伽。而治治也持续练习着她最熟悉的运动：加班。\n' +
			'\n' +
			'\n' +
			'一个沉浸在终于看清自己大脚趾的快乐中，一个则眩晕心悸，她们巧合地重新使用了各自的身体，产生了一些新的交互感受。\n' +
			'\n' +
			'\n' +
			'Highlights:\n' +
			'\n' +
			'[06:50] 点外卖，世上最唾手可得的快乐\n' +
			'\n' +
			'[20:10] 只是看着苦楚像小溪一样流过\n' +
			'\n' +
			'[27:00] 和小腿肌肉独处，治治的徒步经历\n' +
			'\n' +
			'[36:00] 返璞归真这件事也需要练习啊\n' +
			'\n' +
			'[44:00] 网络人格华丽无比，但你也不可能真的放弃这具躯壳\n' +
			'\n' +
			'[58:28] 每位外婆，都是天生睡眠大师',
		createTime: 1622540692,
		programmeId: 1,
		programmeName: '贤者时间'
	},
	{
		id: 7,
		title: '《真爱至上》冬至，圣诞节，礼物与爱',
		coverImg: 'https://imagev2.xmcdn.com/group83/M0A/66/BC/wKg5HV9eLwrxpOUZAAHooV4-0A8980.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
		duration: 78,
		createTime: 1639712271,
		programmeId: 2,
		programmeName: '黑水公园'
	},
	{
		id: 8,
		title: '《蜘蛛侠：英雄无归》三代不同框就弃坑！',
		coverImg: 'https://imagev2.xmcdn.com/group83/M0A/66/BC/wKg5HV9eLwrxpOUZAAHooV4-0A8980.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
		duration: 78,
		createTime: 1639102200,
		programmeId: 2,
		programmeName: '黑水公园'
	},
	{
		id: 9,
		title: '山海经里的神仙生物：帝江，龙，麒麟，九尾狐',
		coverImg: 'https://imagev2.xmcdn.com/group83/M0A/66/BC/wKg5HV9eLwrxpOUZAAHooV4-0A8980.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
		duration: 82,
		createTime: 1638497400,
		programmeId: 2,
		programmeName: '黑水公园'
	},
	{
		id: 10,
		title: '《冰上轻驰》牙买加有个雪橇车队？',
		coverImg: 'https://imagev2.xmcdn.com/group83/M0A/66/BC/wKg5HV9eLwrxpOUZAAHooV4-0A8980.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
		duration: 65,
		createTime: 1637892300,
		programmeId: 2,
		programmeName: '黑水公园'
	},
	{
		id: 11,
		title: '细品老舍的《不成问题的问题》',
		coverImg: 'https://imagev2.xmcdn.com/group83/M0A/66/BC/wKg5HV9eLwrxpOUZAAHooV4-0A8980.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
		duration: 113,
		createTime: 1637289000,
		programmeId: 2,
		programmeName: '黑水公园'
	},
	{
		id: 12,
		title: '汤姆汉克斯的《芬奇》',
		coverImg: 'https://imagev2.xmcdn.com/group83/M0A/66/BC/wKg5HV9eLwrxpOUZAAHooV4-0A8980.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=album&name=mobile_large&device_type=ios',
		duration: 63,
		createTime: 1636680597,
		programmeId: 2,
		programmeName: '黑水公园'
	}
]

export const getRandomList = (size: number): SingleEpisodeProp[] => {
	let list = new Array<SingleEpisodeProp>()
	for (let i = 0, len = singleEpisodeData.length; i < size; i++) {
		list.push(singleEpisodeData[Math.floor(Math.random() * len)])
	}
	return list
}

export const getListByProgrammeId = (programmeId: number): SingleEpisodeProp[] => {
	return singleEpisodeData.filter(item => item.programmeId === programmeId)
}

export const getOne = (id: number): SingleEpisodeProp | null => {
	const one = singleEpisodeData.find(item => item.id === id)
	return one ? one : null;
}
