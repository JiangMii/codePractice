//一定时间内，只执行一次，比如射击游戏，2s内只有一发子弹，2s内再次按下扳手，不会再射出子弹
//场景：搜索联想功能
function throttled(fn, delay){//网上的
	let timer = null;
	return function(...args){
		if(!timer){
			timer = setTimeout(() => {
				fn.apply(this, args);
				timer = null;
			}, delay)
		}	
	}
}


