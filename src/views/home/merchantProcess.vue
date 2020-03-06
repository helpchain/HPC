<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$cellHeight:50px;
	.merchantProcess{
		font-size: 0.75rem;
		@include page4Home();
		background-color: $mainTextColor;
		.van-dropdown-menu{
			height: $cellHeight !important;
			background-color: inherit !important;
		}
		.van-dropdown-menu__title{
			color: $mainTextColor;
			font-size: 0.75rem !important;
		}
		[class*=van-hairline]::after{
			border: none !important;
		}
		.van-field__control{
			color: $mainTextColor;
		}
		.van-cell,.van-cell-group{
			background-color: inherit !important;
		}
		.van-cell{
			color:$mainTextColor !important;
		}
		.van-field__label{
			width: 70px !important;
			font-size: 0.75rem !important;
		}
		input,textarea{
			font-size: $fs-content !important;
		}
		.merchantProcessPage{
			/* margin-top: $header-height; */
			margin-bottom: $header-height;
			background-color: $mainTextColor;
			
			.sureBtn{
				position: fixed;
				bottom: 0;
				left: 0;
				right: 0;
			}
		}
		// .van-steps{
		// 	background-color: $main-bg-color !important;
		// }
	}
	
</style>
<template>
	<div class="merchantProcess">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				商家入驻
			</div>
			<i class="iconfont iconfont-question rightBox icon"></i>
		</m-header>
		<div class="merchantProcessPage" v-if="$route.meta.child1">
			<van-steps direction="vertical" :active="active" active-color="#ffae00">
			  <van-step>
			    <h3>填写资料</h3>
			    <p>商品资料务必填真实。</p>
			  </van-step>
			  <van-step>
			    <h3>资料审核</h3>
			    <p>所上架商品需要经过平台2个工作日之内审核，请耐心等待。</p>
			  </van-step>
			  <van-step>
			    <h3>审核结果</h3>
			    <p>您的商品资料审核通过/您的商品资料审核未通过+原因。</p>
			  </van-step>
			  <van-step>
			    <h3>缴纳入驻费</h3>
			    <p>商品入驻需缴纳1个以太坊。</p>
			  </van-step>
			  <van-step>
			    <h3>入住费审核</h3>
			    <p>入住费审核要经过平台2个工作日之内审核，请耐心等待。</p>
			  </van-step>
			  <van-step>
			    <h3>审核结果</h3>
			    <p>您的商品已上架/审核未通过+原因。</p>
			  </van-step>
			</van-steps>
			<div class="sureBtn">
				<van-button color="linear-gradient(to right, #ffae00, #ff8400)" size="large" @click="nextStep">下一步</van-button>
			</div>
		</div>
		<transition name="van-fade">
		  <router-view></router-view>
		</transition>
	</div>
</template>
<script>
	import mHeader from '@/components/Header.vue';
	import QRCode from 'qrcodejs2';
	import clip from '@/assets/js/clipboard';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		data() {
			return {
				active: 0,
				form:{
					name:'',
					introduce:'',
					marketPrice:'',
					discountsPrice:'',
					fileShowList:[],
					fileDetailList:[],
					filePaymentList:[]
				},
				registerUrl:'',
				option1: [
					{ text: '平台券', value: 0 },
					{ text: '省市代理', value: 1 },
					{ text: '商家入驻', value: 2 },
					{ text: '其他', value: 3 }
				],
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			// _this.handleGenerator();
			this.$nextTick(function () {
			      
			})
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			beforeRead(file) {
				let _this = this;
				if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
					_this.$toast('请上传 jpg/png 格式图片');
					return false;
				}
				return true;
			},
			nextStep(){
				let _this = this;
				if(_this.active==0){
					_this.$router.push('/merchantEnter');
				}else if(_this.active==3){
					_this.$router.push('/charge');
				}
				// _this.active = _this.active + 1;
				// _this.$router.push({
				// 	path: `/myWordList`
				// });
			},
		}
	}
</script>
