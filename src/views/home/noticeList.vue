<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$itemLRHeight:40px;
	$itemInnerLine1Height:20px;
	.van-list__finished-text{
		background-color: $main-bg-color;
	}
	.noticeListPage{
		@include page4Home();
		.noticeList{
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
						font-size: 14px;
						height:$itemInnerLine1Height;
						line-height:$itemInnerLine1Height;
						color: $mainTextColor2;
					}
					.time{
						font-size: 0.875rem;
						color: $grayDark;
						// margin-top: 0.5rem;
						height:$itemInnerLine1Height;
						line-height:$itemInnerLine1Height;
					}
					.iconfont-right-arrow{
						font-size: 10px !important;
					}
				}
				.itemRight{
					flex: 0 0 30px;
					height: $itemLRHeight;
					line-height: $itemLRHeight;
					font-size: 1rem;
					color: $grayLight2;
					text-align: right;
				}
			}
		}
	}
</style>

<template>
	<div class="noticeListPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				公告列表
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<van-list
		  v-model="loading1"
		  :finished="finished1"
		  finished-text="没有更多了"
		  @load="onLoad1"
		>
		<div class="noticeList">
			<div class="item" v-for="item in noticelist" :key="item.id" @click="toNoticeDetail(item)">
				<div class="itemLeft">
					<div class="title">{{item.noticeTitle}}</div>
					<div class="time">{{item.createTime}}</div>
				</div>
				<div class="itemRight">
					<i class="iconfont iconfont-right-arrow2"></i>
				</div>
			</div>
		</div>
		</van-list>
		<transition name="van-fade">
		  <router-view></router-view>
		</transition>
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
				noticelist: [{
					type:'0',
					noticeTitle:'有问题',
					createTime:'2019-12-12 12:12:12',
					status:'0'
				}],
				loading1:false,
				finished1:false
			}
		},
		mounted() {
			let _this = this;
			_this.getNoticeList();
		},
		methods: {
			back(){
				this.$router.go(-1);
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
			toNoticeDetail(item) {
				let _this = this;
				_this.$router.push({
					path: `/noticeDetail`,
					query: {
						id: item.id
					}
				});
			},
			getNoticeList() {
				let _this = this;
				let params = {
					type:0
				}
				_this.$ajax.ajax(_this.$api.getNoticeList, 'GET', params, function(res) {
					console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						_this.noticelist = res.data;
					}
				})
			},
			noticeTap() {
				console.log('you click me')
			}
		}
	}
</script>