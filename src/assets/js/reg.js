// //邮箱
// var emailReg = /^([a-z0-9A-Z_]+[-|\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/;
// //手机号
// var mobileReg = /^0?1(3|4|5|7|8)\d{9}$/;
// //电话号码
// var telReg = /(^[0-9]{3,4}-[0-9]{7,8}-[0-9]{3,4}$)|(^[0-9]{3,4}-[0-9]{7,8}$)|(^[0-9]{7,8}-[0-9]{3,4}$)|(^[0-9]{7,15}$)/;
// var domainReg = /http:\/\/.+/;
// var zipcodeReg = /^[0-9]{6}$/;
// //数字
// var numReg = /^[0-9]+$/;
// //身份证
// var isIDCardReg=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
// //用户名
// var userNameReg = /^[_a-zA-Z0-9\u4E00-\u9FFF]{2,20}/;
// //中文
// var zh = /[\u4E00-\u9FFF]/g;
// var httpUrl=/[a-zA-z]+:\/\/[^s]*/;
// var doubleReg=/((^0\.)|(^[1-9]+[0-9]*\.\d)$)|(^[1-9]+[0-9]*$)/;
/**
 * 判断字符串是否符合手机号码格式
 * 移动号段:   134 135 136 137 138 139 147 148 150 151 152 157 158 159  205 172 178 182 183 184 187 188 198
 * 联通号段:   130 131 132 145 146 155 156 206 170 171 175 176 185 186
 * 电信号段:   133 149 153 170 173 174 177 180 181 189  191  199
 * 虚拟运营商: 170
 * @param str
 * @return 待检测的字符串
 */

export default{
	securityCode:/^[A-Za-z0-9 ]{4,10}$/,
	securityCodeHint:'请输入正确的验证码,不能有空格,请检查输入法',
	userId:/^[A-Za-z0-9]{1,20}$/,
	positive_integerHint4BuyBill:'个人限购:2000+(卖出数量-买入数量)',
	positive_integer:/^[0-9]\d{0,6}$/,
	positive_integerHint:'请填写小于1000000的正整数',
	univalence:/^[0-9]+(.[0-9]{1,2})?$/,//只能填写整数或2最多2位小数的正则
	univalenceHint:'请填写小于1000000的单价',
	block_address:/^[A-Za-z0-9]{20,36}$/,
	block_addressHint:'请正确粘贴对方的区块地址',
	password:/^[A-Za-z0-9._]{6,20}$/,
	passwordHint:"请填写6~20位登录密码，由'字母或数字或._'组成",
	password2Hint:'请填写与上面一致的登录密码',
	safePassword:/^[A-Za-z0-9._]{1,20}$/,
	safePasswordHint:"安全密码不超过20位，由'字母或数字或._'组成",
	phone:/^(1[3-9])\d{9}$/,
	phoneHint:'请填写11位登录手机号',
	validateCode:/^[A-Za-z0-9]{6}$/,
	validateCodeHint:'请填写6位短信验证码',
	shareCode:/^[A-Za-z0-9]{1,20}$/,
	shareCodeHint:'请填写1~20位推荐码',
	alipay:/^(?:\w+\.?)*\w+@(?:\w+\.)+\w+|\d$/,
	alipayHint:'请正确填写支付宝号',
	weichat:/^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/,
	weichatHint:'请正确填写微信号',
	idCard:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
	idCardHint:'请填写正确的身份证号',
	bankCard:/\d{15,19}/,
	bankCardHint:'请正确填写的银行卡号',
	remark:/^[\u4E00-\u9FA5]+$/,
	remarkHint:'拒绝理由需全部用中文',
	isImgBase64:/^[0-9a-zA-Z:/;+,]+$/,
}