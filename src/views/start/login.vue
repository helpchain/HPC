<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	.loginBox{
		color: $mainTextColor;
		background-color: $main-bg-color;
		min-height: 100%;
		width: 100%;
		box-sizing: border-box;
		.formHeader{
			padding: $boxPadding1;
			// background-color: $main-box-fh-bg-color;
			color: $mainTextColor;
			.logoBox{
				position: relative;
				img{
					width: 100%;
				}
			}
		}
		.formBox{
			.labelText{
				margin-top: 20px;
			}
			.van-cell-group,.van-cell{
				background-color: inherit !important;
			}
			.van-cell{
				color: $mainTextColor !important;
				padding: 10px 0 !important;
				&::last-child{
					border-bottom: 1px solid #BABABA !important;
				}
			}
			.van-cell__value,.van-cell__value--alone,.van-field__control{
				color: $mainTextColor !important;
			}
			.van-cell:not(:last-child)::after{
				left: 0 !important;
			}
			.van-button__text{
				font-size: 16px;
				font-weight: bold;
				letter-spacing: 2px;
			}
		}
		.sureBox{
			margin-top: 1.25rem;
			font-size: 0.75rem;
			.tip{
				margin: 1.25rem 0;
			}
			.agreement{color: $main-adorn-color;}
			.forget{
				float: right;
			}
		}
	}
	
	.van-cell__value,.van-cell__value--alone,.van-field__control{
		color: $mainTextColor !important;
	}
	.van-field__error-message{
		color: $main-adorn-color !important;
	}
	.van-cell::after {
	    position: absolute;
	    box-sizing: border-box;
	    content: ' ';
	    pointer-events: none;
	    right: 0;
	    bottom: 0;
	    left: 0px !important;
	    border-bottom: 1px solid #ebedf0 !important;
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	}
</style>

<template>
	<div class="loginBox">
		<!-- <div class="welcomeText">欢迎来到帮扶链</div> -->
		<div class="formHeader">
			<div class="logoBox">
				<img src="../../assets/image/LOGO.png" alt="">
			</div>
			<div class="welcomeText textIndent">{{welcomeText}}</div>
		</div>
		<div class="formBox paddingWing">
			<van-cell-group :border="isNo">
				<div class="labelText">账号</div>
				<van-field v-model="form.phone" clearable :placeholder="placeholder.phone" @blur="validate('phone')" :error-message="errorHint.phone" maxlength="11"/>
				<div class="labelText">密码</div>
				<van-field v-model="form.password" type="password" clearable :placeholder="placeholder.password" @blur="validate('password')" :error-message="errorHint.password" />
				<div class="labelText">验证码</div>
				<van-field v-model="form.securityCode" center clearable placeholder="请输入右边的图形验证码" @blur="validate('securityCode')" :error-message="errorHint.securityCode">
					<van-button slot="button" size="small" type="primary" @click="getSecurityCode">{{securityCode}}</van-button>
				</van-field>
			</van-cell-group>
		</div>
		<div class="sureBox paddingWing">
			<div class="tip">点击登录即表示您同意<span class="agreement" @click="$router.push('agreement')">《用户协议》</span><span class="forget" @click="forget">忘记密码？</span></div>
			<van-button color="linear-gradient(to right, #ffae00 , #ffae00)" size="normal" :block="true" :loading="isLoading" @click="loginBtn" loading-type="spinner">登  录</van-button>
		
			<div class="placeholderLine10"></div>
			<!-- <div class="tip4model3">
				Tip：您若已经参与了内排注册，登录密码初始化为所注册的手机号。
			</div> -->
			<div class="placeholderLine10"></div>
		</div>
	</div>
</template>

