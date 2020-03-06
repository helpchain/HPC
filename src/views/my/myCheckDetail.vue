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
.checkDetailBox{
	@include pageWhiteBGHaveHeight();
	.refuseReason{
		.van-cell__value, .van-cell__value--alone, .van-field__control{
			color: #323232 !important;
		}
	}
	.realName{
		overflow-y: scroll;
		.van-cell__value, .van-cell__value--alone, .van-field__control{
			color: #323232 !important;
		}
		.van-field__control{
			font-size: 12px !important;
		}
		
		.idcard{
			.van-cell{
				padding:0 16px !important;
			}
			.van-field__control{
				font-size: 14px !important;
				letter-spacing: 1px;
				padding-left: 10px;
			}
		}
		.line{
			display: flex;
			flex-direction: row;
			align-content: center;
			align-items: center;
			.label{
				flex: 0 0 120px;
			}
			.value{
				flex: 1;
				text-align: right;
				position: relative;
				.iconfont-upload-pic{
					font-size: 50px;
					color: $main-adorn-color;
				}
				.selectPicInput{
					position: absolute;
					right: 0;
					top: 0;
					width: 50px;
					height: 50px;
				}
			}
			.selectedImg{
				width: 100%;
			}
		}
	}
	.items2{
		margin-top: $marginTop2;
		padding-left:$boxPadding2;
		padding-right:$boxPadding2;
		.my-cell{
			font-size: 0.75rem;
			display:flex;
			align-content: center;
			align-items: center;
			flex-direction: row;
			justify-content: center;
			.flex1{
				flex:0 0 5rem;
				font-size: 0.875rem;
			}
			.flex2{
				flex:1;
				text-align:right;
				position: relative;
				input{
					font-size: 14px;
					letter-spacing: 1px;
					padding-right: 40px;
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
  <div class="checkDetailBox">
	<m-header>
		<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
		<div class="text">实名审核</div>
		<i class="rightBox icon"></i>
	</m-header>
	<!-- 实名认证 -->
	<div class="realName">
		<div class="f-12 lineHeight textJustify tip4model">
			<div class="textIndent">
				<b>审核指标：</b>请客服和团队长们一定要审核对方的支付宝账号的真实姓名，只要用户的真实姓名和支付宝中的姓名还有证件照中的姓名对得上，且身份证号也对得上即可通过；否则就驳回。
			</div>
			<div class="textIndent">
				<b>审核嘱咐：</b>帮扶链这个平台不是张三的，也不是李四的，而是大家的，期望各位领导人认真审核，共同维护好平台。
			</div>
			<div class="textIndent">
				<b>审核津贴：</b>审核通过奖励审核人0.1张帮扶券；审核驳回奖励审核人0.2张帮扶券。
			</div>
			<div class="textIndent">
				注：若会员提交批图后的照片，包括小纸条，审核的时候一律冻结账号处理。
			</div> 
		</div>
		<van-field v-model="form.nickName" required clearable label="昵称" disabled="true" :placeholder="errorHint.nickName" maxlength="20" @blur="validate('nickName')" :error-message="errorInfo.nickName"/>
		<van-field v-model="form.realName" required clearable label="真实姓名" disabled="true" placeholder="请填写真实姓名" maxlength="20"
		  @blur="validate('realName')" :error-message="errorInfo.realName"/>
		<van-field v-model="form.mobilePhone" required clearable label="手机号" maxlength="11" disabled="true">
			<van-button slot="button" size="small" type="primary" @click="handleCopy(form.mobilePhone,$event)">复制</van-button>
		</van-field>
		<van-field v-model="form.wechartNum" required clearable label="微信号" maxlength="11" disabled="true">
			<van-button slot="button" size="small" type="primary" @click="handleCopy(form.wechartNum,$event)">复制</van-button>
		</van-field>
		<van-field v-model="form.alipayNum" required clearable label="支付宝" maxlength="11" disabled="true">
			<van-button slot="button" size="small" type="primary" @click="handleCopy(form.alipayNum,$event)">复制</van-button>
		</van-field>
		<div class="line" v-if="form.gesturePic">
			<img class="selectedImg" :src="form.gesturePic"/>
		</div>
		<!-- <van-field v-model="form.bankCard" required clearable label="银行卡号" right-icon="question-o" :placeholder="errorHint.bankCard"
		@click-right-icon="$toast(errorHint.bankCard)"
		@blur="validate('bankCard')"
		:error-message="errorInfo.bankCard"/> -->
		<van-field v-model="form.mobilePhone" required clearable label="手机号" maxlength="11" disabled="true">
			<van-button slot="button" size="small" type="primary" @click="handleCopy(form.mobilePhone,$event)">复制</van-button>
		</van-field>
		<van-field v-model="form.realName" required clearable label="真实姓名" disabled="true" placeholder="请填写真实姓名" maxlength="20"
		  @blur="validate('realName')" :error-message="errorInfo.realName"/>
		<div class="line" v-if="form.idCardPic">
			<img class="selectedImg" :src="form.idCardPic"/>
		</div>
		<div class="idcard">
			<van-field v-model="form.idCard" required clearable label="身份证号" disabled="true" :placeholder="errorHint.idCard" @blur="validate('idCard')" :error-message="errorInfo.idCard"/>
		</div>
		
		<div class="idcard" v-if="form.remark">
			<van-field v-model="form.remark" label="驳回原因" disabled="true"/>
		</div>
		<!-- <div class="items2">
			<div class="my-cell">
				<div class="flex1">
					身份证号
				</div>
				<div class="flex2">
					<input type="text" :value="form.idCard">
				</div>
			</div>
		</div>	 -->
		<!-- <van-field v-model="form.idCard" required clearable label="身份证号" :placeholder="errorHint.idCard" @blur="validate('idCard')" :error-message="errorInfo.idCard"/> -->
		<!-- <div class="line" v-if="form.idCardPic">
			<img class="selectedImg" :src="form.gesturePic"/>
		</div> -->
		<div class="placeholderLine10"></div>
		<div class="sureAppointBtnBox">
			<div class="tip4model3">
				注：会员若提交批图后的照片，包括小纸条，审核的时候一律冻结账号处理。
			</div>
			<van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" @click="passBtn">通 过</van-button>
			<div class="placeholderLine10"></div>
			<van-button size="normal" :block="true" @click="refuseBtn">驳 回</van-button>
			<div class="placeholderLine10"></div>
			<van-button size="normal" :block="true" @click="freezzBtn">冻结账号</van-button>
		</div>
	</div>
	<van-dialog v-model="showRefuseReasonModel" title="驳回原因" :showConfirmButton="false" :close-on-click-overlay="true">
		<div class="placeholderLine10"></div>
		<div class="refuseReason">
			<van-field v-model="form.remark" required placeholder="请填写驳回原因,以便系统做统计" @blur="validate('remark')" :error-message="errorInfo.remark"/>
			<van-button size="normal" :block="true" @click="submit('refuse')">提 交</van-button>
		</div>
		<div class="placeholderLine10"></div>
	</van-dialog>
	<van-dialog v-model="showFreezeReasonModel" title="冻结原因" :showConfirmButton="false" :close-on-click-overlay="true">
		<div class="placeholderLine10"></div>
		<div class="refuseReason">
			<van-field v-model="form.remark" required placeholder="请填写冻结原因,以便系统做统计" @blur="validate('remark')" :error-message="errorInfo.remark"/>
			<van-button size="normal" :block="true" @click="freezeEvent">提 交</van-button>
		</div>
		<div class="placeholderLine10"></div>
	</van-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import { getTestUser,ERR_OK } from "@/api/index";
import mHeader from '@/components/Header.vue';
import clip from '@/assets/js/clipboard';
import { Dialog } from 'vant';
import { Toast } from 'vant';

export default {
	data() {
		return {
			showFreezeReasonModel:false,
			showRefuseReasonModel:false,
			showTipModel:false,
			result:"",
			loading:true,
			showUpdateModel:false,
			showUpdatePasswordModel:false,
			showRealNameModel:false,
			titleName:'',
			label:'---',
			userInfo:{},
			form:{
				nickName:"",
				telPhone:"",
				realName:"",
				alipayNum:"",
				wechartNum:"",
				address:"",
				loginPassword:"",
				securityPassword:"",
				sureNewPassword:"",
				securityPassword2:"",
				verificationCode:"",
				bankCard:"",
				idCard:"",
				idCardPic:"",
				gesturePic:"",
				remark:""
			},
			errorHint:{
				nickName:"",
				telPhone:"",
				realName:"",
				alipayNum:"",
				wechartNum:"",
				address:"",
				loginPassword:"",
				securityPassword:"",
				securityPassword2:"",
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
				loginPassword:"",
				securityPassword:"",
				securityPassword2:"",
				sureNewPassword:"",
				verificationCode:"",
				bankCard:"",
				idCard:"",
				remark:""
			},
			updateValidate:true,
			flag:'',
			isRealName:true,
			userId:'',
			projectName:'',
			mobilePhone:'',
			uploadType:'',
			loginerUserId:''
		}
	},  
	components:{
	    mHeader
	},
	mounted(){
		let _this = this;
		_this.loginerUserId = _this.$cookies.get('userId');
		if(_this.$utils.isNUll(_this.loginerUserId)){
			_this.$toast(_this.$api.loginAgainTipText);
			_this.$router.replace('login');
			return;
		}
		
		_this.userId = _this.$route.query.userId;
		//console.log('userId', _this.userId);
		_this.getAssistUserInfoPicByUserId();
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
		getAssistUserInfoPicByUserId(){
			let _this = this;
			_this.$ajax.ajax(_this.$api.getAssistUserInfo4CheckDetail + _this.userId, 'GET', null, function(res){
				if(res.code == _this.$api.CODE_OK){
					// _this.form.idCardPic = res.data.idCardPic;
					// _this.form.gesturePic = res.data.gesturePic;
					_this.form = res.data;
					//console.log("form",_this.form);
				}
			})
		},
		showTip(){
			this.showTipModel = true;
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
				loginPassword:"请填写新登录密码",
				securityPassword:"请填写安全密码",
				securityPassword2:"请确认安全密码",
				sureNewPassword:"请确认新密码",
				verificationCode:"请填写验证码",
				bankCard:"请填写银行卡号",
				idCard:"请填写身份证号",
			}
		},
		passBtn(){
			let _this = this;
			Dialog.confirm({
			  title: '系统提示',
			  confirmButtonText:'确认',
			  closeOnClickOverlay:true,
			  message: '该操作会将该用户审核通过，是否确认？'
			}).then(() => {
			  // on confirm
			  //console.log('sure');
			  _this.submit("pass");
			}).catch(() => {
			  // on cancel
			  //console.log('cancel');
			});
		},
		handleCopy(text, event) {
			let _this = this;
			clip(text,event,function(res){
				_this.$toast(`复制成功`);
			});
		},
		freezzBtn(){
			//console.log("submitRefuse");
			let _this = this;
			_this.showFreezeReasonModel = true;
		},
		freezeEvent(){
			let _this = this;
			
			let params = {
				userId: _this.form.userId,
				reason: _this.form.remark, 
				needTicket: 10,
				canUnfreeze: 1
			}
			//console.log('params',params)
			if(_this.$utils.hasNull(params)){
				_this.$toast(`请提交完整信息`);
				return;
			}
			//console.log('系统提示：可提交信息');
			_this.$ajax.ajax(_this.$api.insertAssistUserFreeze, 'POST', params, function(res){
				// //console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					// _this.info = res.data.list;
					// _this.isRealName = true;
					_this.$toast(res.message);
					_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
					_this.$router.go(-1);
				}else{
					_this.$toast(res.message);
				}
			})
		},
		refuseBtn(){
			//console.log("submitRefuse");
			let _this = this;
			_this.showRefuseReasonModel = true;
		},
		submit(type){
			let _this = this;
			let params = {
				id:_this.form.id,
				userId:_this.form.userId,
				/* loginerUserId:_this.loginerUserId, */
				realName:_this.form.realName,
				idCard:_this.form.idCard,
			}
			if(type=='pass'){
				params.actived = 1;
			}else if(type=='refuse'){
				params.actived = 2;
				params.remark = _this.form.remark;
			}
			//console.log('params',params)
			if(_this.$utils.hasVal(_this.errorInfo)||_this.$utils.hasNull(params)){
				_this.$toast(`系统提示：请提交完整信息`);
				return;
			}
			//console.log('系统提示：可提交信息');
			_this.$ajax.ajax(_this.$api.updateUserInfo4CheckPassOrNot, 'POST', params, function(res){
				// //console.log('res',res);
				if(res.code == _this.$api.CODE_OK){
					// _this.info = res.data.list;
					// _this.isRealName = true;
					_this.$toast(res.message);
					_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
					_this.$router.go(-1);
				}else{
					_this.$toast(res.message);
				}
			})
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
				if(_this.form.alipayNum==_this.mobilePhone){
					_this.errorInfo.alipayNum = '';
				}else{
					_this.errorInfo.alipayNum = _this.errorHint.alipayNum;
				}
				/* if(_this.form.alipayNum.indexOf('@')==-1){
					if(_this.$reg.phone.test(_this.form.alipayNum)){
						_this.errorInfo.alipayNum = '';
					}else{
						_this.errorInfo.alipayNum = _this.$reg.alipayHint;
					}
				} */
			}else if(key == 'wechartNum') {
				if(_this.form.wechartNum==_this.mobilePhone){
					_this.errorInfo.wechartNum = '';
				}else{
					_this.errorInfo.wechartNum = _this.errorHint.wechartNum;
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
					_this.errorInfo.securityPassword = _this.$reg.safePasswordHint;
				}
			}else if(key == 'securityPassword2') {
				if(_this.form.securityPassword2==_this.form.securityPassword){
					_this.errorInfo.securityPassword2 = '';
				}else{
					_this.errorInfo.securityPassword2 = "2次密码不一样"
				}
			}else if(key == 'bankCard') {
				if(_this.$reg.bankCard.test(_this.form.bankCard)){
					_this.errorInfo.bankCard = '';
				}else{
					_this.errorInfo.bankCard = _this.$reg.bankCardHint;
				}
			}else if(key == 'idCard'){
				if(_this.$reg.idCard.test(_this.form.idCard)){
					_this.errorInfo.idCard = '';
				}else{
					_this.errorInfo.idCard = _this.$reg.idCardHint;
				}
			}else if(key == 'remark'){
				if(_this.$reg.remark.test(_this.form.remark)){
					_this.errorInfo.remark = '';
				}else{
					_this.errorInfo.remark = _this.$reg.remarkHint;
				}
			}
		},
	}
}
</script>
