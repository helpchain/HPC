<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.ranking{
		@include page4Home4Scroll();
		/* .van-sticky--fixed{
			top: 47px !important;
		} */
		[class*=van-hairline]::after {
		    border: 1px solid transparent !important;
		}
		.van-search{
			background-color: $main-bg-color !important;
			.van-search__action{
				color: $mainTextColor !important;
			}
			.van-cell__value, .van-cell__value--alone, .van-field__control {
			    color: $mainTextColor2 !important;
			}
		}
		.rankingTabs {
			color: $mainTextColor;
			.list{
				.item{
					display: flex;
					flex-direction: row;
					align-content: center;
					align-items: center;
					justify-content: center;
					padding: $boxPadding2;
					background-color: $main-box-color;
					border-top: 1px solid $main-bg-color;
					.flexLeft{
						flex: 0 0 36px;
						font-size: $fs-12;
						$heightwidht:30px;
						.name{
							width: $heightwidht;
							height: $heightwidht;
							border-radius: $heightwidht;
							background-color: $main-adorn-color;
							color: $main-box-fh-text-color;
							text-align: center;
							line-height: $heightwidht;
							font-size: 18px;
						}
						.nameChild{
							width: $heightwidht;
							height: $heightwidht;
							border-radius: $heightwidht;
							background-color: $main-blue-color;
							text-align: center;
							line-height: $heightwidht;
							font-size: 18px;
						}
						.iconleft{
							font-size: 22px;
						}
					}
					.flex{
						flex: 1;
						.line{
							.copy{
								font-size: $fs-10;
								margin-left: 3px;
								background-color: #E5E5E5;
								padding: 1px 2px;
								color: #0E1935;
								border-radius: 2px;
							}
						}
					}
					.flexRight{
						flex: 0 0 90px;
						text-align: right;
						font-size: $fs-12;
					}
					.operatorBox{
						flex: 0 0 100px;
						text-align: center;
						font-size: $fs-12;
						.van-count-down{
							color: $mainTextColor !important;
						}
						// .countDownTime{
						// 	color: $mainTextColor !important;
						// }
						.cancelBtn,.showDetailBtn{
							text-decoration: underline;
						}
					}
				}
			}
		}
		.textAdornColor{
			color: $main-adorn-color !important;
		}
		.questionHelper{
			background-color: $main-adorn-color;
			color: $mainTextColor;
			text-align: center;
			line-height: 40px;
		}
		.paddingWing{
			.van-cell{
				padding:1px 0;
				line-height: 1.3em;
			}
			.van-cell__title{
				font-weight: bolder;
			}
			.van-panel__content{
				line-height: 1.3em;
				color: $grayDark;
			}
		}
		.flexBox4Dialog{
			display: flex;
			.flexLeft{
				flex: 1;
			}
			.flexRight{
				flex: 1;
			}
		}
	}
	
