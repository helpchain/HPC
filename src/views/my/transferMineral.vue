<style lang="scss">
	@import '~@/assets/scss/variable.scss';
	$cellHeight:50px;
	.transfer{
		font-size: 0.75rem;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		min-height: 100%;
		background-color: $main-bg-color;
		color: $main-box-text-color;
		z-index: 2;
		overflow-y:scroll;
		.van-dropdown-menu{
			height: $cellHeight !important;
			background-color: inherit !important;
		}
		.van-dropdown-menu__title{
			color: $main-box-text-color;
			font-size: 0.75rem !important;
		}
		[class*=van-hairline]::after{
			border: none !important;
		}
		/* .van-field__control{
			color: $mainTextColor;
		}
		.van-cell,.van-cell-group{
			background-color: inherit !important;
		} */
		.transferPage{
			.van-field__label{
				width: 70px !important;
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
		}
		.textAdornColor{
			color: $main-adorn-color !important;
		}
	}
	
</style>
<template>
	<div class="transfer">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				担保交易矿石
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="transferPage">
			<div class="placeholderLine10"></div>
			<!-- 贡献值:{{userInfo.contributionValue.toFixed(2)}}点 -->
			<div class="paddingWing tip4model3">当前拥有<br>矿石:{{userInfo.thisWeekMineral.toFixed(2)}}个  帮扶券:{{userInfo.platformTicket.toFixed(2)}}个</div>
			<van-cell-group>
				<van-field v-model="form4AppointDeal.transferAmount" required clearable label="转让数量" placeholder="请填写转让数量" @blur="validate4AppointDeal('transferAmount')" :error-message="errorInfo4AppointDeal.transferAmount"/>
				<van-field v-model="curerntPlatformPrice" required disabled label="指导单价"/>
				<van-field v-model="getGuidancePrice" required disabled label="指导总价"/>
				<van-field v-model="form4AppointDeal.price" required clearable label="担保单价" placeholder="请填写协商好的卖出单价" @blur="validate4AppointDeal('price')" :error-message="errorInfo4AppointDeal.price"/>
				<van-field v-model="getAssurePrice" required clearable label="担保总价" placeholder="请先填写转让单价" @blur="validate4AppointDeal('assurePrice')" :error-message="errorInfo4AppointDeal.assurePrice"/>
				<van-field v-model="form4AppointDeal.blockAddress" required clearable label="区块地址" placeholder="请粘贴买方的区块地址" maxlength="36" @blur="validate4AppointDeal('blockAddress')" :error-message="errorInfo4AppointDeal.blockAddress"/>
				<van-field v-model="form4AppointDeal.agentPhone" required clearable label="担保代理" placeholder="请填写代理手机号" maxlength="11" @blur="validate4AppointDeal('agentPhone')" :error-message="errorInfo4AppointDeal.agentPhone">
					<!-- <van-button slot="button" size="small" type="primary">自动分配</van-button> -->
				</van-field>
				<van-field required v-model="form4AppointDeal.safePassword" type="password" clearable label="安全密码" @blur="validate4AppointDeal('safePassword')" :error-message="errorInfo4AppointDeal.safePassword" placeholder="请填写安全密码"/>
			</van-cell-group>
			<div class="placeholderLine10"></div>
			<div class="paddingWing tip4model3" v-html="$api.tipText4Safe"></div>
			<div class="placeholderLine10"></div>
			<div class="paddingWing tip4model3">
				<b class="textBold">点对点(定向)交易规则：</b><br>
				1.服务费收20%矿石。<br>
				2.完成【我的--任务中心】里的基础任务后即可开通定向转让矿石的权限。<br>
				3.交易后所剩矿石数不得少于2个，注册所赠送的2个矿石只能用来复投矿机。<br>
			</div>
			<div class="margT10 paddingWing tip4model3" v-html="tipText4AppointDeal"></div>
			<div class="placeholderLine40"></div>
			<div class="placeholderLine40"></div>
			<div class="sureBtn">
				<div class="placeholderLine4"></div>
				<van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large" @click="submit">提 交</van-button>
			</div>
		</div>
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
					transferAmount:'',
					price:'',
					assurePrice:'',
					blockAddress:'',
					safePassword:'',
					agentPhone:''
				},
				errorInfo4AppointDeal:{
					transferAmount:'',
					price:'',
					assurePrice:'',
					blockAddress:'',
					safePassword:'',
					agentPhone:''
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
				maxPrice:'',
				userInfo:'',
				curerntPlatformPrice:'',
				tipText4AppointDeal:'',
				guidancePrice:'',
			}
		},
		components: {
			mHeader
		},
		computed:{
			getGuidancePrice() {
				let _this = this;
				let guidancePrice = _this.form4AppointDeal.transferAmount * _this.curerntPlatformPrice;
				_this.guidancePrice = guidancePrice.toFixed(2);
				return _this.guidancePrice;
			},
			getAssurePrice () {
				let _this = this;
				let assurePrice = _this.form4AppointDeal.transferAmount * _this.form4AppointDeal.price;
				_this.form4AppointDeal.assurePrice = assurePrice.toFixed(2);
				return _this.form4AppointDeal.assurePrice;
			},
		},
		created() {
			let _this = this;
			_this.tipText4AppointDeal = _this.$api.tipText4AppointDeal;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				console.log("userInfo_localStorage");
				_this.userInfo = JSON.parse(userInfo);
				_this.userId = _this.userInfo.userId;
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			_this.getDealPageInfo();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			getDealPageInfo(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getDealPageInfo, 'POST', null, function(res) {
					console.log('getDealPageInfo', res);
					if (res.code == _this.$api.CODE_OK) {
						_this.curerntPlatformPrice = res.data.currentPlatformPrice;
						_this.maxPrice = (parseFloat(res.data.currentPlatformPrice)*1.3+4).toFixed(2);
					}
				})
			},
			validate4AppointDeal(key){
				let _this = this;
				if(key == 'transferAmount') {
					if(_this.form4AppointDeal[key]>=1&&_this.form4AppointDeal[key]<=10000){
						_this.errorInfo4AppointDeal.transferAmount = '';
					}else{
						_this.errorInfo4AppointDeal.transferAmount = "单次转让数量在1~10000之间";
					}
				}else if(key == 'price') {
					if(_this.form4AppointDeal[key]>=0.1&&_this.form4AppointDeal[key]<=_this.maxPrice){
						_this.errorInfo4AppointDeal.price = '';
					}else{
						_this.errorInfo4AppointDeal.price = `定向交易价格暂时控制在0.1~${_this.maxPrice}CNY`;
					}
				}else if(key == 'assurePrice') {
					if(_this.form4AppointDeal[key]>=0.1&&_this.form4AppointDeal[key]<=1000000){
						_this.errorInfo4AppointDeal.assurePrice = '';
					}else{
						_this.errorInfo4AppointDeal.assurePrice = `担保金额暂时控制在0.1~1000000`;
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
				}else if(key == 'agentPhone') {
					if(_this.$reg.phone.test(_this.form4AppointDeal[key])){
						_this.errorInfo4AppointDeal.agentPhone = '';
					}else{
						_this.errorInfo4AppointDeal.agentPhone = "请正确填写11位手机号码";
					}
				}
			},
			submit(){
				console.log("submit");
				let _this = this;
				if(_this.$utils.getTimeHMS(new Date())>'21:00:00'){
					Dialog.alert({
					  title: '系统提示',
					  message: '交易时间是9~21点，请明天再来'
					}).then(() => {
					  // on close
					});
					return;
				}
				if(_this.$utils.getTimeHMS(new Date())>'00:00:00'&&_this.$utils.getTimeHMS(new Date())<'09:00:00'){
					Dialog.alert({
					  title: '系统提示',
					  message: '交易时间是9~21点，请到点再来'
					}).then(() => {
					  // on close
					});
					return;
				}
				let params = {
					/* userId: _this.userId, */
					num: _this.form4AppointDeal.transferAmount,
					curerntPlatformPrice:_this.curerntPlatformPrice,
					price: _this.form4AppointDeal.price,
					assurePrice: _this.form4AppointDeal.assurePrice,
					blockAddress: _this.form4AppointDeal.blockAddress,
					agentPhone: _this.form4AppointDeal.agentPhone,
					safePassword: _this.form4AppointDeal.safePassword,
					// createTime:_this.$utils.getDateTime(new Date())
				}
				console.log('params',params);
				if(_this.userInfo.thisWeekMineral<params.num){
					_this.$toast('您的矿石不够');
					return;
				}
				/* if(_this.userInfo.contributionValue<params.num){
					_this.$toast('您的贡献值不够');
					return;
				} */
				/* if(_this.userInfo.platformTicket<1){
					_this.$toast('您的帮扶券不够');
					return;
				} */
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写完整信息');
					return;
				}
				console.log('_this.errorInfo4BuyBill',_this.errorInfo4BuyBill);
				if(_this.$utils.hasVal(_this.errorInfo4AppointDeal)){
					_this.$toast('请按要求填写信息');
					return;
				}
				params.safePassword = _this.$JsEncrypt.encrypt(_this.form4AppointDeal.safePassword);
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.insertTransaction4AppointBill, 'POST', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						// _this.$toast('转让成功');
						_this.$cookies.set("isRefreshUserInfo",1,_this.$api.cookiesTime);
						/* _this.$cookies.set("tab_name_book","mineral",_this.$api.cookiesTime); */
						_this.$cookies.set("tabName4MyDeal", "get", _this.$api.cookiesTime);
						// _this.$router.push('myDeal');
						if(params.agentPhone == localStorage.getItem('mobilePhone')) {
							_this.$router.push({path:'myDeal',query:{dealType:1,isSelf:1,mobilePhone:res.data.mobilePhone,num:params.num}});
						}else{
							_this.$router.push({path:'myDeal',query:{dealType:1,mobilePhone:params.agentPhone,num:params.num}});
						}
						//_this.$router.push({path:'myDeal',query:{dealType:1,mobilePhone:params.agentPhone,num:params.num}});
						//_this.$router.push({path:'myDeal',query:{mobilePhone:res.data.mobilePhone,num:params.num}});
						_this.$utils.formClear(_this.form4AppointDeal);
					}else{
						// _this.$toast(res.message);
						Dialog.alert({
						  title: '系统提示',
						  message: res.message
						}).then(() => {
						  // on close
						});
					}
				},function(){
					_this.loading = false;
				})
			},
		}
	}
</script>
