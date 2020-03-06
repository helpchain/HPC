<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.myMillDetailPage{
		@include newPage();
		.millDetailContent{
			overflow: hidden;
			position: relative;
			color: $main-box-fh-text-color;
			.isShowMineralNum{
				color: $grayDarker;
			}
			.matrix{
				position: relative;
			}
			// .millType{
			// 	position: absolute;
			// 	left: 0;
			// 	top: 48px;
			// 	z-index: 1;
			// 	padding: $boxPadding2;
			// 	font-size: 0.9375rem;
			// }
			.loading{
				position:absolute;
				top:50%;
				left:50%;
				transform: translate(-50%,-50%);//通过变形来搞定
				z-index: 1;
				text-align: center;
			}
			.info{
				position: absolute;
				bottom: 0;
				left: 0;
				z-index: 1;
				padding: $boxPadding2;
				.millType{
					font-size: 0.9375rem;
				}
				div{
					line-height: 1.4em;
				}
			}
		}
	}
</style>
<template>
	<div class="myMillDetailPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				矿机详情
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="millDetailContent">
			<canvas class="matrix" id="matrix"></canvas>
			<!-- <div class="millType">
				{{millInfo.type | machineTypeType}}
			</div> -->
			<div class="loading">
				<van-loading color="#ff8400" type="spinner" size="36px"/>
				<div class="placeholderLine10"></div>
				<van-button type="info" size="normal" @click="getReceipt" color="linear-gradient(to right, #ffae00, #ff8400)" :loading="getRecieptLoading"><span class="letterSpacing">领取收益</span></van-button>
			</div>
			<div class="info">
				<div class="millType">{{millInfo.type | machineTypeType}}</div>
				<div class="">状态 {{millInfo.status | machineStatus}}</div>
				<div class="">算力 {{millInfo.calculationPower}}GH/s</div>
				<div class="">租金 {{millInfo.price}}矿石</div>
				<div class="">总产 {{millInfo.totalOutput}}矿石</div>
				<div class="">已产 {{millInfo.alreadyGet}}矿石</div>
				<div class="">总运行时长 {{millInfo.allRuntime}}小时</div>
				<div class="">开机时间 {{millInfo.turnOnTime}}</div>
				<div class="">到期时间 {{millInfo.turnOffTime}}</div>
				<div class="" v-if="millInfo.beforeReceipt">上次领取 {{millInfo.beforeReceipt}}</div>
				<div class="line" v-if="millInfo.beforeReceipt">下次领取 {{ $utils.nextReceipt(millInfo.beforeReceipt) }} 之后</div>
				<div class="line" v-if="!millInfo.beforeReceipt"><span v-if="millInfo.turnOnTime">下次领取 {{ $utils.nextReceipt(millInfo.turnOnTime) }} 之后</span></div>
				<!-- <div>全网算力：{{millInfo.calculationPower}}GH/s</div> -->
			</div>
		</div>
		<van-dialog v-model="showReceiptTip" :title="receiptModelTile" :show-confirm-button="isShowConfirmButton" @confirm="back">
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
	export default {
		data() {
			return {
				millInfo:'',
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
		created() {
			let _this = this;
			_this.millInfo = JSON.parse(localStorage.getItem('thisMillInfo'));
			console.log("millInfo",_this.millInfo);
		},
		mounted() {
			let _this = this;
			_this.startCodeRain();
		},
		methods:{
			back(){
				this.$router.go(-1);
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
				let lastReceiptTimestamp = new Date(_this.millInfo.turnOnTime).getTime();
				if(_this.millInfo.beforeReceipt==null || _this.millInfo.beforeReceipt==''){
					lastReceiptTimestamp = new Date(_this.millInfo.turnOnTime).getTime();
				}else{
					lastReceiptTimestamp = new Date(_this.millInfo.beforeReceipt).getTime();
				}
				
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
				_this.$ajax.ajax(_this.$api.getMyMachinesReceiptByOne + _this.millInfo.id, 'POST', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						if(res.data){
							_this.mineralNumTip = `该矿机领取收益为${res.data}个矿石`;
							_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
							// _this.$router.go(-1);
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
			startCodeRain(){
				var matrix = document.getElementById("matrix");
				var context = matrix.getContext("2d");
				matrix.height = window.innerHeight;
				matrix.width = window.innerWidth;
				var drop = [];
				var fontSize = 12; //字体
				var columns = matrix.width / fontSize;
				for (var i = 0; i < columns; i++) {
				    drop[i] = 1;
				}
				function drawMatrix() {
				    context.fillStyle = "rgba(0, 0, 0, 0.1)";
				    context.fillRect(0, 0, matrix.width, matrix.height);
				    context.fillStyle = "green";
				    context.font = fontSize + "px";
				    for (var i = 0; i < columns; i++) {
				        context.fillText(Math.floor(Math.random() * 2), i * fontSize, drop[i] * fontSize);
				        if (drop[i] * fontSize > (matrix.height * 2 / 3) && Math.random() > 0.85){
							drop[i] = 0;
						}
				        drop[i]++;
				    }
				}
				setInterval(drawMatrix, 50);//按照指定间隔一直执行方法
			}
		}
	}
</script>
