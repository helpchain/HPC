<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$itemLRHeight:40px;
	$itemInnerLine1Height:20px;
	.van-list__finished-text{
		background-color: $main-bg-color;
	}
	.wordListPage{
		@include pageMy();
		.wordList{
			background-color: $main-box-color;
			// margin-top:$header-height;
			.item{
				display:flex;
				padding:10px $boxPadding2;
				border-bottom:1px solid $mainBorderColor;
				align-content: center;
				align-items: center;
				justify-content: center;
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
						color: $mainTextColor2;
					}
					.time{
						font-size: 0.875rem;
						color: $grayDarker;
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
					color: $grayLight2;
					text-align: right;
					.statusText{
						// height: $itemLRHeight;
						// line-height: $itemLRHeight;
						font-size: 0.75rem;
						display: inline-block;
						color: $main-adorn-color;
					}
					.iconfont-right-arrow2{
						display: inline-block;
						font-size: 0.75rem;
						color: $grayDark;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="wordListPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				留言列表
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="getWordList">
			<div class="wordList">
				<div class="item" v-for="item in list1" :key="item.id" @click="toWordDetail(item)">
					<div class="itemLeft">
						<div class="title">{{item.messageTitle}}</div>
						<div class="time">{{item.createTime}}</div>
					</div>
					<div class="itemRight">
						<span class="statusText" :class="getColor(item.status)">{{item.status | filterStatus}}</span><i class="iconfont iconfont-right-arrow2"></i>
					</div>
				</div>
			</div>
		</van-list>
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
				list1: [],
				loading1:false,
				finished1:false,
				currentPage1:1,
				pageSize:16,
			}
		},
		filters: {
			filterStatus(val) {
				var result = '';
				if (val == 0) {
					result = '待回复';
				} else if (val == 1) {
					result = '已回复';
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
			// _this.getWordList();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			getColor(status) {
				return status == "0" ? "" : status == "1" ? "green_text" : "";
			},
			toWordDetail(item) {
				let _this = this;
				_this.$router.push({
					path: `/myWordDetail`,
					query: {
						id: item.id
					}
				});
			},
			getWordList() {
				let _this = this;
				let params = {
					pageNo: _this.currentPage1,
					pageSize: _this.pageSize,
					// userId: _this.userId
				}
				_this.$ajax.ajax(_this.$api.getAssistMessageBoardPageList, 'GET', params, function(res) {
					console.log('res', res);
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