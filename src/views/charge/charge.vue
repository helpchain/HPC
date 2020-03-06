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
				.flex{
					flex: 1;
					padding-left: 16px;
				}
				.align-right{
					text-align: right;
					align-self: right;
					align-items: right;
					justify-content: right;
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
				缴费中心
			</div>
			<i class="iconfont iconfont-question rightBox icon"></i>
		</m-header>
		<div class="myChargePage">
			<div class="myCell">
				<div class="flex label">
					缴费类型
				</div>
				<div class="flex align-right">
					<van-dropdown-menu>
					  <van-dropdown-item v-model="form.type" :options="option1" />
					</van-dropdown-menu>
				</div>
			</div>
			<div class="paddingWing">
				<div class="qrCodeAddress">
					<div class="">
						缴费币种 USDT
					</div>
					<div class="line margT10">交易所收款二维码</div>
					<div class="qrcode margT10" id="qrcode" ref="qrcode"></div>
					<div class="line margT10">交易所收款地址</div>
					<div class="line margT6">0x84120604505535ec04627560441c5190e14ddb49</div>
					<div class="line margT6">
						<van-button type="default" size="mini"  @click="handleCopy('0x84120604505535ec04627560441c5190e14ddb49',$event)">复制</van-button></div>
				</div>
			</div>
			<div class="uploadPic paddingWing">
				<div class="label">付款截图</div>
				<div class="margT10">
					<van-uploader v-model="form.fileList" multiple image-fit='cover' :max-count="2"  :before-read="beforeRead"/>
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
					type:0,
					fileList:[]
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
		created() {
			let _this = this;
			// _this.handleGenerator();
			this.$nextTick(function () {
			      _this.getQrcode2()
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
					type: _this.form.type,
					fileList: _this.form.fileList
				}
				console.log('params',params);
			},
		}
	}
</script>
