<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$cellHeight:50px;
	.unFreeze{
		font-size: 0.75rem;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: $main-box-color;
		z-index: 2;
		/* .van-dropdown-menu{
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
		} */
		.unFreezePage{
			color: $mainTextColor;
			margin-top: $headerHeight;
			background-color: $main-box-color;
			.van-field__label{
				width: 70px !important;
				line-height: 30px;
			}
			// .van-cell__value, .van-cell__value--alone, .van-field__control,.van-cell {
			//     color: #FFFFFF !important;
			// }
			.myCell{
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid $main-bg-color;
				// .van-cell__value, .van-cell__value--alone, .van-field__control {
				//     color: #FFFFFF !important;
				// }
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
			
			.box {
				display: flex;
				background-color: $main-box-color;
				padding: $boxPadding2;
				box-sizing: border-box !important;
				color: $mainTextColor;
				@include userSelectNone();
			}
			
			$avatorWidth:80px;
			
			.box1 {
				// height: $avatorWidth+$boxPadding1;
				margin-top: 2px;
				.flex {
					&.flex1 {
						flex: 0 0 70px;
						$heightwidht:70px;
						.name{
							width: $heightwidht;
							height: $heightwidht;
							border-radius: $heightwidht;
							background-color: $main-blue-color;
							text-align: center;
							line-height: $heightwidht;
							font-size: 22px;
						}
					}
					&.flex2 {
						flex: 1;
						padding: 0 $boxPadding2;
						display: flex;
						flex-direction: column;
						align-content: center;
			
						.line1{
							flex: 1;
							line-height: 26px;
			
							.nick_name {
								font-size: 14px;
								height: 20px;
								line-height: 20px;
							}
			
							.level {
								background-color: $main-adorn-color;
								height: 20px;
								line-height: 20px;
								font-size: 11px;
								border-radius: 0 10px 10px 0;
								padding: 0 8px 0 4px;
								margin-left: 4px;
							}
						}
						.line{
							flex: 1;
							line-height: 20px;
							font-size: 11px;
						}
					}
				}
			}
			
			.box2 {
				margin-top: $marginTop1;
				text-align: center;
				.flex {
					flex: 1;
					.value{
						
					}
					.text {
						font-size: $fs-1;
						margin-top: 6px;
					}
				}
			}
			
			.box3 {
				margin-top: $marginTop1;
				text-align: center;
				.flex {
					flex: 1;
					.text {
						font-size: $fs-1;
						margin-top: 6px;
						line-height: 1.2em;
					}
				}
			}
		}
		.textAdornColor{
			color: $main-adorn-color !important;
		}
	}
	
</style>
<template>
	<div class="unFreeze">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				给他人解冻账号
			</div>
			<i class="iconfont iconfont-question rightBox icon" @click="showTipModel=true"></i>
		</m-header>
		<div class="unFreezePage">
			<van-cell-group>
				<van-field v-model="form4AppointDeal.mobilePhone" clearable label="手机号" placeholder="请粘贴对方的手机号" maxlength="11">
					<van-button slot="button" size="small" color="#ffae00"  @click="getUserInfo">查询</van-button>
				</van-field>
				<!-- <van-field v-model="form4AppointDeal.mobilePhone" required clearable label="手机号" placeholder="请粘贴对方的手机号" maxlength="11"/> -->
				<!-- <van-field required v-model="form4AppointDeal.safePassword" type="password" clearable label="安全密码" @blur="validate4AppointDeal('safePassword')" :error-message="errorInfo4AppointDeal.safePassword" placeholder="请填写安全密码"/> -->
			</van-cell-group>
			<div class="placeholderLine10"></div>
			<div v-if="thisUserInfo">
				<div class="box box1">
					<div class="flex flex1">
						<!-- <van-image round width="80" height="80" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
						<div class="name">{{thisUserInfo.realName | getLastName}}</div>
					</div>
					<div class="flex flex2">
						<div class="line1">
							<div class="nick_name left">{{thisUserInfo.nickName}}</div>
							<div class="level left">{{thisUserInfo.level | getUserType}}+{{thisUserInfo.isAgent | agentType}}</div>
						</div>
						<!-- <div class="line">
							ID {{info.userId}}
						</div> -->
						<div class="line margT3">
							注册时间 {{thisUserInfo.registerTime}}
						</div>
						<div class="line">
							<div class="left">买入次数 {{thisUserInfo.buyTimes}}</div>
							<div class="mlBox left">买入数量 {{thisUserInfo.buyAmount}}</div>
						</div>
						<div class="line">
							<div class="left">卖出次数 {{thisUserInfo.sellTimes}}</div>
							<div class="mlBox left">卖出数量 {{thisUserInfo.sellAmount}}</div>
						</div>
						<div class="line">个人限购数量 {{thisUserInfo.canBuyNum}}</div>
						<!-- <div>=2000+(卖出数量-买入数量)=</div> -->
					</div>
				</div>
				<!-- <div class="box">
					<div class="line">
						<div class="f-11">区块地址 {{thisUserInfo.blockAddress}}</div>
					</div>
				</div> -->
				<div class="box box2">
					<div class="flex flex1">
						<div class="value" @click="toBookView('1',thisUserInfo.userId)">{{thisUserInfo.teamCalculationPower}}</div>
						<div class="text">团队算力</div>
					</div>
					<div class="flex flex4">
						<!-- <div>{{thisUserInfo.platformTicket}}</div> -->
						<div class="value" @click="toBookView('2',thisUserInfo.userId)">{{thisUserInfo.platformTicket}}</div>
						<div class="text">帮扶券</div>
					</div>
					<div class="flex flex3">
						<!-- <div>{{thisUserInfo.contributionValue}}</div> -->
						<div class="value" @click="toBookView('3',thisUserInfo.userId)">{{thisUserInfo.contributionValue}}</div>
						<div class="text">贡献值</div>
					</div>
					<div class="flex flex2">
						<!-- <div>{{thisUserInfo.thisWeekMineral}}</div> -->
						<div class="value" @click="toBookView('4',thisUserInfo.userId)">{{thisUserInfo.thisWeekMineral}}</div>
						<div class="text">矿石</div>
					</div>
				</div>
				<div class="box box3">
					<div class="flex flex1">
						<div>{{thisUserInfo.myCalculationPower}}</div>
						<!-- <NumberGrow :value="userInfo.myCalculationPower"></NumberGrow> -->
						<div class="text">TA的算力</div>
					</div>
					<div class="flex flex4">
						<div>{{thisUserInfo.temporaryFreezePlatformTicket}}</div>
						<!-- <NumberGrow :value="userInfo.temporaryFreezePlatformTicket"></NumberGrow> -->
						<div class="text">交易中<br>帮扶券</div>
					</div>
					<div class="flex flex3">
						<div>{{thisUserInfo.temporaryFreezeContribution}}</div>
						<!-- <NumberGrow :value="userInfo.temporaryFreezeContribution"></NumberGrow> -->
						<div class="text">交易中<br>贡献值</div>
					</div>
					<div class="flex flex2">
						<div>{{thisUserInfo.temporaryFreezeMineral}}</div>
						<!-- <NumberGrow :value="userInfo.temporaryFreezeMineral"></NumberGrow> -->
						<div class="text">交易中<br>矿石</div>
					</div>
				</div>
				<div class="paddingWing">
					<div class="placeholderLine10"></div>
					<div class="textCenter">
						该账户状态：{{thisUserInfo.accountStatus | accountStatus}}
					</div>
					<div class="textCenter margT10" v-if="userFreezeInfo">
						被冻结原因：{{userFreezeInfo.reason}}
					</div>
					<div class="textCenter margT10" v-if="userFreezeInfo.accountStatus == 1">
						可否解冻：{{thisUserInfo.canUnfreeze | canUnFreeze}}
					</div>
					<div class="textCenter margT10" v-if="userFreezeInfo">
						解冻所需帮扶券：{{userFreezeInfo.needTicket}}
					</div>
				</div>
			</div>
			<!-- <div class="myCell">
				<van-field required clearable @blur="validate('wordTitle')" v-model="form.wordTitle" maxlength="20" placeholder="请输入20字内的留言标题" />
			</div> -->
			<!-- <div class="sureBtn">
				<van-button color="#08abee" :loading="loading" size="large" @click="getUserInfo">查看该区块状态</van-button>
			</div> -->
			<div class="placeholderLine10"></div>
			<div class="sureBtn" v-if="thisUserInfo">
				<van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large" @click="submit">给解冻</van-button>
			</div>
		</div>
		<van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="知道了">
			<div class="paddingWing f-12 lineHeight tip4model2">
				<div class="line text margT10 textCenter">
					省市代理拥有定向转让帮扶券的权限
				</div>
			</div>
		</van-dialog>
	</div>
</template>
<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog } from 'vant';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		data() {
			return {
				showTipModel:false,
				//定向交易
				form4AppointDeal:{
					mobilePhone:'',
					blockAddress:"",
					safePassword:"",
				},
				errorInfo4AppointDeal:{
					unFreezeAmount:"",
					blockAddress:"",
					safePassword:"",
				},
				option1: [
					{ text: '问题反馈', value: 0 },
					{ text: '意见建议', value: 1 },
					{ text: '我要告状', value: 2 },
					{ text: '其他类型', value: 3 }
				],
				currentPage: 1,
				pageCount: 1000,
				totalItems: 10000,
				userId:"",
				loading:false,
				thisUserInfo:"",
				userFreezeInfo:""
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			_this.userId = _this.$cookies.get('userId');
			if(_this.$utils.isNUll(_this.userId)){
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
			}
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			toListView(){
				let _this = this;
				_this.$router.push({
					path: `/myWordList`
				});
			},
			toBookView(val,userId){
				let _this = this;
				//console.log('toBookView');
				let name = 'mineral';
				if(val==1){
					name = 'calculation';
				}else if(val==2){
					name = 'ticket';
				}else if(val==3){
					name = 'contribution';
				}else if(val==4){
					name = 'mineral';
				}
				_this.$cookies.set("tab_name_book", name, _this.$api.cookiesTime)
				_this.$router.push({path:"lookBook",query:{lookUserId:userId}})
			},
			validate4AppointDeal(key){
				let _this = this;
				if(key == 'unFreezeAmount') {
					if(_this.form4AppointDeal[key]>=1&&_this.form4AppointDeal[key]<=10000){//这里判断单次卖出的数量是否合法,由于
						_this.errorInfo4AppointDeal.unFreezeAmount = '';
					}else{
						_this.errorInfo4AppointDeal.unFreezeAmount = "单次转让数量在1~10000之间";
					}
				}else if(key == 'blockAddress'){
					if(_this.$reg.block_address.test(_this.form4AppointDeal[key])){
						_this.errorInfo4AppointDeal.blockAddress = '';
					}else{
						_this.errorInfo4AppointDeal.blockAddress = "请正确粘贴对方的区块地址";
					}
				}else if(key == 'safePassword') {
					if(_this.$reg.safePassword.test(_this.form4AppointDeal[key])){
						_this.errorInfo4AppointDeal.safePassword = '';
					}else{
						_this.errorInfo4AppointDeal.safePassword = "安全密码不超过20位，由'字母或数字或._'组成";
					}
				}
			},
			getUserInfo() {
				let _this = this;
				let params = {
					mobilePhone: _this.form4AppointDeal.mobilePhone
				}
				if(!_this.$reg.phone.test(params.mobilePhone)){
					_this.$toast('手机号格式有误');
					return;
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistUserInfoByObj, 'GET', params, function(res) {
					console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.thisUserInfo = res.data;
						_this.loading = false;
						if(_this.thisUserInfo.accountStatus == 1){
							_this.getUserFreezeInfo();
						}
					}
				})
			},
			getUserFreezeInfo(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistUserFreeze + _this.thisUserInfo.userId, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) { // 200  60 * 60 * 12
						_this.userFreezeInfo = res.data;
					}else{
						_this.$toast(res.message);
					}
				})
			},
			submit(){
				console.log("submit");
				let _this = this;
				let params = {
					unFreezeUserId: _this.thisUserInfo.userId
				}
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.unFreeze, 'POST', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						_this.$toast('解冻成功');
						_this.getUserInfo();
						_this.userFreezeInfo = "";
					}else{
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
					}
				})
			},
		}
	}
</script>