</style>
<template>
	<div class="ranking">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">排行榜</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="rankingTabs">
			<van-search
			  v-model="mobilePhone"
			  placeholder="请输入手机号"
			  show-action
			  shape="round"
			  maxlength="11"
			  @search="searchEvent"
			>
			  <div slot="action" @click="searchEvent">搜索</div>
			</van-search>
			<van-tabs v-model="activeName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
			 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
				<van-tab title="矿石" name="ranking1">
					<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
						<div class="list" v-for="(item,index) in list1" :key='item.id'>
							<div class="item" @click="toBookView(2,item.userId)">
								<div class="flexLeft">
									<div class="name">{{index+1}}</div>
								</div>
								<div class="flex">
									<div class="line"> {{item.nickName}}</div>
									<!-- <div class="placeholderLine10"></div>
									<div class="line">
										<div>
											<i class="iconfont iconfont-weichat"></i> {{item.wechartNum}}
											<span class="margL1" @click="lookWeChartNumBtn(item.shareCode)">查看</span>
										</div>
									</div> -->
								</div>
								<div class="flexRight">
									{{item.num}} <i class="iconfont iconfont-right-arrow2"></i>
								</div>
							</div>
						</div>
					</van-list>
				</van-tab>
				
				<van-tab title="贡献值" name="ranking2">
					<van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoad2">
						<div class="list" v-for="(item,index) in list2" :key='item.id'>
							<div class="item" @click="toBookView(2,item.userId)">
								<div class="flexLeft">
									<div class="name">{{index+1}}</div>
								</div>
								<div class="flex">
									<div class="line"> {{item.nickName}}</div>
								</div>
								<div class="flexRight">
									{{item.num}} <i class="iconfont iconfont-right-arrow2"></i>
								</div>
							</div>
						</div>
					</van-list>
				</van-tab>
				
				<van-tab title="帮扶券" name="ranking3">
					<van-list v-model="loading3" :finished="finished3" finished-text="没有更多了" @load="onLoad3">
						<div class="list" v-for="(item,index) in list3" :key='item.id'>
							<div class="item" @click="toBookView(2,item.userId)">
								<div class="flexLeft">
									<div class="name">{{index+1}}</div>
								</div>
								<div class="flex">
									<div class="line"> {{item.nickName}}</div>
								</div>
								<div class="flexRight">
									{{item.num}} <i class="iconfont iconfont-right-arrow2"></i>
								</div>
							</div>
						</div>
					</van-list>
				</van-tab>
				
				<van-tab title="个人算力" name="ranking6">
					<van-list v-model="loading6" :finished="finished6" finished-text="没有更多了" @load="onLoad6">
						<div class="list" v-for="(item,index) in list6" :key='item.id'>
							<div class="item" @click="toBookView(2,item.userId)">
								<div class="flexLeft">
									<div class="name">{{index+1}}</div>
								</div>
								<div class="flex">
									<div class="line"> {{item.nickName}}</div>
								</div>
								<div class="flexRight">
									{{item.num}} <i class="iconfont iconfont-right-arrow2"></i>
								</div>
							</div>
						</div>
					</van-list>
				</van-tab>
				
				<van-tab title="团队算力" name="ranking4">
					<van-list v-model="loading4" :finished="finished4" finished-text="没有更多了" @load="onLoad4">
						<div class="list" v-for="(item,index) in list4" :key='item.id'>
							<div class="item"  @click="toBookView(2,item.userId)">
								<div class="flexLeft">
									<div class="name">{{index+1}}</div>
								</div>
								<div class="flex">
									<div class="line"> {{item.nickName}}</div>
								</div>
								<div class="flexRight">
									{{item.num}} <i class="iconfont iconfont-right-arrow2"></i>
								</div>
							</div>
						</div>
					</van-list>
				</van-tab>
				
				<van-tab title="有效直推" name="ranking5">
					<van-list v-model="loading5" :finished="finished5" finished-text="没有更多了" @load="onLoad5">
						<div class="list" v-for="(item,index) in list5" v-index :key='item.id' @click="toBookView(2,item.userId)">
							<div class="item">
								<div class="flexLeft">
									<div class="name">{{index+1}}</div>
								</div>
								<div class="flex">
									<div class="line"><!-- <i class="iconfont iconfont-name"></i> --> {{item.nickName}}</div>
								</div>
								<div class="flexRight">
									{{item.num}} <i class="iconfont iconfont-right-arrow2"></i>
								</div>
							</div>
						</div>
					</van-list>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import clip from '@/assets/js/clipboard';
	import { Dialog } from 'vant'
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		data() {
			return {
				currentPage1: 1,
				list1:[],
				loading1:false,
				finished1:false,
				currentPage2: 1,
				list2:[],
				loading2:false,
				finished2:false,
				currentPage3: 1,
				list3:[],
				loading3:false,
				finished3:false,
				currentPage4: 1,
				list4:[],
				loading4:false,
				finished4:false,
				currentPage5: 1,
				list5:[],
				loading5:false,
				finished5:false,
				currentPage6: 1,
				list6:[],
				loading6:false,
				finished6:false,
				pageSize:20,
				activeName:'ranking1',
				showTipModel:false,
				showTipModel4LookWeCharNum:false,
				shareCode:"",
				weChartNum:"",
				mobilePhone:""
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			//_this.mobilePhone = localStorage.getItem("mobilePhone")
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			showTip(){
				this.showTipModel = true;
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
			/* lookWeChartNumBtn(shareCode){
				let _this = this;
				_this.showTipModel4LookWeCharNum = true;
				_this.shareCode = shareCode;
			}, */
			/* getAssistWeChartNumByShareCode(){
				let _this = this;
				return new Promise((resolve, reject) => {
					_this.$ajax.ajax(_this.$api.getAssistWeChartNumByShareCode + _this.shareCode, 'GET', null, function(res) {
						if (res.code == _this.$api.CODE_OK) {
							console.log("res.data",res.data)
							resolve(res.data);
						}else{
							reject(false)
						}
					})
				})
			}, */
			handleCopy(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.$toast(`复制${res.text}成功`);
				});
			},
			tabChange(res) {
				let _this = this;
				console.log('res', res)
				_this.activeName = res;
			},
			searchEvent(){
				let _this = this;
				if(_this.activeName == 'ranking1'){
					_this.onLoad1();
				}else if(_this.activeName == 'ranking2'){
					_this.onLoad2();
				}else if(_this.activeName == 'ranking3'){
					_this.onLoad3();
				}else if(_this.activeName == 'ranking4'){
					_this.onLoad4();
				}else if(_this.activeName == 'ranking5'){
					_this.onLoad5();
				}else if(_this.activeName == 'ranking6'){
					_this.onLoad6();
				}
			},
			onLoad6(){
				console.log('load6')
				let _this = this;
				// 异步更新数据
				var params = {
					pageNo: _this.currentPage6,
					pageSize: _this.pageSize,
					mobilePhone: _this.mobilePhone,
					type:'my_calculation_power'
				}
				_this.loading6 = true;
				_this.finished6 = false;
				_this.$ajax.ajax(_this.$api.getRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						/* let list = res.data.list;
						_this.list1.push(...list); */
						_this.list6 = res.data.list;
						_this.loading6 = false;
						_this.loading6 = false;
						_this.finished6 = true;
						/* if(res.data.endRow == res.data.total){
							_this.finished1 = true;
						}else{
							_this.currentPage1 = _this.currentPage1 + 1;
						} */
					}else{
						_this.loading6 = false;
						_this.finished6 = true;
					}
				})
			},
			onLoad1(){
				console.log('load1')
				let _this = this;
				// 异步更新数据
				var params = {
					pageNo: _this.currentPage1,
					pageSize: _this.pageSize,
					mobilePhone: _this.mobilePhone,
					type:'this_week_mineral'
				}
				_this.loading1 = true;
				_this.finished1 = false;
				_this.$ajax.ajax(_this.$api.getRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						/* let list = res.data.list;
						_this.list1.push(...list); */
						_this.list1 = res.data.list;
						_this.loading1 = false;
						_this.loading1 = false;
						_this.finished1 = true;
						/* if(res.data.endRow == res.data.total){
							_this.finished1 = true;
						}else{
							_this.currentPage1 = _this.currentPage1 + 1;
						} */
					}else{
						_this.loading1 = false;
						_this.finished1 = true;
					}
				})
			},
			onLoad2(){
				console.log('load2')
				let _this = this;
				var params = {
					pageNo: this.currentPage2,
					pageSize: this.pageSize,
					mobilePhone: _this.mobilePhone,
					type:'contribution_value'
				}
				_this.loading2 = true;
				_this.finished2 = false;
				_this.$ajax.ajax(_this.$api.getRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						/* let list = res.data.list;
						_this.list2.push(...list); */
						_this.list2 = res.data.list;
						_this.loading2 = false;
						_this.loading2 = false;
						_this.finished2 = true;
						/* if(res.data.endRow == res.data.total){
							_this.finished2 = true;
						}else{
							_this.currentPage2 = _this.currentPage2 + 1;
						} */
					}else{
						_this.loading2 = false;
						_this.finished2 = true;
					}
				})
			},
			onLoad3(){
				console.log('load3')
				let _this = this;
				// 异步更新数据
				var params = {
					pageNo: this.currentPage3,
					pageSize: this.pageSize,
					mobilePhone: _this.mobilePhone,
					type:'platform_ticket'
				}
				_this.loading3 = true;
				_this.finished3 = false;
				_this.$ajax.ajax(_this.$api.getRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						/* let list = res.data.list;
						_this.list3.push(...list); */
						_this.list3 = res.data.list;
						_this.loading3 = false;
						_this.loading3 = false;
						_this.finished3 = true;
						/* if(res.data.endRow == res.data.total){
							_this.finished3 = true;
						}else{
							_this.currentPage3 = _this.currentPage3 + 1;
						} */
					}else{
						_this.loading3 = false;
						_this.finished3 = true;
					}
				})
			},
			onLoad4(){
				console.log('load4')
				let _this = this;
				// 异步更新数据
				var params = {
					pageNo: this.currentPage4,
					pageSize: this.pageSize,
					mobilePhone: _this.mobilePhone,
					type:'team_calculation_power'
				}
				_this.loading4 = true;
				_this.finished4 = false;
				_this.$ajax.ajax(_this.$api.getRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						/* let list = res.data.list;
						_this.list4.push(...list); */
						_this.list4 = res.data.list;
						_this.loading4 = false;
						_this.loading4 = false;
						_this.finished4 = true;
						/* if(res.data.endRow == res.data.total){
							_this.finished4 = true;
						}else{
							_this.currentPage4 = _this.currentPage4 + 1;
						} */
					}else{
						_this.loading4 = false;
						_this.finished4 = true;
					}
				})
			},
			onLoad5(){
				console.log('load5')
				let _this = this;
				// 异步更新数据
				var params = {
					pageNo: this.currentPage5,
					pageSize: this.pageSize,
					mobilePhone: _this.mobilePhone,
					type:'realname_num'
				}
				_this.loading5 = true;
				_this.finished5 = false;
				_this.$ajax.ajax(_this.$api.getRanking, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						/* let list = res.data.list;
						_this.list5.push(...list); */
						_this.list5 = res.data.list;
						_this.loading5 = false;
						_this.loading5 = false;
						_this.finished5 = true;
						/* if(res.data.endRow == res.data.total){
							_this.finished4 = true;
						}else{
							_this.currentPage4 = _this.currentPage4 + 1;
						} */
					}else{
						_this.loading5 = false;
						_this.finished5 = true;
					}
				})
			},
			onSearch(res){
				console.log('res', res)
			}
		}
	}
</script>


