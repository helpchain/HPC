<style lang="scss">
	@import '~@/assets/scss/index.scss';
	
	[class*=van-hairline]::after {
	    border: 1px solid transparent !important;
	}
	
	.van-cell__value, .van-cell__value--alone, .van-field__control{
		color: #323232 !important;
	}
	.deal{
		background-color: $main-box-fh-bg-color;
		min-height: 100%;
		[class*=van-hairline]::after {
		    border: 1px solid transparent !important;
		}
		.van-cell__value, .van-cell__value--alone, .van-field__control{
			color: #323232 !important;
			font-size: 12px;
		}
		.tipText{
			font-size:13px;
			text-indent: 2em;
			line-height: 1.4em;
			letter-spacing: 1px;
			color: $main-adorn-color;
		}
		.modelTipText{
			font-size: 0.75rem;
			color: $grayDarker;
			line-height: 1.4em;
		}
		.statistics{
			background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color;
			padding: $boxPadding2;
			// border-top: 1px solid $bottomLineColor;
			border-bottom: 1px solid $bottomLineColor;
			font-size: 0.75rem;
			.line{
				margin-top: 0.25rem;
				overflow: hidden;
			}
		}
		.dealContent{
			// margin-top: $marginTop2;
			.dealList{
				// margin-top: $marginTop2;
				.item{
					background-color: $main-box-fh-bg-color;
					color: $main-box-fh-text-color;
					// background-color: $main-box-color;
					// color: $mainTextColor2;
					padding: $boxPadding2;
					border-bottom: 1px solid $bottomLineColor;
					display: flex;
					flex-direction: row;
					align-content: center;
					align-items: center;
					font-size: 0.75rem;
					.boxLeft{
						flex: 1;
					}
					.boxRight{
						flex: 1;
						text-align: right;
						font-size: 0.75rem
					}
				}
			}
		}
		$bottom:118px;
		.buy{
			bottom: $bottom;
			right: $right;
			color: $main-box-fh-text-color;
		}
		.sale{
			bottom: $bottom + 60px;
			right: $right;
		}
		.buy,.sale{
			position: fixed;
			background: linear-gradient(to right, #ffae00 , #ff8400); /* 标准的语法 */
			color: $main-box-fh-text-color;
			width:$fixed-btn-width2;
			height:$fixed-btn-width2;
			line-height:$fixed-btn-width2;
			border-radius:$fixed-btn-width2;
			text-align: center;
			z-index:2001;
			font-size: 0.875rem;
			user-select:none;
		}
		.fullscreenBox{
			top:130px !important;
		}
		.sureAppointBtnBox{
			padding: $boxPadding2;
		}
		.pickSellContent{
			
			.showMyInfo{
				padding-left: 16px;
				padding-right: 16px;
				font-size: 12px;
				.myPlateForm{
					text-align: center;
				}
			}
			.inLine{
				display: flex;
				flex-direction: row;
				align-content: center;
				align-items: center;
				padding: 12px 16px;
				font-size: 12px;
				position: relative;
				.label{
					flex: 0 0 90px;
				}
				.value{
					flex: 1;
					display: flex;
					flex-direction: row;
					align-content: center;
					align-items: center;
					.valueLeft{
						flex: 0 0 110px;
					}
					.valueRight{
						flex: 1;
					}
				}
			}
			.inLine::after {
				position: absolute;
				box-sizing: border-box;
				content: ' ';
				pointer-events: none;
				right: 0;
				bottom: 0;
				left: 16px;
				border-bottom: 1px solid #ebedf0;
				-webkit-transform: scaleY(.5);
				transform: scaleY(.5);
			}
		}
		.hangBuyContent{
			
			.showMyInfo{
				padding-left: 16px;
				padding-right: 16px;
				font-size: 12px;
			}
			.inLine{
				display: flex;
				flex-direction: row;
				align-content: center;
				align-items: center;
				padding: 12px 16px;
				font-size: 13px;
				position: relative;
				.label{
					flex: 0 0 90px;
				}
				.value{
					flex: 1;
					display: flex;
					flex-direction: row;
					align-content: center;
					align-items: center;
					.valueLeft{
						flex: 0 0 110px;
					}
					.valueRight{
						flex: 1;
					}
				}
			}
			.inLine::after {
				position: absolute;
				box-sizing: border-box;
				content: ' ';
				pointer-events: none;
				right: 0;
				bottom: 0;
				left: 16px;
				border-bottom: 1px solid #ebedf0;
				-webkit-transform: scaleY(.5);
				transform: scaleY(.5);
			}
		}
		.kline{
			width: 95%;
			margin-left: 3%;
			min-height: 260px;
		}
	}
</style>
<template>
    <div class="deal">
		<!-- <m-header> -->
		<!-- <van-button class="leftBox" color="linear-gradient(to right, #ffae00 , #ff8400)" size="small" @click="openAppointDeal()">定向交易</van-button> -->
		<!-- <div class="leftBox underline" @click="showBuyModelBtn()">我要买入</div> -->
		<!-- <div class="leftBox underline" @click="openAppointDeal()">定向交易</div> -->
		<!-- <div class="text">市场</div> -->
		<!-- <div class="rightBox text underline" @click="toMyDealPage()">我的交易</div> -->
		<!-- </m-header> -->
		<!-- <div class="margTHeader" v-if="!list1.length">
			<van-skeleton :animate="false" :row="20">
				<div>您好主人，小帮正在努力加载中</div>
			</van-skeleton>
		</div> -->
		<!-- <div class="kline" id="kline"></div> -->
		<van-button type="info" size="normal" to="kline" color="#ff8400" :block="true"><span class="letterSpacing">查看K线图</span></van-button>
		<van-sticky>
			<div class="statistics">
				<div class="line clearBoth flexCenter f-14">
					<div class="left title">智能统计小助手</div>
					<div class="right">求购总量 {{dealPageInfo.currentBuyNum}}</div>
				</div>
				<div class="line clearBoth">
					<div class="left">平台指导价 {{dealPageInfo.currentPlatformPrice}}CNY</div>
					<div class="right">24小时成交量 {{dealPageInfo.transactionNum24}}</div>
				</div>
				<!-- <div class="line clearBoth">
					<div class="right">今日目前成交量 {{dealPageInfo.todayTransactionNum}}</div>
					<div class="right">平台指导价求购量 {{dealPageInfo.currentPriceBuyNum}}</div>
				</div> -->
			</div>
		</van-sticky>
		
		<van-pull-refresh v-model="loading" @refresh="refreshEvent">
			<!-- <div class="line1pxbgcolor"></div>
			<div class="dealContent">
				<div class="dealList">
					<div class="item" v-for="item in list1" :key="item.id">
						<div class="boxLeft">
							<div class="">单价 {{item.price}}CNY</div>
							<div class="margT10">数量 {{item.minNumber}}~{{item.maxNumber}}{{$api.coinUnit}}</div>
						</div>
						<div class="boxRight">
							<div>合计 {{totalPrice(item.price,item.maxNumber)}}CNY</div>
							<div class="margT3"><van-button @click="showPickSellModelBtn(item)" type="danger" size="mini" loading-type="spinner">随机卖</van-button></div>
						</div>
					</div>
				</div>
				<div class="placeholderLine"></div>
				<div class="placeholderLine"></div>
				<div class="placeholderLine"></div>
				<div class="paddingWing" v-if="totalItems1>0">
					<van-pagination 
					  v-model="currentPage1" 
					  :total-items="totalItems1" 
					  :items-per-page="pageSize"
					  :show-page-size="3" 
					  force-ellipses
					  @change="changeCurrentPage1"
					/>
				</div>
				<div class="placeholderLine"></div>
				<div class="placeholderLine"></div>
				<div class="placeholderLine"></div>
			</div> -->
			<van-tabs v-model="tabActiveName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
			 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
				<van-tab title="平价市场" name="dealArea1">
					<div class="line1pxbgcolor"></div>
					<div class="dealContent">
						<div class="dealList">
							<div class="item" v-for="item in list1" :key="item.id">
								<div class="boxLeft">
									<div class="">单价 {{item.price}}CNY</div>
									<div class="margT10">数量 {{item.minNumber}}~{{item.maxNumber}}{{$api.coinUnit}}</div>
								</div>
								<div class="boxRight">
									<div>合计 {{totalPrice(item.price,item.maxNumber)}}CNY</div>
									<div class="margT3"><van-button @click="showPickSellModelBtn(item)" type="danger" size="mini" loading-type="spinner">随机卖</van-button></div>
								</div>
							</div>
						</div>
						<div class="placeholderLine"></div>
						<div class="placeholderLine"></div>
						<div class="placeholderLine"></div>
						<div class="paddingWing" v-if="totalItems1>0">
							<van-pagination 
							  v-model="currentPage1" 
							  :total-items="totalItems1" 
							  :items-per-page="pageSize"
							  :show-page-size="3" 
							  force-ellipses
							  @change="changeCurrentPage1"
							/>
						</div>
						<div class="placeholderLine"></div>
						<div class="placeholderLine"></div>
						<div class="placeholderLine"></div>
					</div>
				</van-tab>
				<van-tab title="溢价市场" name="dealArea2">
					<div class="dealContent">
						<div class="dealList">
							<div class="line1pxbgcolor"></div>
							<div class="item" v-for="item in list2" :key="item.id">
								<div class="boxLeft">
									<div class="">单价 {{item.price}}CNY</div>
									<div class="margT10">数量 {{item.minNumber}}~{{item.maxNumber}}{{$api.coinUnit}}</div>
								</div>
								<div class="boxRight">
									<div>合计 {{totalPrice(item.price,item.maxNumber)}}CNY</div>
									<div class="margT3"><van-button @click="showPickSellModelBtn(item)" type="danger" size="mini" loading-type="spinner">随机卖</van-button></div>
								</div>
							</div>
						</div>
						<div class="placeholderLine"></div>
						<div class="placeholderLine"></div>
						<div class="placeholderLine"></div>
						<div class="paddingWing" v-if="totalItems2>0">
							<van-pagination 
							  v-model="currentPage2" 
							  :total-items="totalItems2" 
							  :items-per-page="pageSize"
							  :show-page-size="3" 
							  force-ellipses
							  @change="changeCurrentPage2"
							/>
						</div>
						<div class="placeholderLine"></div>
						<div class="placeholderLine"></div>
						<div class="placeholderLine"></div>
					</div>
				</van-tab>
			</van-tabs>	
		</van-pull-refresh>
		
		<van-action-sheet v-model="showPickSellModel" title="卖出">
		  <van-cell-group>
			  <div class="pickSellContent">
				  <div class="showMyInfo">
					  <div>我的 矿石:{{userInfo.thisWeekMineral.toFixed(2)}}个  帮扶券:{{userInfo.platformTicket.toFixed(2)}}个</div>
					  <div class="placeholderLine10"></div>
					  <div>若卖{{form4pickSellBill.sellAmountSliderValue}}个后</div>
					  <div class="placeholderLine10"></div>
				  	  <div class="">所剩 矿石:{{ remainMineral }}个 帮扶券:{{ remainPlateForm }}个</div>
				  </div>
				  <div class="placeholderLine20 clear"></div>
				  <div class="inLine">
				  	<span class="label">想卖数量</span>
				  	<span class="value">
				  		<span class="valueLeft">
							<van-stepper v-model="form4pickSellBill.sellAmountSliderValue" input-width="40px" disable-input integer :max="maxBill"/>
						</span>
						<span class="valueRight">
							<van-slider @change="onChange4slider" v-model="form4pickSellBill.sellAmountSliderValue" :min="minBill" :max="maxBill" active-color="#ffae00"/>
						</span>
				  	</span>
				  </div>
			  </div>
			  <van-field v-model="form4pickSellBill.price" disabled clearable label="单价"/>
			  <!-- <van-field readonly clickable label="服务费" :value="serviceCharge"/> -->
			  <van-field readonly clickable label="选择服务费" :value="serviceCharge" placeholder="请先选择服务费" @click="showPicker4ServiceChargePopup = true" @blur="validate4pickSellBill('serviceCharge')" :error-message="errorInfo4pickSellBill.serviceCharge"/>
			  <van-popup v-model="showPicker4ServiceChargePopup" position="bottom">
			    <van-picker
			      show-toolbar
			      :columns="columns4ServiceCharge"
			      @cancel="showPicker4ServiceChargePopup = false"
			      @confirm="onConfirm4ServiceCharge"
			    />
			  </van-popup>
			  <van-field required v-model="form4pickSellBill.safePassword" type="password" clearable label="安全密码" @blur="validate4pickSellBill('safePassword')" :error-message="errorInfo4pickSellBill.safePassword" placeholder="请填写安全密码"/>
		  </van-cell-group>
		  <div class="sureAppointBtnBox">
			  <div class="tip4model3">系统提示：卖出匹配是随机的，最新挂买的前{{dealPageInfo.limit}}单会优先被匹配。</div>
			  <div class="placeholderLine10"></div>
			  <van-button @click="sureHangPickedSellBillBtn" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" :loading="sellBtnLoading" loading-type="spinner">确 认</van-button>
		  </div>
		</van-action-sheet>
		
		<div class="buy" @click="showBuyModelBtn()">挂买</div>
		<van-action-sheet v-model="showBuyModel" title="挂买">
			<div class="hangBuyContent">
				<!-- <div class="tipText paddingWing">
					价格涨幅规律：每当平台指导价的求购量超过10万{{pen}}，则涨0.1CNY。
				</div> -->
				<van-cell-group>
				<van-field v-model="userInfo.canBuyNum" label="我的限购数量" disabled right-icon="question-o" @click-right-icon="alertTip(clickIconTip.buyAmount)"/>
				<van-field v-model="form4BuyBill.buyAmount" required clearable label="想买数量" right-icon="question-o" placeholder="请填写想要买入的总数量"
				  @click-right-icon="alertTip(clickIconTip.buyAmount)"
				  @blur="validate4BuyBill('buyAmount')"
				  :error-message="errorInfo4BuyBill.buyAmount"/>
				<van-field v-model="form4BuyBill.buyLowestAmount" required clearable label="最低匹配数量" right-icon="question-o" placeholder="请填写允许被匹配的最低数量"
				@click-right-icon="alertTip(clickIconTip.buyLowestAmount)"
				@blur="validate4BuyBill('buyLowestAmount')"
				:error-message="errorInfo4BuyBill.buyLowestAmount"/>
				<van-field v-model="form4BuyBill.price" disabled clearable label="单价" right-icon="question-o" placeholder="请填写单价"
				  @click-right-icon="alertTip(clickIconTip.platformUnivalence)"/>
				<div class="inLine">
					<span class="label">开溢价</span>
					<span class="value">
						<span class="valueRight">
							<van-slider v-model="addPriceValue" @change="onChange4sliderPrice" :min="min4Price" :max="max4Price"/>
						</span>
						<!-- <span class="valueRight">
							<van-slider @change="onChange4sliderPrice" v-model="form4BuyBill.price" :min="form4BuyBill.price" :max="max4Price" active-color="#ffae00"/>
						</span> -->
					</span>
				</div>
				<van-field v-model="form4BuyBill.safePassword" type="password" required clearable label="安全密码" right-icon="question-o" placeholder="请填写安全密码"
				  @click-right-icon="alertTip(clickIconTip.safePassword)"
				  @blur="validate4BuyBill('safePassword')"
				  :error-message="errorInfo4BuyBill.safePassword"
				  />
				</van-cell-group>
				<div class="sureAppointBtnBox">
				  <van-button @click="sureHangBuyBillBtn" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true">确 认</van-button>
				</div>
			</div>
		</van-action-sheet>
		<van-action-sheet v-model="showTipModel" title="问题小帮手">
			<div class="paddingWing">
				<div class="placeholderLine40"></div>
				<div class="textCenter f-12">
					{{questionText}}
				</div>
				<div class="placeholderLine40"></div>
				<div class="placeholderLine40"></div>
			</div>
		</van-action-sheet>
    </div>
</template>

<script>
// import { ajax } from "@/api/ajax";
import mHeader from '@/components/Header.vue';
import mFullscreen from '@/components/Fullscreen.vue';
import { Skeleton } from 'vant';
import { Dialog } from 'vant';
export default {
	data() {
		return {
			sendSmsHref:"",
			smsContent:"",
			showSendSMSTipModel:false,
			questionText:"",
			showTipModel:false,
			addPriceValue:0,
			min4Price:0,
			max4Price:3,
			step4Price:0.01,
			sellBtnLoading:false,
			tabActiveName:"dealArea1",
			currentPage1:1,
			currentPage2:1,
			pageSize:8,
			pageCount:0,
			totalItems1:0,
			totalItems2:0,
			showAppointDealModel:false,//定向交易模型
			showBuyModel:false,//挂买单模型
			showSellModel:false,//挂卖单模型
			showPickSellModel:false,//指定卖出
			//定向交易
			sellAmount:"",
			univalence:"",
			blockAddress:"",
			//挂买单
			form4BuyBill:{
				buyAmount:"",
				buyLowestAmount:"",
				price:0.28,
				safePassword:"",
			},
			errorInfo4BuyBill:{
				buyAmount:"",
				buyLowestAmount:"",
				safePassword:"",
			},
			serviceCharge:'',
			//挂所选择的卖单
			form4pickSellBill:{
				sellAmountSliderValue:1,
				price:0.01,
				serviceCharge:0,
				safePassword:"",
			},
			errorInfo4pickSellBill:{
				serviceCharge:"",
				safePassword:"",
			},
			//定向交易
			form4AppointDeal:{
				sellAmount:'',
				price:'',
				serviceCharge:0,
				safePassword:"",
			},
			errorInfo4AppointDeal:{
				sellAmount:"",
				price:"",
				blockAddress:"",
				safePassword:"",
			},
			sellAmountPlaceholder:"单笔挂卖数量的区间为1~2000",
			minBill:1,
			maxBill:2000,
			appintDealValidate:true,
			clickIconTip:{
				sellAmount:"",
				univalence:"",
				blockAddress:"",
				buyAmount:"",
				buyLowestAmount:"",
				platformUnivalence:"",
				serviceCharge:"",
				safePassword:""
			},
			errorInfo:{
				sellAmount:"",
				univalence:"",
				blockAddress:"",
				buyAmount:"",
				buyLowestAmount:"",
				safePassword:"",
			},
			isShowSureBtn:false,
			list1:[],
			loading1:false,
			finished1: false,
			list2:[],
			loading2: true,
			finished2: false,
			currentBuyNum:1314216,
			userInfo:"",
			userIdBuyBillCount:0,
			userIdSellBillCount:0,
			loading: true,
			canBuyNum:2000,
			columns4ServiceCharge: [],
			showPicker4ServiceChargePopup: false,
			platformTicket:0,
			buyAndSellInfo:{},
			dealPageInfo:{
				currentBuyNum:100000,
				currentPriceBuyNum:100000,
				todayTransactionNum:100000,
				initCanBuyNu:100000,
				currentPlatformPrice:100000
			},
			transactionVo4BuyerTip:"",
		}
	},  
	components:{
	    mHeader,mFullscreen
	},
	watch: {
	    addPriceValue(val, oldVal) {
			let _this = this;
	        //console.log("addPriceValue = " + val + " , oldValue = " + oldVal)
			if(val == 0){
				_this.form4BuyBill.price = _this.dealPageInfo.currentPlatformPrice;
			}else{
				_this.form4BuyBill.price = (_this.dealPageInfo.currentPlatformPrice*1.3 + val).toFixed(2);
			}
	    }
	},
	computed:{
		/* remainContributionValue () {
			let _this = this;
			let num = _this.userInfo.contributionValue - _this.form4pickSellBill.sellAmountSliderValue;
			return num.toFixed(2);
		}, */
		remainMineral () {
			let _this = this;
			let num = 0
			if(_this.form4pickSellBill.serviceCharge==0){
				num = _this.userInfo.thisWeekMineral - _this.form4pickSellBill.sellAmountSliderValue*(1.0+_this.dealPageInfo.dealRatio);
			}else{
				num = _this.userInfo.thisWeekMineral - _this.form4pickSellBill.sellAmountSliderValue*1.1;
			}
			return num.toFixed(2); 
		},
		remainPlateForm () {
			let _this = this;
			// //console.log('_this.userInfo.platformTicket',_this.platformTicket);
			let num = 0;//_this.userInfo.platformTicket
			if(_this.form4pickSellBill.serviceCharge==0){
				num = _this.platformTicket;
			}else if(_this.form4pickSellBill.serviceCharge==1){
				num = _this.platformTicket - _this.form4pickSellBill.sellAmountSliderValue*0.1;
				if(num<0){
					alert('系统提示：对不起，您的帮扶券不够，请选择矿石做服务费');
					_this.form4pickSellBill.serviceCharge = 0;
					_this.serviceCharge = `${_this.dealPageInfo.dealRatio*100}%矿石`;
					num = _this.platformTicket;
					return num;
				}
			}
			// //console.log('num',num);
			return num.toFixed(2); 
		}
	},
	created() {
		let _this = this;
		_this.bsTip();
		_this.initializeData();
		_this.initializeTabActiveName();
	},
	methods:{
		bsTip(){
			let _this = this;
			let isWeixin = _this.$utils.isWeixin();
			if(isWeixin){
				Dialog.alert({
				  title: '系统提示',
				  message: _this.$api.bsTip
				}).then(() => {
				  // on close
				});
			}
		},
		alertTip(text){
			this.showTipModel = true;
			this.questionText = text;
		},
		onConfirm4ServiceCharge(item) {
		  let _this = this;
		  _this.serviceCharge = item.text;
		  _this.form4pickSellBill.serviceCharge = item.id;
		  // //console.log("_this.form4pickSellBill.serviceCharge",item.id);
		  _this.showPicker4ServiceChargePopup = false;
		  if(_this.form4pickSellBill.serviceCharge == 1){
			  _this.maxBill = Math.floor(_this.maxBill*1.1);
		  }
		},
		onChange4ServiceCharge(picker, value, index) {
		  Toast(`当前值：${value}, 当前索引：${index}`);
		},
		onChange4slider(value){
			//console.log(value);
			/* this.form4pickSellBill.sellAmountSliderValue = parseInt(parseFloat(value).toFixed(2)); */
		},
		onChange4sliderPrice(value){
			//console.log(value);
			let _this = this;
			if(value == 0){
				_this.form4BuyBill.price = _this.dealPageInfo.currentPlatformPrice;
			}else{
				_this.form4BuyBill.price = (_this.dealPageInfo.currentPlatformPrice*1.3 + value).toFixed(2);
			}
		},
		toMyDealPage(){
			let _this = this;
			_this.$router.push('/myDeal4Deal');
		},
		refreshEvent() {
			//console.log("refresh")
			let _this = this;
			_this.getDealPageInfo();
			if(_this.tabActiveName == 'dealArea1'){
				//console.log("refresh1");
				_this.currentPage1 = 1;
				// _this.list1 = [];
				_this.finished1 = false;
				_this.getListGeneral();
			}else if(_this.tabActiveName == 'dealArea2'){
				//console.log("refresh2");
				_this.currentPage2 = 1;
				_this.list2 = [];
				_this.finished2 = false;
				_this.getListAddPrice();
			}
		},
		totalPrice(a,b){
			return (a*b).toFixed(2);
		},
		tabChange(name,title){
			let _this = this;
			//console.log(name,title);
			this.$cookies.set("tabName4Deal", name, 60 * 60 * 1)
			if(name == 'dealArea2'){
				// //console.log(localStorage.getItem("LIST2"),"list2")
				if(_this.$cookies.get('totalItems2')){
					_this.list2 = JSON.parse(localStorage.getItem("LIST2"));
					_this.totalItems2 = parseInt(_this.$cookies.get('totalItems2'));
					//console.log('_this.totalItems2',_this.totalItems2);
				}else{
					_this.getListAddPrice();
				}
			}else if(name == 'dealArea1'){
				if(_this.$cookies.get('totalItems1')){
					_this.list1 = JSON.parse(localStorage.getItem("LIST1"));
					_this.totalItems1 = parseInt(_this.$cookies.get('totalItems1'));
					//console.log('_this.totalItems1',_this.totalItems1);
				}else{
					_this.getListGeneral();
				}
			}
		},
		initializeData(){
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
				_this.platformTicket = parseFloat(_this.userInfo.platformTicket);
				_this.canBuyNum = _this.userInfo.canBuyNum;
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			//console.log("_this.$cookies.get('haveDealPageInfo')",_this.$cookies.get('haveDealPageInfo'));
			if(_this.$cookies.get('haveDealPageInfo')){
				_this.dealPageInfo = JSON.parse(localStorage.getItem('dealPageInfo'));
				_this.serviceCharge = `${_this.dealPageInfo.dealRatio*100}%矿石`;
				_this.columns4ServiceCharge = [{id:0,text:_this.serviceCharge},{id:1,text:'10%矿石+10%帮扶券'}];
				_this.form4BuyBill.price = parseFloat(_this.dealPageInfo.currentPlatformPrice);
			}else{
				_this.getDealPageInfo();
			}
			//给人买卖信息，次缓存来自我的页面
			/* if(_this.$cookies.get("buyAndSellInfo")){
				_this.buyAndSellInfo = _this.$cookies.get("buyAndSellInfo");
				_this.canBuyNum = _this.buyAndSellInfo.canBuyNum;
			}else{
				_this.getBuyAndSellInfo();
			} */
			_this.clickIconTip = {
				sellAmount:"请填写单次挂卖数量",
				univalence:_this.$reg.univalenceHint,
				blockAddress:_this.$reg.block_addressHint,
				buyAmount:_this.$reg.positive_integerHint4BuyBill,
				buyLowestAmount:"允许被他人匹配的最低数量",
				platformUnivalence:"请按平台指导价挂单",
				serviceCharge:"请先选择服务费",
				safePassword:_this.$reg.safePasswordHint
			}
			if(_this.$cookies.get('isRefreshDealInfo')==1){
				_this.refreshEvent();
				_this.$cookies.set('isRefreshDealInfo',0,_this.$api.cookiesTime);
			}
		},
		getHomeMineralStaticInfo(){
			let _this = this;
			_this.loading = true;
			_this.$ajax.ajax(_this.$api.getHomeMineralStaticInfo, 'GET', null, function(res) {
				if (res.code == _this.$api.CODE_OK) {
					_this.statistics = res.data;
					_this.$cookies.set('statistics',_this.statistics,_this.$api.cookiesTime);
				}
			})
		},
		getDealPageInfo(){
			let _this = this;
			_this.$ajax.ajax(_this.$api.getDealPageInfo, 'POST', null, function(res) {
				//console.log('getDealPageInfo', res);
				if (res.code == _this.$api.CODE_OK) {
					_this.dealPageInfo = res.data;
					_this.serviceCharge = `${_this.dealPageInfo.dealRatio*100}%矿石`;
					_this.columns4ServiceCharge = [{id:0,text:_this.serviceCharge},{id:1,text:'10%矿石+10%帮扶券'}];
					_this.form4BuyBill.price = parseFloat(_this.dealPageInfo.currentPlatformPrice);
					_this.$cookies.set("haveDealPageInfo",1, 60 * 30 * 1);
					localStorage.setItem("dealPageInfo",JSON.stringify(_this.dealPageInfo))
				}
			})
		},
		getListGeneral(){
			let _this = this;
			let params = {
				pageNo: _this.currentPage1,
				pageSize: _this.pageSize,
			}
			//console.log(params,'params')
			_this.loading1 = true;
			_this.$ajax.ajax(_this.$api.getAssistBuyBillListGeneralPage, 'GET', params, function(res) {
				// //console.log('res', res);
				if (res.code == _this.$api.CODE_OK) {
					_this.list1 = res.data.list;
					_this.totalItems1 = res.data.total;
					_this.$cookies.set("totalItems1", _this.totalItems1, 60 * 30 * 1)
					_this.loading1 = false;
					_this.loading = false;
					if(_this.list1==[]){
						
					}else{
						localStorage.setItem("LIST1",JSON.stringify(_this.list1));
					}
				}
			})
		},
		getListAddPrice(){
			let _this = this;
			let params = {
				pageNo: _this.currentPage2,
				pageSize: _this.pageSize,
			}
			_this.loading2 = true;
			_this.$ajax.ajax(_this.$api.getAssistBuyBillListAddPricePage, 'GET', params, function(res) {
				// //console.log('res', res);
				if (res.code == _this.$api.CODE_OK) {
					_this.list2 = res.data.list;
					_this.totalItems2 = res.data.total;
					_this.$cookies.set("totalItems2", _this.totalItems2, 60 * 30 * 1)
					_this.loading2 = false;
					_this.loading = false;
					localStorage.setItem("LIST2",JSON.stringify(_this.list2));
				}
			})
		},
		initializeTabActiveName(){
			let _this = this;
			if(_this.$cookies.isKey("tabName4Deal")){
				_this.tabActiveName = _this.$cookies.get("tabName4Deal");
			}
			//console.log('tabActiveName==dealArea2');
			//console.log(_this.tabActiveName == "dealArea2")
			if(_this.tabActiveName == "dealArea2"){
				if(_this.$cookies.isKey("totalItems2")){
					_this.totalItems2 = parseInt(_this.$cookies.get("totalItems2"));
				}else{
					_this.getListAddPrice();
				}
				if(localStorage.getItem("LIST2")){
					_this.list2 = JSON.parse(localStorage.getItem("LIST2"))|| [];
					_this.list1 = JSON.parse(localStorage.getItem("LIST1"))|| [];
					_this.loading = false;
				}else{
					_this.getListAddPrice();
				}
			}else if(_this.tabActiveName == "dealArea1"){
				if(_this.$cookies.isKey("totalItems1")){
					_this.totalItems1 = parseInt(_this.$cookies.get("totalItems1"));
				}else{
					_this.getListGeneral();
				}
				//从缓存中获取list1,先立刻加载出页面，然后再从接口中获取数据list1，提高用户体验
				if(localStorage.getItem("LIST1")){
					_this.list1 = JSON.parse(localStorage.getItem("LIST1"))|| [];
					_this.list2 = JSON.parse(localStorage.getItem("LIST2"))|| [];
					_this.loading = false;
				}else{
					_this.getListGeneral();
				}
			}
		},
		showPickSellModelBtn(item){
			let _this = this;
			if(_this.tabActiveName == 'dealArea2'){
				if(_this.userInfo.myCalculationPower<1){
					Dialog.alert({
					  title: '系统提示',
					  message: '个人算力达到1G后即可开通溢价交易'
					}).then(() => {
					  // on close
					});
					return;
				}
			}
			// 如果用户在中途选择了第二种服务费，最大可卖数量要在原来基础上加10%
			//卖出需要贡献值
			// let myContributionValue = _this.userInfo.contributionValue;
			let myMineralNum = _this.userInfo.thisWeekMineral;
			let myMaxCanSellNum = 0;
			let ratio = _this.dealPageInfo.dealRatio;
			if(_this.form4pickSellBill.serviceCharge==0){
				//卖出需要贡献值
				/* if(myContributionValue<=myMineralNum/(1.0 + ratio)){
					myMaxCanSellNum = myContributionValue;
				}
				if(myContributionValue>=myMineralNum/(1.0 + ratio)){
					myMaxCanSellNum = myMineralNum/(1.0 + ratio);
				} */
				myMaxCanSellNum = myMineralNum/(1.0 + ratio);
			}else if(_this.form4pickSellBill.serviceCharge==1){
				//卖出需要贡献值
				/* if(myContributionValue<=myMineralNum/1.1){
					myMaxCanSellNum = myContributionValue;
				}
				if(myContributionValue>=myMineralNum){
					myMaxCanSellNum = myMineralNum/1.1;
				} */
				myMaxCanSellNum = myMineralNum/1.1;
			}
			if(myMaxCanSellNum>=item.minNumber&&myMaxCanSellNum<=item.maxNumber){
				_this.maxBill = Math.floor(myMaxCanSellNum);
			}
			if(myMaxCanSellNum>=item.maxNumber){
				_this.maxBill = Math.floor(item.maxNumber);
			}
			if(myMaxCanSellNum<item.minNumber){
				Dialog.alert({
				  title: '系统提示',
				  message: '您的最大可卖数量不够匹配该买单。'
				}).then(() => {
				  // on close
				});
				return;
			}
			_this.showPickSellModel = true;
			_this.form4pickSellBill.price = item.price;
			_this.form4pickSellBill.sellAmountSliderValue = item.minNumber;
			_this.minBill = item.minNumber;
			//console.log('_this.maxBill',_this.maxBill);
		},
		//挂卖操作
		sureHangPickedSellBillBtn(){
			let _this = this;
			//console.log('sureHangPickedSellBillBtn');
			//挂卖之前先判断时间
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
				/* sellerId:_this.userInfo.userId, */
				serviceCharge:_this.form4pickSellBill.serviceCharge,
				num:_this.form4pickSellBill.sellAmountSliderValue,
				price:_this.form4pickSellBill.price,
				safePassword:_this.form4pickSellBill.safePassword
			}
			if(_this.userInfo.actived!=1 || _this.userInfo.buyMachineNum<2){
				Dialog.alert({
				  title: '系统提示',
				  message: `请先去完成"我的--任务中心"里的前2个任务`
				}).then(() => {
				  // on close
				});
				return;
			}
			//console.log("params",params);
			if(_this.$utils.hasNull(params)){
				_this.$toast('请填写完整信息');
				return;
			}
			if(_this.$utils.hasVal(_this.errorInfo4pickSellBill)){
				_this.$toast('请按要求填写信息');
				return;
			}
			
			//console.log("_this.remainMineral",_this.remainMineral);
			if(_this.remainMineral<2.0){
				Dialog.alert({
				  title: '系统提示',
				  message: "卖出后所剩矿石数不得少于2个，注册所赠送的2个矿石是用来复投矿机的"
				}).then(() => {
				  // on close
				});
			}
			/* if(_this.userInfo.thisWeekMineral - params.num){
				_this.$toast('系统提示：您的矿石不够');
				return;
			} */
			//判断该用户的矿石和贡献值够不够
			if(_this.userInfo.thisWeekMineral<params.num){
				_this.$toast('系统提示：您的矿石不够');
				return;
			}
			/* if(_this.userInfo.contributionValue<params.num){
				_this.$toast('系统提示：您的贡献值不够');
				return;
			} */
			params.safePassword = _this.$JsEncrypt.encrypt(_this.form4pickSellBill.safePassword);
			_this.sellBtnLoading = true;
			//console.log('可请求接口');
			_this.$ajax.ajax(_this.$api.insertTransaction4PickBill, 'POST', params, function(res) {
				/* //console.log('insertTransaction4PickBill')
				//console.log('res', res); */
				if (res.code == _this.$api.CODE_OK) { // 200
					_this.showSellModel = false;
					_this.transactionVo4BuyerTip = res.data;
					
					//_this.showSendSMSTipModel = true;
					//把是否刷新用户信息设置成true,打开‘我的’页面的时候，会自动重新获取一遍userInfo
					_this.$cookies.set('isRefreshUserInfo',true,_this.$api.cookiesTime);
					//路由跳转
					//缓存所需要显示的页面
					_this.$cookies.set("tabName4MyDeal", "get", 60 * 60 * 1)
					_this.$router.push({path:'myDeal',query:{dealType:0,mobilePhone:_this.transactionVo4BuyerTip.mobilePhone,num:_this.transactionVo4BuyerTip.num}});
					
					//_this.$toast(res.message);
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
				_this.sellBtnLoading = false;
			})
		},
		sendShortMessageBtn(){
			_this.sellBtnLoading = false;
			//把是否刷新用户信息设置成true,打开‘我的’页面的时候，会自动重新获取一遍userInfo
			_this.$cookies.set('isRefreshUserInfo',true,_this.$api.cookiesTime);
			//路由跳转
			//缓存所需要显示的页面
			_this.$cookies.set("tabName4MyDeal", "get", 60 * 60 * 1)
			_this.$router.push('myDeal');
		},
		showSellModelBtn(){
			let _this = this;
			let params = {
				userId:_this.userInfo.userId,
				price: _this.dealPageInfo.currentPlatformPrice
			}
			_this.$ajax.ajax(_this.$api.getMinAndMaxBuyBillByUserId, 'GET', params, function(res) {
				//console.log('res', res);
				if (res.code == _this.$api.CODE_OK) { // 200
					_this.minBill = res.data.minBill;
					_this.maxBill = res.data.maxBill;
					_this.clickIconTip.sellAmount = `该单价单笔可挂卖量为${_this.minBill}~${_this.maxBill}`;
					_this.sellAmountPlaceholder = `单笔可挂卖量为${_this.minBill}~${_this.maxBill}`;
					_this.errorInfo4BuyBill.sellAmount = _this.clickIconTip.sellAmount;
				}
			})
			_this.$ajax.ajax(_this.$api.getAssistTransactionCountBySellerId, 'GET', null, function(res) {
				// //console.log('res', res);
				if (res.code == _this.$api.CODE_OK) { // 200
					_this.userIdSellBillCount = res.data;
					if(_this.userIdSellBillCount>0){
						Dialog.alert({
						  title: '系统提示',
						  message: '对不起，您当前还有未完成交易，是否前去完成？'
						}).then(() => {
						  // on close
						  _this.$cookies.set("tabName4MyDeal", "get", 60 * 60 * 1)
						  _this.$router.push('myDeal');
						});
					}else{
						_this.showSellModel = true;
					}
				}else{
					_this.$toast(res.message);
				}
			})
		},
		showBuyModelBtn(){
			let _this = this;
			_this.$utils.formClear(_this.errorInfo4BuyBill);
			_this.showBuyModel = true;
			_this.judgeMyBuyBill();
		},
		judgeMyBuyBill(){
			let _this = this;
			let params = {
				userId: _this.userInfo.userId,
				price: _this.dealPageInfo.currentPlatformPrice
			}
			_this.$ajax.ajax(_this.$api.getAssistBuyBillListCountByUserId, 'GET', params, function(res) {
				// //console.log('res', res);
				if (res.code == _this.$api.CODE_OK) { // 200
					_this.userIdBuyBillCount = res.data;
					/* if(_this.userIdBuyBillCount>0){
						Dialog.alert({
						  title: '系统提示',
						  message: '平台指导价每人只能挂一个买单，前去查看您所挂的买单？'
						}).then(() => {
						  // on close
						  _this.$cookies.set("tabName4Book", "buy", 60 * 60 * 1)
						  _this.$router.push('myDeal');
						});
					}else{
						
					} */
				}else{
					_this.$toast(res.message);
				}
			})
		},
		sureHangBuyBillBtn(){
			let _this = this;
			/* if(_this.userIdBuyBillCount>0){
				Dialog.alert({
				  title: '系统提示',
				  message: '同一价格每人只能挂一单买单，前去查看您所挂的买单？'
				}).then(() => {
				  // on close
				  _this.$cookies.set("tabName4Book", "buy", 60 * 60 * 1)
				  _this.$router.push('myDeal');
				});
				return;
			} */
			if(_this.userInfo.actived<=0){
				Dialog.alert({
				  title: '系统提示',
				  message: '挂单需先完成实名认证'
				}).then(() => {
				  // on close
				});
				return;
			}
			let params = {
				/*userId:_this.userInfo.userId,
				serviceCharge:_this.form4BuyBill.serviceCharge, */
				maxNumber:_this.form4BuyBill.buyAmount,
				minNumber:_this.form4BuyBill.buyLowestAmount,
				price:_this.form4BuyBill.price,
				type:_this.addPriceValue==0?0:1,
				safePassword:_this.form4BuyBill.safePassword
			}
			//console.log('params',params);
			//console.log('_this.form4BuyBill.buyAmount',_this.form4BuyBill.buyAmount);
			//console.log('_this.form4BuyBill.buyLowestAmount',_this.form4BuyBill.buyLowestAmount);
			//console.log('_this.form4BuyBill.buyAmount<_this.form4BuyBill.buyLowestAmount',_this.form4BuyBill.buyAmount<_this.form4BuyBill.buyLowestAmount);
			if(_this.form4BuyBill.buyAmount<_this.form4BuyBill.buyLowestAmount){
				// _this.$toast('想买数量和最低匹配数量填写反了');
				Dialog.alert({
				  title: '系统提示',
				  message: '想买数量和最低匹配数量填写反了'
				}).then(() => {
				  // on close
				});
				return;
			}
			if(_this.$utils.hasNull(params)){
				_this.$toast('请填写完整信息');
				return;
			}
			//console.log('_this.errorInfo4BuyBill',_this.errorInfo4BuyBill);
			if(_this.$utils.hasVal(_this.errorInfo4BuyBill)){
				_this.$toast('请按要求填写信息');
				return;
			}else{
				//console.log('可请求接口');
				params.safePassword = _this.$JsEncrypt.encrypt(_this.form4BuyBill.safePassword);
				_this.$ajax.ajax(_this.$api.insertBuyBill, 'POST', params, function(res) {
					// //console.log('res', res);
					if (res.code == _this.$api.CODE_OK) { // 200
						if(res.data == 1){
							_this.showBuyModel = false;
							_this.$toast(res.message);
							// _this.getList();
							_this.$cookies.set("tabName4MyDeal", "buy", 60 * 60 * 1)
							_this.$cookies.set("isRefreshDealInfo", 1, 60 * 60 * 1)
							_this.$router.push('myDeal');
						}
					}else if(res.code == 2003){
						Dialog.alert({
						  title: '系统提示',
						  message: '同一价格每人只能挂一单，前去查看您所挂的买单？'
						}).then(() => {
						  // on close
						  _this.$cookies.set("tabName4MyDeal", "buy", 60 * 60 * 1)
						  _this.$router.push('myDeal');
						});
						return;
					}else{
						_this.$toast(res.message);
					}
					
				})
			}
		},
		validate4BuyBill(key){
			let _this = this;
			//console.log(key,_this.form4BuyBill[key])
			if(key == 'buyAmount') {
				//console.log(_this.canBuyNum,'_this.canBuyNum');
				if(_this.form4BuyBill[key]>=1&&_this.form4BuyBill[key]<=_this.canBuyNum){
					_this.errorInfo4BuyBill.buyAmount = '';
				}else{
					_this.errorInfo4BuyBill.buyAmount = `您当前的限购数量为${_this.canBuyNum}`;
				}
			}else if(key == 'buyLowestAmount') {
				if(_this.form4BuyBill[key]>=1&&_this.form4BuyBill[key]<=_this.canBuyNum){
					_this.errorInfo4BuyBill.buyLowestAmount = '';
				}else{
					_this.errorInfo4BuyBill.buyLowestAmount = `您当前的限购数量为${_this.canBuyNum}`;
				}
			}else if(key == 'safePassword') {
				if(_this.$reg.safePassword.test(_this.form4BuyBill[key])){
					_this.errorInfo4BuyBill.safePassword = '';
				}else{
					_this.errorInfo4BuyBill.safePassword = _this.clickIconTip.safePassword;
				}
			}
		},
		validate4pickSellBill(key){
			let _this = this;
			if(key == 'safePassword') {
				if(_this.$reg.safePassword.test(_this.form4pickSellBill[key])){
					_this.errorInfo4pickSellBill.safePassword = '';
				}else{
					_this.errorInfo4pickSellBill.safePassword = _this.clickIconTip.safePassword;
				}
			}else if(key == 'serviceCharge') {
				if(_this.form4pickSellBill[key]==0 || _this.form4pickSellBill[key]==1){
					_this.errorInfo4pickSellBill.serviceCharge = '';
				}else{
					_this.errorInfo4pickSellBill.serviceCharge = _this.clickIconTip.serviceCharge;
				}
			}
		},
		validate4AppointDeal(key){
			let _this = this;
			if(key == 'sellAmount') {
				if(_this.form4AppointDeal[key]>=1&&_this.form4AppointDeal[key]<=10000){//这里判断单次卖出的数量是否合法,由于
					_this.errorInfo4AppointDeal.sellAmount = '';
				}else{
					_this.errorInfo4AppointDeal.sellAmount = _this.clickIconTip.sellAmount;
				}
			}else if(key == 'price'){
				//console.log('_this.platformUnivalence',_this.platformUnivalence)
				if(parseFloat(_this.form4AppointDeal[key])>=_this.platformUnivalence&&parseFloat(_this.form4AppointDeal.price)<=(_this.platformUnivalence+3)){
					_this.errorInfo4AppointDeal.price = '';
				}else
				{
					_this.errorInfo4AppointDeal.price = '定向交易价格不符合平台规定';
				}
			}else if(key == 'blockAddress'){
				if(_this.$reg.block_address.test(_this.form4AppointDeal[key])){
					_this.errorInfo4AppointDeal.blockAddress = '';
				}else{
					_this.errorInfo4AppointDeal.blockAddress = _this.clickIconTip.blockAddress;
				}
			}else if(key == 'safePassword') {
				if(_this.$reg.safePassword.test(_this.form4AppointDeal[key])){
					_this.errorInfo4AppointDeal.safePassword = '';
				}else{
					_this.errorInfo4AppointDeal.safePassword = _this.clickIconTip.safePassword;
				}
			}
		},
		validate(key){
			let _this = this;
			if(key == 'sellAmount') {
				if(_this.sellAmount){//这里判断单次卖出的数量是否合法
					_this.errorInfo.sellAmount = '';
				}else{
					_this.errorInfo.sellAmount = _this.clickIconTip.sellAmount;
				}
			}else if(key == 'univalence'){
				if(_this.$reg.univalence.test(_this.univalence)){
					if(parseFloat(_this.univalence)>=_this.platformUnivalence&&parseFloat(_this.univalence)<1000000){
						_this.errorInfo.univalence = '';
					}else
					{
						_this.errorInfo.univalence = '请填写高于平台价且小于1000000的单价';
					}
					
				}else{
					_this.errorInfo.univalence = _this.clickIconTip.univalence;
				}
			}else if(key == 'blockAddress'){
				if(_this.$reg.block_address.test(_this.blockAddress)){
					_this.errorInfo.blockAddress = '';
				}else{
					_this.errorInfo.blockAddress = _this.clickIconTip.blockAddress;
				}
			}else if(key == 'buyAmount') {
				if(_this.$reg.positive_integer4BuyBill.test(_this.form4BuyBill[key])){
					_this.errorInfo.buyAmount = '';
				}else{
					_this.errorInfo.buyAmount = _this.clickIconTip.buyAmount;
				}
			}else if(key == 'buyLowestAmount') {
				if(_this.$reg.positive_integer4BuyBill.test(_this.form4BuyBill[key])){
					_this.errorInfo.buyLowestAmount = '';
				}else{
					_this.errorInfo.buyLowestAmount = _this.clickIconTip.buyLowestAmount;
				}
			}else if(key == 'safePassword') {
				if(_this.$reg.safePassword.test(_this.form4BuyBill[key])){
					_this.errorInfo.safePassword = '';
				}else{
					_this.errorInfo.safePassword = _this.clickIconTip.safePassword;
				}
			}
		},
		//定向交易
		openAppointDeal(){
			let _this = this;
			_this.showAppointDealModel = true;
		},
		changeCurrentPage1(val){
			let _this = this;
			//console.log('val',val);
			_this.currentPage1 = val;
			_this.getListGeneral();
		},
		changeCurrentPage2(val){
			let _this = this;
			//console.log('val',val);
			_this.currentPage2 = val;
			_this.getListAddPrice();
		},
		//刷新
		handleRefresh(){
			// this.$router.go(0)
		},
	}
}
</script>
