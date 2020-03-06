<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.millPage{
		@include pageNoHeight4Scroll();
		.van-sticky--fixed{
			top: 47px !important;
		}
		.van-sticky{
			border-bottom: 1px solid $bottomLineColor;
		}
		.isShowMineralNum{
			color: $grayDarker;
		}
		[class*=van-hairline]::after {
		    border: 1px solid #c7c7c7 !important;
		}
		.millContent{
			background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color;
			min-height: 100%;
			position: absolute;
			width: 100%;
			.van-list__finished-text{
				color: inherit !important;
			}
			.tabTitle{
				display: flex;
				align-items: center;
				align-content: center;
				justify-content: center;
			}
			.millList{
				overflow: hidden;
				height: 100%;
				.item{
					position: relative;
					display: flex;
					padding: $boxPadding2;
					border-bottom:1px solid $bottomLineColor;
					align-items: center;
					align-content: center;
					justify-content: center;
					&::last-child{
						border-bottom:1px solid transparent;
					}
					.tagIcon{
						position: absolute;
						right: 0;
						top: 0;
						height: 20px;
						width: 38px;
						font-size: 20px;
					}
					.tagIconText{
						position: absolute;
						right: 10px;
						top: 4px;
						font-size: 11px;
					}
					.tag0{
						color: $main-blue-color;
					}
					.tag1{
						color: $main-adorn-color;
					}
					.tag2{
						color: $warnColor;
					}
					.flex1{
						flex: 0 0 50px;
						display:flex;
						align-items: center;
						.machingBox{
							height: 90px;
							line-height: 90px;
							width: 70px;
							background-color: $main-blue-color;
							text-align: center;align-items: center;
							position: relative;
							$heightwidht:40px;
							.name{
								width: $heightwidht;
								height: $heightwidht;
								// border-radius: $heightwidht;
								background-color: $main-box-color;
								color: $main-adorn-color;
								text-align: center;
								line-height: $heightwidht;
								font-size: 20px;
								font-weight: bolder;
								margin-left: 15px;
								margin-top: 25px;
							}
						}
					}
					.flex2{
						padding-left: 8px;
						flex: 1;
						.line1{
							.millName{
								font-weight: bold;
								font-size: 1rem;
							}
							.calcullatePower{
								font-size: 0.687rem;
								margin-left: 4px;
							}
							.status{
								font-size: 0.75rem;
								margin-left: 4px;
							}
							.isGet{
								height: 14px;
								line-height: 14px;
								font-size: 12px;
								border-radius: 0 10px 10px 0;
								padding: 0 6px 0 4px;
								margin-left: 10px;
							}
							.isGetBgColor{
								background-color: $main-adorn-color;
							}
							.notGetBgColor{
								background-color: $warnColor;
							}
						}
						.line,.line2,.line3,.line4,.line5{
							font-size: 0.75rem;
							margin-top: 3px;
						}

					}
					.flex3{
						flex: 0 0 70px;
						.line{
							font-size: 0.75rem;
							text-align: center;
						}
					}
					.tag {
						font-size: 11px;
						border-radius: 10px 10px 10px 10px;
						padding: 2px 8px;
						&.tag0{
							background-color: $main-blue-color;
						}
						&.tag1{
							background-color: $main-purple-color;
						}
						&.tag2{
							background-color: $warnColor;
						}
					}
				}
			}
		}
	}
