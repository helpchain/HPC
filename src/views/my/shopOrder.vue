<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	.shopOrderPage{
		position: absolute;
		top: $header-height;
		width: 100%;
		bottom: 0;
		background-color: $main-bg-color;
		.millContent{
			color: $mainTextColor;
			width: 100%;
			.getMineral{
				margin-top: $marginTop2;
			}
			.list{
				background-color: $main-box-color;
				margin-top: $marginTop2;
				overflow: hidden;
				height: 100%;
				.item{
					display: flex;
					padding: $boxPadding2;
					border-bottom:1px solid $main-bg-color;
					&::last-child{
						border-bottom:1px solid transparent;
					}
					.title{
						font-size: $fs-title;
						font-weight: bold;
					}
					.content{
						font-size: $fs-content;
					}
					.decorete{
						font-size: $fs-decorate;
					}
					.freeGet{
						color: $main-adorn-color;
						font-weight: bold;
					}
					.flex1{
						flex: 0 0 60px;
						display:flex;
						align-items: center;
					}
					.flex2{
						padding-left: 0.75rem;
						flex: 1;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.line1,.line2,.line3,.line4,.line5{
							flex: 1;
						}
						.line2,.line3.line4{
							height: 16px;
							line-height: 16px;
						}
					}
					.flex3{
						flex: 0 0 60px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						.line1,.line2,.line3,.line4,.line5{
							flex: 1;
							text-align: right;
						}
						.line1{
							font-size:$fs-title;
							height: 30px;
							line-height: 30px;
						}
						.line2{
							font-size: 11px !important;
						}
					}
				}
			}
		}
	}
</style>
<template>
  <div class="shopOrderPage">
	  <m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">
			购物订单
		</div>
		<i class="iconfont iconfont-question rightBox icon"></i>
	  </m-header>
	  <div class="millContent">
		  <!-- <van-tabs v-model="activeName" background="#1a2843" color="#ffae00" title-active-color="#ffae00" title-inactive-color="#ffffff" :border="false" @change="tabChange" animated sticky>
		    <van-tab title="待付款" name="active1">
				<van-list
				  v-model="loading1"
				  :finished="finished1"
				  finished-text="没有更多了"
				  @load="onLoad1"
				>
					<div class="list">
						<div class="item">
							<div class="flex flex1">
								<img width="60" height="60" src="../../assets/image/shop/lkl01.png"/>
							</div>
							<div class="flex flex2">
								<div class="line1"><div class="title">拉卡拉智能POS机</div></div>
								<div class="line2 content margT3">奖励299张平台券</div>
								<div class="line3 content">每人最多拍1件</div>
								<div class="line4 decorete">创建 2019-12-12 12:12:!2</div>
							</div>
							<div class="flex flex3">
								<div class="line1 freeGet">￥299</div>
								<div class="line2">
									<van-button round type="info" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true" @click="toPayView">去付款</van-button>
								</div>
							</div>
						</div>
					</div>
				</van-list>

		  	</van-tab>
		    <van-tab title="待发货" name="active2">
				<van-list
				  v-model="loading2"
				  :finished="finished2"
				  finished-text="没有更多了"
				  @load="onLoad2"
				>
		  			<div class="list">
		  				<div class="item">
		  					<div class="flex flex1">
		  						<img width="60" height="60" src="../../assets/image/shop/lkl01.png"/>
		  					</div>
		  					<div class="flex flex2">
		  						<div class="line1"><div class="title">拉卡拉智能POS机</div></div>
		  						<div class="line2 content margT3">奖励299张平台券</div>
		  						<div class="line3 content">每人最多拍1件</div>
								<div class="line4 decorete">下单 2019-12-12 12:12:!2</div>
		  					</div>
		  					<div class="flex flex3">
		  						<div class="line1 freeGet">￥299</div>
		  						<div class="line2">3天内发货</div>
		  					</div>
		  				</div>
		  			</div>
				</van-list>
		  	</van-tab>
		    <van-tab title="待收获" name="active3">
				<van-list
				  :offset="100"
				  v-model="loading3"
				  :finished="finished3"
				  finished-text="没有更多了"
				  @load="onLoad3"
				>
		  		<div class="list">
		  			<div class="item">
		  				<div class="flex flex1">
		  					<img width="60" height="60" src="../../assets/image/shop/lkl01.png"/>
		  				</div>
		  				<div class="flex flex2">
		  					<div class="line1"><div class="title">拉卡拉智能POS机</div></div>
		  					<div class="line2 content margT3">奖励299张平台券</div>
		  					<div class="line3 content">每人最多拍1件</div>
		  					<div class="line4 decorete">下单 2019-12-12 12:12:!2</div>
		  				</div>
		  				<div class="flex flex3">
		  					<div class="line1 freeGet">￥299</div>
		  					<div class="line2">
								<van-button round type="info" size="mini" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">确认收获</van-button>
							</div>
		  				</div>
		  			</div>
					
		  		</div>
				</van-list>
		  	</van-tab>
		  </van-tabs> -->
	  </div>
	  <!-- <van-button type="primary" @click="testLoginUrl()">登录</van-button>
	  <van-button type="primary" @click="testUrl()">获取信息</van-button> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { ajax } from "@/api/ajax";
