window.onload = function() {

	//		封装取id函数
	var $ = function(id) {
		return document.getElementById(id);
	}
	var data = [];
	var Timer;
	var playbox = $("playbox"),
		input = $("input_text"),
		reg = /^\d+$/;
	//		跨浏览器事件绑定函数
	var EventUtil = {
			addHandler: function(element, type, handler) {
				if (element.addEventListener) {
					element.addEventListener(type, handler, false);
				} else if (element.attachEvent) {
					element.attachEvent("on" + type, handler);
				} else {
					element["on" + type] = handler;
				}
			}
		}
		// 为按钮绑定程序
	EventUtil.addHandler($("unshift"), "click", unshift);
	EventUtil.addHandler($("push"), "click", push);
	EventUtil.addHandler($("pop"), "click", pop);
	EventUtil.addHandler($("shift"), "click", shift);
	EventUtil.addHandler($("random"), "click", random);
	EventUtil.addHandler($("bubbleSort"), "click", bubbleSort);
	EventUtil.addHandler($("delAll"), "click", delAll);
	//在网页中显示表格
	function show() {
		clearTimeout(Timer);
		var text = '';
		for (var i = 0; i < data.length; i++) {
			text += "<li><a title=" + data[i] + ">" + "</a></li>";
		}
		playbox.innerHTML = text;
		var alist = playbox.getElementsByTagName('a');
		for (var j = 0; j < alist.length; j++) {
			var num1 = Math.round(Math.random() * 200 + 55),
				num2 = Math.round(Math.random() * 200 + 55),
				num3 = Math.round(Math.random() * 200 + 55);
			alist[j].style.height = data[j] * 4 + "px";
			// alist[j].style.background = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
		}
		del();
	}
	//unshift()		
	function unshift() {
		var input_value = input.value.toString();
		if (!(reg.test(input_value) && input_value >= 10 && input_value <= 100)) {
			alert("您的输入有误");
		} else {
			if (data.length <= 60) {
				data.unshift(input_value);
				show();
			} else {
				alert("队列已满");
			}
		}
		input.value = '';
		input.focus();
	}
	//push()
	function push() {
		var input_value = input.value.toString();
		if (!(reg.test(input_value) && input_value >= 10 && input_value <= 100)) {
			alert("您的输入有误");
		} else {
			if (data.length <= 60) {
				data.push(input_value);
				show();
			} else {
				alert("队列已满");
			}
		}
		input.value = '';
		input.focus();
	}
	//pop()
	function pop() {
		if (!data.length == 0) {
			var last = data.pop();
			show()
			input.value = '';
		} else {
			alert("列表为空");
		}

	}
	// shift
	function shift() {
		if (!data.length == 0) {
			var first = data.shift();
			show();
			input.value = '';
		} else {
			alert("列表为空");
		}
	}
	//	点击小方块删除
	function del() {
		var alist = playbox.getElementsByTagName('a');
		for (var j = 0; j < alist.length; j++) {
			EventUtil.addHandler(alist[j], "click", function(cur) {
				return function() {
					console.log(cur);
					data.splice(cur, 1);
					show();
				}
			}(j));
		}
	}
	//	随机函数
	function random() {
		data = [];
		for (var i = 0; i < 40; i++) {
			data[i] = Math.round(Math.random() * 100 + 1);
		}
		show();
	}
	//冒泡排序
	var j = 0;

	function bubbleSort() {
		Timer = setTimeout(function()
		{
			if (data.length - 1 < 1) {
				clearTimeout(Timer);
			};
			if (data[j] > data[j + 1]) {
				var swap = data[j];
				data[j] = data[j + 1];
				data[j + 1] = swap;
				console.log(j);
				show();
			};
			if (j == data.length-2) {
				j = 0;
			} else {
				j++;
			};
			bubbleSort();
		}, 2);
	}

	function delAll() {
		data = [];
		show();
	}
}