<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.mySuperTeamPage {
		@include pageMy();
		.myTeamContent {
			// margin-top: $header-height;
			min-height: 100%;
			background-color: $main-bg-color;
			color: $mainTextColor;
			.top1 {
				display: flex;
				align-content: center;
				align-items: center;
				justify-content: center;
				padding: $boxPadding2 2px;
				background-color: $main-box-fh-bg-color;
				color: $main-box-fh-text-color;
				.flex1 {
					flex: 0 0 84px;
					text-align: center;
					$heightwidht:60px;
					.name{
						margin-left: $boxPadding2;
						width: $heightwidht;
						height: $heightwidht;
						border-radius: $heightwidht;
						background-color: $main-blue-color;
						color: $main-box-fh-text-color;
						text-align: center;
						line-height: $heightwidht;
						font-size: 22px;
					}
				}
				.flex2 {
					flex: 1;
					text-align: left;

					.line {
						line-height: 20px;
					}
				}
			}
			.list {
				.item {
					display: flex;
					padding: $boxPadding2;
					background-color: $main-box-color;
					align-content: center;
					align-items: center;
					justify-content: center;
					border-bottom:1px solid $mainBorderColor;
					&::last-child {
						border-bottom: 1px solid transparent;
					}
					.flex1 {
						flex: 0 0 50px;
						display: flex;
						align-items: center;
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
					}
					.flex2 {
						padding-left: 6px;
						flex: 1;
						.iconfont{
							color:$main-green-color;
						}
						.line1 {
							.millName {
								font-size: 0.875rem;
							}
							.status {
								font-size: 0.75rem;
								margin-left: 0.625rem;
							}
							.isGet {
								height: 14px;
								line-height: 14px;
								font-size: 12px;
								border-radius: 0 10px 10px 0;
								padding: 0 6px 0 4px;
								margin-left: 10px;
							}
							.isGetBgColor {
								background-color: $main-adorn-color;
							}
							.notGetBgColor {
								background-color: $warnColor;
							}
						}
						.line2,
						.line3,
						.line4,
						.line5 {
							font-size: 0.75rem;
							margin-top: 3px;
						}
					}
					.flex3 {
						flex: 0 0 100px;
						text-align: right;
						.line2,
						.line3,
						.line4,
						.line5 {
							font-size: 0.75rem;
							margin-top: 3px;
						}
					}
					.flex4 {
						flex: 0 0 20px;
						font-size: 0.825rem;
						color: #c7c7c7;
						text-align: right;
					}
				}
			}
		}
		.textAdornColor {
			color: $main-adorn-color !important;
		}
	}
