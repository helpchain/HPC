<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/variable.scss';
[class*=van-hairline]::after {
    border: 1px solid transparent !important;
}
.shop{
	background-color: $main-bg-color;
	min-height: 100% !important;
	.shopList{
		color: $mainTextColor;
		min-height: 100%;
		width: 100%;
		box-sizing: border-box;
		background-color: $main-bg-color;
		.list {
			width: 100%;
			padding: 6px 6px;
			box-sizing: border-box;
			.item {
				width: 100%;
				border-bottom: 1px solid $bottomLineColor;
				letter-spacing: 1px;
				background-color: $main-box-color;
				margin-bottom: 4px;
				border-radius: 4px;
				overflow: hidden;
				&::last-child{
					margin-bottom: 0px;
				}
				.imgBox{
					width: 100%;
					img{
						width: 100%;
					}
				}
				.textBox{
					padding: 4px 10px;
					.freeGet{color: $main-adorn-color !important;}
					.title{font-size: $fs-title;font-weight: bold;color: $mainTextColor !important;}
					.line{
						overflow: hidden;clear: both;
						&.content{font-size: $fs-content;line-height: 1.3em;color: $mainTextColor !important;}
					}
					
				}
			}
		}
	}	
}
</style>
<template>
  <div class="shop">
	<m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">
			小店
		</div>
		<i class="iconfont iconfont-question rightBox icon"></i>
	</m-header>
	<div class="shopList">
		<!-- <van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
			<div class="list">
				<div class="item">
					<router-link to="shopDetail">
					<div class="imgBox">
						<img src="../../assets/image/shop/lkl02.png" alt="">
					</div>
					<div class="textBox">
						<div class="line">
							<div class="left title">卡拉卡智能POS</div>
							<div class="freeGet right">￥299押金</div>
						</div>
						<div class="line content margT3 justify">平台小店预热优惠活动：订购此产品需交￥299押金，下单成功且经过商家审核后，奖励299张平台券，每人最多拍1件(备注：激活POS机需要刷卡满￥299，激活成功后再找商家审核，审核确实激活后，您所交的￥299押金可退回)</div>
						<div class="line content"><div class="left">已售 100</div><div class="right">库存 1000</div></div>
					</div>
					</router-link>
				</div>
			</div>
		</van-list> -->
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { getTestUser,ERR_OK } from "@/api/index";
// import {getCookie} from '@/assets/js/utils.js'
import mHeader from '@/components/Header.vue';
export default {
	data() {
		return {
			list:{},			
			userId:'',
			loading1: false,
			finished1: false,
		}
	},  
	components:{
	    mHeader
	},
	mounted(){
		let _this = this;
		_this.userId = localStorage.getItem('userId');
	},
	methods:{
		onLoad1() {
			console.log('load1')
			let _this = this;
			// 异步更新数据
			setTimeout(() => {
				// 加载状态结束
				_this.loading1 = false;
				_this.finished1 = true;
			}, 500);
			// let params = {
			// 	pageNo: _this.currentPage,
			// 	pageSize: _this.pageSize,
			// 	userId: localStorage.getItem('userId')
			// }
			// _this.$ajax.ajax(_this.$api.getAssistUserInfoPageList, 'GET', params, function(res) {
			// 	console.log('res', res);
			// 	if (res.code == _this.$api.CODE_OK) {
			// 		_this.list1 = res.data.list;
			// 		_this.loading1 = false;
			// 		_this.finished1 = true;
			// 	}
			// })
		},
		getUserInfo(){
			let _this = this;
			_this.loading = true;
			_this.$ajax.ajax(_this.$api.getAssistUserInfo + _this.userId, 'GET', null, function(res){
				console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.userInfo = res.data;
					_this.isShare3 = _this.userInfo.num==null?false:_this.userInfo.num>=3?true:false;
					console.log('_this.isShare3',_this.isShare3)
					if(_this.userInfo.realName){
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
		initializeHintInfo(){
			let _this = this;
			
		},
		back(){
			this.$router.go(-1);
		},
	}
}
</script>
