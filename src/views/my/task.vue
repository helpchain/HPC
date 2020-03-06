<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/index.scss';
[class*=van-hairline]::after {
    border: 1px solid transparent !important;
}
.modelTip{
	font-size: 0.75rem;
	padding: 0 12px;
	color: $grayDarker;
}
.realname{
	@include pageMy();
	.taskList{
		width: 100%;
		padding: $boxPadding2;
		box-sizing: border-box;
		color: $main-box-fh-text-color;
		.box{
			position: relative;
			display: flex;
			flex-direction: row;
			align-items: center;
			border-radius: 4px;
			overflow: hidden;
			padding: $boxPadding2;
			color: $main-box-fh-text-color;
			&.finishInfo{
				background-color: $main-adorn-color;
			}
			&.share{
				background-color: $main-blue-color;
			}
			&.level{
				background-color: $main-green-color;
			}
			&.area{
				background-color: $main-purple-color;
			}
			.flexLeft{
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: left;
				padding-right: 12px;
				.line{
					flex: 1;
				}
				.title{
					font-size: 16px;
				}
				.text{
					font-size: 12px;
					line-height: 1.6em;
				}
			}
			.flexRight{
				flex: 0 0 60px;
				text-align: right;
				.iconfont-finished{
					font-size: 60px;
				}
			}
		}
	}
	.update1{
		.van-field__control{
			color: #323232 !important;
		}
	}
}
</style>
<template>
  <div class="realname">
	<m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">
			任务中心
		</div>
		<i class="iconfont iconfont-question rightBox icon" @click="showTip"></i>
	</m-header>
	<!-- <div class="notRealName" v-show="!isRealName">
		<div class="flexRealName">{{isRealName==false?'您尚未实名任务':''}}</div>
		<div class="flexRealName margT20">
			<van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" @click="toRealName">去任务</van-button>
		</div>
	</div> -->
	<div class="taskList">
		<div class="box finishInfo" @click="toView('info')">
			<div class="flexLeft">
				<div class="line title">
					基础任务1 实名认证
				</div>
				<div class="line text margT10">
					认证后可获得如下权益<br>
					<!-- 1.赠送1台体验矿机<br> -->
					1.增加1点贡献值<br>
					2.获得一台微型矿机<br>
					3.每次签到加相应贡献值，连续签到30天，可获得1台体验矿机
				</div>
			</div>
			<div class="flexRight">
				<div v-if="!isRealName">去完成</div>
				<i class="iconfont iconfont-finished" v-if="isRealName"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box finishInfo" @click="toView('buyMill')">
			<div class="flexLeft">
				<div class="line title">
					基础任务2 租赁矿机
				</div>
				<div class="line text margT10">
					第二次租赁矿机<br>
					在获得(租赁矿机所需矿石数的1%~4%)点贡献值的同时，额外增加1点贡献值<br>
				</div>
			</div>
			<div class="flexRight">
				<div v-if="userInfo.buyMachineNum<2">去完成</div>
				<i class="iconfont iconfont-finished" v-if="userInfo.buyMachineNum>=2"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box share">
			<div class="flexLeft">
				<div class="line title">
					进阶任务1 分享
				</div>
				<div class="line text margT10">
					分享10名会员完成基础任务<br>
					达到后可获得如下奖励<br>
					每分享1名有效会员可获得相应贡献值的同时，额外获得一台体验矿机
				</div>
			</div>
			<div class="flexRight">
				<div v-if="userInfo.isGetShareTask==0" @click="getShareReword1">去领取</div>
				<i class="iconfont iconfont-finished" v-if="userInfo.isGetShareTask==1"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box share">
			<div class="flexLeft">
				<div class="line title">
					进阶任务2 建群
				</div>
				<div class="line text margT10">
					建立帮扶链工会群<br>
					需要：<br>
					设立3名群管理<br>
					所服务的帮扶链用户数量超过300名(300有效直推且是群主和群管理4人有效直推之和)或群满500人群主加群管理有效直推满200人<br>
					群里至少要有一半会员完成修改群昵称格式：HPC~自己昵称，达标后即可邀请讲师进群，下次讲课会有机器人转播。<br>
					需省市代理审核群昵称及群活跃度并引荐给客服再审核一次<br>
					达标后：<br>
					群主和群管理各获得一台半年的小型矿机<br>
					该福利时刻有效，客服审核通过后，72小时内会发放该奖励<br>
				</div>
			</div>
			<div class="flexRight">
				<i class="iconfont iconfont-finished" v-show="isShowQunTaskOK"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box share">
			<div class="flexLeft" @click="toView('deal')">
				<div class="line title">
					进阶任务3 收购矿石
				</div>
				<div class="line text margT10">
					需要：<br>
					累计收购10个矿石<br>
					达到后：<br>
					可额外获得一台体验矿机<br>
				</div>
			</div>
			<div class="flexRight">
				<div v-if="userInfo.isGetBuyTask==0" @click="getBuyIn10MineralReword">去领取</div>
				<i class="iconfont iconfont-finished" v-if="userInfo.isGetBuyTask==1"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<!-- <div class="box share">
			<div class="flexLeft">
				<div class="line title">
					购物任务
				</div>
				<div class="line text margT10">
					在小店中成功消费一次<br>
					完成后可获得如下奖励<br>
					1.奖励1点贡献值<br>
				</div>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box area">
			<div class="flexLeft">
				<div class="line title">
					省市代理任务
				</div>
				<div class="line text margT10">
					成为省市代理<br>
					完成后可获得如下奖励<br>
					1.奖励10000张帮扶券<br>
					2.奖励1台大型矿机
				</div>
			</div>
		</div> -->
		<!-- <div class="placeholderLine10"></div> -->
		<div class="box level">
			<div class="flexLeft">
				<div class="line title">
					升级任务1
				</div>
				<div class="line text margT10">
					成为青铜级工会会长<br>
					需要：<br>
					有效直推至少3个团队算力达到10或个人算力达到1<br>
					完成后:<br>
					1.可获得一台微型矿机<br>
					2.每次租赁矿机所加贡献值比例提升至 1.5%<br>
				</div>
			</div>
			<div class="flexRight">
				<div v-if="!userInfo.isGetOneLevelTask" @click="getAssistReward4Level(1)">去领取</div>
				<i class="iconfont iconfont-finished" v-if="userInfo.isGetOneLevelTask"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box level">
			<div class="flexLeft">
				<div class="line title">
					升级任务2
				</div>
				<div class="line text margT10">
					成为白银级工会会长<br>
					需要：<br>
					有效直推至少30个团队算力达到100或个人算力达到9<br>
					完成后:<br>
					1.可获得一台小型矿机<br>
					2.每次租赁矿机所加贡献值比例提升至 2.0%<br>
				</div>
			</div>
			<div class="flexRight">
				<div v-if="!userInfo.isGetTwoLevelTask" @click="getAssistReward4Level(2)">去领取</div>
				<i class="iconfont iconfont-finished" v-if="userInfo.isGetTwoLevelTask"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box level">
			<div class="flexLeft">
				<div class="line title">
					升级任务3
				</div>
				<div class="line text margT10">
					成为黄金级工会会长<br>
					需要：<br>
					有效直推至少100个团队算力达到500或个人算力达到34<br>
					完成后:<br>
					1.可获得一台中型矿机<br>
					2.每次租赁矿机所加贡献值比例提升至 2.5%<br>
					<!-- 2.平台3-5期权分红权限 -->
				</div>
			</div>
			<div class="flexRight">
				<div v-if="!userInfo.isGetThreeLevelTask" @click="getAssistReward4Level(3)">去领取</div>
				<i class="iconfont iconfont-finished" v-if="userInfo.isGetThreeLevelTask"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box level">
			<div class="flexLeft">
				<div class="line title">
					升级任务4
				</div>
				<div class="line text margT10">
					成为铂金级工会会长<br>
					需要：<br>
					有效直推至少200个团队算力达到2000或个人算力达到114<br>
					完成后:<br>
					1.可获得一台中型矿机+市代理名额<br>
					2.每次租赁矿机所加贡献值比例提升至 3.0%<br>
					<!-- 2.平台3-3期权分红权限 -->
				</div>
			</div>
			<div class="flexRight">
				<div v-if="!userInfo.isGetFourLevelTask" @click="getAssistReward4Level(4)">去领取</div>
				<i class="iconfont iconfont-finished" v-if="userInfo.isGetFourLevelTask"></i>
			</div>
		</div>
		<div class="placeholderLine10"></div>
		<div class="box level">
			<div class="flexLeft">
				<div class="line title">
					升级任务5
				</div>
				<div class="line text margT10">
					成为钻石级工会会长<br>
					需要：<br>
					有效直推至少300个团队算力达到10000或个人算力达到214<br>
					完成后:<br>
					1.可获得一台中型矿机+省代理名额<br>
					2.每次租赁矿机所加贡献值比例提升至 4.0%<br>
					<!-- 2.平台3-2期权分红权限 -->
				</div>
			</div>
			<div class="flexRight">
				<div v-if="!userInfo.isGetFiveLevelTask" @click="getAssistReward4Level(5)">去领取</div>
				<i class="iconfont iconfont-finished" v-if="userInfo.isGetFiveLevelTask"></i>
			</div>
		</div>
		<van-divider>我是有底线的</van-divider>
	</div>
	<van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="好的">
		<div class="paddingWing f-12 lineHeight tip4model2 textJustify">
			<!-- <div class="title f-14">
				会员期权制度：
			</div>
			<div class="placeholderLine4"></div>
			<div class="title">
				平台每个月都会拿出总盈利的30%来发放给平台的高级工会会长。
			</div>
			<div>
				凡是黄金级以上的工会会长（包括黄金）花1个帮扶券即可获得在帮扶链平台的期权分红，每2个月发放分红一次，具体明细如下：
			</div>
			<div>
				黄金级工会会长期权分红（简称3-5期权分红）:所拥有矿石÷所有黄金会长所拥有矿石总和×平台前2个月交易手续费总收入×30%×50%
			</div>
			<div>
				铂金级工会会长期权分红（简称3-3期权分红）:所拥有矿石÷所有铂金会长所拥有矿石总和×平台前2个月交易手续费总收入×30%×30%
			</div>
			<div>
				钻石级工会会长期权分红（简称3-2期权分红）:所拥有矿石÷所有钻石会长所拥有矿石总和×平台前2个月交易手续费总收入×30%×20%
			</div> -->
			<!-- <div class="placeholderLine10"></div> -->
			<div class="textIndent">
				Tip1：平台会不定期开放回收市场交易区高于溢价回收矿石，所回收的矿石都销毁处理。
			</div>
			<div class="placeholderLine10"></div>
			<div class="textIndent">
				Tip2：平台会不定期举办爱心帮扶活动，帮助经济上有困难的会长，大病求助款优先获得帮助，帮扶对象的年龄为24~70周岁(需要医院证明，然后省市代理去拜访帮扶对象并核实)；若是18周岁以上的学生，学费上有困难也可以得到帮扶链平台的帮助(需要家乡居委会的证明，然后省市代理去拜访帮扶对象并核实)；帮扶对象由省市代理以及白银级以上的工会会长（包括白银）引荐。
			</div>
			<div class="placeholderLine10"></div>
			<div class="textIndent">
				Tip3：另外，平台特意申明，为了维护所有用户的利益，为了打造去中心化的好平台，帮扶链所有用户的矿石数量都公开透明，人人可查，受全体会员的监管，平台方绝对不会也没机会在矿石上获取盈利，项目的建设以及价格都由市场用户的共识性所决定。还有在项目的建设、制度以及模式上每个用户都可以给平台留言提建议，客服会收集整理可行性方案，然后以投票的方式让全体工会会长共同决定，一切需求由半数以上工会会长投票认可后才进行研发与上线，帮扶链工会会全心全意为广大用户提供一个有价值的平台。
			</div>
		</div>
	</van-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { getTestUser,ERR_OK } from "@/api/index";
