window.onload = function() {
	function $(id) {
		return document.getElementById(id);
	}

	function getEvent(ele, type, handler) {
		if (ele.addEventListener) {
			return ele.addEventListener(type, handler, false)
		} else if (ele.addAttachment) {
			return ele.addAttachment("on" + type, handler);
		} else {
			return ele["on" + type] = handler;
		}
	}
	var i = 0,
		Timer1,
		Timer2,
		btnList = $('control_ul').getElementsByTagName('li'),
		planeList = document.getElementsByClassName('plane');

	$("newPlaneBtn").onclick = function() {
		if (i < 4) {
			btnList[i].style.display = "block";
			planeList[i].style.display = "block";
			i++;
			$('consoleText').value = text += year + "年" + (mouth + 1) + "月" + hours + "时" + min + "分" + second + "秒" + "第" + i + "架飞机建造成功" + "\n\n\n" ;
		}
	}

	function Planer(id, energy) {
		this.id = id;
		this.state = stop;
		this.energy = energy;
		this.Timer1 = Timer1;
		this.Timer2 = Timer2;
	}
	Planer.prototype = {
		fly: function() {
			this.id.style.animationPlayState = "running";
			this.state = "fly";
			this.Erdep(-10, 0)
		},
		stop: function() {
			this.id.style.animationPlayState = "paused";
			this.Eradd(10, 90)
		},
		Erdep: function(num1, num2) {
			clearInterval(this.Timer1);
			clearInterval(this.Timer2);
			var that = this;
			console.log(that);
			that.Timer1 = setInterval(function() {
				that.id.innerHTML = that.energy;
				that.energy += num1;
				if (that.energy < num2) {
					clearInterval(that.Timer1);
					that.stop();

				}
			}, 1000)

		},
		Eradd: function(num1, num2) {
			clearInterval(this.Timer1);
			clearInterval(this.Timer2);
			var that = this;
			console.log(that);
			if (that.state != "stop") {
				that.Timer2 = setInterval(function() {
					that.id.innerHTML = that.energy;
					that.energy += num1;
					if (that.energy > num2) {
						clearInterval(that.Timer2);
						console.log("你看不见我 看不见我")
						that.fly();
					}
				}, 1000)
				that.energy = 0;
			}

		},
		Destroy: function() {

			this.id.style.display = "none";
			this.id.style.animationPlayState = "paused";
			clearInterval(this.Timer1);
			clearInterval(this.Timer2);
			this.energy = 100;
		}
	}
	var text = '';
	var data = new Date(),
		year = data.getFullYear(),
		mouth = data.getMonth(),
		day = data.getDay(),
		hours = data.getHours(),
		min = data.getMinutes(),
		second = data.getSeconds();
	var firstPlane = new Planer($('firstPlane'), 100),
		secondPlane = new Planer($('secondPlane'), 100),
		thirdPlane = new Planer($('thirdPlane'), 100),
		fourthPlane = new Planer($('fourthPlane'), 100);
	$('consoleText').value = "";
	getEvent($('firstFlyBtn'), "click", function() {
		firstPlane.fly()
		$('consoleText').value = text += year + "年" + (mouth + 1) + "月" + hours + "时" + min + "分" + second + "秒" + "第1架飞机启动成功" + "\n\n\n" ;

	})
	getEvent($('secondFlyBtn'), "click", function() {
		secondPlane.fly()
		$('consoleText').value = text += year + "年" + (mouth + 1) + "月" + hours + "时" + min + "分" + second + "秒" + "第2架飞机启动成功" + "\n\n\n" ;

	})
	getEvent($('thirdFlyBtn'), "click", function() {
		thirdPlane.fly()
		$('consoleText').value = text += year + "年" + (mouth + 1) + "月" + hours + "时" + min + "分" + second + "秒" + "第3架飞机启动成功" + "\n\n\n" ;
	})
	getEvent($('fourthFlyBtn'), "click", function() {
		fourthPlane.fly();
		$('consoleText').value = text += year + "年" + (mouth + 1) + "月" + hours + "时" + min + "分" + second + "秒" + "第4架飞机启动成功" + "\n\n\n" ;
	})
	getEvent($('firstStopBtn'), "click", function(e) {
		if (e) {
			firstPlane.state = "stop"
		}
		firstPlane.stop();
		$('consoleText').value = text += year + "年" + (mouth + 1) + "月" + hours + "时" + min + "分" + second + "秒" + "第1架飞机暂停成功" + "\n\n\n" ;
	})
	getEvent($('secondStopBtn'), "click", function(e) {
		if (e) {
			secondPlane.state = "stop"
		}
		secondPlane.stop();
		$('consoleText').value = text += year + "年" + (mouth + 1) + "月" + hours + "时" + min + "分" + second + "秒" + "第2飞机架暂停成功" + "\n\n\n" ;
	})
	getEvent($('thirdStopBtn'), "click", function(e) {
		if (e) {
			thirdPlane.state = "stop"
		}
		thirdPlane.stop();
		$('consoleText').value = text += year + "年" + (mouth + 1) + "月" + hours + "时" + min + "分" + second + "秒" + "第3飞机架暂停成功" + "\n\n\n" ;
	})
	getEvent($('fourthStopBtn'), "click", function(e) {
		if (e) {
			fourthPlane.state = "stop"
		}
		fourthPlane.stop();
		$('consoleText').value = text += year + "年" + (mouth + 1) + "月" + hours + "时" + min + "分" + second + "秒" + "第4架飞机暂停成功" + "\n\n\n" ;
	})

	getEvent($('firstDstBtn'), "click", function() {
		firstPlane.Destroy();
		i = 0;
		this.parentNode.style.display = "none"
		$('consoleText').value = text += year + "年" + (mouth + 1) + "月" + hours + "时" + min + "分" + second + "秒" + "第1架飞机摧毁成功" + "\n\n\n" ;
	})
	getEvent($('secondDstBtn'), "click", function() {
		secondPlane.Destroy();
		i = 1;
		this.parentNode.style.display = "none"
		$('consoleText').value = text += year + "年" + (mouth + 1) + "月" + hours + "时" + min + "分" + second + "秒" + "第2架飞机摧毁成功" + "\n\n\n" ;
	})
	getEvent($('thirdDstBtn'), "click", function() {
		thirdPlane.Destroy();
		i = 2;
		this.parentNode.style.display = "none"
		$('consoleText').value = text += year + "年" + (mouth + 1) + "月" + hours + "时" + min + "分" + second + "秒" + "第3架飞机摧毁成功" + "\n\n\n" ;
	})
	getEvent($('fourthDstBtn'), "click", function() {
		fourthPlane.Destroy();
		i = 3;
		this.parentNode.style.display = "none"
		$('consoleText').value = text += year + "年" + (mouth + 1) + "月" + hours + "时" + min + "分" + second + "秒" + "第4架飞机摧毁成功" + "\n\n\n" ;
	})
}