</style>
<template>
	<div class="mySuperTeamPage">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				我的下级团队
			</div>
			<i class="rightBox icon"></i>
			<!-- <i class="iconfont iconfont-share rightBox icon" @click="toView('myShare')"></i> -->
		</m-header>
		<div class="myTeamContent">
			<div class="top1">
				<div class="flex flex1">
					<div class="name">{{parentUserInfo.realName | getLastName}}</div>
					<!-- <van-image round width="80" height="80" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg" /> -->
				</div>
				<div class="flex flex2">
					<div class="line">上级昵称：{{parentUserInfo.nickName}}</div>
					<div class="line">上级微信：{{parentUserInfo.wechartNum}} <span class="copy" @click="handleCopy(parentUserInfo.wechartNum,$event)">复制</span></div>
					<div class="line">二代总人数：{{teamNum}}</div>
					<div class="line">(团队三代收益分红的功能正在研发中)</div>
				</div>
			</div>
			<div class="line1pxbgcolor"></div>
			<van-tabs v-model="activeName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
			 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
				<van-tab :title="myShareText" name="myShare">
					<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1" :offset='100'>
						<div class="list">
							<div class="item" v-for="item in list1" :key="item.id">
								<div class="flex flex1">
									<div class="name">{{item.realName | getLastName}}</div>
								</div>
								<div class="flex flex2">
									<div class="line1"><i class="iconfont iconfont-clock"></i> {{item.registerTime | getDateYMD}}</div>
									<div class="line2"><i class="iconfont iconfont-name"></i> {{item.nickName}}</div>
									<!-- <div class="line2"><i class="iconfont iconfont-weichat" v-if="item.wechartNum"></i> {{item.wechartNum}}</div> -->
									<div class="line3"><i class="iconfont iconfont-mill"></i> {{item.myCalculationPower}}算力</div>
								</div>
								<div class="flex flex3">
									<div class="line2">{{item.level | getUserType}}</div>
									<div class="line3">战友数{{item.teamateNum}}个</div>
								</div>
								<!-- <div class="flex flex4" v-if="item.teamateNum>0">
									<i class="iconfont iconfont-right-arrow2"></i>
								</div> -->
							</div>
						</div>
					</van-list>
				</van-tab>
				<van-tab :title="activedText" name="actived">
					<van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoad2">
						<div class="list">
							<div class="item" v-for="item in list2" :key="item.id">
								<div class="flex flex1">
									<div class="name">{{item.realName | getLastName}}</div>
								</div>
								<div class="flex flex2">
									<div class="line1"><i class="iconfont iconfont-clock"></i> {{item.registerTime | getDateYMD}}</div>
									<div class="line2"><i class="iconfont iconfont-name"></i> {{item.nickName}}</div>
									<!-- <div class="line2"><i class="iconfont iconfont-weichat" v-if="item.wechartNum"></i> {{item.wechartNum}}</div> -->
									<div class="line3"><i class="iconfont iconfont-mill"></i> {{item.myCalculationPower}}算力</div>
									<!-- <div class="line3"><i class="iconfont iconfont-mill"></i> X台矿机正在运行</div> -->
								</div>
								<div class="flex flex3">
									<div class="line2">{{item.level | getUserType}}</div>
									<div class="line3">战友数{{item.teamateNum}}个</div>
								</div>
								<!-- <div class="flex flex4" v-if="item.teamateNum>0">
									<i class="iconfont iconfont-right-arrow2"></i>
								</div> -->
							</div>
						</div>
					</van-list>
				</van-tab>
				<van-tab :title="unactivedText" name="unactived">
					<van-list v-model="loading3" :finished="finished3" finished-text="没有更多了" @load="onLoad3">
						<div class="list">
							<div class="item" v-for="item in list3" :key="item.id">
								<div class="flex flex1">
									<div class="name">{{item.realName | getLastName}}</div>
								</div>
								<div class="flex flex2">
									<div class="line1"><i class="iconfont iconfont-clock"></i> {{item.registerTime | getDateYMD}}</div>
									<div class="line2"><i class="iconfont iconfont-name"></i> {{item.nickName}}</div>
									<!-- <div class="line2"><i class="iconfont iconfont-weichat" v-if="item.wechartNum"></i> {{item.wechartNum}}</div> -->
									<!-- <div class="line3"><i class="iconfont iconfont-mill"></i> X台矿机正在运行</div> -->
								</div>
								<div class="flex flex3">
									<div class="line2">{{item.level | getUserType}}</div>
									<div class="line3">战友数{{item.teamateNum}}个</div>
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
	export default {
		data() {
			return {
				totalNum:0,
				currentPage: 1,
				currentPage2: 1,
				currentPage3: 1,
				pageSize: 16,
				activeName: 'myShare',
				loading1: false,
				finished1: false,
				loading2: false,
				finished2: false,
				loading3: false,
				finished3: false,
				list1:[],
				list2:[],
				list3:[],
				userInfo:{},
				parentUserInfo:{},
				myShareText:'直推',
				activedText:'已实名',
				unactivedText:'未实名',
				realnameNum:0,
				teamNum:0,
				parentId:''
			}
		},
		components: {
			mHeader
		},
		created() {
			let _this = this;
			/* console.log(_this.$route.meta.footer,'footer');
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			} */
			// console.log('_this.userInfo',_this.userInfo);
			_this.realnameNum = _this.$route.query.realnameNum;
			console.log('realnameNum',_this.realnameNum);
			_this.activedText = '已实名' + ' ' + _this.realnameNum;
			_this.parentId = _this.$route.query.parentId;
			console.log('parentId',_this.parentId);
			_this.getParentUserInfo(_this.parentId);
			_this.getCountTeamNum();
		},
		methods: {
			refresh(parentId,realnameNum){
				let _this = this;
				_this.realnameNum = realnameNum;
				_this.activedText = _this.activedText + ' ' + _this.realnameNum;
				_this.parentId = parentId;
				_this.getParentUserInfo(_this.parentId);
				_this.getCountTeamNum();
				_this.onLoad1();
			},
			back() {
				this.$router.go(-1);
			},
			toScrollTop(){
				console.log('toScrollTop');
				window.scrollTo(0,0);
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
			toView(){
				this.$router.push('/myshare');
			},
			handleCopy(text, event) {
				let _this = this;
				_this.showSendSMSTipModel = false;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
			getCountTeamNum(){
				let _this = this;
				let params = {
					userId: _this.parentId
				}
				_this.$ajax.ajax(_this.$api.getCountTeamNum, 'GET', params, function(res){
					// console.log('res',res);
					if(res.code == _this.$api.CODE_OK){
						_this.teamNum = res.data;
					}
				})
			},
			getParentUserInfo(parentId){
				let _this = this;
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistUserInfo4Path + parentId, 'GET', null, function(res){
					// console.log('res',res);
					if(res.code == _this.$api.CODE_OK){
						_this.parentUserInfo = res.data;
					}
				})
			},
			onLoad1() {
				console.log('load1')
				let _this = this;
				let params = {
					pageNo: _this.currentPage,
					pageSize: _this.pageSize,
					parentId: _this.parentId
				}
				_this.$ajax.ajax(_this.$api.getAssistUserInfoPageList, 'GET', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						// console.log('_this.list1',_this.list1);
						// console.log('res.data.list',res.data.list)
						let list = res.data.list;
						_this.list1.push(...list);
						_this.totalNum = res.data.total;
						_this.myShareText = '直推' + ' ' + res.data.total;//团队注册人数
						_this.unactivedText = '未实名' + ' ' + (res.data.total - _this.realnameNum);
						_this.loading1 = false;
						// console.log('res.data.endRow '+res.data.endRow+' res.data.total '+res.data.total)
						if(res.data.endRow == res.data.total){
							_this.finished1 = true;
							// console.log('res.data.endRow == res.data.total');
						}else{
							_this.currentPage = _this.currentPage + 1;
						}
						// console.log('_this.list1',_this.list1);
					}
				})
			},
			onLoad2() {
				console.log('load2')
				let _this = this;
				// 异步更新数据
				let params = {
					pageNo: _this.currentPage2,
					pageSize: _this.pageSize,
					parentId: _this.parentId,
					actived:1
				}
				_this.$ajax.ajax(_this.$api.getAssistUserInfoPageList, 'GET', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list2.push(...list);
						_this.loading2 = false;
						_this.realnameNum = res.data.total;
						_this.activedText = '已实名 ' + _this.realnameNum;
						_this.unactivedText = '未实名 ' + (_this.totalNum - _this.realnameNum);
						// console.log('res.data.endRow '+res.data.endRow+' res.data.total '+res.data.total)
						if(res.data.endRow == res.data.total){
							_this.finished2 = true;
							// console.log('res.data.endRow == res.data.total');
						}else{
							_this.currentPage2 = _this.currentPage2 + 1;
						}
						// console.log('_this.list2',_this.list2);

						//如果realnameNum不符，则修改用户信息中的realnameNum,还是报账号异常比较好
						if(_this.userInfo.realnameNum!=res.data.total){
							_this.updateRealNameNumByUserId();
						}
					}
				})
			},
			updateRealNameNumByUserId(){
				let _this = this;
				_this.$ajax.ajax(_this.$api.updateRealNameNumByUserId, 'GET', null, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						console.log("updateRealNameNumOK");
						_this.$cookies.set("isRefreshUserInfo",1,_this.$api.cookiesTime);
					}
				})
			},
			onLoad3() {
				console.log('load3')
				let _this = this;
				// 异步更新数据
				let params = {
					pageNo: _this.currentPage3,
					pageSize: _this.pageSize,
					parentId: _this.parentId,
					actived:-1
				}
				_this.$ajax.ajax(_this.$api.getAssistUserInfoPageList, 'GET', params, function(res) {
					// console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						let list = res.data.list;
						_this.list3.push(...list);
						_this.loading3 = false;
						_this.unactivedText = '未实名 ' + res.data.total;
						// console.log('res.data.endRow '+res.data.endRow+' res.data.total '+res.data.total)
						if(res.data.endRow == res.data.total){
							_this.finished3 = true;
							console.log('res.data.endRow == res.data.total');
						}else{
							_this.currentPage3 = _this.currentPage3 + 1;
						}
						// console.log('_this.list3',_this.list3);
					}
				})
			},
			initializeTabActiveName() {
				let _this = this;
				// if (_this.$cookies.isKey("tab_name")) {
				// 	_this.activeName = _this.$cookies.get("tab_name");
				// }
			},
			tabChange(name, title) {
				console.log(name, title);
				// this.$cookies.set("tab_name", name, 60 * 60 * 1)
			},
		}
	}
</script>
