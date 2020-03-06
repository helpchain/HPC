<style lang="scss">
	@import '~@/assets/scss/index.scss';

	.wordDetail {
		@include pageMy();
		color: $mainTextColor;
		padding: 0 $boxPadding2;
		box-sizing: border-box;
		word-wrap: break-word;
		word-break: normal;
		.title{
			font-size: $fs-title;
			text-align: center;
			line-height: 2em;
			font-weight:bold;
		}
		.line{
			overflow: hidden;
			clear: both;
			font-size: $fs-decorate;
		}
		.content{
			box-sizing: border-box;
			font-size: $fs-content;
			margin-top: 7px;
			line-height: 1.3em;
		}
	}
</style>
<template>
	<div>
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				留言详情
			</div>
			<i class="rightBox icon"></i>
		</m-header>
		<div class="wordDetail">
			<div class="title">
				{{obj.messageTitle}}
			</div>
			<div class="line">
				<div class="left">{{obj.messageType | wordType}}</div>
				<div class="right">{{obj.createTime}}</div>
			</div>
			<div class="content" v-if="obj.messageContent">
				留言内容: {{obj.messageContent}}
			</div>
			<div class="content" v-if="obj.reply">
				客服回复: {{obj.reply}}
			</div>
		</div>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	// import { image_host } from '@/assets/js/config.js'

	export default {
		name: 'home',
		components: {
			mHeader
		},
		data() {
			return {
				id: "",
				obj: {},
				message:''
			}
		},
		mounted() {
			let _this = this;
			_this.id = _this.$route.query.id;
			console.log('_this.id', _this.id);
			_this.getWordDetail();
		},
		methods: {
			back(){
				this.$router.go(-1);
			},
			getWordDetail() {
				let _this = this;
				let params = {
					id: _this.id
				}
				_this.$ajax.ajax(_this.$api.getAssistMessageBoard + _this.id, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.obj = res.data;
						console.log("-------" + _this.obj.noticeContent);
					}
				})
			}
		}
	}
</script>

<style>
</style>
