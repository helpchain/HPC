<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.myMillPage{
		@include pageHaveHeight4Scroll();
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
			color: $main-box-fh-text-color;
			min-height: 100%;
			position: absolute;
			top:0;
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
			// [class*=van-hairline]::after{
			// 	border: 0 solid transparent;
			// }
			.getMineral{
				//margin-top: $marginTop2;
			}
			.millList{
				// background-color: $main-box-fh-bg-color;
				//margin-top: $marginTop2;
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
						color: $main-box-fh-text-color;
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
								color: $main-box-fh-text-color;
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
						flex: 0 0 60px;
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
	<div class="myMillPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				我的矿机
			</div>
			<i class="iconfont iconfont-question rightBox icon" @click="showTip"></i>
		</m-header>
		<canvas class="matrix" id="matrix"></canvas>
		<div class="millContent" id="millContent">
			<van-tabs v-model="activeName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
			 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
				<van-tab name="myMill">
					<div slot="title" class="tabTitle">
					     我的矿机 {{myMillList.length}}
					</div>
					<div class="getMineral" v-if="isShowOneReciept">
						<van-button type="info" size="normal" @click="getReceipt" color="linear-gradient(to right, #ffae00, #ff8400)" :loading="getRecieptLoading" :block="true"><span class="letterSpacing">一键领取收益</span></van-button>
					</div>
					<van-list v-model="loadingMyMill" :finished="finishedMyMill" :finished-text="finishedMyMillText" @load="onLoadMyMill">
						<div class="millList">
							<div class="item" v-for="item in myMillList" :key="item.id">
								<!-- <div class="flex flex1">
									<div class="machingBox">
										<div class="name">{{item.type | machineType4Pic}}</div>
									</div>
								</div> -->
								<div class="flex flex2">
									<div class="line1">
										<div class="millName inline">{{item.type | machineTypeType}}</div>
										<!-- <div class="inline"><span class="tag" :class="tagColor(item.tag)">{{item.tag | machineTagType}}</span></div> -->
										<div class="inline calcullatePower">算力 {{item.calculationPower}}GH/s</div>
										<!-- <div class="inline f-12 status">{{item.status | machineStatus}}</div> -->
									</div>
									<div class="line" v-if="item.turnOffTime">{{item.turnOffTime}} 到期</div>
									<div class="line">租金 {{item.price}}矿石</div>
									<div class="line">总产 {{item.totalOutput}}矿石</div>
									<div class="line">已产 {{item.alreadyGet}}矿石</div>
									<div class="line">总运行时长 {{item.allRuntime}}小时</div>
									<!-- <div class="line" v-if="item.turnOnTime">开机 {{item.turnOnTime}}</div> -->
									<!-- <div class="line" v-if="item.beforeReceipt">上次领取 {{item.beforeReceipt}}</div> -->
									<div class="line" v-if="item.beforeReceipt">下次领取 {{ nextReceipt(item.beforeReceipt) }} 之后</div>
									<div class="line" v-if="!item.beforeReceipt"><span v-if="item.turnOnTime">下次领取 {{ nextReceipt(item.turnOnTime) }} 之后</span></div>
								</div>
								<div class="flex flex3">
									<div class="status line">{{item.status | machineStatus}}</div>
									<div class="line margT3">
										<van-button round type="info" v-if="item.status==1" size="small" @click="toMillDetailPage(item)" color="linear-gradient(to right, #099eee, #0b6fcc)" :block="true">详情</van-button>
										<van-button round type="info" v-if="item.status==0" :loading="isRunMillBtnLoading" @click="runMillEvent(item.id)" size="small" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">运行</van-button>
									</div>
								</div>
								<i class="tagIcon iconfont iconfont-tag" :class="tagColor(item.tag)"></i>
								<i class="tagIconText">{{item.tag | machineTagIconTextType}}</i>
							</div>
						</div>
					</van-list>
				</van-tab>
				<van-tab name="pastMill">
					<div slot="title" class="tabTitle">
					     过期矿机 {{pastMillList?pastMillList.length:''}}
					</div>
					<van-list :offset="100" v-model="loadingPastMill" :finished="finishedPastMill" finished-text="没有更多了" @load="onLoadPastMill">
						<div class="millList">
							<div class="item" v-for="item in pastMillList" :key="item.id">
								<!-- <div class="flex flex1">
									<div class="machingBox">
										<div class="name">{{item.type | machineType4Pic}}</div>
									</div>
								</div> -->
								<div class="flex flex2">
									<div class="line1">
										<div class="millName inline">{{item.type | machineTypeType}}</div>
										<div class="status inline">{{item.status | machineStatus}}</div>
										<div class="calcullatePower inline">算力 {{item.calculationPower}}GH/s</div>
									</div>
									<div class="line">租金 {{item.price}}矿石</div>
									<div class="line">总产 {{item.totalOutput}}矿石</div>
									<div class="line">已产 {{item.alreadyGet}}矿石</div>
									<div class="line">总运行时长 {{item.allRuntime}}小时</div>
									<div class="line" v-if="item.turnOnTime">开机时间 {{item.turnOnTime}}</div>
									<div class="line" v-if="item.turnOffTime">到期时间 {{item.turnOffTime}}</div>
									<div class="line" v-if="item.beforeReceipt">上次领取 {{item.beforeReceipt}}</div>
								</div>
								<!-- <div class="flex flex3">
									<div class="line">算力 {{item.calculationPower}}</div>
								</div> -->
								<i class="tagIcon iconfont iconfont-tag" :class="tagColor(item.tag)"></i>
								<i class="tagIconText">{{item.tag | machineTagIconTextType}}</i>
							</div>
						</div>
					</van-list>
				</van-tab>
			</van-tabs>
		</div>
		<!-- <van-button type="primary" @click="testLoginUrl()">登录</van-button>
	  <van-button type="primary" @click="testUrl()">获取信息</van-button> -->
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
	  			完成【我的--任务中心】里的任务后所奖励(赠送)的矿机不加算力，只有从矿机商城中所租赁的矿机才加算力。
	  		</div>
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
				isRunMillBtnLoading: false,
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
				isShowOneReciept:true,
				isShowReceiptLoading: true,
				mineralNumTip:'',
				isShowMineralNum:false,
				receiptModelTile:"领取结果计算中",
				isShowConfirmButton:false,
				getRecieptLoading:false
			}
		},
		components: {
			mHeader
		},
		// computed:{
		// 	nextReceipt:function(value){
		// 		let _this = this;
		// 		let dateTime = new Date(value).getTime() + 24*60*60;
		// 		_this.$nextTick(()=>{
		// 			return _this.$utils.getDateTime(dateTime);
		// 		})
		// 	}
		// },
		mounted() {
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			console.log(_this.$cookies.get('isRefreshUserInfo'),'isRefreshUserInfo');
		},
		methods: {
			back() {
				this.$router.push('my');
			},
			showTip(){
				this.showTipModel = true;
			},
			startCodeRain(){
				let matrix = document.getElementById("matrix");
				let context = matrix.getContext("2d");
				let matrixHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
				matrix.height = matrixHeight - 50;
				console.log("matrix.height",matrix.height);
				matrix.width = window.innerWidth;
				let drop = [];
				let fontSize = 12; //字体
				let columns = matrix.width / fontSize;
				for (let i = 0; i < columns; i++) {
				    drop[i] = 1;
				}
				function drawMatrix() {
				    context.fillStyle = "#277d1f";
				    context.fillRect(0, 0, matrix.width, matrix.height);
				    context.fillStyle = "#ffae00";
				    context.font = fontSize + "px";
				    for (let i = 0; i < columns; i++) {
				        context.fillText(Math.floor(Math.random() * 2), i * fontSize, drop[i] * fontSize);
				        if (drop[i] * fontSize > (matrix.height * 2 / 3) && Math.random() > 0.85){
							drop[i] = 0;
						}
				        drop[i]++;
				    }
				}
				setInterval(drawMatrix, 50);//按照指定间隔一直执行方法
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
				}else if(tag==5){
					return 'tag2'
				}else if(tag==6){
					return 'tag2'
				}
			},
			nextReceipt(value){
				let _this = this;
				let dateTime = new Date(value).getTime()/1000 + 24*60*60;
				// console.log("dateTime",dateTime);
				let result = _this.$utils.getDateTime(dateTime*1000);
				// console.log("result",result);
				return result;
				// _this.$nextTick(()=>{
					
				// })
			},
			getReceipt(){
				let _this = this;
				_this.getRecieptLoading = true;
				_this.showReceiptTip = true;
				let nowTimestamp = new Date().getTime();
				/* if(_this.userInfo.lastReceiptTime==null || _this.userInfo.lastReceiptTime==""){
					_this.receiptModelTile = "系统提示";
					_this.isShowReceiptLoading = false;
					_this.mineralNumTip = "矿机启动后过24小时才能领取收益";
					_this.isShowMineralNum = true;
					_this.isShowConfirmButton = true;
					return;
				} */
				console.log('_this.userInfo.lastReceiptTime',_this.userInfo.lastReceiptTime);
				let lastReceiptTimestamp = new Date(_this.userInfo.lastReceiptTime).getTime();
				console.log('lastReceiptTimestamp',lastReceiptTimestamp);
				//if(!lastReceiptTimestamp)
				let timestamp = (nowTimestamp - lastReceiptTimestamp)/1000;
				if(timestamp<24*60*60){
					_this.receiptModelTile = "系统提示";
					_this.isShowReceiptLoading = false;
					_this.mineralNumTip = "未到领取收益时间";
					_this.isShowMineralNum = true;
					_this.isShowConfirmButton = true;
					_this.getRecieptLoading = false;
					return;
				}
				_this.$ajax.ajax(_this.$api.getMyMachinesReceipt, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						if(res.data){
							_this.mineralNumTip = `此次领取收益为${res.data}个矿石`;
							_this.onLoadMyMill();
							_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
						}else{
							_this.mineralNumTip = `未到领取收益的时间`;
						}
					}else{
						_this.mineralNumTip = "距离上次收益未满24小时";
					}
				},function(){
					_this.receiptModelTile = "系统提示";
					_this.isShowConfirmButton = true;
					_this.isShowReceiptLoading = false;
					_this.isShowMineralNum = true;
					_this.getRecieptLoading = false;
				})
			},
			getThisMachineReceipt(item){
				if(item.beforeReceipt){
					
				}else{//第一次领取收益的时候
					let beforeReceipt = new Date();
				}
			},
			toMillDetailPage(item){
				let _this = this;
				_this.$router.push('myMillDetail');
				localStorage.setItem("thisMillInfo",JSON.stringify(item));
			},
			runMillEvent(id){
				let _this = this;
				// let params = {
				// 	id:id
				// }
				//运行之前先判断该用户是否是已经升级了的用户
				/* if(_this.userInfo.isAgent<=0){
					Dialog.alert({
						title: "系统提示",
						message: "用户等级提升后即可启动该矿机（至少要是青铜级工会会长），是否前去查看升级条件？"
					}).then(() => {
					  // on confirm
					  _this.$router.push("task");
					})
					return;
				} */
				_this.isRunMillBtnLoading = true;
				_this.$ajax.ajax(_this.$api.runMyMachineById + id, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.onLoadMyMill();
					}else{
						Dialog.alert({
							title: "系统提示",
							message: res.message
						}).then(() => {
						  // on confirm
						  // _this.$router.push("task");
						})
					}
				},function(){
					_this.isRunMillBtnLoading = false;
				})
			},
			buyMill(item){
				let _this = this;
				Dialog.confirm({
				  title: '确认弹窗',
				  message: `您当前可用矿石${_this.userInfo.thisWeekMineral}个,租赁此矿机要花${item.price}矿石,是否确定租赁？`
				}).then(() => {
				  // on confirm
				  if(_this.userInfo.thisWeekMineral<item.price){
					  _this.$toast(_this.$api.DATA_102);
				  }else{
					  _this.sureBuyMillEvent(item.id);
				  }
				}).catch(() => {
				  // on cancel
				});
			},
			sureBuyMillEvent(machineId){
				let _this = this;
				let params = {
					/* userId:_this.userInfo.userId, */
					machineId:machineId
				}
				Toast.loading({
				  message: '租赁中...',
				  forbidClick: true,
				  loadingType: 'spinner'
				});
				_this.$ajax.ajax(_this.$api.insertAssistMyMachine, 'POST', params, function(res) {
					Toast.clear();
					if (res.code == _this.$api.CODE_OK) {
						if(res.data == 1000){//此类矿机已经售空
							_this.$toast(_this.$api.DATA_100);
							return;
						}
						if(res.data == 1001){//该用户此类矿机已满，不让租赁
							_this.$toast(_this.$api.DATA_101);
							return;
						}
						if(res.data == 1002){//该用户所拥有矿石不够，不让租赁
							_this.$toast(_this.$api.DATA_102);
							return;
						}
						Dialog.alert({
						  title: '温馨提示',
						  message: res.data == 1?'租赁成功':'租赁失败'
						}).then(() => {
						  // on close
						  if(res.data==1){
							  _this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
						  }
						  _this.activeName = 'myMill';
						  _this.onLoadMyMill();
						  _this.onLoadMillShop();
						});
					}
				})
			},
			onLoadMyMill() {
				let _this = this;
				_this.loadingMyMill = true;
				_this.$ajax.ajax(_this.$api.getAssistMyMachine, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						let myMill = res.data;
						_this.myMillList = myMill.filter(item=>item.status!=2);
						_this.pastMillList = myMill.filter(item=>item.status==2);
						if(_this.myMillList.length>0){
							_this.finishedMyMillText = '没有更多了';
						}else{
							_this.isShowOneReciept = false;
							_this.finishedMyMillText = '亲，您目前没有矿机';
						}
						// console.log("myMillList" + _this.myMillList);
						_this.loadingMyMill = false;
						_this.finishedMyMill = true;
						_this.$nextTick(function(){
							_this.startCodeRain();
						},300)
					}
				})
			},
			onLoadMillShop() {
				let _this = this;
				// 异步更新数据
				// let params = {
				// 	versionNo: 1
				// }
				_this.$ajax.ajax(_this.$api.getAssistMiningMachineList4MillShop, 'GET', null, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data;
						_this.millShopList = list;
						// localStorage.setItem("_millShopList_",JSON.stringify(_this.millShopList));
						_this.loadingMillShop = false;
						_this.finishedMillShop = true;
					}
				})
			},
			onLoadPastMill() {
				let _this = this;
				_this.loadingPastMill = true;
				_this.millShopCurrentPage = _this.millShopCurrentPage + 1;
				console.log('_this.millShopCurrentPage', _this.millShopCurrentPage);
				// 异步更新数据
				setTimeout(() => {
					// 加载状态结束
					_this.loadingPastMill = false;
					_this.finishedPastMill = true;
				}, 500);
			},
			initializeTabActiveName() {
				let _this = this;
				if (_this.$cookies.isKey("mill_tab_name")) {
					_this.activeName = _this.$cookies.get("mill_tab_name");
				}
			},
			tabChange(name, title) {
				console.log(name, title);
				this.$cookies.set("mill_tab_name", name, 60 * 60 * 1)
			}
		}
	}
</script>
