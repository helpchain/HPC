<style lang="scss">
	@import '~@/assets/scss/index.scss';
	$cellHeight:50px;
	.myWord{
		font-size: 0.75rem;
		color: $mainTextColor;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background-color: $main-box-color;
		z-index: 2;
		.van-dropdown-menu{
			height: $cellHeight !important;
			background-color: inherit !important;
		}
		.van-dropdown-menu__title{
			color: $mainTextColor;
			font-size: 0.75rem !important;
		}
		/* [class*=van-hairline]::after{
			border: none !important;
		} */
		/* .van-field__control{
			color: $mainTextColor;
		}
		.van-cell,.van-cell-group{
			background-color: inherit !important;
		}
		.van-cell__value, .van-cell__value--alone, .van-field__control {
		    color: #FFFFFF !important;
		} */
		.myWordPage{
			margin-top: $headerHeight;
			background-color: $main-box-color;
			.myCell{
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid $mainBorderColor;
				/* .van-cell__value, .van-cell__value--alone, .van-field__control {
				    color: #FFFFFF !important;
				} */
				.flex{
					flex: 1;
					padding-left: 16px;
				}
				.align-right{
					text-align: right;
					align-self: right;
					align-items: right;
					justify-content: right;
				}
			}
			.myCell2{
				border-bottom: 1px solid $mainBorderColor;
			}
			.sureBtn{
				position: fixed;
				bottom: 0;
				left: 0;
				right: 0;
				.tip{
					margin-bottom: 6px;
					margin-left: $boxPadding2;
					font-size: 0.812rem;
					color:$mainTextColor;
				}
			}
		}
		.textAdornColor{
			color: $main-adorn-color !important;
		}
	}
	
</style>
<template>
	<div class="myWord">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				我要留言
			</div>
			<i class="iconfont iconfont-message rightBox icon" @click="toListView"></i>
		</m-header>
		<div class="myWordPage">
			<div class="myCell">
				<div class="flex label">
					留言类型
				</div>
				<div class="flex align-right">
					<van-dropdown-menu>
					  <van-dropdown-item v-model="form.wordTypleValue1" :options="option1" />
					</van-dropdown-menu>
				</div>
			</div>
			<div class="myCell">
				<van-field required clearable @blur="validate('wordTitle')" v-model="form.wordTitle" maxlength="20" placeholder="请输入20字内的留言标题" />
			</div>
			<div class="myCell2">
				<van-cell-group>
				  <van-field
				    v-model="form.wordContent" @blur="validate('wordContent')"
				    rows="2" required
				    autosize clearable
				    type="textarea"
				    maxlength="500"
				    placeholder="请输入留言内容(不超过500字)"
				    show-word-limit
				  />
				</van-cell-group>
			</div>
			<div class="sureBtn">
				<div class="tip">为了提高留言质量，提交留言需使用1个帮扶券</div>
				<van-button color="linear-gradient(to right, #ffae00, #ff8400)" :loading="loading" size="large" @click="submit">提交</van-button>
			</div>
		</div>
	</div>
</template>
<script>
	import mHeader from '@/components/Header.vue';
	import { Dialog } from 'vant';
	// import mFullscreen from '@/components/Fullscreen.vue';
	export default {
		data() {
			return {
				form:{
					wordTitle:'',
					wordTypleValue1:0,
					wordContent:''
				},
				option1: [
					{ text: '问题反馈', value: 0 },
					{ text: '意见建议', value: 1 },
					{ text: '我要告状', value: 2 },
					{ text: '其他类型', value: 3 }
				],
				currentPage: 1,
				pageCount: 1000,
				totalItems: 10000,
				userId:"",
				loading:false,
			}
		},
		components: {
			mHeader
		},
		mounted() {
			let _this = this;
			let userInfo = localStorage.getItem("_USERINFO_");
			if(userInfo){
				_this.userInfo = JSON.parse(userInfo);
				_this.userId = _this.userInfo.userId;
			}else{
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
				return;
			}
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			toListView(){
				let _this = this;
				_this.$router.push({
					path: `/myWordList`
				});
			},
			validate(flag){
				let _this = this;
				if(flag == 'wordTitle'){
					if(_this.form.wordTitle==''){
						_this.$toast('留言标题不能为空');
						return;
					}
				}else if(flag == 'wordContent'){
					if(_this.form.wordContent==''){
						_this.$toast('留言内容不能为空');
						return;
					}
				}
			},
			submit(){
				// console.log("submit");
				let _this = this;
				// console.log("_this.userInfo.platformTicket",_this.userInfo.platformTicket);
				if(_this.userInfo.platformTicket<1){
					Dialog.alert({
						title: "系统提示",
						confirmButtonText:'知道了',
						message: "您的帮扶券不足1个，无法留言"
					}).then(() => {
					  // on confirm
					})
					return;
				}
				if(_this.form.wordTitle==''){
					_this.$toast('留言标题不能为空');
					return;
				}
				if(_this.form.wordContent==''){
					_this.$toast('留言内容不能为空');
					return;
				}
				//为了提高留言质量，提交留言需使用1张帮扶券，您是否确定要留言？
				Dialog.confirm({
				  title: '确认信息',
				  confirmButtonText:'确定',
				  message: '您是否确定要留言？'
				}).then(() => {
					// on confirm
					console.log('sure');
					let params = {
						/* userId: _this.userId, */
						messageType: _this.form.wordTypleValue1,
						messageTitle: _this.$utils.clearSpecialRelax(_this.form.wordTitle),
						messageContent: _this.$utils.clearSpecialRelax(_this.form.wordContent),
						// createTime:_this.$utils.getDateTime(new Date())
					}
					_this.loading = true;
					console.log('params',params);
					_this.$ajax.ajax(_this.$api.insertAssistMessageBoard, 'POST', params, function(res) {
						_this.loading = false;
						if (res.code == _this.$api.CODE_OK) {
							_this.$toast('留言成功');
							_this.$cookies.set("isRefreshUserInfo",1,_this.$api.cookiesTime);
							_this.$router.push({
								path: `/myWordList`
							});
						}else{
							Dialog.alert({
								title: "系统提示",
								message: res.message
							}).then(() => {
							  // on confirm
							})
						}
					})
				}).catch(() => {
				  // on cancel
				  console.log('cancel');
				});
			},
		}
	}
</script>
