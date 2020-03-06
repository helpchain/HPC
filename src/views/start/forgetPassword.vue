<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.forgetPassword{	
		color: $mainTextColor;
		@include page4Home();
		width: 100%;
		box-sizing: border-box;
		padding: $boxPadding1;
		.page{
			.copy{
				font-size: $fs-12;
				margin-right: 10px;
				background-color: #E5E5E5;
				padding: 1px 2px;
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
		}
	}
</style>

<template>
	<div class="forgetPassword">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				忘记密码
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="page">
			
			<div class="formBox">
				<van-cell-group :border="isNo">
					<div class="labelText">手机号</div>
					<van-field v-model="form.phone" clearable placeholder="请填写11位登录手机号" @blur="validate('phone')" :error-message="errorHint.phone" maxlength="11"/>
					<div class="labelText">验证码</div>
					<van-field v-model="form.securityCode" center clearable @blur="validate('securityCode')" :error-message="errorHint.securityCode" placeholder="请填写右边的图形验证码">
						<van-button slot="button" size="small" type="primary" :loading="getSCLoading" @click="getSecurityCode4forget">{{securityCode}}</van-button>
					</van-field>
				</van-cell-group>
				<div class="sureBox">
					<van-button color="linear-gradient(to right, #ffae00 , #ffae00)" size="normal" :block="true" :loading="isLoading" loading-type="spinner" @click="submitValidBtn">提交验证</van-button>
					<div class="placeholderLine10"></div>
					
				</div>
			</div>
			<div class="addWX" v-if="isShowWechat">
				<div class="tip4model3">
					忘记密码请通过登录手机号所绑定的微信加客服微信并备注：
				</div>
				<div class="placeholderLine4"></div>
				<div class="tip4model3">
					<b class="textBold">【{{remark}}】</b><span class="copy margL10" @click="handleCopy(remark,$event)">复制此备注</span>
				</div>
				<div class="placeholderLine4"></div>
				<div class="tip4model3">
					Tip：由于客服好友数量可能已经满人，加客服微信不一定能通过，但TA会通过您加TA的时候所备注的手机号来查找您的微信，可以查找到且是同一个矿工的微信号，即可将您的登录密码和安全密码初始化为所注册的手机号。
				</div>
				<div class="placeholderLine10"></div>
				<!-- <div><b class="textBold">客服微信号：tiger6878</b><span class="copy margL10" @click="handleCopy('tiger6878',$event)">复制</span></div> -->
				<!-- <div class="logoBox">
					<img src="../../assets/image/zjwx.png" alt="">
				</div> -->
				<div class="placeholderLine10"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import clip from '@/assets/js/clipboard';
	import { Dialog } from 'vant';
	export default {
		data() {
			return {
				isNo:false,
				remark:'忘记密码+登录手机号',
				securityCode:'love',
				form:{
					phone:'',
					securityCode:'',
				},
				errorHint:{
					phone:'',
					securityCode:''
				},
				isLoading:false,
				getSCLoading:false,
				isShowWechat:false
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
		},
		methods:{
			back(){
				this.$router.push('login');
			},
			handleCopy(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
			submitValidBtn(){
				let _this = this;
				if(_this.$utils.isNUll(_this.form.phone)){
					_this.$toast('请先填写登录手机号');
					return;
				}
				let params = {
					securityCode: _this.form.securityCode.replace(/ /g,"")
				}
				if(_this.$utils.isNUll(_this.form.securityCode.replace(/ /g,""))){
					_this.$toast('请先填写验证码');
					return;
				}
				console.log(params,'params');
				_this.isLoading = true;
				_this.$ajax.ajax(_this.$api.verifySecurityCode, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						_this.isShowWechat = true;
						_this.remark = `忘记密码+${_this.form.phone}`;
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
					if(_this.$reg.phone.test(_this.form.phone)){
						_this.errorHint.phone = '';
					_this.getSecurityCode4forget();
					}else{
						_this.errorHint.phone = _this.$reg.phoneHint;
					}
				}else if(key == 'securityCode'){
					if(_this.$reg.securityCode.test(_this.form.securityCode.replace(/ /g,""))){
						_this.errorHint.securityCode = '';
					}else{
						_this.errorHint.securityCode = _this.$reg.securityCodeHint;
					}
				}
			},
			getSecurityCode4forget(){
				let _this = this;
				let params = {
					mobilePhone: _this.form.phone
				}
				if(_this.$utils.isNUll(_this.form.phone)){
					_this.$toast('请先填写登录手机号');
					return;
				}
				console.log(params,'params');
				_this.getSCLoading = true;
				_this.$ajax.ajax(_this.$api.getSecurityCodeByPhone, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						console.log('securityCode4Web',res.data);
						let initCode = _this.$JsEncrypt.decrypt(res.data.initCode);
						_this.securityCode = _this.$utils.getSC(initCode);
					}else{
						Dialog.alert({
						  title: '系统提示',
						  message: res.message,
						}).then(() => {
						  // on close
						  _this.back();
						});
					}
				},function(){
					_this.getSCLoading = false;
				})
			},
		}
	}
</script>