<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$cellHeight:50px;
	.merchantEnter{
		font-size: 0.75rem;
		color: $mainTextColor;
		@include page();
		z-index: 3;
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
		.merchantEnterPage{
			margin-bottom: $header-height;
			background-color: $main-box-color;
			.myCell{
				border-bottom: 1px solid $main-bg-color;
				.van-cell__value, .van-cell__value--alone, .van-field__control{
					color: #ffffff !important;
				}
			}
			.label{
				height: 12px;
				position: relative;
				margin-top: 16px;
				padding-left: 8px;
				clear: both;
				.star{
					color: #ee0a24;
					font-size: 14px;
					position: absolute;
					top: 2px;
				}
				.text{
					color: $mainTextColor;
					font-size: $fs-content;
					position: absolute;
					left:16px;
				}
			}
			.uploadPic{
				clear: both;
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
		.textAdornColor{
			color: $main-adorn-color !important;
		}
		.lineHeight{
			line-height: 50px;
		}
		.padding-right{
			padding-right: $boxPadding2;
		}
	}
	
</style>
<template>
	<div class="merchantEnter">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				填写资料
			</div>
			<i class="iconfont iconfont-question rightBox icon"></i>
		</m-header>
		<div class="merchantEnterPage">
			<div class="myCell">
				<van-field label="商品名称" required clearable @blur="validate('name')" v-model="form.name" maxlength="20" placeholder="请输入20字内的商品名称" />
			</div>
			<div class="myCell">
				<van-field label="商品简介"
				  v-model="form.introduce" @blur="validate('introduce')"
				  rows="2" required
				  autosize clearable
				  type="textarea"
				  maxlength="100"
				  placeholder="请输入商品简介(不超过100字)"
				  show-word-limit
				/>
			</div>
			<div class="myCell">
				<van-field label="市场价格" required clearable @blur="validate('marketPrice')" v-model="form.marketPrice" maxlength="10" placeholder="请填写商品的市场价格" />
			</div>
			<div class="myCell">
				<van-field label="优惠后价格" required clearable @blur="validate('discountsPrice')" v-model="form.discountsPrice" maxlength="10" placeholder="请填写商品优惠后的价格" />
			</div>
			<div class="label">
				<span class="star">*</span>
				<span class="text">商品展示图(最多传1张)</span>
			</div>
			<div class="uploadPic paddingWing">
				<div class="margT10">
					<van-uploader v-model="form.fileShowList" multiple image-fit='cover' :max-count="1"  :before-read="beforeRead"/>
				</div>
			</div>
			<div class="label">
				<span class="star">*</span>
				<span class="text">商品详情图(最多传10张)</span>
			</div>
			<div class="uploadPic paddingWing">
				<div class="margT10">
					<van-uploader v-model="form.fileDetailList" multiple image-fit='cover' :max-count="10"  :before-read="beforeRead"/>
				</div>
			</div>
			<!-- <div class="label">
				<span class="star">*</span>
				<span class="text">商家收款码(支付宝+微信)</span>
			</div> -->
			<!-- <div class="uploadPic paddingWing">
				<div class="margT10">
					<van-uploader v-model="form.filePaymentList" multiple image-fit='cover' :max-count="2"  :before-read="beforeRead"/>
				</div>
			</div> -->
			<div class="sureBtn">
				<!-- <div class="tip">点击登录即表示您同意<span class="agreement">《服务协议》</span></div> -->
				<van-button color="linear-gradient(to right, #ffae00, #ff8400)" size="large" @click="submit">提交</van-button>
			</div>
		</div>
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
				form:{
					name:'',
					introduce:'',
					marketPrice:'',
					discountsPrice:'',
					fileShowList:[],
					fileDetailList:[],
					// filePaymentList:[]
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
			handleCopy(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
			validate(flag){
				let _this = this;
				if(flag == 'name'){
					if(_this.form.name==''){
						_this.$toast('请填写商品名称');
						return;
					}
				}else if(flag == 'introduce'){
					if(_this.form.introduce==''){
						_this.$toast('请填写商品简介');
						return;
					}
				}else if(flag == 'marketPrice'){
					if(_this.form.marketPrice==''){
						_this.$toast('请填写市场价格');
						return;
					}
				}else if(flag == 'discountsPrice'){
					if(_this.form.discountsPrice==''){
						_this.$toast('请填写优惠后价格');
						return;
					}
				}
			},
			toListView(){
				let _this = this;
				_this.$router.push({
					path: `/myWordList`
				});
			},
			submit(){
				console.log("submit");
				let _this = this;
				// if(_this.form.fileShowList.length==0){
				// 	_this.$toast('请上传商品展示图');
				// 	return;
				// }
				// if(_this.form.fileDetailList.length==0){
				// 	_this.$toast('请上传商品详情图');
				// 	return;
				// }
				// if(_this.form.filePaymentList.length==0){
				// 	_this.$toast('请上传商家收款码');
				// 	return;
				// }
				let params = {
				}
				params = _this.form;
				console.log('params',params);
				if(_this.$utils.hasNull(params)){
					_this.$toast(`请填写完整信息`);
				}else{
					console.log('可提交信息');
					// _this.$ajax.ajax(_this.$api.updateAssistUsrInfo, 'POST', params, function(res){
					// 	console.log('res',res);
					// 	if(res.code == _this.$api.CODE_OK){
							
					// 	}
					// })
				}
			},
		}
	}
</script>
