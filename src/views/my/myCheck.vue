<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$itemLRHeight:40px;
	$itemInnerLine1Height:20px;
	/* .van-list__finished-text{
		background-color: $main-bg-color;
	} */
	.checkPage{
		// @include pageWhiteBGHaveHeight();
		
		@include pageHaveHeight();
		.van-search{
			background-color: $main-bg-color !important;
			.van-search__action{
				color: $mainTextColor !important;
			}
		}
		.checkList{
			/* background-color: $main-box-color; */
			// margin-top:$header-height;
			.van-list__finished-text{
				background-color: #FFFFFF !important;
			}
			.item{
				display:flex;
				padding:10px $boxPadding2;
				border-bottom:1px solid #c7c7c7;
				align-content: center;
				align-items: center;
				justify-content: center;
				color: $mainTextColor;
				// &:last-child{
				// 	border-bottom: 1px solid transparent;
				// }
				.itemLeft{
					flex: 1;
					.title{
						width: 100%;
						font-size: 14px;
						height:$itemInnerLine1Height;
						line-height:$itemInnerLine1Height;
					}
					.time{
						font-size: 0.875rem;
						// margin-top: 0.5rem;
						height:$itemInnerLine1Height;
						line-height:$itemInnerLine1Height;
					}
					.iconfont-right-arrow{
						font-size: 10px !important;
					}
				}
				.itemRight{
					flex: 0 0 70px;
					height: $itemLRHeight;
					line-height: $itemLRHeight;
					text-align: right;
					.statusText{
						// height: $itemLRHeight;
						// line-height: $itemLRHeight;
						font-size: 0.75rem;
						display: inline-block;
					}
					.iconfont-right-arrow2{
						display: inline-block;
						font-size: 0.75rem;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="checkPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				待审核数 {{checkCount}}
			</div>
			<i class="iconfont iconfont-question rightBox icon" @click="showTipModel = true"></i>
		</m-header>
		<van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="嗯 嗯">
			<div class="placeholderLine4"></div>
			<div class="paddingWing f-12 lineHeight textJustify tip4model2">
				<div class="">
					<b>审核指标：</b><br>
					1.用户的真实姓名和身份证号与证件照中的对得上。<br>
					2.照片上有贴小纸条:{{$api.projectEnglishName}}实名专用+最近3天的日期。<br>
					满足以上2点即可通过；否则就驳回。
				</div>
				<div class="">
					<b>审核嘱咐：</b>帮扶链平台不是张三的，也不是李四的，而是大家的，期望各位领导人认真审核，共同维护好平台，做好公平、公正的榜样。
				</div>
				<div class="">
					<b>审核津贴：</b>若用户实名信息无误，审核通过奖励审核人0.1个帮扶券；若用户实名信息有误，审核驳回奖励审核人0.2个帮扶券。
				</div>
			</div>
			<div class="placeholderLine4"></div>
		</van-dialog>
		<van-search
		  v-model="searchValue"
		  placeholder="请输入手机号"
		  show-action
		  shape="round"
		  maxlength="11"
		  @search="searchEvent"
		>
		  <div slot="action" @click="searchEvent">搜索</div>
		</van-search>
		<van-pull-refresh v-model="loading" @refresh="refreshEvent">
			<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="getcheckList">
				<div class="checkList">
					<div class="item" v-for="item in list1" :key="item.id" @click="toCheckDetail(item)">
						<div class="itemLeft">
							<div class="title">{{item.realName}}</div>
							<div class="time">{{item.wechartNum}}</div>
						</div>
						<div class="itemRight">
							<span class="statusText" :class="getColor(item.actived)">{{item.actived | filterActived}}</span><i class="iconfont iconfont-right-arrow2"></i>
						</div>
					</div>
				</div>
			</van-list>
		</van-pull-refresh>
		<m-refresh @refreshEvent="refreshEvent"></m-refresh>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import mRefresh from '@/components/Refresh.vue';
	// import { image_host } from '@/assets/js/config.js'
	
	export default {
		components: {
			mHeader,mRefresh
		},
		data() {
			return {
				showTipModel:false,
				searchValue:"",
				list1: [],
				loading:false,
				loading1:false,
				finished1:false,
				currentPage1:1,
				pageSize:8,
				checkCount:0,
			}
		},
		filters: {
			filterActived(val) {
				var result = '';
				if (val == 0) {
					result = '待审核';
				} else if (val == 1) {
					result = '已通过';
				}
				return result;
			}
		},
		mounted() {
			let _this = this;
			_this.userId = _this.$cookies.get('userId');
			if(_this.$utils.isNUll(_this.userId)){
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
			_this.getCount4Check();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			refreshEvent() {
				console.log("refresh")
				let _this = this;
				_this.loading = true;
				_this.currentPage1 = 1;
				_this.getcheckList();
			},
			getColor(status) {
				return status == "0" ? "red" : status == "1" ? "green_text" : "";
			},
			toCheckDetail(item) {
				let _this = this;
				_this.$router.push({
					path: `/myCheckDetail`,
					query: {
						userId: item.userId
					}
				});
			},
			searchEvent(){
				let _this = this;
				_this.currentPage1 = 1;
				_this.loading = true;
				_this.getcheckList();
			},
			getCount4Check(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.getAssistUserInfoCount4Check, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.checkCount = res.data;
					}
				})
			},
			getcheckList() {
				let _this = this;
				let params = {
					pageNo: _this.currentPage1,
					pageSize: _this.pageSize,
					mobilePhone: _this.searchValue
				}
				/* if((!_this.$utils.isNUll(params.mobilePhone))&&_this.$reg.phone.test(params.mobilePhone)){
					
				}else{
					_this.$toast("请输入正确的手机号格式");
					_this.loading = false;
					return;
				} */
				_this.$ajax.ajax(_this.$api.getAssistUserInfoPageList4Check, 'GET', params, function(res) {
					/* console.log('res', res); */
					_this.loading = false;
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list1 = list;
						_this.loading1 = false;
						_this.finished1 = true;
						/* if(res.data.endRow == res.data.total){
							_this.finished1 = true;
						}else{
							_this.currentPage1 = _this.currentPage1 + 1;
						} */
					}else{
						_this.list1 = [];
						_this.loading1 = false;
						_this.finished1 = true;
					}
				})
			},
			noticeTap() {
				console.log('you click me')
			}
		}
	}
</script>