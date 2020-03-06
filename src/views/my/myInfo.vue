<style lang="scss">
// @import '@/assets/scss/variable.scss';
@import '~@/assets/scss/index.scss';
[class*=van-hairline]::after {
    border: 1px solid transparent !important;
}
.modelTip{
	font-size: 0.75rem;
	padding: 0 12px;
	color: $grayDarker;
}
.van-cell__value, .van-cell__value--alone, .van-field__control{
	color: #323232 !important;
}
.myInfo{
	@include pageHaveHeight4Scroll();
	[class*=van-hairline]::after {
	    border: 1px solid transparent !important;
	}
	.updateInfo,.realName{
		.van-cell__value, .van-cell__value--alone, .van-field__control{
			color: #323232 !important;
		}
		.van-field__control{
			font-size: 12px !important;
		}
	}
	.fixedBottom{
		@include fixedBottom();
	}
	.notRealName{
		color: $mainTextColor;
		position: absolute;
		top:0;
		bottom: 0;
		width: 100%;
		align-content: center;
		align-items: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
		.flexRealName{
			
		}
	}
	.items{
		margin-top: $marginTop2;
		background-color:$main-box-color;
		padding-left:$boxPadding2;
		padding-right:$boxPadding2;
		margin-bottom: $footerHeight;
		.my-cell{
			height: 2.875rem;
			line-height: 2.875rem;
			color: $mainTextColor;
			font-size: 0.75rem;
			border-bottom: 1px solid $mainBorderColor;
			display:flex;
			align-content: center;
			align-items: center;
			flex-direction: row;
			justify-content: center;
			.flex1{
				flex:0 0 5rem;
				color: $mainTextColor;
				font-size: 0.875rem;
			}
			.flex2{
				flex:1;
				text-align:right;
				position: relative;
				.iconfont-right-arrow2{
					font-size: 0.75rem;
					height: 1rem;
					line-height: 1rem;
					color: $grayLight2;
				}
				span{
					font-size: 0.875rem;
				}
				.blockAddress{
					/* width:150px;
					white-space:nowrap;
					text-overflow:ellipsis;
					overflow:hidden; */
				}
				.copy{
					font-size: $fs-12;
					margin-right: 10px;
				}
			}
			.address{
				span{font-size: 0.687rem;width: 180px !important;display: block;}
				.iconfont{height: 2.875rem;line-height: 2.875rem;}
			}
		}
	}
	.update1{
		.van-cell__value, .van-cell__value--alone, .van-field__control{
			color: #323232 !important;
		}
	}
	.update2{
		.van-cell__value, .van-cell__value--alone, .van-field__control{
			color: #323232 !important;
		}
	}
}
</style>
<template>
  <div class="myInfo">
	<m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">{{$route.name}}</div>
		<i class="iconfont iconfont-question rightBox icon" @click="showTip"></i>
	</m-header>
	<div class="notRealName" v-if="userInfo.actived!=1">
		<div class="flexRealName paddingWing lineHeight textCenter">{{getActiveStatus(userInfo.actived)}}</div>
		<div class="flexRealName margT20" v-if="userInfo.actived==-1">
			<van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" to="realName">去实名</van-button>
		</div>
		<div class="flexRealName margT20" v-if="userInfo.actived==2">
			<van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" to="realName">去修改</van-button>
		</div>
	</div>
	<div class="items" v-if="userInfo.actived==1">
		<div class="my-cell" v-if="userInfo.isAgent">
			<div class="flex1">
				代理
			</div>
			<div class="flex2">
				<span class="ellipsis">{{userInfo.isAgent | agentType}}</span>
				<!-- <i class="iconfont iconfont-right-arrow2"></i> -->
			</div>
		</div>
		<div class="my-cell">
			<div class="flex1">
				级别
			</div>
			<div class="flex2">
				<span class="ellipsis">{{userInfo.level | getUserType}}</span>
				<!-- <i class="iconfont iconfont-right-arrow2"></i> -->
			</div>
		</div>
		<div class="my-cell" @click="update('nickName')">
			<div class="flex1">
				昵称
			</div>
			<div class="flex2">
				<span class="ellipsis">{{userInfo.nickName}}</span>
				<i class="iconfont iconfont-right-arrow2"></i>
			</div>
		</div>
		<div class="my-cell">
			<div class="flex1">
				真实姓名
			</div>
			<div class="flex2">
				<span class="ellipsis">{{userInfo.realName}}</span>
				<!-- <i class="iconfont iconfont-right-arrow2"></i> -->
			</div>
		</div>
		<div class="my-cell">
			<div class="flex1">
				手机号
			</div>
			<div class="flex2">
				<span class="ellipsis">{{userInfo.mobilePhone}}</span>
				<!-- <i class="iconfont iconfont-right-arrow2"></i> -->
			</div>
		</div>
		<div class="my-cell" @click="update('wechartNum')">
			<div class="flex1">
				微信号
			</div>
			<div class="flex2">
				<span class="ellipsis">{{userInfo.wechartNum}}</span>
				<i class="iconfont iconfont-right-arrow2"></i>
			</div>
		</div>
		 <!-- @click="update('alipayNum')" -->
		<div class="my-cell" @click="update('alipayNum')">
			<div class="flex1">
				支付宝号
			</div>
			<div class="flex2">
				<span class="ellipsis">{{userInfo.alipayNum}}</span>
				<i class="iconfont iconfont-right-arrow2"></i>
			</div>
		</div>
		<div class="my-cell">
			<div class="flex1">
				区块地址
			</div>
			<div class="flex2">
				<div class="value">
					<div class="f-12 blockAddress right" @click="handleCopy(userInfo.blockAddress,$event)">{{userInfo.blockAddress}}</div>
					<span class="copy right" @click="handleCopy(userInfo.blockAddress,$event)">复制</span>
				</div>
			</div>
		</div>
		<!-- <div class="my-cell" @click="update('weichat')">
			<div class="flex1">
				身份证号
			</div>
			<div class="flex2">
				<span class="ellipsis">guitar-lqt</span>
				<i class="iconfont iconfont-right-arrow2"></i>
			</div>
		</div> -->
		<!-- <div class="my-cell">
			<div class="flex1">
				收货地址
			</div>
			<div class="flex2 address">
				<i class="iconfont iconfont-right-arrow2 right"></i>
				<span class="ellipsis right">浙江省温州市苍南县龙港镇临头存123号浙江省温州市苍南县龙港镇临头存</span>
			</div>
		</div> -->
		<div class="my-cell" @click="updatePassword('loginPassword')">
			<div class="flex1">
				登录密码
			</div>
			<div class="flex2">
				<span class="ellipsis">修改登录密码</span>
				<i class="iconfont iconfont-right-arrow2"></i>
			</div>
		</div>
		<div class="my-cell" @click="updatePassword('securityPassword')">
			<div class="flex1">
				安全密码
			</div>
			<div class="flex2">
				<span class="ellipsis">修改安全密码</span>
				<i class="iconfont iconfont-right-arrow2"></i>
			</div>
		</div>
	</div>
	<!-- <van-button type="info" size="normal" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true" @click="logout">安 全 退 出</van-button> -->
	<div class="fixedBottom paddingWing">
		<van-button type="info" size="normal" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true" @click="logout">安全退出</van-button>
		<div class="placeholderLine10"></div>
		<!-- <van-button color="linear-gradient(to right, #73798a , #626876)" size="normal" :block="true" @click="cancelAccount" loading-type="spinner">注销账户</van-button>
		<div class="placeholderLine10"></div> -->
	</div>
	<van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="知道了">
		<div class="paddingWing f-12 lineHeight textJustify tip4model2 textIndent">
			<div>
				1.实名资料是用户之间交换矿石时的凭据信息，提交实名后需待客服审核，每个账号只有3次实名的机会，请认真填写
			</div>
			<div class="placeholderLine4"></div>
		</div>
	</van-dialog>
	
	<!-- 修改资料 -->
	<div class="updateInfo">
		<van-action-sheet v-model="showUpdateModel" :title="titleName">
			<div class="placeholderLine40"></div>
		  <van-cell-group>
		    <van-field v-model="form['idCard']" required clearable label="身份证号" right-icon="question-o" :placeholder="errorHint['idCard']" type="text"
		      maxlength="18" @click-right-icon="$toast(errorHint['idCard'])" @blur="validate('idCard')" :error-message="errorInfo['idCard']"/>
			  
			<van-field v-model="form[flag]" required clearable :label="label" right-icon="question-o" :placeholder="errorHint[flag]"
		      @click-right-icon="$toast(errorHint[flag])" @blur="validate(flag)" :error-message="errorInfo[flag]"/>
			  
			  <van-field v-model="form['safePassword']" required clearable label="安全密码" right-icon="question-o" placeholder="请填写安全密码"
			  	maxlength="20" type="password" @click-right-icon="$toast(errorHint['safePassword'])" @blur="validate('safePassword')" :error-message="errorInfo['safePassword']"/>
		  </van-cell-group>
		  <div class="placeholderLine10"></div>
		  <div class="placeholderLine40"></div>
		  <div class="modelTip">系统提示：修改信息需使用10个帮扶券</div>
		  <div class="sureAppointBtnBox">
			  <van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="update1Loading" @click="sureUpdate('update1')">确 认</van-button>
		  </div>
		</van-action-sheet>
	</div>
	<!-- 修改密码 -->
	<van-action-sheet v-model="showUpdatePasswordModel" :title="titleName">
		<div class="placeholderLine40"></div>
		<div class="update2">
		  <van-cell-group>
			<!-- <van-field center clearable label="短信验证码" placeholder="请输入短信验证码">
				<van-button slot="button" size="small" type="primary">发送验证码</van-button>
			</van-field> -->
			<van-field v-model="form['idCard']" required clearable label="身份证号" right-icon="question-o" :placeholder="errorHint['idCard']" type="text"
			  maxlength="18" @click-right-icon="$toast(errorHint['idCard'])"
			  @blur="validate('idCard')"
			  :error-message="errorInfo['idCard']"/>
			<van-field v-model="form['originalPassowrd']" required clearable label="原始密码" right-icon="question-o" :placeholder="errorHint['originalPassowrd']"
				maxlength="20" type="password"
			  @click-right-icon="$toast(errorHint['originalPassowrd'])"
			  @blur="validate('originalPassowrd')"
			  :error-message="errorInfo['sureNewPassword']"/>
			<van-field v-model="form[flag]" required clearable :label="label" right-icon="question-o" :placeholder="errorHint[flag]" type="password"
			  maxlength="20" @click-right-icon="$toast(errorHint[flag])"
			  @blur="validate(flag)"
			  :error-message="errorInfo[flag]"/>
			<van-field v-model="form['sureNewPassword']" required clearable label="确认新密码" right-icon="question-o" :placeholder="errorHint['sureNewPassword']" 
				maxlength="20" type="password"
			  @click-right-icon="$toast(errorHint['sureNewPassword'])"
			  @blur="validate('sureNewPassword')"
			  :error-message="errorInfo['sureNewPassword']"/>
		  </van-cell-group>
	  </div>
	  <div class="placeholderLine40"></div>
	  <div class="sureAppointBtnBox">
		  <van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="update2Loading" @click="sureUpdate('update2')">确 认</van-button>
	  </div>
	</van-action-sheet>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { getTestUser,ERR_OK } from "@/api/index";
