const weeks = ['日', '一', '二', '三', '四', '五', '六'];

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var q = window.location.pathname.substr(1).match(reg_rewrite);
    if(r != null){
        return unescape(r[2]);
    }else if(q != null){
        return unescape(q[2]);
    }else{
        return null;
    }
}

// 时间格式化
function formatData(time) {

    var d = time ? new Date(time) : new Date();
    var year = d.getFullYear();
    var month = change(d.getMonth()+1);
    var day = change(d.getDate());
    var hour = change(d.getHours());
    var minute = change(d.getMinutes());
    var second = change(d.getSeconds());

    function change(t){
        if(t<10){
        return "0"+t;
        }else{
        return t;
        }
    }
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}

// 和上一个时间是否是同一天
function isQuentDay(nowTime, lastTime) {
    var nowDate = new Date(nowTime);
    var lastDate = new Date(lastTime);
    var weekStr = nowDate.getFullYear() + '年' + (nowDate.getMonth() + 1) + '月' + nowDate.getDate() + '日' + ' 星期' + weeks[parseInt(nowDate.getDay())];
    if(!lastTime) {
        return weekStr;
    }
    if((nowDate.getFullYear() === lastDate.getFullYear()) && (nowDate.getMonth() === lastDate.getMonth()) && (nowDate.getDate() === lastDate.getDate())) {
        return false;
    }
    return weekStr;
}

//判断浏览器内核
export const browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};
// 手机正则
const phoneExp = /^1\d{10}$/;

// 获取随机数
function getR() {
    return parseInt( 1000000 * Math.random() );
}

// 获取时间戳
function getTimestamp() {
    return Date.parse(new Date())/1000;
}

// 验证手机号
function checkPhone(phone) {
    return phoneExp.test(phone);
}

// 去除字符串两端空格
function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 根据时间返回['月-日', '时:秒']
function getTimeFormat(date) {
    let dateArr = date.split(' ');
    let yearDateArr = dateArr[0].split('-');
    let hourDateArr = dateArr[1].split(':');

    return [`${yearDateArr[0]}-${yearDateArr[1]}-${yearDateArr[2]}`, `${hourDateArr[0]}:${hourDateArr[1]}`];
}

// 两次传入的日期是否一致
function isSameDate(date1, date2) {
    if(!date1) {
        return true;
    }

    let dateArr1 = date1.split('-');
    let dateArr2 = date2.split(':');

    return !(dateArr1[0] == dateArr2[0] && dateArr1[1] == dateArr2[1]);
}

// 手机号中间四位换成 *
function phoneFormat (phone) {
    return phone.replace(/^(\d{4})\d{4}(\d+)/,"$1****$2");
}
function getNum(str) {
    return str.replace(/[^0-9]/ig,"");
}

export {
    phoneExp,
    getR,
    getNum,
    getTimestamp,
    checkPhone,
    trim,
    getTimeFormat,
    isSameDate,
    phoneFormat,
    getQueryString,
    formatData,
    isQuentDay
}
