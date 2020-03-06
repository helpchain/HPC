<style lang="scss">
	@import '~@/assets/scss/index.scss';

	.van-list__finished-text {
		background-color: $main-bg-color;
	}

	.mySharePage {
		/* position: fixed;
		top: 0;
		width: 100%;
		bottom: 0;
		background-color: $main-bg-color; */
		@include pageMy();
		box-sizing: border-box;
		z-index: 2;
		.poster {
			// margin-top: $headerHeight;
			padding: $boxPadding2;
			position: relative;
			box-sizing: border-box;
			.myShareUrl{
				color: $mainTextColor;
				font-size: 12px;
			}
			.posterBG {
				position: relative;
				height: 480px;
				background-color: #323232;
				overflow: hidden;
				$widthBox1: 240px;
				$widthBox2: 120px;
				$paddingGlobal:17px;
				.borderGlobal{
					border: 1px solid white;
					position: absolute;
					top: $paddingGlobal;
					bottom: $paddingGlobal;
					left: $paddingGlobal;
					right: $paddingGlobal;
					z-index: 50;
				}
				.box1 {
					width: $widthBox1;
					height: $widthBox1;
					border-radius: $widthBox1;
					background-image: linear-gradient(to right,#0761c3,#62cbc6);
					position: absolute;
					top: -$widthBox1/2;
					left: -$widthBox1/3;
					z-index: 51;
				}

				.box2 {
					width: $widthBox2;
					height: $widthBox2;
					border-radius: $widthBox2;
					background-image: linear-gradient(to right,#479bf6,#0761c3);
					position: absolute;
					top: $widthBox2/1;
					right: -$widthBox2/2;
					z-index: 49;
				}

				$widthBox3:150px;
				$widthBox4:250px;
				.box3 {
					width: $widthBox3;
					height: $widthBox3;
					border-radius: $widthBox3;
					background-image: linear-gradient(to right,#0761c3,#479bf6);
					position: absolute;
					bottom: $widthBox3/1;
					left: -$widthBox3/2;
					z-index: 49;
				}

				.box4 {
					width: $widthBox4;
					height: $widthBox4;
					border-radius: $widthBox4;
					background-image: linear-gradient(to right,#62cbc6,#0761c3);
					position: absolute;
					bottom: -$widthBox4/3;
					right: -$widthBox4/3;
					z-index: 51;
				}

				$logoWidth:200px;

				.logo {
					width: $logoWidth;
					position: absolute;
					top: 28px;
					left: 50%;
					transform: translateX(-50%);
					z-index: 100;
				}

				.box5 {
					position: absolute;
					top: $logoWidth + 40px;
					z-index: 101;
					left: 50%;
					transform: translateX(-50%);
				}

				.box6 {
					position: absolute;
					top: $logoWidth + 86px;
					left: 0;
					right: 0;
					text-align: center;
					z-index: 101;
					font-weight: 900;
					font-size: 36px;
					color: white;
				}

				.registerCode {
					position: absolute;
					bottom: 70px;
					left: 0;
					right: 0;
					text-align: center;
					z-index: 101;
					font-weight: 900;
					font-size: 36px;
					color: white;
					left: 50%;
					transform: translateX(-50%);
					border: 10px solid white;
					width: 120px;
				}

				.registerCodeText {
					position: absolute;
					bottom: 48px;
					left: 0;
					right: 0;
					text-align: center;
					z-index: 101;
					font-weight: bolder;
					font-size: 14px;
					color: white;
					left: 50%;
					transform: translateX(-50%);
				}
				.registerCodeText2 {
					position: absolute;
					bottom: 30px;
					left: 0;
					right: 0;
					text-align: center;
					z-index: 101;
					font-weight: bolder;
					font-size: 14px;
					color: white;
					/* left: 50%;
					transform: translateX(-50%); */
				}
			}
		}
	}
</style>
<template>
	<div class="mySharePage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				我要分享
			</div>
			<i class="rightBox icon"></i>
			<!-- <i class="iconfont iconfont-question rightBox icon" @click="showTipModel=true"></i> -->
		</m-header>
		<div class="poster" id="tree-containner">
			<div class="posterBG" id="tree" ref="tree">
				<div class="borderGlobal"></div>
				<img class="logo" src="../../assets/image/LOGO4Share.png">
				<div class="box1"></div>
				<div class="box2"></div>
				<div class="box3"></div>
				<div class="box4"></div>
				<!-- <div class="box5">
					<img src="../../assets/image/poster/PostText1.png">
				</div> -->
				<!-- <img class="registerCode" src="../../assets/image/code.png"> -->
				<div class="registerCode" id="qrcode" ref="qrcode"></div>
				<div class="registerCodeText">扫码注册</div>
				<div class="registerCodeText2">我为帮扶链代言：{{userInfo.nickName}}</div>
			</div>
			<div class="margT10">
				<div class="myShareUrl">
					分享链接: {{registerUrl}}
				</div>
				<div class="placeholderLine10"></div>
				<van-button type="info" size="normal" color="linear-gradient(to right, #ffae00, #ff8400)" @click="handleCopy(registerUrl,$event)" :block="true">复制分享链接</van-button>
				<div class="placeholderLine10"></div>
				<!-- <van-button type="info" size="normal" color="linear-gradient(to right, #ffae00, #ff8400)" @click="innerRegister" :block="true">内排注册</van-button>
				<div class="placeholderLine10"></div> -->
				<!-- <div class="tip4model3">
					分享是快速提升团队算力的首选方案<br>
					而想要管理好团队快速增长算力<br>
					建议团队长们建立帮扶链工会群<br>
					条件：设立2名群管理<br>
					所服务的帮扶链用户数量超过300名<br>
					需省市代理审核群活跃度并引荐给客服<br>
					达标后群主和群管理获得一台小型矿机<br>
				</div> -->
				
			</div>
		</div>
		<!-- <van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="知道了">
			<div class="paddingWing f-12 lineHeight tip4model2">
				<div class="line text margT10">
					分享是快速提升团队算力的首选方案<br>
					而想要管理好团队快速增长算力<br>
					建议团队长们建立帮扶链工会群<br>
					条件：设立2名群管理<br>
					所服务的帮扶链用户数量超过300名<br>
					需省市代理审核群活跃度并引荐给客服<br>
					达标后群主和群管理获得一台小型矿机<br>
				</div>
			</div>
		</van-dialog> -->
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	// import { image_host } from '@/assets/js/config.js';
	import html2canvas from "html2canvas";
	import canvg from "canvg";
	import clip from '@/assets/js/clipboard';
	import QRCode from 'qrcodejs2';
	export default {
		components: {
			mHeader
		},
		data() {
			return {
				showTipModel:false,
				loading1: false,
				finished1: false,
				registerUrl:"",
				userInfo:""
			}
		},
		mounted() {
			let _this = this;
			// _this.handleGenerator();
			/* _this.userId = _this.$cookies.get('userId');
			if(_this.$utils.isNUll(_this.userId)){
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			} */
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			this.$nextTick(function () {
			      _this.getQrcode2()
			})
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			handleCopy(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.$toast(`复制分享链接成功`);
				});
			},
			innerRegister(){
				let _this = this;
				_this.$router.push("innerRegister");
				//_this.$router.push({path:"innerRegister",query:{id:_this.userInfo.shareCode}})
			},
			getQrcode2(){
				let _this = this;
				let id = _this.userInfo.shareCode;
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
				_this.registerUrl = registerUrl;
			},
			getQrcode () {
			  let _this = this;
			  _this.$ajax.ajax(_this.$api.getQrCodeUrl, 'GET', null, function(res) {
				  console.log('res',res);
			  	if (res.code == _this.$api.CODE_OK) {
			  		let qrcode = new QRCode('qrcode', {
						width: 120, // 设置宽度，单位像素
						height: 120, // 设置高度，单位像素
						text: res.data // 设置二维码内容或跳转地址
			  		})
			  	}
			  })
			}
		}
	}
</script>