import clip from '@/assets/js/clipboard';
import mHeader from '@/components/Header.vue';
import { Dialog } from 'vant';
export default {
	data() {
		return {
			update1Loading:false,
			update2Loading:false,
			showTipModel:false,
			result:"",
			loading:true,
			showUpdateModel:false,
			showUpdatePasswordModel:false,
			showRealNameModel:false,
			titleName:'',
			label:'---',
			userInfo:"",
			form:{
				nickName:"",
				telPhone:"",
				realName:"",
				alipayNum:"",
				wechartNum:"",
				address:"",
				originalPassowrd:"",
				loginPassword:"",
				securityPassword:"",
				sureNewPassword:"",
				verificationCode:"",
				bankCard:"",
				idCard:""
			},
			errorHint:{
				nickName:"",
				telPhone:"",
				realName:"",
				alipayNum:"",
				wechartNum:"",
				address:"",
				originalPassowrd:"",
				loginPassword:"",
				securityPassword:"",
				sureNewPassword:"",
				verificationCode:"",
				bankCard:"",
				idCard:""
			},
			errorInfo:{
				nickName:"",
				telPhone:"",
				realName:"",
				alipayNum:"",
				wechartNum:"",
				address:"",
				originalPassowrd:"",
				loginPassword:"",
				securityPassword:"",
				sureNewPassword:"",
				verificationCode:"",
				bankCard:"",
				idCard:""
			},
			updateValidate:true,
			flag:'',
			isRealName:true,
			userId:'',
			mobilePhone:'',
		}
	},  
	components:{
	    mHeader
	},
	/* watch:{
		$route(now,old){
			let _this = this;
			// console.log(_this.$cookies.get('isRefreshUserInfo'),'isRefreshUserInfo')
			if(_this.$cookies.get('isRefreshUserInfo')==1){
				_this.getUserInfo();
			}
		},
	}, */
	created(){
		let _this = this;
		
		let userInfo = localStorage.getItem("_USERINFO_");
		if(userInfo){
			_this.userInfo = JSON.parse(userInfo);
			console.log(_this.userInfo,'_this.userInfo')
			_this.userId = _this.userInfo.userId;
			_this.mobilePhone = _this.userInfo.mobilePhone;
		}else{
			/* localStorage.removeItem('_USERINFO_');
			_this.$cookies.remove('userId');
			_this.$cookies.remove('token'); */
			_this.$router.replace('login');
			return;
		}
		_this.getUserInfo();
		_this.initializeHintInfo();
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
		cancelAccount(){
			let _this = this;
			Dialog.confirm({
			  title: '注销确认',
			  message: '你确定要注销[删除]这个账号？'
			}).then(() => {
			  // on confirm
			  _this.$ajax.ajax(_this.$api.cancelAccount, 'GET', null, function(res){
			  	if(res.code == _this.$api.CODE_OK){
			  		_this.$toast("注销成功");
			  		_this.$router.replace('login');
			  	}else if(res.code == 1001){
			  		Dialog.alert({
			  		  title: '系统提示',
			  		  confirmButtonText:'好的',
			  		  message: res.message
			  		}).then(() => {
			  		  // on confirm
			  		})
			  	}
			  })
			}).catch(() => {
			  // on cancel
			});
		},
		getActiveStatus(val){
			let _this = this;
			if(val==-1){
				return "您尚未实名认证";
			}else if(val==0){
				return _this.$api.checkTip;
			}else if(val==2){
				console.log('_this.userInfo.remark',_this.userInfo.remark);
				return "审核结果：" + _this.userInfo.remark;
			}
		},
		handleCopy(text, event) {
			let _this = this;
			clip(text,event,function(res){
				_this.$toast(`复制区块地址成功`);
			});
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
				_this.$router.replace('login');
			})
		},
		showTip(){
			this.showTipModel = true;
		},
		toRealName(){
			let _this = this;
			_this.showRealNameModel = true;
		},
		getUserInfo(){
			let _this = this;
			_this.loading = true;
			_this.$ajax.ajax(_this.$api.getAssistUserInfo, 'GET', null, function(res){
				console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					_this.userInfo = res.data;
					// _this.$cookies.set("_USERINFO_", _this.userInfo, 60 * 60 * 12);
					localStorage.setItem("_USERINFO_",JSON.stringify(res.data))
					_this.userId = _this.userInfo.userId;
					if(_this.userInfo.actived==1){
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
			
			_this.errorHint = {
				nickName:"请填写1~7位昵称",
				// telPhone:"请填写与微信绑定的手机号",
				realName:"请填写2~20位真实姓名",
				alipayNum:"请填写绑定了支付宝的登录手机号",
				wechartNum:"请填写绑定了微信的登录手机号",
				address:"",
				originalPassowrd:"请填写原来的密码",
				loginPassword:"请填写新登录密码",
				securityPassword:"请填写新安全密码",
				sureNewPassword:"请确认新密码",
				verificationCode:"请填写验证码",
				bankCard:"请填写银行卡号",
				idCard:"请填写实名时所留的身份证号"
			}
		},
		// 更新信息
		update(flag){
			let _this = this;
			console.log('flag',flag);
			this.showUpdateModel = true;
			_this.flag = flag;
			_this.form = _this.$utils.formClear(_this.form);
			console.log('_this.form',_this.form);
			if(flag == 'nickName'){
				_this.label = '昵称';
				_this.titleName = '修改昵称';
				_this.form.nickName = _this.userInfo.nickName;
			}else if(flag == 'telPhone'){
				_this.label = '手机号';
				_this.titleName = '修改手机号';
			}else if(flag == 'realName'){
				_this.label = '真实姓名';
				_this.titleName = '修改真实姓名';
				_this.form.realName = _this.userInfo.realName;
			}else if(flag == 'alipayNum'){
				_this.label = '支付宝';
				_this.titleName = '修改支付宝';
				_this.form.alipayNum = _this.userInfo.alipayNum;
			}else if(flag == 'wechartNum'){
				_this.label = '微信号';
				_this.titleName = '修改微信号';
				_this.form.wechartNum = _this.userInfo.wechartNum;
			}else if(flag == 'bankCard'){
				_this.label = '银行卡';
				_this.titleName = '修改银行卡号';
			}else if(flag == 'securityPassword'){
				_this.label = '安全密码';
				_this.titleName = '修改安全密码';
			}
		},
		// 更新密码
		updatePassword(flag){
			let _this = this;
			console.log('flag',flag);
			this.showUpdatePasswordModel = true;
			_this.flag = flag;
			_this.form = _this.$utils.formClear(_this.form);
			if(flag == 'loginPassword'){
				_this.label = '登录密码';
				_this.titleName = '修改登录密码';
			}else if(flag == 'securityPassword'){
				_this.label = '安全密码';
				_this.titleName = '修改安全密码';
			}
		},
		sureUpdate(type){
			let _this = this;
			// console.log('_this.form[_this.flag]',_this.form[_this.flag]);
			if(type=='update1'){
				// console.log('_this.form', _this.form);
				let params = {
					idCard:_this.form.idCard,
					securityPassword:_this.form.safePassword,
				}
				params[_this.flag] = _this.form[_this.flag];
				console.log('params', params);
				if(_this.$utils.hasNull(params)){	
					_this.$toast('系统提示：请填写完整信息');
					return;
				}
				if(_this.$utils.hasVal(_this.errorInfo)){
					_this.$toast('请按要求填写信息');
					return;
				}
				if(_this.userInfo.platformTicket<10){
					_this.$toast('系统提示：您的帮扶券不足，修改信息要使用10张帮扶券');
					return;
				}
				params.securityPassword = _this.$JsEncrypt.encrypt(_this.form.safePassword);
				console.log('params',params);
				_this.update1Loading = true;//updateAssistNickName
				_this.$ajax.ajax(_this.$api.updateAssistUsrInfo, 'POST', params, function(res){
					// console.log('res',res);
					if(res.code == _this.$api.CODE_OK){
						_this.$toast('系统提示：修改成功');
						_this.showUpdateModel = false;
						_this.getUserInfo();
					}else{
						Dialog.alert({
						  title: '系统提示',
						  message: res.message,
						}).then(() => {
						  // on close
						  
						});
					}
				},function(){
					_this.update1Loading = false;
				})
			}else if(type=='update2'){
				if(_this.form[_this.flag]==_this.form['sureNewPassword']){
					let params = {
						idCard:_this.form.idCard,
						originalPassowrd:_this.form.originalPassowrd,
					}
					if(_this.form.loginPassword){
						params.type = 0;
						params.password = _this.$JsEncrypt.encrypt(_this.form.loginPassword);
					}
					if(_this.form.securityPassword){
						params.type = 1;
						params.password = _this.$JsEncrypt.encrypt(_this.form.securityPassword);
					}
					if(_this.$utils.hasNull(params)){
						_this.$toast('系统提示：请填写完整信息');
						return;
					}
					params.originalPassowrd = _this.$JsEncrypt.encrypt(_this.form.originalPassowrd);
					// console.log('params', params);
					_this.update2Loading = true;
					_this.$ajax.ajax(_this.$api.updatePassword, 'POST', params, function(res){
						if(res.code == _this.$api.CODE_OK){
							_this.showUpdatePasswordModel = false;
							_this.$toast('系统提示：修改成功');
						}else{
							Dialog.alert({
							  title: '系统提示',
							  message: res.message,
							}).then(() => {
							  // on close
							  
							});
						}
					},function(){
						_this.update2Loading = false;
					})
				}else{
					_this.$toast(`系统提示：2次密码不一致`);
				}
			}
		},
		validate(key){
			let _this = this;
			if(key == 'nickName') {
				if((_this.form.nickName.length)<=7&&(_this.form.nickName.length)>0){
					_this.errorInfo.nickName = '';
				}else{
					_this.errorInfo.nickName = _this.errorHint.nickName;
				}
			}else if(key == 'telPhone'){
				if(_this.$reg.phone.test(_this.form.telPhone)){
					_this.errorInfo.telPhone = ''
				}else{
					_this.errorInfo.telPhone = _this.errorHint.telPhone;
				}
			}else if(key == 'realName'){
				if((_this.form.realName.length)<=20&&(_this.form.realName.length)>1){
					_this.errorInfo.realName = '';
				}else{
					_this.errorInfo.realName = _this.errorHint.realName;
				}
			}else if(key == 'alipayNum') {
				if(_this.$reg.alipay.test(_this.form.alipayNum)){
					_this.errorInfo.alipayNum = '';
				}else{
					_this.errorInfo.alipayNum = _this.$reg.alipayHint;
				}
				/* if(_this.form.alipayNum==_this.mobilePhone){
					_this.errorInfo.alipayNum = '';
				}else{
					_this.errorInfo.alipayNum = _this.errorHint.alipayNum;
				} */
				/* if(_this.form.alipayNum.indexOf('@')==-1){
					
				}else{
					
				} */
			}else if(key == 'wechartNum') {
				if(_this.$reg.weichat.test(_this.form.wechartNum)){
					_this.errorInfo.wechartNum = '';
				}else{
					_this.errorInfo.wechartNum = _this.errorHint.wechartNum;
				}
			}else if(key == 'originalPassowrd') {
				if(_this.$reg.password.test(_this.form.originalPassowrd)){
					_this.errorInfo.originalPassowrd = '';
				}else{
					_this.errorInfo.originalPassowrd = _this.$reg.passwordHint;
				}
			}else if(key == 'loginPassword') {
				if(_this.$reg.password.test(_this.form.loginPassword)){
					_this.errorInfo.loginPassword = '';
				}else{
					_this.errorInfo.loginPassword = _this.$reg.passwordHint;
				}
			}else if(key == 'securityPassword') {
				if(_this.$reg.safePassword.test(_this.form.securityPassword)){
					_this.errorInfo.securityPassword = '';
				}else{
					_this.errorInfo.securityPassword = _this.$reg.securityPasswordHint;
				}
			}else if(key == 'bankCard') {
				if(_this.$reg.bankCard.test(_this.form.bankCard)){
					_this.errorInfo.bankCard = '';
				}else{
					_this.errorInfo.bankCard = _this.$reg.bankCardHint;
				}
			}else if(key == 'idCard') {
				if(_this.$reg.idCard.test(_this.form.idCard)){
					_this.errorInfo.idCard = '';
				}else{
					_this.errorInfo.idCard = _this.$reg.idCardHint;
				}
			}
		},
		refreshEvent(){
			console.log("refresh")
			let _this = this;
			_this.getUserInfo();
		},
	}
}
</script>
