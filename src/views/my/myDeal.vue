<style lang="scss">
	@import '~@/assets/scss/index.scss';
	.myDeal{
		@include pageHaveHeight4Scroll();
		
		[class*=van-hairline]::after {
			border: none !important;
		    border-bottom: 1px solid #efefef !important;
		}
		.myDealTabs {
			// margin-top: $header-height;
			// min-height: 100%;
			// background-color: $main-box-fh-bg-color;
			// color: $main-box-fh-text-color;
			/* .van-tabs,.van-pull-refresh{
				min-height: 700px !important;
			} */
			.list{
				
				.item{
					margin-top: 1px;
					display: flex;
					flex-direction: row;
					align-content: center;
					align-items: center;
					padding: $boxPadding2;
					position: relative;
					border-bottom:1px solid $mainBorderColor;
					// &::last-child{
					// 	border-bottom:1px solid transparent;
					// }
					.tagIcon{
						position: absolute;
						right: 1px;
						top: 0;
						height: 16px;
						width: 30px;
						font-size: 16px;
					}
					.tagIconText{
						position: absolute;
						right: 6px;
						top: 2px;
						font-size: 11px;
						color: $main-box-fh-text-color;
					}
					.tag4Sell{
						color: $warnColor;
					}
					.tag4Buy{
						color: $main-adorn-color;
					}
					.flex{
						flex: 1;
						.info{
							display: flex;
							flex-direction: row;
							align-content: center;
							align-items: center;
							font-size: $fs-12;
							.flexNum{
								flex: 0 0 60px;
								.d{
									margin-top: 0.5rem;
								}
							}
							.flex1{
								flex: 1;
								.d{
									margin-top: 0.5rem;
								}
							}
						}
						.timeBox{
							font-size: $fs-12;
							margin-top: 0.5rem;
						}
					}
					.btnBox{
						flex: 0 0 80px;
						text-align: center;
						font-size: $fs-12;
					}
					.operatorBox4complate{
						flex: 0 0 56px;
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
		.cancelSellTip{
			padding:24px $boxPadding2;
			font-size: 13px;
			line-height: 1.4em;
			.tipText2{
				text-indent: 2em;
				letter-spacing: 1px;
			}
		}
		.countDownTimeBox{
			display: flex;
			flex-direction: row;
			align-content: center;
			align-items: center;
			.flexCountTime{
				flex: 1;
			}
		}
		.detailBox{
			padding: $boxPadding2 $boxPadding1;
			.line{
				display: flex;
				flex-direction: row;
				align-content: center;
				align-items: center;
				padding: 12px 0;
				.label{
					flex: 0 0 90px;
				}
				.value{
					flex: 1;
					text-align: right;
					position: relative;
					.copy{
						font-size: $fs-12;
						margin-right: 10px;
						background-color: #E5E5E5;
						padding: 1px 2px;
					}
					.iconfont-upload-pic{
						font-size: 50px;
						color: $main-adorn-color;
					}
					.selectPicInput{
						position: absolute;
						right: 0;
						top: 0;
						width: 50px;
						height: 50px;
					}
				}
			}
			.selectedImg{
				width: 100%;
			}
			.tipText{
				text-indent: 2em;
				line-height: 1.4em;
				color: $grayDark;
			}
			.tipText2{
				margin-top: 10px;
				text-indent: 2em;
				line-height: 1.4em;
				color: $main-adorn-color;
			}
		}
		.textAdornColor{
			color: $main-adorn-color !important;
		}
		.sendMessageBox{
			.van-cell__value, .van-cell__value--alone, .van-field__control {
			    color: #323232 !important;
				font-size: 12px !important;
			}
		}
		.remark{
			.van-cell__value, .van-cell__value--alone, .van-field__control {
			    color: #323232 !important;
			}
		}
		.box {
			display: flex;
			background-color: $main-box-color;
			padding: $boxPadding2;
			box-sizing: border-box !important;
			color: $mainTextColor;
			@include userSelectNone();
		}
		
		$avatorWidth:80px;
		
		.box1 {
			// height: $avatorWidth+$boxPadding1;
			margin-top: 2px;
			.flex {
				&.flex1 {
					flex: 0 0 70px;
					$heightwidht:70px;
					.name{
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
				&.flex2 {
					flex: 1;
					padding: 0 $boxPadding2;
					display: flex;
					flex-direction: column;
					align-content: center;
		
					.line1{
						flex: 1;
						line-height: 26px;
		
						.nick_name {
							font-size: 14px;
							height: 20px;
							line-height: 20px;
						}
		
						.level {
							background-color: $main-adorn-color;
							height: 20px;
							line-height: 20px;
							font-size: 11px;
							border-radius: 0 10px 10px 0;
							padding: 0 8px 0 4px;
							margin-left: 4px;
						}
					}
					.line{
						flex: 1;
						line-height: 20px;
						font-size: 11px;
					}
				}
			}
		}
		
		.box2 {
			margin-top: $marginTop1;
			text-align: center;
			.flex {
				flex: 1;
				.value{
					
				}
				.text {
					font-size: $fs-1;
					margin-top: 6px;
				}
			}
		}
		
		.box3 {
			margin-top: $marginTop1;
			text-align: center;
			.flex {
				flex: 1;
				.text {
					font-size: $fs-1;
					margin-top: 6px;
					line-height: 1.2em;
				}
			}
		}
	}
</style>
<template>
	<div class="myDeal">
		<m-header>
			<i class="leftBox iconfont iconfont-left-arrow" @click="back"></i>
			<div class="text">
				我的交易
			</div>
			<i class="iconfont iconfont-question rightBox icon" @click="showTip"></i>
		</m-header>
		
		<div class="myDealTabs">
			<van-pull-refresh v-model="loading" @refresh="refreshEvent">
			<van-tabs v-model="activeName" :background="$api.tabBgColor" :color="$api.tabActiveColor" :title-active-color="$api.tabActiveColor"
			 :title-inactive-color="$api.tabTextColor" :border="false" @change="tabChange" animated sticky>
				<van-tab title="求购中" name="buy">
					<van-list v-model="loading1" :finished="finished1" finished-text="没有更多了" @load="onLoad1">
						<div class="list">
							<div class="item" v-for="item in list1" :key="item.id">
								<div class="flex">
									<div class="info">
										<div class="flex1">
											<div>数量</div>
											<div class="d">{{item.minNumber}}~{{item.maxNumber}}{{$api.numUnit}}</div>
										</div>
										<div class="flex1">
											<div>单价</div>
											<div class="d">{{item.price}}CNY</div>
										</div>
									</div>
									<div class="timeBox">
										挂单时间 {{ item.createTime }}
									</div>
								</div>
								<div class="btnBox">
									<div>{{maxPrice(item)}}CNY</div>
									<div class="placeholderLine8"></div>
									<van-button type="primary" size="small" :block="true" @click="cancelBuyBillBtn(item)">撤 销</van-button>
								</div>
							</div>
						</div>
					</van-list>	
				</van-tab>
				<!-- <van-tab title="出售" name="sell">
					
				</van-tab> -->
				<van-tab title="待付款" name="pay">
					<van-list v-model="loading2" :finished="finished2" finished-text="没有更多了" @load="onLoad2">
						<div class="list">
							<div class="item" v-for="item in list2" :key="item.id">
								<div class="flex">
									<div class="info">
										<div class="flexNum">
											<div>数量</div>
											<div class="d">{{item.num}} {{$api.numUnit}}</div>
										</div>
										<div class="flex1">
											<div>单价</div>
											<div class="d">{{item.price}}CNY</div>
										</div>
										<div class="flex1">
											<div>总价</div>
											<div class="d">{{totalPrice(item)}}CNY</div>
										</div>
									</div>
									<div class="timeBox">
										匹配时间 {{ item.machingTime }}
									</div>
								</div>
								<div class="operatorBox">
									<div>
										<span class="showDetailBtn lineHeight" @click="showSellerInfoBtn(item)">了解卖家</span>
									</div>
									<div class="margT6">
										<span class="showDetailBtn lineHeight" @click="showDetailBtn(item)">订单详情</span>
									</div>
									<!-- <div class="margT6 lineHeight">{{buyOrSell(item) | dealBuyOrSellText}}</div> -->
									<div class="margT6 lineHeight yellow">
										{{item.status | dealStatusType}}
									</div>
									<div class="margT6" v-if="buyOrSell(item)=='sell'&&item.status==0">
										<span class="cancelBtn" @click="cancelDealBtn(item)">取消交易</span>
									</div>
									<div class="margT6" v-if="buyOrSell(item)=='buy'&&item.status==0&&item.type!=2">
										<span class="cancelBtn" @click="lockTransactionBtn(item)">锁定交易</span>
									</div>
								</div>
								<i class="tagIcon iconfont iconfont-tag tag4Buy"></i>
								<i class="tagIconText">买</i>
							</div>
						</div>
					</van-list>
				</van-tab>
				<van-tab title="待收款" name="get">
					<van-list v-model="loading4" :finished="finished4" finished-text="没有更多了" @load="onLoad4">
						<div class="list">
							<div class="item" v-for="item in list4" :key="item.id">
								<div class="flex">
									<div class="info">
										<div class="flexNum">
											<div>数量</div>
											<div class="d">{{item.num}} {{$api.numUnit}}</div>
										</div>
										<div class="flex1">
											<div>单价</div>
											<div class="d">{{item.price}}CNY</div>
										</div>
										<div class="flex1">
											<div>总价</div>
											<div class="d">{{totalPrice(item)}}CNY</div>
										</div>
									</div>
									<div class="timeBox">
										匹配时间 {{ item.machingTime }}
									</div>
								</div>
								<div class="operatorBox">
									<div>
										<span class="showDetailBtn lineHeight" @click="showDetailBtn(item)">订单详情</span>
									</div>
									<!-- <div class="margT6 lineHeight">{{buyOrSell(item) | dealBuyOrSellText}}</div> -->
									<div class="margT6 lineHeight yellow">
										{{item.status | dealStatusType}}
									</div>
									<div class="margT6" v-if="buyOrSell(item)=='sell'&&(item.status==0||item.status==1)">
										<span class="cancelBtn" @click="cancelDealBtn(item)">取消交易</span>
									</div>
								</div>
								<i class="tagIcon iconfont iconfont-tag tag4Sell"></i>
								<i class="tagIconText">卖</i>
							</div>
						</div>
					</van-list>
				</van-tab>
				<van-tab title="已完成" name="complated">
					<van-list v-model="loading3" :finished="finished3" finished-text="没有更多了" @load="onLoad3">
						<div class="list">
							<div class="item" v-for="item in list3" :key="item.id">
								<div class="flex">
									<div class="info">
										<div class="flexNum">
											<div>数量</div>
											<div class="d">{{item.num}} {{$api.numUnit}}</div>
										</div>
										<div class="flex1">
											<div>单价</div>
											<div class="d">{{item.price}}CNY</div>
										</div>
										<div class="flex1">
											<div>总价</div>
											<div class="d">{{totalPrice(item)}}CNY</div>
										</div>
									</div>
									<div class="timeBox">
										匹配时间 {{ item.machingTime }}
									</div>
									<div class="timeBox">
										完成时间 {{ item.coinReleaseTime }}
									</div>
								</div>
								<div class="operatorBox4complate">
									<!-- <div class="margT6 lineHeight">{{buyOrSell(item) | dealBuyOrSellText}}</div> -->
									<div class="margT6 lineHeight yellow">
										{{item.status | dealStatusType}}
									</div>
								</div>
								<i class="tagIcon iconfont iconfont-tag" :class="tagColor(item)"></i>
								<i class="tagIconText">{{buyOrSell(item)=='buy'?'买':'卖'}}</i>
							</div>
						</div>
					</van-list>
				</van-tab>
				<van-tab title="已取消" name="canceled">
					<van-list v-model="loading5" :finished="finished5" finished-text="没有更多了" @load="onLoad5">
						<div class="list">
							<div class="item" v-for="item in list5" :key="item.id">
								<div class="flex">
									<div class="info">
										<div class="flexNum">
											<div>数量</div>
											<div class="d">{{item.num}} {{$api.numUnit}}</div>
										</div>
										<div class="flex1">
											<div>单价</div>
											<div class="d">{{item.price}}CNY</div>
										</div>
										<div class="flex1">
											<div>总价</div>
											<div class="d">{{totalPrice(item)}}CNY</div>
										</div>
									</div>
									<div class="timeBox">
										匹配时间 {{ item.machingTime }}
									</div>
									<div class="timeBox">
										取消时间 {{ item.canCancelTime }}
									</div>
								</div>
								<div class="operatorBox4complate">
									<!-- <div class="margT6 lineHeight">{{buyOrSell(item) | dealBuyOrSellText}}</div> -->
									<div class="margT6 lineHeight yellow">
										{{item.status | dealStatusType}}
									</div>
								</div>
								<i class="tagIcon iconfont iconfont-tag" :class="tagColor(item)"></i>
								<i class="tagIconText">{{buyOrSell(item)=='buy'?'买':'卖'}}</i>
							</div>
						</div>
					</van-list>
				</van-tab>
			</van-tabs>
			</van-pull-refresh>
		</div>
		<!-- <van-sticky></van-sticky> -->
		<!-- 买家所显示的订单详情 -->
		<van-action-sheet v-model="showSellerDetailModel" title="订单详情">
			<div v-if="!detail4sellerInfo">
				<div class="placeholderLine20"></div>
				<van-skeleton :row="16"/>
				<div class="placeholderLine20"></div>
			</div>
			<div class="detailBox" v-if="detail4sellerInfo">
				<div class="tip4model3">
					平台为保证交易的顺利进行，真实姓名与支付宝不一致永久冻结账号处理，交易的时候若遇到此问题欢迎向平台诉讼，情况属实买方会得到奖励。
				</div>
				<div class="line">
					<span class="label">卖方</span>
					<span class="value">{{detail4sellerInfo.realName}}</span>
				</div>
				<div class="line">
					<span class="label">卖方手机号</span>
					<div class="value"><span class="copy" @click="handleCopy(detail4sellerInfo.mobilePhone,$event)">复制</span>{{detail4sellerInfo.mobilePhone}}</div>
				</div>
				<div class="line">
					<div class="label">卖方支付宝</div>
					<div class="value"><span class="copy" @click="handleCopy(detail4sellerInfo.alipayNum,$event)">复制</span>{{detail4sellerInfo.alipayNum}}</div>
				</div>
				<div class="line">
					<div class="label">卖方微信号</div>
					<div class="value"><span class="copy" @click="handleCopy(detail4sellerInfo.wechartNum,$event)">复制</span>{{detail4sellerInfo.wechartNum}}</div>
				</div>
				<div class="line">
					<span class="label">数量</span>
					<span class="value">{{detail4sellerInfo.num}} {{$api.numUnit}}</span>
				</div>
				<div class="line">
					<span class="label">单价</span>
					<span class="value">{{detail4sellerInfo.price.toFixed(2)}} CNY</span>
				</div>
				<div class="line">
					<span class="label">总价</span>
					<span class="value">{{totalPrice(detail4sellerInfo)}} CNY</span>
				</div>
				<div class="line" v-if="detail4sellerInfo.status>-1">
					<span class="label">状态</span>
					<span class="value textAdornColor">{{detail4sellerInfo.status | dealStatusType}}</span>
				</div>
				<div class="line" v-if="detail4sellerInfo.remark">
					<span class="label">诉讼</span>
					<span class="value <red></red>">{{detail4sellerInfo.remark}}</span>
				</div>
				<div class="line" v-if="detail4sellerInfo.status==0 || detail4sellerInfo.status==1">
					<span class="label">自动取消倒计时</span>
					<span class="value textAdornColor">
						<van-count-down :time="setCancelDealDownTime(detail4sellerInfo.canCancelTime)" />
					</span>
				</div>
				<!-- <div class="line" v-if="detail4sellerInfo.status=='1'">
					<span class="label">锁定</span>
					<span class="value textAdornColor">买方已锁定交易</span>
				</div> -->
				<div v-if="detail4sellerInfo.status==0||detail4sellerInfo.status==1">
					<van-button color="#ffae00" size="normal" :block="true" @click="payedBtn">我已付款 让卖家确认</van-button>
					<div class="placeholderLine10"></div>
					<van-button color="linear-gradient(to right, #c7c7c7 , #aaaaaa)" @click="cancelDealBtn(detail4sellerInfo)" size="normal" :block="true">取消交易</van-button>
				</div>
				<div class="line" v-if="detail4sellerInfo.status==2 || detail4sellerInfo.status==4">
					<span class="label">卖方确认倒计时</span>
					<span class="value textAdornColor">
						<van-count-down :time="setLetSureDownTime(detail4sellerInfo.letSureTime)" />
					</span>
				</div>
				<div class="line" v-if="detail4sellerInfo.status==3">
					<span class="label">付款凭证</span>
					<span class="value">
						<i class="iconfont iconfont-upload-pic"></i>
						<input accept="image/*" class="selectPicInput" style="opacity:0" type="file" @change="uploadIMG($event)">
						<!-- <van-button color="#ffae00" size="normal" :block="true" @click="uploadBtn">确认上传以上截图</van-button> -->
					</span>
				</div>
				<div class="line" v-if="detail4sellerInfo.status==4">
					<span class="label">修改凭证</span>
					<span class="value">
						<i class="iconfont iconfont-upload-pic"></i>
						<input accept="image/png,image/jpeg,image/jpg" class="selectPicInput" style="opacity:0" type="file" @change="uploadIMG($event)">
						<!-- <van-button color="#ffae00" size="normal" :block="true" @click="uploadBtn">确认上传以上截图</van-button> -->
					</span>
				</div>
				<div v-if="detail4sellerInfo.status==4 || detail4sellerInfo.status==5">
					<img class="selectedImg" :src="detail4sellerInfo.imgUrl"/>
				</div>
				<div class="margT10">
					<van-button color="linear-gradient(to right, #c7c7c7 , #aaaaaa)" @click="complain(detail4sellerInfo)" size="normal" :block="true">诉讼</van-button>
				</div>
				<div class="margT10 tip4model3" v-html="$api.tipText"></div>
			</div>
		</van-action-sheet>
		<!-- 省市代理订单详情 -->
		<van-action-sheet v-model="showAgentDetailModel" title="订单详情">
			<div v-if="!appointDealDetail">
				<div class="placeholderLine20"></div>
				<van-skeleton :row="16"/>
				<div class="placeholderLine20"></div>
			</div>
			<div class="detailBox" v-if="appointDealDetail">
				<div class="tip4model3" v-html="$api.tipText4Safe"></div>
				<div class="margT10 tip4model3" v-html="$api.tipText4AppointDeal"></div>
				<div class="line">
					<span class="label">数量</span>
					<span class="value">{{appointDealDetail.assistAppointDealInfo.num}} {{$api.numUnit}}</span>
				</div>
				<div class="line blueLight">
					<span class="label">指导单价</span>
					<span class="value">{{appointDealDetail.assistAppointDealInfo.curerntPlatformPrice}} CNY</span>
				</div>
				<div class="line blueLight">
					<span class="label">指导总价</span>
					<span class="value">{{getGuidancePrice}} CNY</span>
				</div>
				<div class="line blue">
					<span class="label">担保单价</span>
					<span class="value">{{appointDealDetail.assistAppointDealInfo.price.toFixed(2)}} CNY</span>
				</div>
				<div class="line blue">
					<span class="label">担保总价</span>
					<span class="value">{{totalPrice(appointDealDetail.assistAppointDealInfo)}} CNY</span>
				</div>
				<div class="line" v-if="activeName=='pay'">
					<span class="label">买方应付</span>
					<span class="value">{{totalPrice(appointDealDetail.assistAppointDealInfo)}} CNY</span>
				</div>
				<div class="line" v-if="activeName=='get'">
					<span class="label">卖方应收</span>
					<span class="value">{{sellerGet(appointDealDetail.assistAppointDealInfo)}} CNY</span>
				</div>
				<div class="line" v-if="activeName=='get'">
					<span class="label">代理应收</span>
					<span class="value">{{agentGet(appointDealDetail.assistAppointDealInfo)}} CNY</span>
				</div>
				<div class="line textAdornColor" v-if="appointDealDetail.assistAppointDealInfo.status>-1">
					<span class="label">状态</span>
					<span class="value">{{appointDealDetail.assistAppointDealInfo.status | dealStatusType}}</span>
				</div>
				<div class="line" v-if="(appointDealDetail.assistAppointDealInfo.status==0 || appointDealDetail.assistAppointDealInfo.status==1)&&activeName=='get'">
					<span class="label">可取消倒计时</span>
					<span class="value textAdornColor">
						<van-count-down :time="setCancelDealDownTime(appointDealDetail.assistAppointDealInfo.canCancelTime)" />
					</span>
				</div>
				<div class="line green">
					<span class="label">买方昵称</span>
					<span class="value">{{appointDealDetail.assistAppointDealBuyerInfo.nickName}}</span>
				</div>
				<div class="line red">
					<span class="label">卖方昵称</span>
					<span class="value">{{appointDealDetail.assistAppointDealSellerInfo.nickName}}</span>
				</div>
				<!-- <div class="line">
					<span class="label blue">代理昵称</span>
					<span class="value">{{appointDealDetail.assistAppointAgentInfo.nickName}}</span>
				</div> -->
				<div class="line blue">
					<span class="label">代理姓名</span>
					<span class="value">{{appointDealDetail.assistAppointAgentInfo.realName}}</span>
				</div>
				<div class="line blue">
					<div class="label">代理手机号</div>
					<div class="value"><span class="copy" @click="handleCopy(appointDealDetail.assistAppointAgentInfo.mobilePhone,$event)">复制</span>{{appointDealDetail.assistAppointAgentInfo.mobilePhone}}</div>
				</div>
				<div class="line blue">
					<div class="label">代理支付宝</div>
					<div class="value"><span class="copy" @click="handleCopy(appointDealDetail.assistAppointAgentInfo.alipayNum,$event)">复制</span>{{appointDealDetail.assistAppointAgentInfo.alipayNum}}</div>
				</div>
				<div class="line blue">
					<div class="label">代理微信号</div>
					<div class="value"><span class="copy" @click="handleCopy(appointDealDetail.assistAppointAgentInfo.wechartNum,$event)">复制</span>{{appointDealDetail.assistAppointAgentInfo.wechartNum}}</div>
				</div>
				
				<van-button v-if="appointDealDetail.assistAppointDealInfo.status==4" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" @click="letMineralBtn">我已收到款 确认并释放矿石</van-button>
				<div class="margT10" v-if="appointDealDetail.assistAppointDealInfo.status==4">
					<img class="selectedImg" :src="appointDealDetail.assistAppointDealInfo.imgUrl"/>
				</div>
				<div class="margT10" v-if="appointDealDetail.assistAppointDealInfo.status==2&&activeName=='get'">
					<van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" @click="letMineralBtn">我已收到款 确认并释放矿石</van-button>
					<!-- <div class="placeholderLine10"></div>
					<van-button color="linear-gradient(to right, #c7c7c7 , #aaaaaa)" @click="notReciveCNYBtn" size="normal" :block="true">代理没收到款 请对方上传付款凭证</van-button> -->
				</div>
				<div v-if="(appointDealDetail.assistAppointDealInfo.status==0||appointDealDetail.assistAppointDealInfo.status==1)&&activeName=='pay'">
					<van-button color="#ffae00" size="normal" :block="true" @click="payedBtn">我已付款 让代理确认</van-button>
					<div class="placeholderLine10"></div>
					<van-button color="linear-gradient(to right, #c7c7c7 , #aaaaaa)" @click="cancelDealBtn(appointDealDetail.assistAppointDealInfo)" size="normal" :block="true">取消交易</van-button>
				</div>
				<div class="margT10">
					<van-button color="linear-gradient(to right, #c7c7c7 , #aaaaaa)" @click="complain(appointDealDetail.assistAppointDealInfo)" size="normal" :block="true">诉讼</van-button>
				</div>
			</div>
		</van-action-sheet>
		<!-- 卖家所显示的订单详情 -->
		<van-action-sheet v-model="showBuyerDetailModel" title="订单详情">
			<div v-if="!detail4buyerInfo">
				<div class="placeholderLine20"></div>
				<van-skeleton :row="16"/>
				<div class="placeholderLine20"></div>
			</div>
			<div class="detailBox" v-if="detail4buyerInfo">
				<div class="line">
					<span class="label">买方</span>
					<span class="value">{{detail4buyerInfo.realName}}</span>
				</div>
				<!-- <div class="line">
					<span class="label">买方手机号</span>
					<div class="value"><span class="copy" @click="handleCopy(detail4buyerInfo.mobilePhone,$event)">复制</span>{{detail4buyerInfo.mobilePhone}}</div>
				</div> -->
				<div class="line" v-if="detail4buyerInfo.status!=5">
					<div class="label">买方手机号</div>
					<div class="value"><span class="copy" @click="handleCopy(detail4buyerInfo.mobilePhone,$event)">复制</span>{{detail4buyerInfo.mobilePhone}}</div>
				</div>
				<div class="line" v-if="detail4buyerInfo.status!=5">
					<div class="label">买方微信号</div>
					<div class="value"><span class="copy" @click="handleCopy(detail4buyerInfo.wechartNum,$event)">复制</span>{{detail4buyerInfo.wechartNum}}</div>
				</div>
				<div class="line">
					<span class="label">数量</span>
					<span class="value">{{detail4buyerInfo.num}} {{$api.numUnit}}</span>
				</div>
				<div class="line">
					<span class="label">单价</span>
					<span class="value">{{detail4buyerInfo.price.toFixed(2)}} CNY</span>
				</div>
				<div class="line">
					<span class="label">总价</span>
					<span class="value">{{totalPrice(detail4buyerInfo)}} CNY</span>
				</div>
				<div class="line" v-if="detail4buyerInfo.status>-1">
					<span class="label">状态</span>
					<span class="value textAdornColor">{{detail4buyerInfo.status | dealStatusType}}</span>
				</div>
				<div class="line" v-if="detail4buyerInfo.status==0 || detail4buyerInfo.status==1">
					<span class="label">可取消倒计时</span>
					<span class="value textAdornColor">
						<van-count-down :time="setCancelDealDownTime(detail4buyerInfo.canCancelTime)" />
					</span>
				</div>
				<!-- <div class="line" v-if="detail4buyerInfo.status=='1'">
					<span class="label">锁定</span>
					<span class="value textAdornColor">买方已锁定交易</span>
				</div> -->
				<div class="tipText2" v-if="detail4buyerInfo.status==1">
					{{buyerHaveWord}}
				</div>
				<van-button v-if="detail4buyerInfo.status==4" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" @click="letMineralBtn">我已收到款 确认并释放矿石</van-button>
				<div class="margT10" v-if="detail4buyerInfo.status==4">
					<img class="selectedImg" :src="detail4buyerInfo.imgUrl"/>
				</div>
				<div class="margT10" v-if="detail4buyerInfo.status==2">
					<van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" @click="letMineralBtn">我已收到款 确认并释放矿石</van-button>
					<div class="placeholderLine10"></div>
					<van-button color="linear-gradient(to right, #c7c7c7 , #aaaaaa)" @click="notReciveCNYBtn" size="normal" :block="true">我没收到款 请对方上传付款凭证</van-button>
				</div>
				<div class="margT10">
					<van-button color="linear-gradient(to right, #c7c7c7 , #aaaaaa)" @click="complain(detail4buyerInfo)" size="normal" :block="true">诉讼</van-button>
				</div>
				<div class="margT10 tip4model3" v-html="$api.tipText"></div>
			</div>
		</van-action-sheet>
		<!-- 取消交易提示 -->
		<van-action-sheet v-model="showSureCancelTransactionModel4seller" title="温馨提示">
			<div class="cancelSellTip">
				<div class="tipText2">若买方在30分钟内没付款，且联系无果，卖方可取消交易。若买方正有事情在忙，锁定了交易，则交易时间延长30分钟。</div>
				<div class="countDownTimeBox margT20 clear hidden" v-if="cancelSellSureBtnText=='知道了'">
					<div class="flexCountTime">可取消倒计时：</div>
					<div class="flexCountTime">
						<van-count-down :time="setCountDownTime4seller" />
					</div>
				</div>
			</div>
			<div class="sureAppointBtnBox">
				<van-button @click="cancel4seller" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true">{{cancelSellSureBtnText}}</van-button>
			</div>
		</van-action-sheet>
		<van-action-sheet v-model="showSureCancelTransactionModel4buyer" title="温馨提示">
			<div class="cancelSellTip">
				<div class="tipText2">为了避免买方随意取消交易而导致扰乱市场的现象，经平台研究决定，买方主动取消交易或因超时未打款而被动取消交易，要减0.2~0.5个贡献值。若卖方实名信息不符或者有其他问题，请向平台诉讼，让客服来处理单子并免费帮您取消交易。</div>
			</div>
			<div class="sureAppointBtnBox">
				<van-button @click="cancel4buyer" :loading="sureCancelBtnLoading" loading-type="spinner" color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true">确认取消</van-button>
			</div>
		</van-action-sheet>
		<van-dialog
		  v-model="showComplainDialog"
		  title="诉讼的理由"
		  show-cancel-button
		  @confirm="submitComplainBtn"
		>
			<div class="remark">
				<van-field
					v-model="remark"
					rows="2"
					autosize
					type="textarea"
					maxlength="100"
					placeholder="请填写理由,让平台找到线索好介入调查"
					show-word-limit
				  />
			</div>	  
		  <!-- <van-field v-model="remark" required clearable placeholder="写点内容,让平台好找到线索"/> -->
		</van-dialog>
		<van-action-sheet v-model="showSellerUserInfoModel" title="卖家信息">
			<div class="box box2">
				<div class="flex flex1">
					<div class="value" @click="toBookView('1',sellerUserInfo.userId)">{{sellerUserInfo.teamCalculationPower}}</div>
					<div class="text">团队算力</div>
				</div>
				<div class="flex flex4">
					<!-- <div>{{sellerUserInfo.platformTicket}}</div> -->
					<div class="value" @click="toBookView('2',sellerUserInfo.userId)">{{sellerUserInfo.platformTicket}}</div>
					<div class="text">帮扶券</div>
				</div>
				<!-- <div class="flex flex3">
					<div class="value" @click="toBookView('3',sellerUserInfo.userId)">{{sellerUserInfo.contributionValue}}</div>
					<div class="text">贡献值</div>
				</div> -->
				<div class="flex flex2">
					<!-- <div>{{sellerUserInfo.thisWeekMineral}}</div> -->
					<div class="value" @click="toBookView('4',sellerUserInfo.userId)">{{sellerUserInfo.thisWeekMineral}}</div>
					<div class="text">矿石</div>
				</div>
			</div>
			<div class="box box3">
				<div class="flex flex1">
					<div>{{sellerUserInfo.myCalculationPower}}</div>
					<!-- <NumberGrow :value="userInfo.myCalculationPower"></NumberGrow> -->
					<div class="text">TA的算力</div>
				</div>
				<div class="flex flex4">
					<div>{{sellerUserInfo.temporaryFreezePlatformTicket}}</div>
					<!-- <NumberGrow :value="userInfo.temporaryFreezePlatformTicket"></NumberGrow> -->
					<div class="text">交易中<br>帮扶券</div>
				</div>
				<!-- <div class="flex flex3">
					<div>{{sellerUserInfo.temporaryFreezeContribution}}</div>
					<div class="text">交易中<br>贡献值</div>
				</div> -->
				<div class="flex flex2">
					<div>{{sellerUserInfo.temporaryFreezeMineral}}</div>
					<!-- <NumberGrow :value="userInfo.temporaryFreezeMineral"></NumberGrow> -->
					<div class="text">交易中<br>矿石</div>
				</div>
			</div>
			<div class="margT10">
				<van-button color="linear-gradient(to right, #ffae00 , #ff8400)" size="normal" :block="true" @click="lookThisBook(sellerUserInfo.userId)">查看对方账本</van-button>
			</div>
			<div class="margT10">
				<van-button color="linear-gradient(to right, #c7c7c7 , #aaaaaa)" size="normal" @click="complain(sellerUserInfo)" :block="true">诉讼</van-button>
			</div>
			<div class="placeholderLine10"></div>
		</van-action-sheet>
		<van-dialog v-model="showTipModel" title="问题小帮手" confirmButtonText="好的">
			<div class="paddingWing f-12 lineHeight tip4model2 textJustify">
				<div class="textIndent">
					单子匹配后，请卖家耐心等待30分钟，若买方在30分钟内没付款，也没锁定交易，卖方可取消交易。单子匹配后，买家若当时在忙没时间付款，可先锁定交易，锁定交易后，可延长30分钟的交易时间，锁定交易后买方若在匹配后的1小时内没付款，卖方亦可取消交易。（注：买方若是要通过微信所绑定的手机号转账，请卖方在微信中的'<b>支付-支付管理</b>'中开通'<b>允许通过手机号向我转账</b>'的功能）。
				</div>
			</div>
		</van-dialog>
		<van-dialog v-model="showSendSMSTipModel" title="系统提示" :show-confirm-button="false">
			<div class="sendMessageBox">
				<div class="placeholderLine10"></div>
				<div class="tip4model3 paddingWing textIndent">
					{{sendSmsTipText}}
				</div>
				<div class="placeholderLine10"></div>
				<div class="myCell">
					<van-field label="对方手机号" clearable disabled v-model="mobilePhone"/>
				</div>
				<van-cell-group>
				  <van-field
					label="短信内容"
				    v-model="smsContent"
				    rows="2" required
				    autosize clearable
				    type="textarea"
				    maxlength="100"
				    placeholder="请输入短信内容(不超过100字)"
				    show-word-limit
				  />
				</van-cell-group>
				<div class="placeholderLine10"></div>
				<van-button type="primary" size="normal" :block="true" @click="toSendPage">一键发送</van-button>
				<div class="placeholderLine10"></div>
				<van-button type="info" size="normal" :block="true" @click="handleCopy(smsContent,$event)">我是对方好友 复制该短信内容</van-button>
				 <!-- v-if="phoneType!='pc'" -->
				<!-- <a :href="sendSmsHref">
				</a> -->
			</div>
		</van-dialog>
		<m-refresh @refreshEvent="refreshEvent"></m-refresh>
	</div>
</template>

<script>
	import mHeader from '@/components/Header.vue';
	import mFullscreen from '@/components/Fullscreen.vue';
	import mRefresh from '@/components/Refresh.vue';
	import clip from '@/assets/js/clipboard';
	import EXIF from 'exif-js';
	import { Dialog } from 'vant';
	import { Toast } from 'vant';
	export default {
		data() {
			return {
				sendSmsTipText:"订单匹配成功，为了让交易顺利进行，请给买家发个短信提醒。",
				mobilePhone:"",
				sendSmsHref:"",
				smsContent:"",
				showSendSMSTipModel:false,
				showTipModel:false,
				sureCancelBtnLoading: false,
				showComplainDialog:false,
				remark:"",
				pen:"",
				uploadPicBase64:"",
				buyerHaveWord:"买方有话说：您好，我手头正有事情在忙，请稍等片刻。",
				tipText:"<b class='textBold'>温馨提示：</b><br>1.单子一旦匹配，请卖方务必【发送短信提醒】，然后耐心等待30分钟，若买方在30分钟内没付款，也没锁定交易，卖方可取消交易。<br>2.单子匹配后，买方若当时在忙没时间付款，可先通过【锁定交易】来延长30分钟交易时间，锁定交易后买方若在匹配后的1小时内没付款，卖方亦可取消交易。<br>（注：买方若是要通过微信所绑定的手机号转账，请卖方预先在微信中的【支付-支付管理】中开通【允许通过手机号向我转账】的功能）",
				tipText4AppointDeal: "",
				activeName: "pay",
				pageCount: 1000,
				totalItems: 10000,
				mcTime: '2019-10-16 15:30:12',
				setCountDownTime4seller: 30 * 60 * 60 * 1000,
				countDownTimeBoxIsShow: true,
				showSureCancelTransactionModel4seller: false,
				showSureCancelTransactionModel4buyer:false,
				showSellerUserInfoModel:false,
				showSellerDetailModel: false,
				showBuyerDetailModel: false,
				showAgentDetailModel: false,
				cancelSellSureBtnText: '知道了',
				currentPage1: 1,
				currentPage2: 1,
				currentPage3: 1,
				currentPage4: 1,
				currentPage5: 1,
				pageSize: 10,
				loading:true,
				loading1: false,
				finished1: false,
				loading2: false,
				finished2: false,
				loading3: false,
				finished3: false,
				loading4: false,
				finished4: false,
				loading5: false,
				finished5: false,
				list1:[],
				list2:[],
				list3:[],
				list4:[],
				list5:[],
				appointDealDetail:'',
				detail4buyerInfo:'',
				sellerUserInfo:'',
				detail4sellerInfo:'',
				userId:'',
				transactionBuyerId:'',
				transactionId:'',
				toast:'',
				phoneType:'',
				type:2,
				guidancePrice:''
			}
		},
		components: {
			mHeader,
			mFullscreen,
			mRefresh,
		},
		computed:{
			getGuidancePrice() {
				let _this = this;
				let guidancePrice = _this.appointDealDetail.assistAppointDealInfo.num * _this.appointDealDetail.assistAppointDealInfo.curerntPlatformPrice;
				_this.guidancePrice = guidancePrice.toFixed(2);
				return _this.guidancePrice;
			},
		},
		created() {
			let _this = this;
			//_this.pen = _this.$api.projectEnglishName;
			_this.userId = _this.$cookies.get('userId');
			// _this.tipText = _this.$api.tipText;
			if(_this.$utils.isNUll(_this.userId)){
				_this.$toast(_this.$api.loginAgainTipText);
				_this.$router.replace('login');
			}
			_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
			// _this.initializeHintInfo();
			_this.initializeTabActiveName();
			
			if(_this.$route.query.mobilePhone){
				//发送短信提示start
				_this.mobilePhone = _this.$route.query.mobilePhone;
				//console.log('_this.mobilePhone',_this.mobilePhone);
				//console.log("localStorage.getItem('mobilePhone')",localStorage.getItem('mobilePhone'));
				if(_this.$route.query.dealType==1){
					if(_this.$route.query.isSelf) {
						_this.sendSmsTipText = "订单匹配成功，为了让交易顺利进行，请给对方发个短信提醒。不然交易取消后可能会扣卖家0.5贡献值";
						_this.smsContent = `【${_this.$api.projectName}】我所转让的${_this.$route.query.num}个矿石已经匹配到了您，请在“我的--我的交易--待付款”的订单详情中查看并及时完成交易。`;
					}else{
						_this.sendSmsTipText = "订单匹配成功，为了让交易顺利进行，请提醒代理审核单子。";
						_this.smsContent = `【${_this.$api.projectName}】我的定向交易单子选择了您做担保，请审核，谢谢。`;
					}
				}else{
					_this.sendSmsTipText = "订单匹配成功，为了让交易顺利进行，请给对方发个短信提醒。不然交易取消后可能会扣卖家0.5贡献值";
					_this.smsContent = `【${_this.$api.projectName}】我所转让的${_this.$route.query.num}个矿石已经匹配到了您，请在“我的--我的交易--待付款”的订单详情中查看并及时完成交易。`;
				}
				_this.setSendSmsHref(_this.mobilePhone,_this.smsContent);
				//发送短信提示end
				_this.showSendSMSTipModel = true;
			}
			
			_this.bsTip();
			
			// let all = 2000;
			// let r=0.005;
			// let count = 0;
			// for(let i=0;i<10000;i++){
			// 	count = count + all*r;
			// 	all = all-all*r;
			// 	if(count>8500){
			// 		//console.log('天数',i); // 天数 353
			// 		break;
			// 	}
			// }
		},
		methods: {
			back(){
				this.$router.push('my');
			},
			bsTip(){
				let _this = this;
				let isWeixin = _this.$utils.isWeixin();
				if(isWeixin){
					Dialog.alert({
					  title: '系统提示',
					  message: _this.$api.bsTip
					}).then(() => {
					  // on close
					});
				}
			},
			showTip(){
				this.showTipModel = true;
			},
			lookThisBook(userId){
				this.$router.push({path:"lookBook",query:{lookUserId:userId}})
			},
			toBookView(val,userId){
				let _this = this;
				//console.log('toBookView');
				let name = 'mineral';
				if(val==1){
					name = 'calculation';
				}else if(val==2){
					name = 'ticket';
				}else if(val==3){
					name = 'contribution';
				}else if(val==4){
					name = 'mineral';
				}
				_this.$cookies.set("tab_name_book", name, _this.$api.cookiesTime)
				_this.$router.push({path:"lookBook",query:{lookUserId:userId}})
			},
			toScrollTop(){
				window.scrollTo(0,0);
				document.body.scrollTop = 0;
				document.documentElement.scrollTop = 0;
			},
			tagColor(item){
				let _this = this;
				if(item.buyerId == _this.userId){
					return "tag4Buy"
				}else{
					return "tag4Sell"
				}
			},
			uploadBtn(){
				let _this = this;
				// _this.showBuyDetailModel = false;
				Dialog.confirm({
				  title: '提示信息',
				  confirmButtonText:'确定',
				  message: '您确定上传以上付款凭证么？'
				}).then(() => {
				  // on confirm
				  //console.log('sure',_this.imagesList);
				  _this.showBuyDetailModel = false;
				  //这里调用确认付款接口
				  //.....
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
			uploadIMG(e) {
				let _this = this;
				//console.log('正在解析图片');
				// Toast.clear();
				_this.toast = Toast.loading({
				  duration: 3000, // 持续展示 toast
				  closeOnClickOverlay:true,
				  message: "正在解析图片"
				});
				let files = e.target.files || e.dataTransfer.files;
				if (!files.length) return;
				//console.log("pic_size(MB)", files[0].size / 1024 / 1024);
				if (files[0].size / 1024 / 1024 > 7) {
				   _this.$toast('上传图片大小不能超过 7MB');
				} else {
				  //console.log('正在获取图片');
				  _this.toast.message = `正在获取图片`;
				  _this.imgPreview(files[0]);
				}
			},
			//获取图片
			imgPreview(file) {
				let _this = this;
				_this.toast.message = `正在压缩图片`;
				let Orientation = null;
				//判断支不支持FileReader
				if (!file || !window.FileReader) return false;
				if (/^image/.test(file.type)) {
				  //创建一个reader
				  EXIF.getData(file, function() {
				      EXIF.getAllTags(this);   
				      Orientation = EXIF.getTag(this, 'Orientation');  
				  });  
				  let reader = new FileReader();
				  //将图片转成base64格式
				  reader.readAsDataURL(file);
				  //读取成功后的回调
				  reader.onloadend = function(res) {
					let result = this.result;
					let image = new Image();
					image.src = result;//base64
					image.onload = function() {
						//alert("image.onload");
					    var expectWidth = this.naturalWidth;  
					    var expectHeight = this.naturalHeight; 
					    var scale = expectWidth / expectHeight;
					    var canvas = document.createElement("canvas");
					    var ctx = canvas.getContext("2d");
					    canvas.width = expectWidth;
					    canvas.height = expectHeight;
					    //如果方向角不为1，都需要进行旋转 
					    if(Orientation && Orientation != "" && Orientation != 1){  
					        var degree=0;
					        switch(Orientation){
					            case 6://需要顺时针（向左）90度旋转  
					                degree=90;
					                canvas.width = expectHeight;
					                canvas.height = expectWidth;
					                ctx.translate(expectHeight / 2,expectWidth / 2);
					                ctx.rotate(degree * Math.PI / 180);
					                ctx.translate(-expectWidth / 2,-expectHeight / 2);
					                ctx.drawImage(image,0,0,expectWidth,expectHeight);
					                break;
					            case 8://需要逆时针（向右）90度旋转
					                degree=-90;
					                canvas.width = expectHeight;
					                canvas.height = expectWidth;
					                ctx.translate(expectHeight / 2,expectWidth / 2);
					                ctx.rotate(degree * Math.PI / 180);
					                ctx.translate(-expectWidth / 2,-expectHeight / 2);
					                ctx.drawImage(image,0,0,expectWidth,expectHeight);
					                break;
					            case 3://需要180度旋转  
					                degree=-180;
					                ctx.rotate(degree * Math.PI / 180);
					                ctx.drawImage(image,-expectWidth,-expectHeight,expectWidth,expectHeight);
					                break;
					        }         
					    }else{
					        ctx.drawImage(image,0,0,expectWidth,expectHeight);
					    }
					    let dataOri = canvas.toDataURL("image/png");
						let img = new Image();
						img.src = dataOri;//base64
						// //console.log("dataOri",dataOri);
						//console.log('********未压缩前的图片大小(KB)********');
						//console.log(dataOri.length / 1024);
						img.onload = function() {
							let data = _this.$utils.compress(img, 0.4);//调整压缩比例
							let params = {
								imgUrl: data,
								id: _this.id,
								/* buyerId: _this.userId, */
							}
							_this.toast.message = `正在上传图片`;
							_this.$ajax.ajax(_this.$api.updateTransactionImgUrlById, 'POST', params, function(res) {
								if (res.code == _this.$api.CODE_OK) {
									_this.toast.message = `图片上传成功`;
									_this.toast.icon = 'success'
									//发送短信提示start
									_this.sendSmsTipText = "图片上传成功，为了让交易顺利进行，请给卖家发个短信提醒。";
									if(_this.type==2){
										_this.mobilePhone = _this.appointDealDetail.assistAppointAgentInfo.mobilePhone;
									}else{
										_this.mobilePhone = _this.detail4sellerInfo.mobilePhone;
									}
									_this.smsContent = `【${_this.$api.projectName}】我的付款凭证已上传，请在“我的--我的交易--待收款”的订单详情中查看。`;
									_this.setSendSmsHref(_this.mobilePhone,_this.smsContent);
									//发送短信提示end
									_this.showSellerDetailModel = false;
									_this.onLoad2();
								}
							})
						}
					};
				  }
				}
			},
			buyOrSell(item){
				let _this = this;
				if(item.buyerId == _this.userId){
					return "buy"
				}else{
					return "sell"
				}
			},
			maxPrice(item){
				return (item.maxNumber*item.price).toFixed(2);
			},
			totalPrice(item){
				return (item.num*item.price).toFixed(2);
			},
			sellerGet(item){
				return (item.assurePrice*0.97).toFixed(2);
			},
			agentGet(item){
				return (item.assurePrice*0.03).toFixed(2);
			},
			initializeTabActiveName() {
				let _this = this;
				if (_this.$cookies.isKey("tabName4MyDeal")) {
					_this.activeName = _this.$cookies.get("tabName4MyDeal");
				}
			},
			onLoad1(){
				//console.log('load1')
				let _this = this;
				// 异步更新数据
				_this.$ajax.ajax(_this.$api.getAssistBuyBillListByBuyerId, 'GET', null, function(res) {
					// //console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						_this.list1 = res.data;
						_this.loading1 = false;
						_this.finished1 = true;
					}
					_this.loading = false;
				})
			},
			onLoad2(){
				//console.log('load2')
				let _this = this;
				_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
				// 异步更新数据
				/* let params = {
					userId: _this.userId
				} */
				_this.$ajax.ajax(_this.$api.getAssistTransactionList4buyer, 'GET', null, function(res) {
					// //console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						_this.list2 = res.data;
						_this.loading2 = false;
						_this.finished2 = true;
					}
					_this.loading = false;
				})
			},
			onLoad4(){
				//console.log('load4')
				let _this = this;
				// 异步更新数据
				/* let params = {
					userId: _this.userId
				} */
				_this.$ajax.ajax(_this.$api.getAssistTransactionList4sellerByUserId, 'GET', null, function(res) {
					// //console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						_this.list4 = res.data;
						_this.loading4 = false;
						_this.finished4 = true;
					}
					_this.loading = false;
				})
			},
			onLoad3(){
				//console.log('load3')
				let _this = this;
				_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
				// 异步更新数据
				/* let params = {
					userId: _this.userId
				} */
				_this.$ajax.ajax(_this.$api.getAssistTransactionList4ComplateByUserId, 'GET', null, function(res) {
					// //console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						// let list = res.data.list;
						_this.list3 = res.data;
						_this.loading3 = false;
						_this.finished3 = true;
					}
					_this.loading = false;
				})
			},
			onLoad5(){
				//console.log('load5')
				let _this = this;
				// 异步更新数据
				/* let params = {
					userId: _this.userId
				} */
				_this.$ajax.ajax(_this.$api.getAssistTransactionList4CancelByUserId, 'GET', null, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						_this.list5 = res.data;
						_this.loading5 = false;
						_this.finished5 = true;
					}
					_this.loading = false;
				})
			},
			handleCopy(text, event) {
				let _this = this;
				_this.showSendSMSTipModel = false;
				clip(text,event,function(res){
					_this.$toast(`复制成功`);
				});
			},
			lockTransactionBtn(item){
				let _this = this;
				_this.id = item.id;
				//console.log('lockTransactionBtn');
				
				Dialog.confirm({
				  title: '确认信息',
				  confirmButtonText:'确定',
				  message: '锁定交易可延长30分钟自动取消订单的时间，您是否确定要锁定交易？'
				}).then(() => {
					// on confirm
					//console.log('sure');
					let params = {
						/* userId:  _this.userId, */
						status:1,
						id: _this.id
					}
					//console.log('params',params)
					_this.$ajax.ajax(_this.$api.updateTransactionStatusById, 'POST', params, function(res) {
						// //console.log('res', res);
						if (res.code == _this.$api.CODE_OK) {
							// let list = res.data.list;
							if(res.data==1){
								_this.onLoad2();
							}
						}
					})
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
			cancelDeal4OverTime(){
				let _this = this;
				let params = {
					id: _this.id,
				}
				_this.$ajax.ajax(_this.$api.cancelAssistTransactionById, 'POST', params, function(res) {
					// //console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						if(res.data == 1){
							Dialog.alert({
							  title: '提示信息',
							  confirmButtonText:'已经知晓',
							  message: '由于您超时未付款，已超过付款时间，该买单已被系统自动取消！'
							}).then(() => {
							  // on confirm
							  //console.log('sure');
							  
							}).catch(() => {
							  // on cancel
							  //console.log('cancel');
							});
							_this.onLoad2();
						}
					}else{
						_this.$toast(res.message);//当前状态无法取消交易
					}
				})
			},
			cancelBuyBillBtn(item){
				let _this = this;
				_this.id = item.id;
				if(item.canCancelTime<_this.$utils.getDateTime(new Date())&&(item.status==0||item.status==1)){
					_this.cancelDeal4OverTime();
					return;
				}
				Dialog.confirm({
				  title: '确认信息',
				  confirmButtonText:'确定',
				  message: '买家您是否确定要撤销此买单？'
				}).then(() => {
					// on confirm
					//console.log('sure');
					 let params = {
						id: _this.id,
						// userId: _this.userId
					 }
					 //console.log('params',params)
					 _this.$ajax.ajax(_this.$api.deleteBuyBillById, 'POST', params, function(res) {
						// //console.log('res', res);
						if (res.code == _this.$api.CODE_OK) {
							// let list = res.data.list;
							if(res.data == 1){
								_this.$toast("撤销成功");
								_this.onLoad1();
							}
						}
					 })
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
			complain(){
				let _this = this;
				_this.showComplainDialog = true;
			},
			submitComplainBtn(){
				let _this = this;
				let params = {
					remark:_this.remark,
					id:_this.id,
				}
				//console.log('params',params);
				if(_this.$utils.hasNull(params)){
					_this.$toast('请填写理由');
					return;
				}
				//调用申诉接口
				_this.$ajax.ajax(_this.$api.updateTransactionStatus5ById, 'POST', params, function(res) {
					// //console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						// let list = res.data.list;
						if(res.data == 1){
							_this.$toast("诉讼成功");
							_this.onLoad2();
							_this.showSellerDetailModel = false;
							_this.onLoad4();
							_this.showBuyerDetailModel = false;
							_this.showSellerUserInfoModel = false;
						}
					}
				})
			},
			cancelDealBtn(item) {
				let _this = this;
				_this.id = item.id;
				let bs = _this.buyOrSell(item);
				if(bs=='sell'){
					_this.setCountDownTime(item.canCancelTime);
					_this.showSureCancelTransactionModel4seller = true;
				}else if(bs=='buy'){
					_this.showSureCancelTransactionModel4buyer = true;
				}
			},
			cancel4seller(){
				let _this = this;
				if(_this.cancelSellSureBtnText=="知道了"){
					_this.showSureCancelTransactionModel4seller = false;
				}else{
					//调用取消接口
					let params = {
						id: _this.id,
						/* userId: _this.userId */
					}
					_this.sureCancelBtnLoading = true;
					_this.$ajax.ajax(_this.$api.cancelAssistTransactionById, 'POST', params, function(res) {
						// //console.log('res', res);
						_this.sureCancelBtnLoading = false;
						if (res.code == _this.$api.CODE_OK) {
							if(res.data == 1){
								_this.showAgentDetailModel = false;
								_this.$toast("已成功取消");
								_this.showSureCancelTransactionModel4seller = false;
								_this.onLoad4();
								_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
							}
						}else{
							_this.$toast(res.message);
						}
					})
				}
			},
			cancel4buyer(){
				let _this = this;
				//调用取消接口
				let params = {
					id: _this.id,
					/* userId: _this.userId */
				}
				_this.sureCancelBtnLoading = true;
				_this.$ajax.ajax(_this.$api.cancelAssistTransactionById, 'POST', params, function(res) {
					// //console.log('res', res);
					_this.sureCancelBtnLoading = false;
					if (res.code == _this.$api.CODE_OK) {
						if(res.data == 1){
							_this.showAgentDetailModel = false;
							_this.$toast("已成功取消");
							_this.showSureCancelTransactionModel4buyer = false;
							_this.showSellerDetailModel = false;
							_this.onLoad2();
						}
					}else{
						_this.$toast(res.message);
					}
				})
			},
			showSellerInfoBtn(item){
				let _this = this;
				_this.showSellerUserInfoModel = true;
				_this.id = item.id;
				let params = {
					id: item.id
				}
				_this.$ajax.ajax(_this.$api.getAssistSellerUserInfoByTransactionId, 'GET', params, function(res) {
					if (res.code == _this.$api.CODE_OK) {
						if(res.data){
							_this.sellerUserInfo = res.data;
						}
					}
				})
			},
			refreshEvent() {
				//console.log("refresh")
				let _this = this;
				_this.loading = true;
				if(_this.activeName == "buy"){
					_this.onLoad1();
				}else if(_this.activeName == "pay"){
					_this.onLoad2();
				}else if(_this.activeName == "get"){
					_this.onLoad4();
				}else if(_this.activeName == "complated"){
					_this.onLoad3();
				}else if(_this.activeName == "canceled"){
					_this.onLoad5();
				}
			},
			tabChange(name, title) {
				//console.log(name, title);
				let _this = this;
				this.$cookies.set("tabName4MyDeal", name, 60 * 60 * 1);
				if(name == 'pay' || name == 'complated'){
					_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
				}
				_this.activeName = name;
			},
			showDetailBtn(item) {
				let _this = this;
				// const toast = Toast.loading({
				//   duration: 0, // 持续展示 toast
				//   forbidClick: true
				// });
				_this.type = item.type;
				//console.log('_this.type',_this.type);
				_this.id = item.id;
				let bs = _this.buyOrSell(item);
				let params = {
					id: _this.id
				}
				// 交易类型 0平台 1溢价 2定向
				if(item.type == 2){
					if(_this.activeName == 'get'){//get是卖家
						_this.showAgentDetailModel = true;
						_this.$ajax.ajax(_this.$api.getAssistAppointDealDetailById, 'GET', params, function(res) {
							if (res.code == _this.$api.CODE_OK) {
								// let list = res.data.list;
								_this.appointDealDetail = res.data;
							}
						})
					}else if(_this.activeName == 'pay'){//pay是买家
						//console.log('pay是买家');
						if(item.canCancelTime<_this.$utils.getDateTime(new Date())&&(item.status==0||item.status==1)){
							_this.cancelDeal4OverTime();
							return;
						}
						_this.showAgentDetailModel = true;
						_this.$ajax.ajax(_this.$api.getAssistAppointDealDetailById, 'GET', params, function(res) {
							if (res.code == _this.$api.CODE_OK) {
								_this.appointDealDetail = res.data;
								if(_this.appointDealDetail.assistAppointDealInfo.status==11){
									Dialog.alert({
									  title: '系统提示',
									  message: "卖家信息正在审核中，请稍后操作...审核完毕代理会通知您，若等不及可直接联系订单详情中的代理询问审核情况"
									}).then(() => {
									  // on close
									});
								}
								let now = _this.$utils.getDateTime(new Date());
								if(_this.appointDealDetail.assistAppointDealInfo.letSureTime&&_this.appointDealDetail.assistAppointDealInfo.letSureTime<now){
									Dialog.confirm({
									  title: '提示信息',
									  confirmButtonText:'需要',
									  message: '由于卖家30分钟内没确认，已经超过确认时间，请问需要系统此刻帮您确认吗？'
									}).then(() => {
									  // on confirm
									  //console.log('sure');
									  _this.letSureByBuyer();
									}).catch(() => {
									  // on cancel
									  //console.log('cancel');
									});
								}
							}
						})
					}
				}else{
					//console.log('else?')
					if(bs=='sell'){
						let params = {
							id: _this.id
						}
						_this.showBuyerDetailModel = true;
						_this.$ajax.ajax(_this.$api.getAssistBuyerInfoByTransactionId, 'GET', params, function(res) {
							if (res.code == _this.$api.CODE_OK) {
								if(res.data){
									_this.detail4buyerInfo = res.data;
								}else{
									_this.onLoad2();
								}
							}
						})
					}else if(bs=='buy'){
						if(item.canCancelTime<_this.$utils.getDateTime(new Date())&&(item.status==0||item.status==1)){
							_this.cancelDeal4OverTime();
							return;
						}
						let params = {
							id: _this.id
						}
						_this.showSellerDetailModel = true;
						_this.$ajax.ajax(_this.$api.getAssistSellerInfoByTransactionId, 'GET', params, function(res) {
							if (res.code == _this.$api.CODE_OK) {
								if(res.data){
									_this.detail4sellerInfo = res.data;
									if(_this.detail4sellerInfo.status == 0){
										Dialog.alert({
										  title: '温馨提示',
										  confirmButtonText:'锁定交易',
										  message: '为了让交易顺利进行，查看详情之前需先锁定交易，锁定后可延长30分钟自动取消交易的时间！'
										}).then(() => {
											// on confirm
											//console.log('sure');
											let params = {
												status:1,
												id: _this.id
											}
											Toast.loading({
											  message: '锁定中...',
											  forbidClick: true,
											  loadingType: 'spinner'
											});
											//console.log('params',params)
											_this.$ajax.ajax(_this.$api.updateTransactionStatusById, 'POST', params, function(res) {
												Toast.clear();
												if (res.code == _this.$api.CODE_OK) {
													if(res.data==1){
														_this.onLoad2();
														_this.getSellerInfoByTransactionId();
													}
												}
											})
										}).catch(() => {
										  //console.log('cancel');
										});
									}else{
										_this.getSellerInfoByTransactionId();
									}
								}else{
									_this.onLoad2();
								}
							}
						})
					}
				}
			},
			getSellerInfoByTransactionId(){
				//console.log('==getSellerInfoByTransactionId==')
				let _this = this;
				let params = {
					id: _this.id
				}
				_this.showSellerDetailModel = true;
				_this.$ajax.ajax(_this.$api.getAssistSellerInfoByTransactionId, 'GET', params, function(res) {
					// //console.log('res', res);
					// Toast.clear();
					if (res.code == _this.$api.CODE_OK) {
						// let list = res.data.list;
						if(res.data){
							_this.detail4sellerInfo = res.data;
							let now = _this.$utils.getDateTime(new Date());
							if(_this.detail4sellerInfo.letSureTime&&_this.detail4sellerInfo.letSureTime<now){
								Dialog.confirm({
								  title: '提示信息',
								  confirmButtonText:'需要',
								  message: '由于卖家30分钟内没确认，已经超过确认时间，请问需要系统此刻帮您确认吗？'
								}).then(() => {
								  // on confirm
								  //console.log('sure');
								  _this.letSureByBuyer();
								}).catch(() => {
								  // on cancel
								  //console.log('cancel');
								});
							}
						}else{
							_this.onLoad2();
						}
					}
				})
			},
			letSureByBuyer(){
				let _this = this;
				let params = {
					status:8,
					id: _this.id,
				}
				//console.log('params',params)
				_this.$ajax.ajax(_this.$api.updateTransactionStatusById, 'POST', params, function(res) {
					// //console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						// let list = res.data.list;
						if(res.data==1){
							_this.showAgentDetailModel = false;
							_this.showSellerDetailModel = false;
							_this.$toast('确认成功');
							//把是否刷新用户信息设置成true,打开‘我的’页面的时候，会自动重新获取一遍userInfo
							_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
							_this.onLoad2();
						}
					}
				})
			},
			/* letSureByBuyer(){
				let _this = this;
				let params = {
					id: _this.id,
				}
				//console.log('params',params)
				_this.$ajax.ajax(_this.$api.updateTransactionStatus84buyerById, 'POST', params, function(res) {
					// //console.log('res', res);
					if (res.code == _this.$api.CODE_OK) {
						// let list = res.data.list;
						if(res.data==1){
							_this.showSellerDetailModel = false;
							_this.$toast('确认成功');
							//把是否刷新用户信息设置成true,打开‘我的’页面的时候，会自动重新获取一遍userInfo
							_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
							_this.onLoad2();
						}
					}
				})
			}, */
			notReciveCNYBtn(){
				let _this = this;
				// _this.showBuyDetailModel = false;
				Dialog.confirm({
				  title: '提示信息',
				  confirmButtonText:'确定',
				  message: '请先去支付宝或微信确认是否收到款，您确定没收到款？'
				}).then(() => {
				  // on confirm
				  //console.log('sure');
				  _this.showSellerDetailModel = false;
				  //这里调用让对方上传截图接口
				  let params = {
					/* userId:  _this.userId, */
					status:3,
				  	id: _this.id
				  }
				  //console.log('params',params)
				  _this.$ajax.ajax(_this.$api.updateTransactionStatusById, 'POST', params, function(res) {
				  	// //console.log('res', res);
				  	if (res.code == _this.$api.CODE_OK) {
				  		// let list = res.data.list;
				  		if(res.data==1){
							_this.sendSmsTipText = "提交未收到款状态成功，为了让交易顺利进行，请给卖家发个短信要求对方上传付款凭证。";
							if(_this.type==2){
								_this.mobilePhone = _this.appointDealDetail.assistAppointAgentInfo.mobilePhone;
							}else{
								_this.mobilePhone = _this.detail4buyerInfo.mobilePhone;
							}
							_this.smsContent = `【${_this.$api.projectName}】您好，我并未收到款，请在“我的--我的交易--待付款”的订单详情中上传付款凭证。`;
							_this.setSendSmsHref(_this.mobilePhone,_this.smsContent);
							_this.showBuyerDetailModel = false;
							_this.onLoad4();
						}
				  	}
				  })
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
			letMineralBtn(){
				let _this = this;
				// _this.showBuyDetailModel = false;
				Dialog.confirm({
				  title: '提示信息',
				  message: '请先查看您的支付宝或微信，确认已经收到款后再放矿石！',
				  cancelButtonText:'先去查看',
				  confirmButtonText:'确认已收到'
				}).then(() => {
				  // on confirm
				  //console.log('sure');
				  //这里调用确认付款接口
				  let params = {
					// userId:  _this.userId,
					status:8,
				  	id: _this.id
				  }
				  //console.log('params',params)
				  _this.$ajax.ajax(_this.$api.updateTransactionStatusById, 'POST', params, function(res) {
				  	// //console.log('res', res);
					_this.showBuyerDetailModel = false;
				  	if (res.code == _this.$api.CODE_OK) {
				  		// let list = res.data.list;
				  		if(res.data==1){
							_this.showAgentDetailModel = false;
							//发送短信提示start
							_this.sendSmsTipText = "交易已经顺利完成！请最后告知对方您已经确认收款并释放矿石。";
							if(_this.type==2){
								//console.log('_this.mobilePhone',_this.mobilePhone);
								//console.log("localStorage.getItem('mobilePhone')",localStorage.getItem('mobilePhone'));
								_this.mobilePhone = _this.appointDealDetail.assistAppointDealBuyerInfo.mobilePhone || _this.appointDealDetail.assistAppointAgentInfo.mobilePhone;
								//_this.smsContent = `【${_this.$api.projectName}】我已确认并释放矿石，谢谢。`;
							}else{
								_this.mobilePhone = _this.detail4buyerInfo.mobilePhone;
							}
							_this.smsContent = `【${_this.$api.projectName}】我已经确认收款并释放矿石，谢谢。`;
							_this.setSendSmsHref(_this.mobilePhone,_this.smsContent);
							//发送短信提示end
							_this.$cookies.set('isRefreshUserInfo',1,_this.$api.cookiesTime);
							_this.onLoad4();
						}
				  	}else{
						_this.$toast(res.message);
					}
				  })
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
			setSendSmsHref(mobilePhone,smsContent){
				let _this = this;
				let phoneType = _this.$utils.isIphoneOrAndroid();
				//console.log("=======phoneType================",phoneType);
				if(phoneType=='a'){
					_this.sendSmsHref = `sms:${mobilePhone}?body=${smsContent}`;
				}else if(phoneType=='i'){
					// let tempUrl = encodeURI(_this.smsContent);
					let encodeUrl = encodeURI(smsContent);
					// //console.log("encodeUrl",encodeUrl);
					// let encodeUrl = "HPC"
					_this.sendSmsHref = `sms:${mobilePhone}&body=${encodeUrl}`;
				}else{
					_this.sendSmsHref = `sms:${mobilePhone}?body=${smsContent}`;
				}
				_this.showSendSMSTipModel = true;
			},
			toSendPage(){
				let _this = this;
				_this.showSendSMSTipModel=false;
				window.location.href = _this.sendSmsHref;
			},
			payedBtn(){
				let _this = this;
				// _this.showBuyDetailModel = false;
				Dialog.confirm({
				  title: '提示信息',
				  confirmButtonText:'确定',
				  message: '您确定已经付款？若没付款，对方可以驳回并要求上传付款凭证！'
				}).then((res) => {
				  // on confirm
				  //console.log('sure',res);
				  //这里调用确认付款接口
				  let params = {
					/* userId:  _this.userId, */
					status:2,
				  	id: _this.id
				  }
				  //console.log('params',params)
				  _this.$ajax.ajax(_this.$api.updateTransactionStatusById, 'POST', params, function(res) {
				  	// //console.log('res', res);
				  	if (res.code == _this.$api.CODE_OK) {
				  		// let list = res.data.list;
				  		if(res.data==1){
							//服务费类型(0:矿石 1:矿石+平台券 2平台券)
							_this.showSendSMSTipModel = true;
							if(_this.type == 0 || _this.type == 1){
								//发送短信提示start
								_this.sendSmsTipText = "提交已付款状态成功，为了让交易顺利进行，请发个短信提醒对方确认收款并释放矿石。";
								_this.mobilePhone = _this.detail4sellerInfo.mobilePhone;
								_this.smsContent = `【${_this.$api.projectName}】我已付款，请确认收款，并在“我的--我的交易--待收款”的订单详情中确认收款并释放矿石，谢谢。`;
								_this.setSendSmsHref(_this.mobilePhone,_this.smsContent);
								//发送短信提示end
								_this.showSellerDetailModel = false;
							}else if(_this.type == 2){
								//发送短信提示start
								_this.sendSmsTipText = "提交已付款状态成功，为了让交易顺利进行，请发个信息提醒对方确认收款并释放矿石。";
								_this.mobilePhone = _this.appointDealDetail.assistAppointAgentInfo.mobilePhone;
								_this.smsContent = `【${_this.$api.projectName}】我已付款，请确认收款并释放矿石，谢谢。`;
								_this.setSendSmsHref(_this.mobilePhone,_this.smsContent);
								//发送短信提示end
								_this.showAgentDetailModel = false;
							}
							_this.onLoad2();
						}
				  	}
				  })
				}).catch(() => {
				  // on cancel
				  //console.log('cancel');
				});
			},
			setCountDownTime(canCancelTime) {
				let _this = this;
				let mcTime = _this.$utils.getTime(canCancelTime);
				let nowTime = _this.$utils.getTime(new Date());
				_this.setCountDownTime4seller = (mcTime - nowTime); 
				if (_this.setCountDownTime4seller <= 0) {
					// _this.countDownTimeBoxIsShow = false;
					_this.cancelSellSureBtnText = "确认取消";
				}
			},
			setLetSureDownTime(letSureTime) {
				let _this = this;
				let ltTime = _this.$utils.getTime(letSureTime);
				let nowTime = _this.$utils.getTime(new Date());
				return (ltTime - nowTime);
			},
			setCancelDealDownTime(canCancelTime) {
				let _this = this;
				let ltTime = _this.$utils.getTime(canCancelTime);
				let nowTime = _this.$utils.getTime(new Date());
				return (ltTime - nowTime);
			},
		}
	}
</script>