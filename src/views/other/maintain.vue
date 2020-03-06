<style scoped lang="scss">
	@import '~@/assets/scss/variable.scss';
    .maintain-page{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: $main-bg-color;
        height: 100%;
        box-sizing: border-box;
		text-align: center;
		padding: $boxPadding2;
		// padding: 100px $boxPadding2 $boxPadding2 $boxPadding2;
		.maintain-code{
		    line-height: 1;
		    font-size: 3rem;
		    font-weight: bolder;
		    color: $main-adorn-color;
		}
		.maintain-desc{
		    font-size: 0.875rem;
		    color: $mainTextColor;
			line-height: 1.3em;
		}
		.maintain-handle{
			width: 100%;
		    margin-top: 30px;
		}
		.van-count-down{
			color: $main-adorn-color;
		}
    }
    
</style>
<template>
	<div class="maintain-page">
		<div class="maintain-code">网络不稳定或系统维护中</div>
		<div class="maintain-code">{{qqFlock}}</div>
		<div class="placeholderLine"></div>
		<div class="placeholderLine"></div>
		<!-- <div class="maintain-desc">
			预计<div class="flexCountTime inline">
				<van-count-down :time="setCountDownTime4Maintain" />
			</div>后维护好
		</div> -->
		<div class="placeholderLine"></div>
		<!-- <div class="maintain-desc" v-html="maintainInfo.maintainContent"></div> -->
		<div class="maintain-handle" v-if="isShow">
			<van-button to="/home" type="info" size="normal" color="linear-gradient(to right, #00ffe4, #005db4)" :block="true">返回首页</van-button>
			<div class="placeholderLine"></div>
			<div class="placeholderLine"></div>
			<van-button type="info" size="normal" color="linear-gradient(to right, #005db4, #00ffe4)" :block="true" @click="goBack">返回上一页</van-button>
		</div>
		<!-- <m-refresh @refreshEvent="getMaintainInfo"></m-refresh> -->
	</div>
</template>

<script>
	import mRefresh from '@/components/Refresh.vue';
	export default {
		data() {
			return {
				isShow: false,
				setCountDownTime4Maintain: 60,
				maintainInfo:"",
				qqFlock:""
			}
		},
		components: {
			mRefresh,
		},
		created() {
			let _this = this;
			//_this.getMaintainInfo();
			_this.getAssistQQFlock();
		},
		methods: {
			goBack() {
				this.$router.go(-1);
			},
			getAssistQQFlock() {
				let _this = this;
				_this.loading = true;
				_this.$ajax.ajax(_this.$api.getAssistQQFlock, 'POST', null, function(res) {
					//console.log('getUserInfo');
					if (res.code == _this.$api.CODE_OK) {
						_this.qqFlock = `HPC工会QQ群：${res.data.qqFlock}`;
						//localStorage.setItem("_USERINFO_", JSON.stringify(_this.userInfo));
						_this.$router.replace('/login');
					}
				},function(){
					_this.loading = false;
				})
			},
			getMaintainInfo(){
				let _this = this;
				_this.maintainInfo = JSON.parse(localStorage.getItem('maintainInfo'));
				console.log(_this.maintainInfo,'maintainInfo');
				let maintainEndTime = _this.$utils.getTime(_this.maintainInfo.maintainEndTime);
				let nowTime = _this.$utils.getTime(new Date());
				_this.setCountDownTime4Maintain = (maintainEndTime - nowTime);
				console.log('_this.setCountDownTime4Maintain',_this.setCountDownTime4Maintain);
				if(_this.setCountDownTime4Maintain<=0){
					_this.$router.replace('/login');
				}
			},
		}
	}
</script>