// import {getCookie} from '@/assets/js/utils.js'
import mHeader from '@/components/Header.vue';
import { Dialog } from 'vant';
export default {
	data() {
		return {
			showTipModel:false,
			result:"",
			loading:true,
			showUpdateModel:false,
			showUpdatePasswordModel:false,
			showRealNameModel:false,
			titleName:'',
			label:'---',
			userInfo:{},
			updateValidate:true,
			flag:'',
			isRealName:true,
			isShare3:false,
			isAgency:false,
			userId:'',
			isShowQunTaskOK:false
		}
	},  
	components:{
	    mHeader
	},
	mounted(){
		let _this = this;
		let userInfo = localStorage.getItem("_USERINFO_");
		if(userInfo){
			_this.userInfo = JSON.parse(userInfo);
		}else{
			_this.$toast(_this.$api.loginAgainTipText);
			_this.$router.replace('login');
			return;
		}
		// _this.isShare3 = _this.userInfo.num==null?false:_this.userInfo.num>=3?true:false;
		// console.log('_this.isShare3',_this.isShare3)
		if(_this.userInfo.actived==1){
			_this.isRealName = true;
		}else{
			_this.isRealName = false;
		}
		_this.getAssistMyMachineCount4Task();
		// console.log('_this.isRealName',_this.isRealName);
	},
	methods:{
		showTip(){
			this.showTipModel = true;
		},
		toView(type){
			let _this = this;
			if(type=='info'){
				_this.$router.push('/myInfo');
			}else if(type=='share3'){
				_this.$router.push('/myShare');
			}else if(type=='buyMill'){
				_this.$router.push('/mill');
			}else if(type=='deal'){
				_this.$router.push('/deal');
			}
		},
		getShareReword1(){
			let _this = this;
			if(_this.userInfo.isGetShareTask==1){
				// _this.$toast("您已领取过该奖励");
				Dialog.alert({
				  title: '系统提示',
				  message: '您已领取过该奖励'
				}).then(() => {
				  // on close
				});
				return;
			}
			if(_this.userInfo.realnameNum<10){
				// _this.$toast("您尚未达到领取该奖励的标准");
				Dialog.alert({
				  title: '系统提示',
				  message: '您尚未达到领取该奖励的标准'
				}).then(() => {
				  // on close
				});
				return;
			}
			_this.$ajax.ajax(_this.$api.getShareReword, 'POST', null, function(res){
				// console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
					Dialog.alert({
					  title: '温馨提示',
					  message: '恭喜您，奖励领取成功！'
					}).then(() => {
					  // on close
					  _this.$cookies.set("tab_name_book", "contribution", _this.$api.cookiesTime)
					  _this.$router.push('/myBook');
					});
				}else{
					_this.$toast(res.message);
				}
			})
		},
		getBuyIn10MineralReword(){
			let _this = this;
			if(_this.userInfo.isGetBuy==1){
				Dialog.alert({
				  title: '系统提示',
				  message: '您已领取过该奖励'
				}).then(() => {
				  // on close
				});
				return;
			}
			if(_this.userInfo.buyAmount<10){
				Dialog.alert({
				  title: '系统提示',
				  message: '您尚未达到领取该奖励的标准'
				}).then(() => {
				  // on close
				});
				return;
			}
			_this.$ajax.ajax(_this.$api.getAssistBuyMineralReward, 'POST', null, function(res){
				// console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
					Dialog.alert({
					  title: '温馨提示',
					  message: '恭喜您，奖励领取成功。为了把控算力上的泡沫，经研究决定所奖励的矿机不加算力，用此矿机所产出的矿石去商城租赁矿机即可加算力，请您知晓，帮扶链感恩有您的支持！'
					}).then(() => {
					  // on close
					  _this.$router.push('/mill');
					});
				}else{
					_this.$toast(res.message);
				}
			})
		},
		getAssistReward4Level(level){
			let _this = this;
			let url = "";
			console.log("_this.userInfo",_this.userInfo);
			let teamCP = _this.userInfo.teamCalculationPower;
			let myCP = _this.userInfo.myCalculationPower;
			let teamNum = _this.userInfo.realnameNum;
			let levelNow = _this.userInfo.level;
			if(level==1){
				if((teamNum<3||teamCP<10||levelNow<=0) && (myCP<1)){
					// _this.$toast();
					Dialog.alert({
					  title: '系统提示',
					  message: '您尚未达到领取该奖励的条件'
					}).then(() => {
					  // on close
					});
					return;
				}
				if(_this.userInfo.isGetOneLevelTask){
					// _this.$toast(_this.$api.DATA_ISGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_ISGET
					}).then(() => {
					  // on close
					});
					return;
				}
				// url = _this.$api.getAssistRewardOneLevelByUserId;
			}else if(level==2){
				if((teamNum<10||teamCP<100||levelNow<=1) && (myCP<9)){
					// _this.$toast(_this.$api.DATA_NOTGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_NOTGET
					}).then(() => {
					  // on close
					});
					return;
				}
				if(_this.userInfo.isGetTwoLevelTask){
					// _this.$toast(_this.$api.DATA_ISGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_ISGET
					}).then(() => {
					  // on close
					});
					return;
				}
				// url = _this.$api.getAssistRewardTwoLevelByUserId;
			}else if(level==3){
				if((teamNum<50||teamCP<500||levelNow<=2) && (myCP<34)){
					// _this.$toast(_this.$api.DATA_NOTGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_NOTGET
					}).then(() => {
					  // on close
					});
					return;
				}
				if(_this.userInfo.isGetThreeLevelTask){
					_this.$toast(_this.$api.DATA_ISGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_ISGET
					}).then(() => {
					  // on close
					});
					return;
				}
				// url = _this.$api.getAssistRewardThreeLevelByUserId;
			}else if(level==4){
				if((teamNum<100||teamCP<2000||levelNow<=3) && (myCP<114)){
					// _this.$toast(_this.$api.DATA_NOTGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_NOTGET
					}).then(() => {
					  // on close
					});
					return;
				}
				if(_this.userInfo.isGetFourLevelTask){
					// _this.$toast(_this.$api.DATA_ISGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_ISGET
					}).then(() => {
					  // on close
					});
					return;
				}
				// url = _this.$api.getAssistRewardFourLevelByUserId;
			}else if(level==5){
				if((teamNum<300||teamCP<10000||levelNow<=4) && (myCP<214)){
					// _this.$toast(_this.$api.DATA_NOTGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_NOTGET
					}).then(() => {
					  // on close
					});
					return;
				}
				if(_this.userInfo.isGetFiveLevelTask){
					// _this.$toast(_this.$api.DATA_ISGET);
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.DATA_ISGET
					}).then(() => {
					  // on close
					});
					return;
				}
				// url = _this.$api.getAssistRewardFiveLevelByUserId;
			}
			url = _this.$api.getAssistXXLevelRewardByUserId;
			let params = {
				/* userId: _this.userInfo.userId, */
				level: level
			}
			console.log('params',params);
			_this.$ajax.ajax(url, 'POST', params, function(res){
				// console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					if(res.data==1001){
						_this.$toast(_this.$api.DATA_NOTGET);
						return;
					}
					if(res.data==1002){
						_this.$toast(_this.$api.DATA_ISGET);
						return;
					}
					if(res.data==1){
						_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
						Dialog.alert({
						  title: '温馨提示',
						  message: '恭喜您，奖励领取成功。为了把控算力上的泡沫，经精算师研究决定奖励型矿机不加算力,用此矿机所产出的矿石去商城租赁矿机即可加算力，请您知晓！'
						}).then(() => {
						  // on close
						  _this.$router.push('/myMill');
						});
					}
				}
			})
		},
		showConfirm(type){
			let _this = this;
			
			if(type=='share3'){
				
			}else if(type == 'agency'){
				console.log('agency');
				
				_this.$ajax.ajax(_this.$api.getCityAgentByUserId + _this.userId, 'GET', null, function(res){
					console.log('res',res);
					if(res.code == _this.$api.CODE_OK){
						if(res.data==null){
							_this.isAgency = false;
							_this.$toast('您还不是省市代理');
						}else{
							_this.isAgency = true;
							//奖励10000个帮扶券
							//奖励一台大型矿机
							//此处调用接口
						}
					}
				})
			}
		},
		getAssistMyMachineCount4Task(){
			let _this = this;
			let params = {
				type:2,
				tag:4
			}
			_this.$ajax.ajax(_this.$api.getAssistMyMachineCount4Task, 'GET', params, function(res){
				console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					if(res.data>0){
						_this.isShowQunTaskOK = true;
					}else{
						_this.isShowQunTaskOK = false;
					}
				}
			})
		},
		toRealName(){
			let _this = this;
			console.log('__this.isRealName',_this.isRealName);
			_this.$router.push('/myInfo');
			if(_this.isRealName){
				// _this.$dialog.comfirm({
				//   title: '提示',
				//   message: '是否任务？'
				// }).then(() => {
				//   // on confirm
				//   console.log('sure renzhen')
				// }).catch(() => {
				//   // on cancel
				// });
			}else{
				console.log('尚未实名');
				// _this.showRealNameModel = true;
				_this.$router.push('/myInfo');
				
			}
		},
		getUserInfo(){
			let _this = this;
			_this.loading = true;
			_this.$ajax.ajax(_this.$api.getAssistUserInfo + _this.userId, 'GET', null, function(res){
				console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.userInfo = res.data;
					_this.userId = _this.userInfo.userId;
					if(_this.userInfo.actived==1){
						_this.isRealName = true;
					}else{
						_this.isRealName = false;
					}
				}
				if(res.code == _this.$api.CODE_4003){
					// _this.info = res.data.list;
					// _this.showRealNameModel = true;
					_this.isRealName = false;
				}
			})
		},
		back(){
			this.$router.go(-1);
		},
		refreshEvent(){
			console.log("refresh")
			let _this = this;
			_this.getUserInfo();
		},
	}
}
</script>
