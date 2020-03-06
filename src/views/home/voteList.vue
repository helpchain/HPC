<style lang="scss" scoped>
	@import '~@/assets/scss/index.scss';
	$itemLRHeight:40px;
	$itemInnerLine1Height:20px;
	.van-list__finished-text{
		background-color: $main-bg-color;
	}
	.voteListPage{
		@include page4Home();
		.voteList{
			background-color: $main-box-color;
			// margin-top:$header-height;
			.item{
				display:flex;
				padding:10px $boxPadding2;
				border-bottom:1px solid $mainBorderColor;
				// &:last-child{
				// 	border-bottom: 1px solid transparent;
				// }
				.itemLeft{
					flex: 1;
					.title{
						width: 100%;
						font-size: 12px;
						line-height:$itemInnerLine1Height;
						color: $mainTextColor2;
					}
					.time{
						font-size: 11px;
						color: $grayDark;
						// margin-top: 0.5rem;
						line-height:$itemInnerLine1Height;
					}
					.iconfont-right-arrow{
						font-size: 10px !important;
					}
				}
				.itemRight{
					flex: 0 0 80px;
					height: $itemLRHeight;
					line-height: $itemLRHeight;
					font-size: 1rem;
					.status{
						font-size: 12px;
						text-align: right;
						color: $main-adorn-color;
						.iconfont{
							color: $grayLight2;
						}
					}
				}
			}
		}
	}
</style>

<template>
	<div class="voteListPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				投票中心
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<van-list
		  v-model="loading1"
		  :finished="finished1"
		  finished-text="没有更多了"
		  @load="onLoad1"
		>
			<div class="voteList">
				<div class="item" v-for="item in voteList" :key="item.id" @click="toVoteDetail(item)">
					<div class="itemLeft">
						<div class="title">{{item.voteTitle}}</div>
						<div class="time">{{item.createTime|getDateTimeTOHM}} ~ {{item.deadTime|getDateTimeTOHM}}</div>
					</div>
					<div class="itemRight">
						<div class="status">{{judgeTime4VoteStatus(item.deadTime)}} <i class="iconfont iconfont-right-arrow2"></i></div>
					</div>
				</div>
			</div>
		</van-list>
		<!-- <transition name="van-fade">
		  <router-view></router-view>
		</transition> -->
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	// import { image_host } from '@/assets/js/config.js'
	
	export default {
		components: {
			mHeader
		},
		data() {
			return {
				pageIndex:1,
				pageSize:10,
				voteList: [],
				loading1:false,
				finished1:false
			}
		},
		mounted() {
			let _this = this;
			// _this.getVoteList();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			judgeTime4VoteStatus(val){
				let _this = this;
				let now = _this.$utils.getDateTime(new Date());
				if(now>val){
					return '已截止';
				}else{
					return '进行中';
				}
			},
			onLoad1(){
				console.log('load1')
				let _this = this;
				
				var params = {
					pageNo: _this.pageIndex,
					pageSize: _this.pageSize,
					isPublish: 1,
				}
				console.log('params',params);
				_this.$ajax.ajax(_this.$api.getAssistVoteList, 'GET', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) { // 200
						_this.loading1 = false;
						_this.voteList = res.data.list;
						// _this.total = res.data.size;
						if(res.data.endRow == res.data.total){
							_this.finished1 = true;
						}else{
							_this.pageIndex = _this.pageIndex + 1;
						}
					}
				})
				// 异步更新数据
				// setTimeout(() => {
				// 	// 加载状态结束
				// 	_this.loading1 = false;
				// 	_this.finished1 = true;
				// }, 500);
			},
			toVoteDetail(item) {
				let _this = this;
				_this.$router.push({
					path: `/voteDetail`,
					query: {
						id: item.id
					}
				});
			},
			noticeTap() {
				console.log('you click me')
			}
		}
	}
</script>