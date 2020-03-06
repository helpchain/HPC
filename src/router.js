// import Vue from 'vue'
import Router from 'vue-router'
// import Register from './views/start/register'
// import Login from './views/start/login'
// import ForgetPassword from './views/start/forgetPassword'

Vue.use(Router)
/**
 * 重写路由的push方法
 */
/* const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
} */
export default new Router({
	// mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/register',
			name: '注册',
			component: resolve => require(['./views/start/register'],resolve)
		},
		{
			path: '/login',
			name: '登录',
			component: resolve => require(['./views/start/login'],resolve)
		},
		{
			path: '/agreement',
			name: '服务协议',
			component: resolve => require(['./views/other/agreement'],resolve)
		},
		{
			path: '/initPassword',
			name: '初始化密码',
			component: resolve => require(['./views/start/initPassword'],resolve)
		},
		{
			path: '/tip',
			name: '提示',
			component: resolve => require(['./views/other/tip'],resolve)
		},
		{
			path: '/404',
			name: '404',
			component: resolve => require(['./views/other/404'],resolve)
		},
		{
			path: '/error',
			name: 'error',
			component: resolve => require(['./views/other/error'],resolve)
		},
		{
			path: '/maintain',
			name: 'maintain',
			component: resolve => require(['./views/other/maintain'],resolve)
		},
		{
			path: '/test',
			name: 'test',
			component: resolve => require(['./views/test/test'],resolve)
		},
		{
			path: '/',
			redirect: "/home"
		},
		{
			path: '/wrapper',
			component: resolve => require(['./components/Wrapper'],resolve),
			children: [{
					path: '/home',
					name: '首页',
					component: resolve => require(['./views/home/home'],resolve),
					meta:{footer:true,back:false,question:false},
					children:[
						
					]
				},
				{
					path: '/shop',
					name: '小店',
					component: resolve => require(['./views/shop/shop'],resolve),
					meta:{footer:true}
				},
				{
					path: '/mill',
					name: '矿机商城',
					component: resolve => require(['./views/mill/mill'],resolve),
					meta:{footer:true,question:true,questionName:'mill',showMillRecordIcon:true},
				},
				{
					path: '/deal',
					name: '交易市场',
					component: resolve => require(['./views/deal/deal'],resolve),
					meta:{footer:true,question:true,questionName:'deal',showRecordIcon:true},
					// children:[
					// 	{
					// 		path: '/myDeal4Deal',
					// 		name: '我的交易',
					// 		component: () => import('./views/my/myDeal'),
					// 		meta:{footer:false},
					// 	},
					// ]
				},
				{
					path: '/my',
					name: '我的',
					component: resolve => require(['./views/my/my'],resolve),
					meta:{footer:true,back:false},
					children:[
						{
							path: '/innerRegister',
							name: '内排注册',
							component: resolve => require(['./views/start/innerRegister'],resolve),
							meta:{footer:false},
						},
						{
							path: '/task',
							name: '任务中心',
							component: resolve => require(['./views/my/task'],resolve),
							meta:{footer:false},
						},
						{
							path: '/mySuperTeam',
							name: '我的团队',
							component: resolve => require(['./views/my/mySuperTeam'],resolve),
							meta:{footer:false},
						},
						{
							path: '/mySuperTeam2',
							name: '我的下级团队',
							component: resolve => require(['./views/my/mySuperTeam2'],resolve),
							meta:{footer:false},
						},
						{
							path: '/mySuperTeam3',
							name: '我的下级团队',
							component: resolve => require(['./views/my/mySuperTeam3'],resolve),
							meta:{footer:false},
						},
						{
							path: '/myShare',
							name: '我要分享',
							component: resolve => require(['./views/my/myShare'],resolve),
							meta:{footer:false},
						},
						{
							path: '/myWord',
							name: '我要留言',
							component: resolve => require(['./views/my/myWord'],resolve),
							meta:{footer:false},
						},
						{
							path: '/myWordList',
							name: '留言列表',
							component: resolve => require(['./views/my/myWordList'],resolve),
						},
						{
							path: '/myWordDetail',
							name: '留言详情',
							component: resolve => require(['./views/my/myWordDetail'],resolve),
						},
						{
							path: '/transferTicket',
							name: '定向转让帮扶券',
							component: resolve => require(['./views/my/transferTicket'],resolve),
							meta:{footer:false},
						},
						{
							path: '/transferMineral',
							name: '担保交易矿石',
							component: resolve => require(['./views/my/transferMineral'],resolve),
							meta:{footer:false},
						},
						{
							path: '/unFreeze',
							name: '解冻账号',
							component: resolve => require(['./views/my/unFreeze'],resolve),
							meta:{footer:false},
						},
						{
							path: '/lookInfo',
							name: '调查他人信息',
							component: resolve => require(['./views/my/lookInfo'],resolve),
							meta:{footer:false},
						},
					]
				}
			]
		},
		{
			path: '/',
			component: resolve => require(['./components/WrapperChild'],resolve),
			children: [
				{
					path: '/cService',
					name: '客服服务',
					component: resolve => require(['./views/home/cService'],resolve),
					meta:{footer:false},
				},
				{
					path: '/forgetPassword',
					name: '忘记密码',
					component: resolve => require(['./views/start/forgetPassword'],resolve),
					meta:{footer:false},
				},
				{
					path: '/myBook',
					name: '我的账本',
					component: resolve => require(['./views/my/myBook'],resolve),
					meta:{footer:false},
				},
				{
					path: '/myDeal',
					name: '我的交易',
					component: resolve => require(['./views/my/myDeal'],resolve),
					meta:{footer:false},
				},
				{
					path: '/myDealCheck',
					name: '担保交易审核',
					component: resolve => require(['./views/my/myDealCheck'],resolve),
					meta:{footer:false},
				},
				{
					path: '/myMill',
					name: '我的矿机',
					component: resolve => require(['./views/my/myMill'],resolve),
					meta:{footer:false},
				},
				{
					path: '/myMillDetail',
					name: '矿机详情',
					component: resolve => require(['./views/my/myMillDetail'],resolve),
					meta:{footer:false},
				},
				{
					path: '/merchantProcess',
					name: '商家入驻',
					component: resolve => require(['./views/home/merchantProcess'],resolve),
					meta:{footer:false,back:true,child1:1},
					children:[
						{
							path: '/merchantEnter',
							name: '填写资料',
							component: resolve => require(['./views/home/merchantEnter'],resolve),
							meta:{footer:false,back:true,child1:0},
						},
						{
							path: '/charge',
							name: '缴费中心',
							component: resolve => require(['./views/charge/charge'],resolve),
							meta:{footer:false,back:true,child1:0},
						},
					]
				},
				{
					path: '/myInfo',
					name: '我的身份',
					component: resolve => require(['./views/my/myInfo'],resolve),
					meta:{footer:false},
				},
				{
					path: '/realName',
					name: '实名认证',
					component: resolve => require(['./views/my/realName'],resolve),
					meta:{footer:false},
				},
				{
					path: '/ranking',
					name: '排行榜',
					component: resolve => require(['./views/home/ranking'],resolve),
					meta:{footer:false},
				},
				{
					path: '/agency',
					name: '省市代理',
					component: resolve => require(['./views/home/agency'],resolve),
					meta:{footer:false},
				},
				{
					path: '/voteList',
					name: '投票中心',
					component: resolve => require(['./views/home/voteList'],resolve),
					meta:{footer:false,back:true,question:false},
				},
				{
					path: '/voteDetail',
					name: '投票详情',
					component: resolve => require(['./views/home/voteDetail'],resolve),
					meta:{footer:false,back:true,question:false},
				},
				{
					path: '/noticeList',
					name: '公告列表',
					component: resolve => require(['./views/home/noticeList'],resolve),
					meta:{footer:false,back:true,question:false},
				},
				{
					path: '/noticeDetail',
					name: '公告详情 ',
					component: resolve => require(['./views/home/noticeDetail'],resolve),
					meta:{footer:false,back:true,question:false},
				},
				{
					path: '/myCheck',
					name: '实名审核',
					component: resolve => require(['./views/my/myCheck'],resolve)
				},
				{
					path: '/myCheckDetail',
					name: '实名详情',
					component: resolve => require(['./views/my/myCheckDetail'],resolve)
				},
				{
					path: '/shopCharge',
					name: '订购商品',
					component: resolve => require(['./views/shop/shopCharge'],resolve)
				},
				{
					path: '/shopDetail',
					name: '详情',
					component: resolve => require(['./views/shop/shopDetail'],resolve)
				},
				{
					path: '/shopOrder',
					name: '购物订单',
					component: resolve => require(['./views/my/shopOrder'],resolve)
				},
				
				{
					path: '/raise',
					name: 'raise',
					component: resolve => require(['./views/raise/raise'],resolve)
				},
			]
		},
		{
			path: '/kline',
			name: 'K线图',
			component: resolve => require(['./views/deal/kline'],resolve),
			meta:{footer:false,keepAlive:true},
		},
		{
			path: '/lookBook',
			name: '对方账本',
			component: resolve => require(['./views/deal/lookBook'],resolve),
			meta:{footer:false,keepAlive:true},
		},
		{
			path: '/dealRecord',
			name: '交易记录',
			component: resolve => require(['./views/deal/dealRecord'],resolve),
			meta:{footer:false},
		},
		{
			path: '/millRecord',
			name: '购买矿机记录表',
			component: resolve => require(['./views/mill/millRecord'],resolve),
			meta:{footer:false},
		},
	]
})
