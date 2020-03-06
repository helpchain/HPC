<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	$cellHeight:50px;
	.charge{
		font-size: 0.75rem;
		color: $mainTextColor;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: $main-box-color;
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
		.myChargePage{
			margin-top: $header-height;
			margin-bottom: $header-height;
			background-color: $main-box-color;
			.myCell{
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid $main-bg-color;
				height: 40px;
				padding: 0 $boxPadding2;
				.flex{
					flex: 1;
				}
				.align-right{
					text-align: right;
					align-self: right;
					align-items: right;
					justify-content: right;
				}
			}
			.chargeCode{
				width: 100%;
				box-sizing: border-box;
				padding: $boxPadding2;
				img{
					width: 100%;
				}
			}
			.uploadPic{
				margin-top:20px;
				margin-bottom:60px;
			}
			.qrCodeAddress{
				padding: 20px;
				text-align: center;
				background-color: #004986;
				display: flex;
				align-content: center;
				align-items: center;
				flex-direction: column;
				.qrcode{
					text-align: center;
				}
				.line{
					width: 100%;
					word-wrap: break-word;
				}
			}
			.myCell2{
				height: 200px;
				border-bottom: 1px solid $main-bg-color;
			}
			.sureBtn{
				position: fixed;
				bottom: 0;
				left: 0;
				right: 0;
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
	<div class="charge">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				订购商品
			</div>
			<i class="iconfont iconfont-question rightBox icon"></i>
		</m-header>
		<div class="myChargePage">
			<div class="myCell">
				<div class="flex label">
					商品名称
				</div>
				<div class="flex align-right">
					卡拉卡智能POS
				</div>
			</div>
			<div class="myCell">
				<div class="flex label">
					商品数量
				</div>
				<div class="flex align-right">
					1
				</div>
			</div>
			<div class="myCell">
				<div class="flex label">
					订单金额
				</div>
				<div class="flex align-right">
					￥299
				</div>
			</div>
			<div class="myCell">
				<div class="flex label">
					商家姓名
				</div>
				<div class="flex align-right">
					{{merchantInfo.name | hiddenlastName}}
				</div>
			</div>
			<div class="myCell">
				<div class="flex label">
					商家支付宝
				</div>
				<div class="flex align-right">
					13733179685
				</div>
			</div>
			<div class="myCell">
				<div class="flex label">
					商家微信号
				</div>
				<div class="flex align-right">
					zhaocui13733179685
				</div>
			</div>
			<!-- <div class="myCell">
				<div class="flex label">
					备注：买家可直接通过以上微信或者支付宝支付，也可以通过以下收款码支付
				</div>
			</div> -->
			<!-- <div class="myCell">
				<div class="flex label">
					商家收款码
				</div>
				<div class="flex align-right">
					zhaocui13733179685
				</div>
			</div> -->
			<!-- <div class="chargeCode">
				<img src="../../assets/image/shop/alipayCode.jpg" alt="">
			</div> -->
			<div class="uploadPic paddingWing">
				<div class="label">付款截图</div>
				<div class="margT10">
					<van-uploader v-model="form.fileList" multiple image-fit='cover' :max-count="1"  :before-read="beforeRead"/>
				</div>
			</div>
			<div class="sureBtn">
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
					id:0,
					fileList:[]
				},
				registerUrl:'',
				option1: [
					{ text: '平台券', value: 0 },
					{ text: '省市代理', value: 1 },
					{ text: '商家入驻', value: 2 },
					{ text: '其他', value: 3 }
				],
				merchantInfo:{
					name:'赵翠翠'
				}
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			// _this.handleGenerator();
			this.$nextTick(function () {
			      // _this.getQrcode2()
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
			getQrcode2(){
				let _this = this;
				let id = localStorage.getItem('userId');
				let registerUrl = ''
				if (process.env.NODE_ENV === "development") {
					registerUrl = _this.$api.hostIPPort + '/#/register?id=' + id;
					console.log('registerUrl', registerUrl);
				}else {
					registerUrl = _this.$api.domainName + '/#/register?id=' + id;
					console.log('registerUrl',registerUrl);
				}
				
				let qrcode = new QRCode('qrcode', {
					width: 120, // 设置宽度，单位像素
					height: 120, // 设置高度，单位像素
					text: registerUrl // 设置二维码内容或跳转地址
				})
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
				if(_this.form.fileList==[]){
					_this.$toast('请上传付款截图');
					return;
				}
				let params = {
					id: _this.form.id,
					fileList: _this.form.fileList
				}
				console.log('params',params);
			},
		}
	}
</script>
