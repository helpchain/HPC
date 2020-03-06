import config from './config.js'
function getUserType(val) {
	if (val == -1) {
		return '去实名得微矿';
	} else if (val == 0) {
		return '普通用户';
	} else if (val == 1) {
		return '青铜级工会会长';
	} else if (val == 2) {
		return '白银级工会会长';
	} else if(val == 3) {
		return '黄金级工会会长';
	} else if (val == 4) {
		return '铂金级工会会长';
	} else if (val == 5) {
		return '钻石级工会会长';
	} else {
		return val;
	}
}

function getRoleType(val) {
	if (val == 0) {
		return '管理角色';
	} else if (val == 1) {
		return '普通角色';
	} else {
		return val;
	}
}

function menuType(val) {
	if (val == 0) {
		return '导航类菜单';
	} else if (val == 1) {
		return '接口类菜单';
	} else {
		return val;
	}
}
//菜单等级
function levelType(val) {
	if (val == 0) {
		return '一级';
	} else if (val == 1) {
		return '二级';
	} else if (val == 2) {
		return '三级';
	} else {
		return val;
	}
}

//交易状态
function dealStatus(val) {
	if (val == 0) {
		return '一级';
	} else if (val == 'needPic') {
		return '需传付款截图';
	} else {
		return val;
	}
}

//留言类型
function wordType(val){
	if (val == 0) {
		return '问题反馈';
	} else if (val == 1) {
		return '意见建议';
	} else if (val == 2) {
		return '打小报告';
	} else if (val == 3) {
		return '其他类型';
	} else {
		return val;
	}
}

//投票状态
function voteStatus(val){
	if(val==0){
		return '已截止';
	}else if(val == 1){
		return '进行中';
	}else{
		return val;
	}
}

// 获取年月日
function getDateYMD(t) {
  let time = new Date(t);
  let y = time.getFullYear();
  let m = time.getMonth() + 1;
  let d = time.getDate();
  return y + '/' + (m < 10 ? '0' + m : m) + '/' + (d < 10 ? '0' + d : d);
}

// 获取完整的时间
function getDateTimeTOHM(t) {
  let time = new Date(t);
  let y = time.getFullYear();
  let m = time.getMonth() + 1;
  let d = time.getDate();
  let h = time.getHours();
  let mm = time.getMinutes();
  let s = time.getSeconds();
  return y + '/' + (m < 10 ? '0' + m : m) + '/' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' +
    (mm < 10 ? '0' + mm : mm);
}

// 获取完整的时间
function getDateTime(t) {
  let time = new Date(t)
  let y = time.getFullYear()
  let m = time.getMonth() + 1
  let d = time.getDate()
  let h = time.getHours()
  let mm = time.getMinutes()
  let s = time.getSeconds()
  return y + '/' + (m < 10 ? '0' + m : m) + '/' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' +
    (mm < 10 ? '0' + mm : mm) + ':' +
    (s < 10 ? '0' + s : s)
}

// 处理姓名
function hiddenlastName(t) {
	if(t==null||t==''){
		return '未实名';
	}else{
		let firstName="";
		if(t.length==2){
			firstName=t.substr(1,1);
			return t.replace(firstName,"*");
		}else if(t.length==3){
			firstName=t.substr(1,2);
			return t.replace(firstName,"**")
		}else if(t.length==4){
			firstName=t.substr(2,2);
			return t.replace(firstName,"**")
		}
	}
    return t;
}
// 获取姓名最后一个字
function getLastName(t) {
	if(t==null||t==''){
		return '未知';
	}else{
		let len=t.length;
		return t.substr(len-1,1);
	}
}
//贡献值类型（实名认证、推广有效用户、买入、卖出、建议被采纳、发现有效BUG、购物、买矿机、交易权兑换）
const contributeTypeOptions = config.contributeTypeOptions;
function contributeType(id){
	if(id==-1){
		return '--'
	}else{
		return contributeTypeOptions[id].value;
	}
}

//算力类型（0:自己租赁矿机、1:直推租赁矿机）
const calculationOptions = config.calculationOptions;
function calculationType(id){
	if(id==-1){
		return '--'
	}else{
		return calculationOptions[id].value;
	}
}

const machineTypeOptions = config.machineTypeOptions;
//矿机标签
function machineTypeType(val){
	if(val==-1){
		return '测试矿机'
	}else{
		return machineTypeOptions[val].value;
	}
}
function machineType4Pic(val){
	if(val==-1){
		return '测试矿机'.substr(0,1);
	}else{
		return machineTypeOptions[val].value.substr(0,1);
	}
}
//矿机状态 运行状态(0.就绪状态,1.运行状态2.过期状态)
const machineStatusOptions = [{id:0,value:'未运行'},{id:1,value:'已运行'},{id:2,value:'已过期'}];
function machineStatus(val){
	 return machineStatusOptions[val].value;
}
//类型（矿机产出、买入、卖出、释放）
const mineralBookTypeOptions = config.mineralBookTypeOptions;
function mineralBookType(val){
	 return mineralBookTypeOptions[val].value;
}
//类型（矿机产出、买入、卖出、释放）
const platformTicketBookTypeOptions = config.platformTicketBookTypeOptions;
function platformBookType(val){
	 return platformTicketBookTypeOptions[val].value;
}

const machineTagOptions = config.machineTagOptions;
//矿机标签
function machineTagType(val){
	return machineTagOptions[val].value;
}
function machineTagIconTextType(val){
	let value = machineTagOptions[val].value;
	return value.substr(0,1);
}

const dealStatusOptions = config.dealStatusOptions;
//交易状态
function dealStatusType(val){
	return dealStatusOptions[val].value;
}
function dealBuyOrSellText(val){
	if(val == 'buy'){
		return '买入';
	}else if(val == 'sell'){
		return '卖出'
	}
}

const serviceChargeOptions = [{id:0,value:'20%矿石'},{id:1,value:'10%矿石+10%帮扶券'}];
function serviceChargeType(val){
	return serviceChargeOptions[val].value;
}

const agentOptions = config.agentOptions;
function agentType(val){
	return agentOptions[val].value;
}

function accountStatus(val){
	if(val==0){
		return '正常';
	}else if(val==1){
		return '冻结中';
	}else{
		return val;
	}
}

function canUnFreeze(val){
	if(val==0){
		return '需要给客服排查问题';
	}else if(val==1){
		return '可以让省市代理解冻';
	}else{
		return val;
	}
}

export {
	getUserType,
	getRoleType,
	menuType,
	levelType,
	dealStatus,
	wordType,
	voteStatus,
	getDateYMD,
	getDateTime,
	getDateTimeTOHM,
	hiddenlastName,
	getLastName,
	contributeType,
	machineTypeType,
	machineStatusOptions,
	machineStatus,
	mineralBookTypeOptions,
	mineralBookType,
	calculationType,
	platformTicketBookTypeOptions,
	platformBookType,
	machineTagOptions,
	machineTagType,
	machineTagIconTextType,
	dealStatusOptions,
	dealStatusType,
	dealBuyOrSellText,
	serviceChargeOptions,
	serviceChargeType,
	agentType,
	machineType4Pic,
	accountStatus,
	canUnFreeze
}