</style>
<template>
	<div class="millPage">
		<!-- <m-header>
			<i class="leftBox"></i>
			<div class="text">
				矿机商城
			</div>
			<i class="iconfont iconfont-question rightBox icon" @click="showTip"></i>
		</m-header> -->
		<div class="millContent">
			<van-pull-refresh v-model="loading" @refresh="onLoadMillShop">
				<van-list v-model="loadingMillShop" :finished="finishedMillShop" finished-text="没有更多了">
					<div class="millList">
						<div class="item" v-for="item in millShopList" :key="item.id">
							<!-- <div class="flex flex1">
								<div class="machingBox">
									<div class="name">{{item.type | machineType4Pic}}</div>
								</div>
							</div> -->
							<div class="flex flex2">
								<div class="line1">
									<span class="millName">{{item.type | machineTypeType}}</span>
									<span class="calcullatePower">算力 {{item.calculationPower}}GH/s</span>
								</div>
								<div class="line">租金 {{item.price}}矿石</div>
								<div class="line">总产 {{item.totalOutput}}矿石</div>
								<div class="line">运行总时长 {{item.allRuntime}}小时</div>
								<div class="line">限租 {{item.limitBuy}}台</div>
							</div>
							<div class="flex flex3">
								<div class="line">库存{{item.inventory}}</div>
								<div class="line margT3">
									<van-button round type="info" @click="buyMill(item)" size="small" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">租赁</van-button>
								</div>
							</div>
						</div>
					</div>
				</van-list>
			</van-pull-refresh>
		</div>
		<!-- <van-button type="primary" @click="testLoginUrl()">登录</van-button>
	  <van-button type="primary" @click="testUrl()">获取信息</van-button> -->
	  <!-- <van-dialog v-model="showSelectBox" title="请选择用什么租赁" :show-cancel-button="true" :show-confirm-button="true" @confirm="sureBuyMillEvent"> -->
	  <van-dialog v-model="showSelectBox" title="请选择用什么租赁" :show-cancel-button="false" :show-confirm-button="false" :close-on-click-overlay="true">
	  		<div class="paddingWing">
				<div class="placeholderLine20"></div>
				<div class="f-14">当前可用矿石：{{userInfo.thisWeekMineral}}</div>
				<div class="placeholderLine10"></div>
				<div class="f-14">当前可用贡献值：{{userInfo.contributionValue}}</div>
				<div class="placeholderLine10"></div>
				<div class="f-14">租赁此矿机要花{{price}}个矿石或者贡献值</div>
				<div class="placeholderLine10"></div>
				<van-radio-group v-model="selectRadioValue" @change="selectRadioChange">
				  <van-radio name="1">矿石</van-radio>
				  <div class="placeholderLine10"></div>
				  <van-radio name="2">贡献值</van-radio>
				</van-radio-group>
				<div class="placeholderLine20"></div>
			</div>
			<!-- <van-button type="info" @click="buyMillLoading=true;" :disabled="buyMillLoading" :block="true">租赁</van-button> -->
			<van-button type="info" @click="sureBuyMillEvent" :loading="buyMillLoading" :disabled="buyMillLoading" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">租赁</van-button>
	  </van-dialog>
	  <van-dialog v-model="showReceiptTip" :title="receiptModelTile" :show-confirm-button="isShowConfirmButton">
		<div class="placeholderLine20"></div>
	    <div class="paddingWing textCenter">
			<van-loading type="spinner" color="#1989fa" v-if="isShowReceiptLoading"/>
			<div class="margT10 isShowMineralNum" v-if="isShowMineralNum">{{mineralNumTip}}</div>
		</div>
		<div class="placeholderLine20"></div>
		<div class="placeholderLine20"></div>
	  </van-dialog>
	  <van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="好的">
	  	<div class="paddingWing f-12 lineHeight tip4model2">
	  		<div class="textIndent">
	  			{{$api.tip4ReduceMill}}
	  		</div>
			<div class="placeholderLine10"></div>
	  	</div>
	  </van-dialog>
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'
	// import { ajax } from "@/api/ajax";
	import mHeader from '@/components/Header.vue';
	import { Dialog } from 'vant';
	import { Toast } from 'vant';
	export default {
		data() {
			return {
				buyMillLoading:false,
				selectRadioValue:'1',
				loading: false,
				showTipModel:false,
				activeName: "myMill",
				loadingMyMill: false,
				finishedMyMill: false,
				finishedMyMillText:'',
				myMillList:[],
				loadingMillShop: false,
				finishedMillShop: false,
				millShopList: [],
				loadingPastMill: false,
				finishedPastMill: false,
				pastMillList:[],
				miningMachine: [{
					miningMachineType: '小型矿机',
					price: 100,
					totalOutput: 12,
					allRuntime: 720,
					turnOnTime: '2019-12-12 12:12:12',
					afterReceipt: '2019-12-13 12:12:12',
				}],
				userInfo:'',
				showReceiptTip:false,
				showSelectBox:false,
				isShowReceiptLoading: true,
				mineralNumTip:'',
				isShowMineralNum:false,
				receiptModelTile:"领取结果计算中",
				isShowConfirmButton:false,
				price:'',
				machineId:''
			}
		},
		components: {
			mHeader
		},
		created() {
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			
			if(_this.$cookies.get('HMSI')){
				let millShopList = JSON.parse(localStorage.getItem('millShopList'));
				if(millShopList){
					_this.millShopList = millShopList;
					_this.finishedMillShop = true;
				}else{
					_this.onLoadMillShop();
				}
			}else{
				_this.onLoadMillShop();
			}
		},
		methods: {
			back() {
				this.$router.go(-1);
			},
			showTip(){
				this.showTipModel = true;
			},
			tagColor(tag){
				if(tag==0){
					return 'tag0'
				}else if(tag==1){
					return 'tag1'
				}else if(tag==2){
					return 'tag2'
				}else if(tag==3){
					return 'tag2'
				}else if(tag==4){
					return 'tag2'
				}
			},
			selectRadioChange(value){
				//console.log(value);
			},
			buyMill(item){
				let _this = this;
				_this.showSelectBox = true;
				_this.price = item.price;
				_this.machineId = item.id;
				// Dialog.confirm({
				//   title: '确认弹窗',
				//   message: `您当前可用矿石${_this.userInfo.thisWeekMineral}个,租赁此矿机要花${item.price}矿石,是否确定租赁？`
				// }).then(() => {
				//   // on confirm
				//   if(_this.userInfo.thisWeekMineral<item.price){
				// 	  _this.$toast(_this.$api.DATA_102);
				//   }else{
				// 	  _this.sureBuyMillEvent(item.id);
				//   }
				// }).catch(() => {
				//   // on cancel
				// });
			},
			sureBuyMillEvent(){
				let _this = this;
				_this.showSelectBox = false;
				_this.buyMillLoading = true;
				if(_this.selectRadioValue==1){
					if(_this.userInfo.thisWeekMineral<_this.price){
						_this.$toast("您所拥有的矿石不够租赁该矿机");
						_this.buyMillLoading = false;return;
					}
				}else if(_this.selectRadioValue==2){
					if(_this.userInfo.contributionValue<_this.price){
						_this.$toast("您所拥有的贡献值不够租赁该矿机");
						_this.buyMillLoading = false;return;
					}
				}
				let params = {
					/* userId:_this.userInfo.userId, */
					machineId:_this.machineId,
					use:_this.selectRadioValue
				}
				Toast.loading({
				  message: '租赁中...',
				  forbidClick: true,
				  loadingType: 'spinner'
				});
				_this.$ajax.ajax(_this.$api.insertAssistMyMachine, 'POST', params, function(res) {
					Toast.clear();
					if (res.code == _this.$api.CODE_OK) {
						Dialog.alert({
						  title: '系统提示',
						  message: res.data == 1?'租赁成功':'租赁失败'
						}).then(() => {
						  // on close
						  if(res.data==1){
							  _this.onLoadMillShop();
							  _this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
							  _this.$router.push('myMill');
						  }
						});
					}else {
						_this.$toast(res.message);
						return;
					}
				},function(){
					_this.buyMillLoading = false;
				})
			},
			onLoadMillShop() {
				let _this = this;
				//console.log("onLoadMillShop");
				// 异步更新数据
				// let params = {
				// 	versionNo: 1
				// }
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistMiningMachineList4MillShop, 'GET', null, function(res) {
					// //console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data;
						localStorage.setItem("millShopList",JSON.stringify(list));
						_this.$cookies.set("HMSI",1,_this.$api.cookiesTime)
						_this.millShopList = list;
					}
				},function(){
					_this.loading = false;
					_this.loadingMillShop = false;
					_this.finishedMillShop = true;
				})
			},
			initializeTabActiveName() {
				let _this = this;
				if (_this.$cookies.isKey("mill_tab_name")) {
					_this.activeName = _this.$cookies.get("mill_tab_name");
				}
			},
			tabChange(name, title) {
				//console.log(name, title);
				this.$cookies.set("mill_tab_name", name, 60 * 60 * 1)
			}
		}
	}
</script>
