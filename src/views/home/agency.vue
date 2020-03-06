<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.agency{
		@include page4Home4Scroll();
		/* .van-sticky--fixed{
			top: 47px !important;
		} */
		[class*=van-hairline]::after {
		    border: 1px solid transparent !important;
		}
		.agencyTabs {
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
					border-bottom:1px solid $mainBorderColor;
					.flexLeft{
						flex: 0 0 60px;
						font-size: $fs-12;
						$heightwidht:50px;
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
							color: $main-box-fh-text-color;
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
							.iconfont{
								color:$main-green-color;
							}
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
	}
	
</style>
<template>
	<div class="agency">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">省市代理</div>
			<i class="iconfont iconfont-question rightBox icon" @click="showTip"></i>
		</m-header>
		<div class="agencyTabs">
			<van-tabs v-model="activeName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
			 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
				<van-tab title="竞选中" name="agency1">
					<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
						<div class="list">
							<div class="item">
								<div class="flexLeft">
									<div class="name">
										<i class="iconleft iconfont iconfont-pai"></i>
									</div>
								</div>
								<div class="flex">
									<div class="line">正在竞选中</div>
									<div class="placeholderLine10"></div>
									<div class="line">有意向的团队长请联系现有代理做引荐</div>
								</div>
								<!-- <div class="flexRight">浙江省券商</div> -->
							</div>
							<!-- <div class="item">
								<div class="flexLeft">
									<div class="name">
										<i class="iconleft iconfont iconfont-pai"></i>
									</div>
								</div>
								<div class="flex">
									<div class="line">正在竞选中</div>
									<div class="line">到 2019-12-12 12:12:12 截止</div>
								</div>
								<div class="flexRight">浙江省券商</div>
							</div> -->
						</div>
					</van-list>
				</van-tab>
				
				<van-tab title="现有代理" name="agency2">
					<van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoad2">
						<div class="list" v-for="item in list2" :key='item.id'>
							<div class="item">
								<div class="flexLeft">
									<div class="name">{{item.realName | getLastName}}</div>
								</div>
								<div class="flex">
									<div class="line"><i class="iconfont iconfont-name"></i> {{item.nickName}}</div>
									<!-- <div class="placeholderLine10"></div> -->
									<!-- <div class="line">
										<div>
											<i class="iconfont iconfont-weichat"></i> {{item.wechartNum}}
											<span class="margL1" @touchstart="handleCopy(item.wechartNum,$event)" @tap="handleCopy(item.wechartNum,$event)" @click="handleCopy(item.wechartNum,$event)">复制</span>
										</div>
									</div> -->
								</div>
								<div class="flexRight">{{item.provinceName}}</div>
							</div>
							<div class="item" v-for="itemChild in item.assistCityAgentExtendList" :key='itemChild.id'>
								<div class="flexLeft">
									<div class="nameChild">{{itemChild.realName | getLastName}}</div>
								</div>
								<div class="flex">
									<div class="line"><i class="iconfont iconfont-name"></i> {{itemChild.nickName}}</div>
									<!-- <div class="placeholderLine10"></div>
									<div class="line">
										<div>
											<i class="iconfont iconfont-weichat"></i> {{itemChild.wechartNum}}
											<span class="margL1" @touchstart="handleCopy(item.wechartNum,$event)" @tap="handleCopy(item.wechartNum,$event)" @click="handleCopy(itemChild.wechartNum,$event)">复制</span>
										</div>
									</div> -->
								</div>
								<div class="flexRight">{{itemChild.cityName}}</div>
							</div>
						</div>
					</van-list>
				</van-tab>
			</van-tabs>
		</div>
		<van-action-sheet v-model="showTipModel" title="问题小帮手">
			<div class="paddingWing">
				<!-- 帮扶券：详情请查看<span  class="underline">新手指南</span>。 -->
				<!-- <div class="tip4model3">第一批省代理正在招募中，需通过现有代理或客服引荐。</div> -->
				<div class="placeholderLine10"></div>
				<div class="tip4model4">
					<b class="textBold">省市代理的权限：</b><br>					1.拥有引荐受帮扶对象的权限。<br>					2.拥有给他人解冻账号的权限。<br>					3.拥有给他人实名审核的权限。<br>					4.拥有给他人内排注册的权限。<br>					5.省市代理拥有帮扶券的代理权。<br>					帮扶券的用处：可用于交易的时候当手续费(这是平台方唯一的盈利点)、可用于帮助平台上生活遇到困难的会员而获得贡献值等。<br>
					注：代理期限至少半年。每半年会重新竞选一次。优秀负责的代理可续任。
					<div class="placeholderLine10"></div>
					<b class="textBold">如何获得省市代理？</b><br>					方案一.前期福利：2020/3/31 21:00 之前对接团队长，送市代理名额，由现代理引荐，送完为止，先到先得。<br>					方案二.前期福利：2020/3/31 21:00 个人算力在【首页-排行榜】中的用户找现有代理或客服审核即赠送市代理名额。<br>					方案三.实力抵押：抵押10000个帮扶券成为省代理；抵押5000个帮扶券成为市代理。<br>					注：帮扶券1CNY一个，会员从市代理那儿购买，市代理从省代理那儿购买，省代理从亚太区总代理那儿购买。
				</div>
				<div class="placeholderLine40"></div>
			</div>
		</van-action-sheet>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import clip from '@/assets/js/clipboard';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		data() {
			return {
				currentPage1: 1,
				currentPage2: 1,
				pageSize:10,
				activeName:'agency2',
				loading1:false,
				finished1:false,
				loading2:false,
				finished2:false,
				list2:[],
				showTipModel:false,
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
		
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			showTip(){
				this.showTipModel = true;
			},
			handleCopy(text, event) {
				let _this = this;
				clip(text,event,function(res){
					_this.$toast(`复制${res.text}成功`);
				});
			},
			onLoad1(){
				console.log('load1')
				let _this = this;
				// 异步更新数据
				setTimeout(() => {
					// 加载状态结束
					_this.loading1 = false;
					_this.finished1 = true;
				}, 500);
			},
			onLoad2(){
				console.log('load2')
				let _this = this;
				var params = {
					pageNo: this.currentPage2,
					pageSize: this.pageSize,
					status:2
				}
				_this.loading2 = true;
				_this.finished2 = false;
				_this.$ajax.ajax(_this.$api.getAssistProvinceAgentListByPage, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list2.push(...list);
						_this.loading2 = false;
						if(res.data.endRow == res.data.total){
							_this.finished2 = true;
						}else{
							_this.currentPage2 = _this.currentPage2 + 1;
						}
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
				setTimeout(() => {
					// 加载状态结束
					_this.loading3 = false;
					_this.finished3 = true;
				}, 500);
			},
			onLoad4(){
				console.log('load4')
				let _this = this;
				// 异步更新数据
				setTimeout(() => {
					// 加载状态结束
					_this.loading4 = false;
					_this.finished4 = true;
				}, 500);
			},
			tabChange(res) {
				let _this = this;
				console.log('res', res)
				/* if(res == 'agency2'){
					_this.onLoad2();
				} */
			},
			onSearch(res){
				console.log('res', res)
			}
		}
	}
</script>