<script>
	// import {setCookie} from '@/assets/js/utils.js'
	// var evercookie = require('evercookie');
	import { Dialog } from 'vant';
	export default {
		data() {
			return {
				welcomeText:"",
				isNo:false,
				securityCode:'love',
				form:{
					phone:'',
					password:'',
					securityCode:''
				},
				placeholder:{
					phone:'请填写11位登录手机号',
					password:'请填写6~16位登录密码',
					securityCode:'请填写4位验证码'
				},
				errorHint:{
					phone:'',
					password:'',
					securityCode:''
				},
				loginValidate:true,
				isLoading:false,
				cookiesTime: 60 * 60 * 24,
				userFreezeInfo:'',
				getInitCode:''
			}
		},
		mounted() {
			let _this = this;
			localStorage.removeItem('_USERINFO_');
			_this.form.phone = localStorage.getItem("mobilePhone");
			// console.log(_this.form.phone,'_this.form.phone')
			_this.welcomeText = _this.$api.welcomeText;
			
			if(_this.$cookies.get('token')){
				//_this.$router.push("home");
			}
			_this.bsTip();
			//_this.getAssistMaintainInfo();
			_this.getSecurityCode();
		},
		methods:{
			getECBTN(){
				//everCookie.get("id", function(value) { alert("EverCookie value is " + value) });
			},
			setECBtn(){
				//everCookie.set("_TEST_","test_ec");
			},
			bsTip(){
				let _this = this;
				let isWeixin = _this.$utils.isWeixin();
				if(isWeixin){
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.bsTip
					}).then(() => {
					  // on close
					});
				}
			},
			judgeMoreAccount(){
				let _this = this;
				let phone = localStorage.getItem("mobilePhone");
				if(!_this.$utils.isNUll(phone)){
					if(_this.form.phone != phone){
						_this.$toast("请勿多账号操作，若经平台检测发现，冻结账号处理");
						return;
					}
				}
			},
			forget(){
				let _this = this;
				
				//请不要操作多账号
				//_this.judgeMoreAccount();
				
				_this.$router.replace('/forgetPassword');
			},
			getAddress(){
				let _this = this;
				let address = localStorage.getItem("address");
				let province = _this.$utils.getProvince(address);
				//alert(province);
			},
			getAssistMaintainInfo(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistMaintainInfo, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						// console.log('securityCode4Web',res.data);
						let maintainEndTime = _this.$utils.getTime(res.data.maintainEndTime);
						let nowTime = _this.$utils.getTime(new Date());
						if(maintainEndTime>nowTime){
							localStorage.setItem('maintainInfo',JSON.stringify(res.data));
							_this.$router.push("/maintain");
						}else{
							_this.getSecurityCode();
						}
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getSecurityCode(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getSecurityCode, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						// console.log('securityCode4Web',res.data);
						_this.getInitCode = res.data;
						let initCode = _this.$JsEncrypt.decrypt(_this.getInitCode.initCode);
						_this.securityCode = _this.$utils.getSC(initCode);
					}else{
						_this.$toast(res.message);
					}
				})
			},
			getUserFreezeInfo(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistUserFreezeByUserId, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						_this.userFreezeInfo = res.data;
						if(_this.userFreezeInfo==null){
							Dialog.alert({
							  title: '系统提示',
							  message: '您的账号被系统检测存在刷号现象，已被冻结。',
							}).then(() => {
							  // on close
							});
						}else{
							Dialog.alert({
							  title: '系统提示',
							  message: '您的账号异常或暂时被冻结，原因：' + _this.userFreezeInfo.reason + '。需找省市代理或客服解除异常或解冻。',
							}).then(() => {
							  // on close
							});
						}
					}else{
						_this.$toast(res.message);
					}
				})
			},
			logout(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.loginOut, 'GET', null, function(res){
					if(res.code == _this.$api.CODE_OK){
						_this.$toast(res.message);
						localStorage.removeItem('_USERINFO_');
						// localStorage.clear();//若不允许多账号登录，请把这个给去掉
						// console.log("_this.$cookies.keys()",_this.$cookies.keys());
						// _this.$cookies.remove('_USERINFO_');
						// _this.$cookies.remove('buyAndSellInfo');
						_this.$cookies.remove('userId');
						_this.$cookies.remove('token');
						// console.log("_this.$cookies.keys()",_this.$cookies.keys());
					}
				},function(){
					//_this.$router.replace('login');
				})
			},
			loginBtn(){
				let _this = this;
				let params = {
					userName: _this.form.phone.replace(/ /g,""),
					password: _this.form.password.replace(/ /g,""),
					securityCode: _this.form.securityCode.toLowerCase().replace(/ /g,"")
				}
				//请不要操作多账号
				//_this.judgeMoreAccount();
				let phone = localStorage.getItem("mobilePhone");
				if(!_this.$utils.isNUll(phone)){
					if(_this.form.phone != phone){
						_this.$toast("请勿多账号操作，若经平台检测发现，将冻结账号处理");
						return;
					}
				}
				
				if(_this.$utils.hasNull(params)){
					_this.$toast('系统提示:请填写完成信息');
					return;
				}
				if(_this.$utils.hasVal(_this.errorHint)){
					_this.$toast('系统提示:请按要求填写信息');
					return;
				}
				params.password = _this.$JsEncrypt.encrypt(_this.form.password);
				// console.log('params',params);
				_this.isLoading = true;
				_this.$ajax.ajax(_this.$api.loginUser, 'GET', params, function(res) {
					// console.log('res', res);
					_this.isLoading = false;
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						let userInfo = res.data.assistUserInfoVo4Web;
						/* alert("userInfo1:" + JSON.stringify(userInfo)); */
						/* _this.getBuyAndSellInfo(userInfo.userId); */
						_this.$cookies.set("userId", userInfo.userId);
						_this.$cookies.set('token',res.data.token);
						//登录后手机号缓存到本地，每次登录免得继续输入手机号，提高用户体验
						localStorage.setItem('_USERINFO_',JSON.stringify(userInfo));
						/* alert("userInfo2:" + ); */
						localStorage.setItem('mobilePhone',userInfo.mobilePhone);
						if(userInfo.accountStatus == 1){
							_this.getUserFreezeInfo();
						}else{
							_this.$router.replace("/home");
						}
					}else{
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						  _this.getSecurityCode();
						});
					}
				},function(res){
					// console.log("complate",res);
					_this.isLoading = false;
				})
			},
			validate(key){
				let _this = this;
				if(key == 'phone') {
					if(_this.$reg.phone.test(_this.form.phone)){
						_this.errorHint.phone = '';
					}else{
						_this.errorHint.phone = _this.$reg.phoneHint;
					}
				}else if(key == 'password'){
					if(_this.$reg.password.test(_this.form.password.replace(/ /g,""))){
						_this.errorHint.password = '';
					}else{
						_this.errorHint.password = _this.$reg.passwordHint;
					}
				}else if(key == 'securityCode'){
					if(_this.$reg.securityCode.test(_this.form.securityCode.replace(/ /g,""))){
						_this.errorHint.securityCode = '';
					}else{
						_this.errorHint.securityCode = _this.$reg.securityCodeHint;
					}
				}
			}
		}
	}
</script>