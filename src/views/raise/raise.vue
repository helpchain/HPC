
<style lang="scss">
	@import '~@/views/raise/raise.scss';
</style>

<template>
	<div class="raise">
		<!-- <div class="helpBox">
			<i class="iconfont iconfont-love leftBox"></i>
			<span class="centerBox">紧急求助！1岁宝宝急需移植骨髓，等钱救命！</span>
			<i class="iconfont iconfont-right-arrow2 rightBox icon"></i>
		</div>
		<div class="raiseHeader borderBottom">
			<div class="iconTextBox">
				<i class="iconfont iconfont-love2 leftIcon"></i>
				<div class="iconText">爱心·水滴·帮扶筹</div>
				<div class="rightBox unSelect">
					<van-button type="primary" size="small" :block="true">申请大病筹款</van-button>
				</div>
			</div>
		</div>
		<div class="whoAreYou">
			<div class="avator">
				<van-image round width="20" height="20" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg"/>
			</div>
			<div class="textInfo"><span class="text1 unSelect">张三</span><span class="text2 unSelect">发起筹款</span></div>
			<div class="rightBox unSelect"><van-tag plain type="success">个人求助</van-tag></div>
		</div>
		<div class="content1">
			<div class="title">爱心接力! 救救孩子，太可伶了！</div>
			<div class="box box2">
				<van-skeleton :row="2" :loading="loading">
				<div class="flexC flex1">
					<div class="digit">150000</div>
					<div class="text">需要平台券</div>
				</div>
				<div class="flexC flex2">
					<div class="digit">82167</div>
					<div class="text">已筹到平台券</div>
				</div>
				<div class="flexC flex3">
					<div class="digit">8123</div>
					<div class="text">帮助次数</div>
				</div>
				</van-skeleton>
			</div>
			<div class="flex borderBottom">
				<div class="flexLeft">
					<i class="iconfont iconfont-ticket ticket"></i>
				</div>
				<div class="flexCenter f-10">求助者所筹到的是平台券，这平台券是直接筹到求助者账户里不经过平台，然后让平台向求助者购买平台券，从而使求助者得到治疗费用。</div>
				<div class="flexRight"><i class="iconfont iconfont-i" @click="messageAlert"></i></div>
			</div>
		</div>
		<div class="story">
			<div class="flex">
				<div class="title flexMedial">求助人的故事</div>
				<div class="flexCenter textRight">
					<i class="iconfont iconfont-tanhao"></i>
					<span class="margL1 unSelect">质疑</span>
				</div>
			</div>
			<div class="content unSelect justify">
