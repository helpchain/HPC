<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.millRecord{
		@include pageHaveHeight4Scroll();
		.millContent{
			background-color: $main-box-fh-bg-color;
			color: $main-box-fh-text-color;
			min-height: 100%;
			position: absolute;
			width: 100%;
			color: $mainTextColor;
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
				color: $main-box-fh-text-color;
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
							.nickName{
								font-weight: bold;
								font-size: 14px;
								.iconfont-name{
									font-size: 12px;
								}
								.textColor{
									color: $main-adorn-color;
								}
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
						flex: 0 0 20px;
						text-align: right;
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
		.textAdornColor{
			color: $main-adorn-color !important;
		}
	}
	
</style>
<template>
	<div class="millRecord">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				所售矿机记录表
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="millContent">
			<!-- <van-search
			  v-model="value"
			  placeholder="请输入搜索关键词"
			  show-action
			  shape="round"
			  @search="onSearch"
			>
			  <div slot="action" @click="onSearch">搜索</div>
			</van-search> -->
			<van-dropdown-menu>
			  <van-dropdown-item v-model="form.type" :options="option1" @change="refreshEvent"/>
			</van-dropdown-menu>
			<van-pull-refresh v-model="loading" @refresh="refreshEvent">
				<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
					 <div class="millList">
					 	<div class="item" v-for="item in list1" :key="item.id" @click="toBookView(2,item.userId)">
					 		<!-- <div class="flex flex1">
					 			<div class="machingBox">
					 				<div class="name">{{item.type | machineType4Pic}}</div>
					 			</div>
					 		</div> -->
					 		<div class="flex flex2">
					 			<div class="line1">
					 				<span class="millName">{{item.type | machineTypeType}}</span>
					 				<span class="calcullatePower">算力 {{item.calculationPower}}GH/s</span>
									<span class="nickName margL10"><i class="iconfont iconfont-name"></i> <i class="textColor">{{item.nickName}}</i></span>
					 			</div>
					 			<div class="line">租金 {{item.price}} 租赁时间 {{item.getTime}}</div>
					 		</div>
					 		<div class="flex flex3">
								<i class="iconfont iconfont-right-arrow2"></i>
					 			<!-- <div class="line">库存{{item.inventory}}</div>
					 			<div class="line margT3">
					 				<van-button round type="info" @click="buyMill(item)" size="small" color="linear-gradient(to right, #ffae00, #ff8400)" :block="true">租赁</van-button>
					 			</div> -->
					 		</div>
					 	</div>
					 </div>
				</van-list>
				<!-- <van-tabs v-model="activeName" background="#1a2843" color="#ffae00" title-active-color="#ffae00"
				 title-inactive-color="#ffffff" :border="false" @change="tabChange" animated sticky>
					<van-tab title="矿石" name="mineral">
						<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
						<div class="list">
							<div class="item" v-for="item in list1" :key="item.id">
								<div class="flex">
									<div class="line">{{item.createTime | getDateTime}}</div>
									<div class="line margT6">
										<span class="ellipsis userIdSpan" @click="toBookView(2,item.fromUserId)">{{item.fromUserId}}</span>
										<i class="iconfont iconfont-arrow-to"></i>
										<span class="ellipsis userIdSpan" @click="toBookView(2,item.toUserId)">{{item.toUserId}}</span>
									</div>
								</div>
								<div class="flexRight">{{item.number}}</div>
							</div>
						</div>
						</van-list>
					</van-tab>
				</van-tabs> -->
			</van-pull-refresh>
		</div>
		<!-- </van-pull-refresh> -->
		<m-refresh @refreshEvent="refreshEvent"></m-refresh>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import mRefresh from '@/components/Refresh.vue';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		name: 'millRecord',
		data() {
			return {
				userId:"",
				isShowSkeleton:true,
				loading: true,
				currentPage1: 1,
				currentPage2: 1,
				currentPage3: 1,
				currentPage4: 1,
				pageSize:16,
				activeName:'mill',
				loading1:false,
				finished1:false,
				loading2:false,
				finished2:false,
				loading3:false,
				finished3:false,
				loading4:false,
				finished4:false,
				list1:[],
				list2:[],
				list3:[],
				list4:[],
				list:[{
					id:0,
					createTime:'2019-12-12 12:12:12',
					type:-1,
					pm:'+',
					contributionValue:'20'
				}],
				form:{
					type:''
				},
				option1: [
					{ text: '全部', value: '' },
					{ text: '体验矿机', value: 0 },
					{ text: '微型矿机', value: 1 },
					{ text: '小型矿机', value: 2 },
					{ text: '中型矿机', value: 3 },
					{ text: '大型矿机', value: 4 },
					{ text: '巨型矿机', value: 5 }
				],
				mineralList:[{
					id:0,
					createTime:'2019-12-12 12:12:12',
					from:'矿机产出',
					addOrReduce:'+',
					number:'20'
				}]
			}
		},
		components: {
			mHeader,mRefresh
		},
		create() {
			this.toScrollTop();
		},
		mounted() {
			let _this = this;
			// _this.$cookies.set("isRefreshUserInfo",1,_this.$api.cookiesTime);
			/* if (_this.$cookies.isKey("tab_name_dealRecord")) {
				_this.activeName = _this.$cookies.get("tab_name_dealRecord");
			}else{
				_this.activeName = "mill";
			} */
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			toScrollTop(){
				window.scrollTo(0,0);
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
			toBookView(val,userId){
				let _this = this;
				console.log('toBookView');
				let name = 'mineral';
				if(val==1){
					name = 'ticket';
				}else if(val==2){
					name = 'mineral';
				}
				_this.$cookies.set("tab_name_book", name, _this.$api.cookiesTime)
				_this.$router.push({path:"lookBook",query:{lookUserId:userId}})
			},
			refreshEvent() {
				// console.log("refresh1")
				let _this = this;
				if(_this.activeName == 'mill'){
					console.log("refresh1");
					_this.currentPage1 = 1;
					_this.list1 = [];
					_this.finished1 = false;
					_this.onLoad1();
				}else if(_this.activeName == 'calculation'){
					console.log("refresh2");
					_this.currentPage2 = 1;
					_this.list2 = [];
					_this.finished2 = false;
					_this.onLoad2();
				}else if(_this.activeName == 'contribution'){
					_this.currentPage3 = 1;
					_this.list3 = [];
					_this.finished3 = false;
					_this.onLoad3();
				}else if(_this.activeName == 'ticket'){
					_this.currentPage4 = 1;
					_this.list4 = [];
					_this.finished4 = false;
					_this.onLoad4();
				}
			},
			tabChange(name, title) {
				let _this = this;
				// console.log('name', name)
				// _this.activeName = name;
				this.$cookies.set("tab_name_dealRecord", name, _this.$api.cookiesTime)
			},
			onLoad1(){
				console.log('load1 getMineralBookList4SellType')
				let _this = this;
				let params = {
					pageNo: _this.currentPage1,
					pageSize: _this.pageSize,
					tag:0,
					type:_this.form.type
				}
				// console.log('params',params);
				_this.loading1 = true;
				_this.$ajax.ajax(_this.$api.getAssistMyMachineList4Tag, 'GET', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list1.push(...list);
						_this.loading1 = false;
						if(res.data.endRow == res.data.total){
							_this.finished1 = true;
						}else{
							_this.currentPage1 = _this.currentPage1 + 1;
						}
					}else{
						_this.list1 = _this.list;
						_this.loading1 = false;
						_this.finished1 = true;
					}
				})
				// 异步更新数据
				// setTimeout(() => {
				// 	// 加载状态结束
				// 	_this.loading1 = false;
				// 	_this.finished1 = true;
				// }, 500);
			},
			onLoad2(){
				console.log('load2')
				let _this = this;
				// 异步更新数据
				let params = {
					pageNo: _this.currentPage2,
					pageSize: _this.pageSize,
					userId: _this.userId
				}
				_this.loading2 = true;
				_this.$ajax.ajax(_this.$api.getCalculationPowerPageList, 'GET', params, function(res) {
					// // console.log('res', res);
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						// // console.log('_this.list1',_this.list1);
						// // console.log('res.data.list',res.data.list)
						let list = res.data.list;
						_this.list2.push(...list);
						_this.loading2 = false;
						// console.log('res.data.endRow '+res.data.endRow+' res.data.total '+res.data.total)
						if(res.data.endRow == res.data.total){
							_this.finished2 = true;
							// console.log('res.data.endRow == res.data.total');
						}else{
							_this.currentPage2 = _this.currentPage2 + 1;
						}
						// // console.log('_this.list1',_this.list1);
					}else{
						_this.list2 = _this.list;
						_this.loading2 = false;
						_this.finished2 = true;
					}
				})
				// setTimeout(() => {
				// 	// 加载状态结束
				// 	_this.loading2 = false;
				// 	_this.finished2 = true;
				// }, 500);
			},
			onLoad3(){
				// console.log('load3',"getAssistContributionValueListByUserId")
				let _this = this;
				let params = {
					pageNo: _this.currentPage3,
					pageSize: _this.pageSize,
					userId: _this.userId
				}
				_this.loading3 = true;
				_this.$ajax.ajax(_this.$api.getAssistContributionValueList, 'GET', params, function(res) {
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list3.push(...list);
						_this.loading3 = false;
						if(res.data.endRow == res.data.total){
							_this.finished3 = true;
						}else{
							_this.currentPage3 = _this.currentPage3 + 1;
						}
					}else{
						_this.list3 = _this.list;
						_this.loading3 = false;
						_this.finished3 = true;
					}
				})
				// 异步更新数据
				// setTimeout(() => {
				// 	// 加载状态结束
				// 	_this.loading3 = false;
				// 	_this.finished3 = true;
				// }, 500);
				
			},
			onLoad4(){
				// console.log('load4')
				let _this = this;
				// 异步更新数据getAssistPlateformTicketAccountBookList
				let params = {
					pageNo: _this.currentPage4,
					pageSize: _this.pageSize,
					userId: _this.userId
				}
				_this.loading4 = true;
				_this.$ajax.ajax(_this.$api.getAssistPlateformTicketAccountBookList, 'GET', params, function(res) {
					// // console.log('res', res);
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						// // console.log('_this.list1',_this.list1);
						// // console.log('res.data.list',res.data.list)
						let list = res.data.list;
						_this.list4.push(...list);
						_this.loading4 = false;
						// console.log('res.data.endRow '+res.data.endRow+' res.data.total '+res.data.total)
						if(res.data.endRow == res.data.total){
							_this.finished4 = true;
							// console.log('res.data.endRow == res.data.total');
						}else{
							_this.currentPage4 = _this.currentPage4 + 1;
						}
						// // console.log('_this.list1',_this.list1);
					}else{
						_this.list4 = _this.list;
						_this.loading4 = false;
						_this.finished4 = true;
					}
				})
			},
		}
	}
</script>