import mHeader from '@/components/Header.vue';
export default {
	data() {
		return {
			activeName:"active1",
			loading1: false,
			finished1: false,
			millShopCurrentPage:1,
			loading2: false,
			finished2: false,
			pastMillCurrentPage:1,
			loading3: false,
			finished3: false,
			miningMachine: [{
				miningMachineType:'小型矿机',
				price:100,
				totalOutput:12,
				allRuntime:720,
				turnOnTime:'2019-12-12 12:12:12',
				afterReceipt:'2019-12-13 12:12:12',
			}]
		}
	},
	components:{
	    mHeader
	},
	mounted() {
		let _this = this;
		_this.userId = _this.$cookies.get('userId');
		if(_this.$utils.isNUll(_this.userId)){
			_this.$toast("超过24小时没打开页面啦，需重新登录");
			_this.$router.replace('login');
		}
		_this.initializeTabActiveName();
		// _this.getMachine();
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
		toPayView(){
			this.$router.push('shopCharge');
		},
		getMachine(){
			let _this = this;
			_this.$ajax.ajax(_this.$api.getAssistMachine, 'GET', null, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					_this.miningMachine = res.data;
					console.log("-------" + _this.miningMachine);
				}
			})
		},
		onLoad1() {
			let _this = this;
			_this.loading1 = true;
		  // 异步更新数据
		  setTimeout(() => {
			// 加载状态结束
			_this.loading1 = false;
			_this.finished1 = true;
		  }, 500);
		},
		onLoad2() {
			let _this = this;
			_this.loading2 = true;
			// _this.millShopCurrentPage = _this.millShopCurrentPage + 1;
			// console.log('_this.millShopCurrentPage',_this.millShopCurrentPage);
		  // 异步更新数据
		  setTimeout(() => {
			// 加载状态结束
			_this.loading2 = false;
			_this.finished2 = true;
		  }, 500);
		},
		onLoad3() {
			let _this = this;
			_this.loading3 = true;
			// _this.millShopCurrentPage = _this.millShopCurrentPage + 1;
			// console.log('_this.millShopCurrentPage',_this.millShopCurrentPage);
		  // 异步更新数据
		  setTimeout(() => {
			// 加载状态结束
			_this.loading3 = false;
			_this.finished3 = true;
		  }, 500);
		},
		initializeTabActiveName(){
			let _this = this;
			if(_this.$cookies.isKey("mill_tab_name")){
				_this.activeName = _this.$cookies.get("mill_tab_name");
			}
		},
		tabChange(name,title){
			console.log(name,title);
			this.$cookies.set("mill_tab_name", name, 60 * 60 * 1)
		},
	}
}
</script>
