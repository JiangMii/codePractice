//固定时间段内只触发一次，且最后一次，比如坐电梯，最后一个人上电梯后2s关门。。。
//场景一：搜索框搜索输入。只需用户最后一次输入完，再发送请求
//场景二：手机号、邮箱验证输入检测
function debounce(fn, delay){
	let timer = null;
	return function(...args){
		// 清除定时器
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, args);
		}, delay)
	}
}