各位好心人，你们好，感谢你们打开我的求助信.我叫张金梅，今年42岁,前几年我女儿得了白血病，花光了所有的积蓄，家里负债累累，但还是没有留住女儿的生命，生活的打击和过度的劳累，使我多年的肾小球肾炎恶化，刚被确诊为尿毒症.因为无医疗保险，住院的费用全都是自费，每天血液透析及用药价格昂贵，面对病魔我感受到了从未有过的压力，只能竭尽所能的治疗.但是积蓄不多，加上亲戚朋友凑来的钱也还是杯水车薪，此次也是万般无奈才向各位好心人求助，我的儿子今年8岁，孩子还小，还需要妈妈，所以我恳求大家帮帮我！在此谢谢大家！恳请各位好心人士伸手相助，多多转发，您的每一次转发对我们都至关重要，每一次转发对我们来说都是莫大的帮助!
			</div>
			<div class="imageList flex">
				<img class="" src="../../assets/image/raise/1.jpg" @click="imagePreviewEvent(1)"/>
				<img class="" src="../../assets/image/raise/2.jpg" @click="imagePreviewEvent(2)"/>
				<img class="" src="../../assets/image/raise/3.jpg" @click="imagePreviewEvent(3)"/>
			</div>
			<van-image-preview
			  v-model="showImagePreview"
			  :images="images"
			  @change="onChangeImageIndex"
			>
			  <template v-slot:index>第{{ imageIndex }}页</template>
			</van-image-preview>
		</div>
		<div class="placeholderLine placeholderLineBGC"></div>
		<div class="materialProve">
			<div class="flex">
				<div class="title flexMedial">材料证明</div>
				<div class="flexCenter textRight">
					<i class="iconfont iconfont-safety"></i>
					<span class="margL1 unSelect">安心保障</span>
				</div>
			</div>
			<div class="proveContent">
				<div class="flex borderBottom">
					<div class="flexProveLeft">
						<i class="iconfont iconfont-pass"></i>
					</div>
					<div class="flexMedial proveText1">
						发起人/患者身份及基本医疗信息已通过平台初步审核，平台还会继续跟进，保证整个治疗过程属实。
					</div>
				</div>
				<div class="contentBox">
					<div class="title2">发起人承诺：</div>
					<div class="contentText1 justify">
						发起人已承诺所提交的文字与图片资料完全真实，无任何虚构事实及隐瞒真相的情况，如有不实，发起人愿承担全部法律责任。
					</div>
					<div class="title2">平台声明：</div>
					<div class="contentText1 justify">
						该求助信息不属于慈善公开募捐，真实性由信息发布者个人负责，帮扶筹提示您了解详情后再进行帮助。
					</div>
				</div>
				<div class="knowMore">
					了解更多求助人信息
				</div>
			</div>
			<div class="proverList">
				<div class="flex">
					<div class="flexMedial proveLabel">已有<span>38</span>人证明情况属实</div>
					<div class="iDo">我也来证明</div>
				</div>
				<div class="flex">
					<div class="flexMedial">
						<van-image round width="50" height="50" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg"/>
					</div>
					<div class="flexMedial">
						<van-image round width="50" height="50" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg"/>
					</div>
					<div class="flexMedial">
						<van-image round width="50" height="50" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg"/>
					</div>
					<div class="flexMedial">
						<van-image round width="50" height="50" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg"/>
					</div>
					<div class="flexProveMore">
						<i class="iconfont-right-arrow iconfont"></i>
					</div>
				</div>
			</div>
		</div>
		<div class="placeholderLine placeholderLineBGC"></div>
		<van-list
		  v-model="loadingRecordsList"
		  :finished="finishedRecordsList"
		  finished-text="没有更多了"
		  @load="onLoadRecordsList"
		>
			<div class="records">
				<div class="title">爱心帮助记录</div>
				<div class="item flexsBox row">
					<div class="flexLeft1">
						<van-image round width="44" height="44" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg"/>
					</div>
					<div class="flexThis column">
						<div class="line1">
							<div class="left">昵称</div>
							<div class="left margL10">帮助了 <span>10</span> 个平台券</div>
						</div>
						<div class="line2">
							苦心人天不负，健康身子终属你！苦心人天不负，健康身子终属你！苦心人天不负，健康身子终属你！
						</div>
						<div class="line3">2019-10-03 12:12:15</div>
					</div>
				</div>
				<div class="item flexsBox row">
					<div class="flexLeft1">
						<van-image round width="44" height="44" lazy-load src="https://img.yzcdn.cn/vant/cat.jpeg"/>
					</div>
					<div class="flexThis column">
						<div class="line1">
							<div class="left">昵称</div>
							<div class="left margL10">帮助了 <span>10</span> 个平台券</div>
						</div>
						<div class="line2">
							苦心人天不负，健康身子终属你！苦心人天不负，健康身子终属你！苦心人天不负，健康身子终属你！
						</div>
						<div class="line3">2019-10-03 12:12:15</div>
					</div>
				</div>
			</div>
		</van-list> -->
	</div>
</template>

<script>
	import { Dialog,ImagePreview } from 'vant';
	export default {
		data() {
			return {
				loading:false,
				showImagePreview: false,
				imageIndex: 0,
				images: [
				'https://img.yzcdn.cn/2.jpg',
				'https://img.yzcdn.cn/2.jpg',
				'https://img.yzcdn.cn/2.jpg'
				],
				loadingRecordsList:false,
				finishedRecordsList:false
			}
		},
		// components: {
		// 	[Dialog.Component.name]: Dialog.Component
		// },
		mounted() {
			let _this = this;
			// _this.initializeerrorHint();
			// _this.initializeTabActiveName();
			// ImagePreview({
			//   images: [
			//     'https://img.yzcdn.cn/2.jpg',
			//     'https://img.yzcdn.cn/2.jpg'
			//   ],
			//   startPosition: 1,
			//   onClose() {
			//     // do something
			//   }
			// });
		},
		methods:{
			onLoadRecordsList() {
				let _this = this;
			  // 异步更新数据
			  setTimeout(() => {
				// 加载状态结束
				_this.loadingRecordsList = false;
				_this.finishedRecordsList = true;
			  }, 500);
			},
			imagePreviewEvent(index){
				this.showImagePreview = true;
				this.imageIndex = index;
			},
			onChangeImageIndex(index) {
			  this.imageIndex = index;
			},
			messageAlert(){
				Dialog({ message: '为了保证赠与人的每一个平台券都能全额给付患者治疗，帮扶筹不收取任何手续费。筹到多少，兑现多少，不让任何一份爱心流失。' });
				// Dialog.alert({
				//   message: '为了保证赠与人的每一分钱都能全额给付患者治疗，帮扶链不收取任何手续费。筹到多少，兑现多少，不让任何一份爱心流失。'
				// }).then(() => {
				//   // on close
				// });
			}
		}
	}
</script>