<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.register{
		padding: $boxPadding1;
		color: $mainTextColor;
		@include pageNoHeight4Scroll();
		width: 100%;
		box-sizing: border-box;
		.logoBox{
			min-height: 280px;
		}
		.formBox{
			.van-cell__value,.van-cell__value--alone,.van-field__control{
				color: $mainTextColor !important;
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
			.van-cell::after{
				border: none;
			}
			.labelText{
				margin-top: 20px;
			}
			.vanCountDown{
				.van-count-down{
					color: $mainTextColor !important;
				}
			}
			.van-button__text{
				font-size: 16px;
				font-weight: bold;
				letter-spacing: 2px;
			}
		}
		.sureBox{
			margin-top: 1.25rem;
			.tip{
				margin: 1.25rem 0;
				font-size: 0.812rem
			}
			.agreement{color: $main-adorn-color;}
		}
		.securityCodeBox{
			.van-cell__value, .van-cell__value--alone, .van-field__control {
			    color: #323232 !important;
			}
			.van-field__label{
				width: 66px !important;
			}
			.van-button__text{
				font-size: 16px;
				font-weight: bold;
				letter-spacing: 2px;
			}
		}
		.van-dialog__header{
			color: #323232 !important;
		}
	}
	.van-field__error-message{
		color: $main-adorn-color !important;
	}
</style>

<template>
	<div class="register">
		<div class="logoBox">
			<img src="../../assets/image/LOGO.png" alt="">
		</div>
		<div class="welcomeText textIndent">{{welcomeText}}</div>
		<div class="formBox">
			<van-cell-group :border="isNo">
				<div class="labelText">账号</div>
				<van-field v-model="form.phone" clearable :placeholder="placeholder.phone" @blur="validate('phone')" :error-message="errorHint.phone" maxlength="11"/>
				<div class="labelText">登录密码</div>
				<van-field v-model="form.password" type="password" clearable :placeholder="placeholder.password" @blur="validate('password')" :error-message="errorHint.password" />
				<div class="labelText">确认密码</div>
				<van-field v-model="form.password2" type="password" clearable :placeholder="placeholder.password2" @blur="validate('password2')" :error-message="errorHint.password2"/>
				<div class="labelText">验证码</div>
				<van-field v-model="form.securityCode" center clearable placeholder="请输入右边的图形验证码"  @blur="validate('securityCode')" :error-message="errorHint.securityCode">
					<van-button slot="button" size="small" type="primary" :loading="getSCLoading" @click="getSecurityCode">{{securityCode}}</van-button>
				</van-field>
				<!-- <div class="labelText">短信验证码</div>
				<van-field v-model="form.validateCode" clearable :placeholder="placeholder.validateCode" @blur="validate('validateCode')" :error-message="errorHint.validateCode">
					<van-button slot="button" size="small" color="#ffae00" :disabled="isShortMessageDisabled" @click="shortMessageBtn">
						<span v-if="isShortMessageDisabled==false">发送验证码</span>
						<span v-if="isShortMessageDisabled==true">
							{{time}}
						</span>
					</van-button>
				</van-field> -->
				<div class="labelText">推荐码</div>
				<van-field v-model="form.shareCode" clearable :placeholder="placeholder.shareCode" @blur="validate('shareCode')" :error-message="errorHint.shareCode" />
			</van-cell-group>
		</div>
		<div class="sureBox">
			<div class="tip">点击注册即表示您同意<span class="agreement" @click="$router.push('agreement')">《用户协议》</span></div>
			<van-button color="linear-gradient(to right, #ffae00 , #ffae00)" size="normal" :block="true" @click="registerBtn" :loading="isLoading" loading-type="spinner">注  册</van-button>
			<div class="placeholderLine10"></div>
			<van-button color="inherit" size="normal" :block="true" @click="loginBtn">已有账号，去登录</van-button>
			<div class="placeholderLine10"></div>
			<div class="tip4model3">
				Tip：您若已经参与了内排注册，登录密码初始化为所注册的手机号，实名认证审核通过后方可修改登录密码，请团队长们传达到位。
			</div>
		</div>
		<!-- <van-dialog v-model="showTipModel" title="系统提示" :show-confirm-button="false">
			<div class="placeholderLine10"></div>
			<div class="securityCodeBox">
				<van-field v-model="form.securityCode" label="图形验证" center clearable placeholder="请填写图形验证码">
					<van-button slot="button" size="small" type="primary" :loading="getSCLoading">{{securityCode}}</van-button>
				</van-field>
			</div>
			<div class="placeholderLine10"></div>
			<div class="placeholderLine10"></div>
			<van-button type="primary" size="normal" :block="true" @click="verifySecurityCodeBtn">确认</van-button>
		</van-dialog> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				getSCLoading:false,
				interval:180,
				time:180,
				welcomeText:"",
				isNo:false,
				securityCode:'love',
				form:{
					phone:'',
					password:'',
					password2:'',
					validateCode:'',
					securityCode:'',
					shareCode:''
				},
				placeholder:{
					phone:'请填写11位登录手机号',
					password:'请填写6~16位登录密码',
					password2:'请填写与上面一致的登录密码',
					validateCode:'请输入短信验证码',
					securityCode:'请输入右边的图形验证码',
					shareCode:'请填写推荐码'
				},
				errorHint:{
					phone:'',
					password:'',
					password2:'',
					validateCode:'',
					shareCode:'',
					securityCode:''
				},
				registerValidate:true,
				isLoading:false,
				showTipModel:false,
				isShortMessageDisabled:false
			}
		},
		/* watch:{
			'time'(now,old){
				let _this = this;
				console.log(now,old);
			},
		}, */
		created() {
			let _this = this;
			_this.welcomeText = _this.$api.welcomeText;
			_this.form.shareCode = _this.$route.query.id;
			_this.getSecurityCode();
		},
		//倒计时方法
		countDown4Time(){
			let lastGetShortMessageCode = _this.$cookies.get('lastGetShortMessageCode');
			if(!_this.$utils.isNUll(lastGetShortMessageCode)){
				let lastTime = parseInt(_this.$utils.getTime(lastGetShortMessageCode)/1000);
				let nowTime = parseInt(_this.$utils.getTime(new Date())/1000);
				let thisStartTime = nowTime - lastTime;
				if(thisStartTime>0){
					_this.time = (_this.interval - thisStartTime);
					_this.isShortMessageDisabled = true;
					_this.setTimeInterval();
				}else{
					_this.isShortMessageDisabled = false;
				}
			}
		},
		methods:{
			loginBtn(){
				this.$router.push('login');
			},
			shortMessageBtn(){
				let _this = this;
				if(_this.$utils.isNUll(_this.form.phone)){
					_this.$toast('请先填写登录手机号');
				}else{
					_this.showTipModel = true;
					_this.getSecurityCode();
				}
			},
			getSecurityCode(){
				let _this = this;
				_this.getSCLoading = true;
				_this.$ajax.ajax(_this.$api.getSecurityCode, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						// console.log('securityCode4Web',res.data);
						_this.getInitCode = res.data;
						let initCode = _this.$JsEncrypt.decrypt(_this.getInitCode.initCode);
						_this.securityCode = _this.$utils.getSC(initCode);
					}else{
						_this.$toast(res.message);
					}
				},function(res){
					_this.getSCLoading = false;
				})
			},
			setTimeInterval(){
				let _this = this;
				let tv = setInterval(function(){
					_this.time = _this.time - 1;
					if(_this.time<=0){
						clearInterval(tv);
						_this.isShortMessageDisabled = false;
					}
				},1000)
			},
			verifySecurityCodeBtn(){
				let _this = this;
				let params = {
					securityCode: _this.form.securityCode
				}
				if(params.securityCode.length!=4){
					_this.$toast('请正确填写图形验证码');
					return;
				}
				console.log('params',params);
				_this.$ajax.ajax(_this.$api.verifySecurityCode, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						console.log("OK");
						_this.isShortMessageDisabled = true;
						//要缓存上次请求的时间，然后设置time的值，避免刷新后可以立马请求
						_this.time = 180;
						_this.setTimeInterval();
						let now = _this.$utils.getDateTime(new Date());
						_this.$cookies.set('lastGetShortMessageCode',now,60*3);
						console.log('lastGetShortMessageCode',_this.$cookies.get('lastGetShortMessageCode'));
						//这里请求短信验证码
					}else{
						_this.$toast(res.message);
					}
				},function(res){
					_this.showTipModel = false;
				})
			},
			registerBtn(){
				let _this = this;
				console.log('form',this.form);
				/* let phone = localStorage.getItem("mobilePhone");
				if(!_this.$utils.isNUll(phone)){
					if(_this.form.phone != phone){
						// _this.$toast("一机一号，切勿违规操作");
						Dialog.alert({
						  title: '系统提示',
						  message: _this.$api.oneAccount,
						}).then(() => {
						  // on close
						});
						return;
					}
				} */
				let params = {
					telephone:_this.form.phone.replace(/ /g,""),
					password:_this.form.password.replace(/ /g,""),
					confirmPassword:_this.form.password2.replace(/ /g,""),
					securityCode: _this.form.securityCode.toLowerCase().replace(/ /g,""),
					shareCode:_this.form.shareCode
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				if(params.password != params.confirmPassword){
					_this.$toast('2次密码不一致');
					return;
				}
				delete params.confirmPassword;
				params.password = _this.$JsEncrypt.encrypt(_this.form.password);
				// console.log('params',params);
				_this.isLoading = true;
				_this.$ajax.ajax(_this.$api.register, 'POST', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) { // 200
						localStorage.setItem("mobilePhone",_this.form.phone);
						_this.$toast('注册成功');
						_this.$router.push('/login');
					}else{
						_this.$toast(res.message);
					}
				},function(){
					_this.isLoading = false;
				})
			},
			validate(key){
				let _this = this;
				if(key == 'phone') {
					console.log('_this.form.phone',_this.form.phone)
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
				}else if(key == 'password2'){
					if(_this.form.password2 == _this.form.password.replace(/ /g,"")){
						_this.errorHint.password2 = '';
					}else{
						_this.errorHint.password2 = _this.placeholder.password2;
					}
				}else if(key == 'validateCode'){
					if(_this.$reg.validateCode.test(_this.form.validateCode.replace(/ /g,""))){
						_this.errorHint.validateCode = '';
					}else{
						_this.errorHint.validateCode = _this.$reg.validateCodeHint;
					}
				}else if(key == 'shareCode') {
					if(_this.$reg.shareCode.test(_this.form.shareCode)){
						_this.errorHint.shareCode = '';
					}else{
						_this.errorHint.shareCode = _this.$reg.shareCodeHint;
					}
				}else if(key == 'securityCode'){
					if(_this.$reg.securityCode.test(_this.form.securityCode.replace(/ /g,""))){
						_this.errorHint.securityCode = '';
					}else{
						_this.errorHint.securityCode = _this.$reg.securityCodeHint;
					}
				}
			},
		}
	}
</script>