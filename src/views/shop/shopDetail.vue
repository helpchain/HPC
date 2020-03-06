<style scoped lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/variable.scss';
[class*=van-hairline]::after {
    border: 1px solid transparent !important;
}
.shopDetail{
	background-color: $main-bg-color;
	min-height: 100% !important;
	.shopList{
		color: $mainTextColor;
		position: absolute;
		top: $header-height;
		min-height: 100%;
		width: 100%;
		box-sizing: border-box;
		background-color: $main-bg-color;
		.list {
			width: 100%;
			.item {
				width: 100%;
				border-bottom: 1px solid $bottomLineColor;
				letter-spacing: 1px;
				.imgBox,.detailBox{
					width: 100%;
					img{
						width: 100%;
					}
				}
				.textBox{
					padding: 4px 10px;
					.freeGet{color: $main-adorn-color;}
					.line{
						overflow: hidden;clear: both;
						&.title{font-size: $fs-title;font-weight: bold;}
						&.content{font-size: $fs-content;line-height: 1.2em;}
					}
					.weixinBox{
						display: flex;
						align-items: center;
						.weixin{
							
						}
						.copy{
							font-size: $fs-12;
							margin-left: 4px;
							background-color: $main-adorn-color;
							padding: 0 2px;
							border-radius: 2px;
						}
					}
				}
				.detailBox{
					margin-bottom: 46px;
				}
				.sureBtn{
					position: fixed;
					bottom: 0;
					left: 0;
					right: 0;
					.tip{
						margin: 1.25rem 0;
					}
					.agreement{color: $main-adorn-color;}
				}
			}
		}
	}	
}
</style>
<template>
  <div class="shopDetail">
	<m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">
			商品详情
		</div>
		<i class="iconfont iconfont-question rightBox icon"></i>
	</m-header>
	<div class="shopList">
		<div class="list">
			<!-- <div class="item">
				<div class="imgBox">
					<img src="../../assets/image/shop/lkl02.png" alt="">
				</div>
				<div class="textBox">
					<div class="line title">
						<div class="left">卡拉卡智能POS</div>
						<div class="freeGet right">￥299押金</div>
					</div>
					<div class="line content margT3 justify">平台小店预热优惠活动：订购此产品需交￥299押金，下单成功且经过商家审核后，奖励299张平台券，每人最多拍1件(备注：激活POS机需要刷卡满￥299，激活成功后再找商家审核，审核确实激活后，您所交的￥299押金可退回)</div>
					<div class="line content"><div class="left">已售 100</div><div class="right">库存 1000</div></div>
					<div class="line content weixinBox"><span class="weixin">商家微信 zhaocui13733179685</span><span class="copy" @click="handleCopy('zhaocui13733179685',$event)">复制</span></div>
				</div>
				<div class="detailBox">
					<img src="../../assets/image/shop/lkl_detail.jpg" alt="" @click="imgEvent">
					<van-image-preview v-model="showPreviewImg" :images="images" @change="onChange">
					  <template v-slot:index>第{{ index }}页</template>
					</van-image-preview>
				</div>
				<div class="sureBtn">
					<van-button color="linear-gradient(to right, #ffae00, #ff8400)" size="large" @click="orderBtn">去订购</van-button>
				</div>
			</div> -->
		</div>
		<van-action-sheet v-model="showSubmitModel" title="确认信息">
		  <div class="placeholderLine40"></div>
		  <van-field v-model="form.address" required clearable placeholder="请填写收货地址" maxlength="50"/>
		  <div class="placeholderLine40"></div>
		  <div class="sureAppointBtnBox">
			  <van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" @click="submitBtn">确 认</van-button>
		  </div>
		</van-action-sheet>
	</div>
  </div>
</template>

<script>
// @ is an alias to /src
import mHeader from '@/components/Header.vue';
import clip from '@/assets/js/clipboard';
export default {
	data() {
		return {
			list:{},			
			userId:'',
			loading1: false,
			finished1: false,
			form:{
				address:''
			},
			showPreviewImg:false,
			images: [
				'https://img.yzcdn.cn/2.jpg'
			],
			index:0,
			showSubmitModel:false,
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
		submitBtn(){
			console.log('submit');
		},
		orderBtn(){
			this.$router.push('shopCharge');
		},
		imgEvent(){
			this.showPreviewImg = true;
		},
		onChange(index) {
		  this.index = index;
		},
		handleCopy(text, event) {
			let _this = this;
			clip(text,event,function(res){
				_this.$toast(`复制${res.text}成功`);
			});
		},
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
