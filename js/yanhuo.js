var canvas = document.createElement("canvas");
	document.body.appendChild(canvas);
	var context = canvas.getContext('2d');
    //规定画布大小
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;


function clearCanvas() {
		context.fillStyle = '#000000';
		context.fillRect(0, 0, canvas.width, canvas.height);
	}
	clearCanvas();


var particles = [];//烟火
function createFireworks(sx, sy) {
		var count = 100;//烟火的个数
		for (var i = 0; i < count; i++) {
			var p = {};//烟火对象
			var angle = Math.floor(Math.random() * 360);//角度
			p.radians = angle * Math.PI / 180;//弧度
			p.x = sx;
			p.y = sy;
			p.speed = Math.random() * 5 ;//速度
			p.radius = p.speed;//半径
			p.size = Math.ceil(Math.random() *4) ;//大小
            p.hue=Math.floor(Math.random() * 100) + 150;//颜色
			p.brightness = Math.floor(Math.random() * 31) + 50;//亮度
			p.alpha = (Math.floor(Math.random() * 61) + 40) / 100;//透明度
			particles.push(p);
		}
	}


function drawFireworks() {
		clearCanvas();
		for (var i = 0; i < particles.length; i++) {
			var p = particles[i];
			var vx = Math.cos(p.radians) * p.radius;//小球水平方向落下时的距离
			var vy = Math.sin(p.radians) * p.radius + 0.4;//小球落下时的距离

			p.x += vx;
			p.y += vy;
			p.radius *= 1 - p.speed / 100;//半径
			p.alpha -= 0.005;//透明度
			if (p.alpha <= 0) {
				particles.splice(i, 1);
				continue;
			}
			context.beginPath();
            // 中心坐标 半径  角度
			context.arc(p.x, p.y, p.size, 0, Math.PI * 2);
			// context.closePath()
            // 颜色 饱和度 亮度  透明度
			context.fillStyle = 'hsla(' + p.hue + ', 100%,' + p.brightness + '%, ' + p.alpha + ')';
			context.fill();
		}
	}


function tick() {
		context.globalCompositeOperation = 'destination-out';
		context.fillStyle = 'rgba(0,0,0,' + 0.1 + ')';
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.globalCompositeOperation = 'lighter';
		drawFireworks();//画烟火
        //浏览器下次重绘之前继续更新下一帧动画
		requestAnimationFrame(tick);
	}
	tick();


setInterval(function () {//当前视口随机创建烟花
	createFireworks(Math.random() * canvas.width, Math.random()
		* canvas.height);
}, 1000);


document.onmousedown=function(e){
        var x = e.clientX; //距离当前视口的横纵坐标
		var y = e.clientY;
		createFireworks(x, y);//创建烟花
    }
