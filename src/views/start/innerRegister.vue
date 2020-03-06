<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	.innerRegister{
		padding: $boxPadding1;
		color: $mainTextColor;
		background-color: $main-bg-color;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow-y: scroll;
		/* .van-cell__value,.van-cell__value--alone,.van-field__control{
			color: $mainTextColor !important;
		}
		.van-field__error-message{
			color: $main-adorn-color !important;
		}
		.van-cell-group,.van-cell{
			background-color: inherit !important;
		} */
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
		.sureBox{
			margin-top: 1.25rem;
			.tip{
				margin: 1.25rem 0;
				font-size: 0.812rem
			}
			.agreement{color: $main-adorn-color;}
		}
	}
</style>

<template>
	<div class="innerRegister">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				内排注册
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<van-cell-group :border="isNo">
			<div class="labelText">手机号</div>
			<van-field v-model="form.phone" clearable :placeholder="placeholder.phone" @blur="validate('phone')" :error-message="errorHint.phone" maxlength="11"/>
			<!-- <div class="labelText">登录密码</div>
			<van-field v-model="form.password" type="password" clearable :placeholder="placeholder.password" @blur="validate('password')" :error-message="errorHint.password" />
			<div class="labelText">确认密码</div>
			<van-field v-model="form.password2" type="password" clearable :placeholder="placeholder.password2" @blur="validate('password2')" :error-message="errorHint.password2"/> -->
			<!-- <div class="labelText">短信验证码</div>
			<van-field v-model="form.validateCode" clearable :placeholder="placeholder.validateCode" @blur="validate('validateCode')" :error-message="errorHint.validateCode">
				<van-button slot="button" size="small" color="#ffae00">发送验证码</van-button>
			</van-field> -->
			<div class="labelText">推荐码</div>
			<van-field v-model="form.shareCode" clearable :placeholder="placeholder.shareCode" @blur="validate('shareCode')" :error-message="errorHint.shareCode" />
		</van-cell-group>
		<div class="sureBox">
			<!-- <div class="tip">点击注册即表示您同意<span class="agreement">《服务协议》</span></div> -->
			<van-button color="linear-gradient(to right, #ffae00 , #ffae00)" size="normal" :block="true" @click="registerBtn" :loading="isLoading" loading-type="spinner">注  册</van-button>
			<div class="placeholderLine"></div>
			<div class="placeholderLine"></div>
			<div class="placeholderLine"></div>
			<!-- <van-button color="inherit" size="normal" :block="true" @click="loginBtn">已有账号，去登录</van-button> -->
			<div class="tip4model3">
				Tip：<br>
				1.内排注册功能专为预打造团队的用户开放。<br>
				2.登录密码初始化为该注册手机号，未实名认证无修改密码权限，实名认证审核通过方可修改密码，请团队长们提醒到位。<br>
				3.为了提高内排注册的质量，内排注册功能暂时只为个人算力达到9G的工会会长或省市代理开放。<br>
			</div>
		</div>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog } from 'vant';
	export default {
		data() {
			return {
				isNo:false,
				form:{
					phone:'',
					password:'',
					password2:'',
					validateCode:'',
					shareCode:''
				},
				placeholder:{
					phone:'请填写直推手机号',
					password:'请填写6~16位登录密码',
					password2:'请填写与上面一致的登录密码',
					validateCode:'请输入短信验证码',
					shareCode:'请填写推荐码'
				},
				errorHint:{
					phone:'',
					password:'',
					password2:'',
					validateCode:'',
					shareCode:''
				},
				registerValidate:true,
				isLoading:false,
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
				console.log('userInfo',_this.userInfo);
				_this.form.shareCode = _this.userInfo.shareCode;
				console.log('_this.form.shareCode',_this.form.shareCode);
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			// _this.initializeerrorHint();
			// _this.initializeTabActiveName();
		},
		methods:{
			back() {
				this.$router.replace('my');
			},
			loginBtn(){
				this.$router.push('login');
			},
			registerBtn2(){
				Dialog.alert({
					title: "系统提示",
					confirmButtonText:'知道了',
					message: "21号内排功能已暂停，请等22号的开放通知"
				}).then(() => {
				  // on confirm
				})
			},
			registerBtn(){
				let _this = this;
				Dialog.alert({
					title: "系统提示",
					confirmButtonText:'好的',
					message: "内排注册功能暂时关闭，如需开通，请联系客服"
				}).then(() => {
				  // on confirm
				})
				/* if(_this.userInfo.myCalculationPower<9 && _this.userInfo.isAgent<=0){
					Dialog.alert({
						title: "系统提示",
						confirmButtonText:'知道了',
						message: "内排注册功能暂时只为个人算力达到9G的工会会长或省市代理开放"
					}).then(() => {
					  // on confirm
					})
					return;
				}
				let params = {
					telephone:_this.form.phone,
					shareCode:_this.form.shareCode
				}
				if(_this.$utils.hasNull(params)){
					_this.$toast('系统提示：请填写完整信息');
					return;
				}
				_this.isLoading = true;
				_this.$ajax.ajax(_this.$api.innerRegister, 'POST', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) { // 200
						_this.$toast('系统提示：注册成功');
						_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
					}else{
						Dialog.alert({
							title: "系统提示",
							confirmButtonText:'哦哦',
							message: res.message
						}).then(() => {
						})
					}
				},function(res){
					_this.isLoading = false;
				}) */
			},
			validate(key){
				let _this = this;
				if(key == 'phone') {
					console.log('_this.form.phone',_this.form.phone)
					if(_this.$reg.phone.test(_this.form.phone)){
						_this.errorHint.phone = '';
					}else{
						_this.errorHint.phone = _this.$reg.phoneHint;
						_this.registerValidate = false;
					}
				}else if(key == 'password'){
					if(_this.$reg.password.test(_this.form.password)){
						_this.errorHint.password = '';
					}else{
						_this.errorHint.password = _this.$reg.passwordHint;
						_this.registerValidate = false;
					}
				}else if(key == 'password2'){
					if(_this.form.password2 == _this.form.password){
						_this.errorHint.password2 = '';
					}else{
						_this.errorHint.password2 = _this.placeholder.password2;
						_this.registerValidate = false;
					}
				}else if(key == 'validateCode'){
					if(_this.$reg.validateCode.test(_this.form.validateCode)){
						_this.errorHint.validateCode = '';
					}else{
						_this.errorHint.validateCode = _this.$reg.validateCodeHint;
						_this.registerValidate = false;
					}
				}else if(key == 'shareCode') {
					if(_this.$reg.shareCode.test(_this.form.shareCode)){
						_this.errorHint.shareCode = '';
					}else{
						_this.errorHint.shareCode = _this.$reg.shareCodeHint;
						_this.registerValidate = false;
					}
				}
			},
		}
	}
</script>