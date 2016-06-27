window.onload = function() {
	// 根据Id取元素	
	var $ = function(id) {
		return document.getElementById(id);
	};
	// 弹出函数
	function showBox() {
		// 创建模糊层
		var omask = document.createElement('div');
		omask.id = "mask";
		document.body.appendChild(omask);
		var oHeight = document.documentElement.scrollHeight,
			oWidth = document.documentElement.scrollWidth;
		omask.style.width = oWidth + "px";
		omask.style.height = oHeight + "px";
		// 创建弹出层
		var oembox = document.createElement("div");
		oembox.id = "emersionbox";
		document.body.appendChild(oembox);
		oembox.innerHTML = "<nav id='em_nav'>这是一个弹出层<button id='closeBtn'>x</button></nav>";
		var bodyH = document.documentElement.clientHeight;
		var emW = oembox.offsetWidth;
		var emH = oembox.offsetHeight;
		oembox.style.left = (oWidth - emW) / 2 + "px";
		oembox.style.top = (bodyH - emH) / 2 + "px";
		$('mask').onclick = $('closeBtn').onclick = function() {
			document.body.removeChild(oembox);
			document.body.removeChild(omask);
		};
		// 鼠标拖拽
		var mouseOffsetX = 0,
			mouseOffsetY = 0,
			isDraging = false;
		// 点击鼠标获取当前位置表示可以拖拽
		$('em_nav').onmousedown = function(e) {
				e = e || window.e;
				mouseOffsetX = e.pageX - $('emersionbox').offsetLeft;
				mouseOffsetY = e.pageY - $('emersionbox').offsetTop;
				isDraging = true;
			}
			// 移动当前元素
		document.onmousemove = function(e) {
				e = e || window.e;
				var mouseX = e.pageX;
				var mouseY = e.pageY;
				var moveX = 0;
				var moveY = 0;
				if (isDraging === true) {
					moveX = mouseX - mouseOffsetX;
					moveY = mouseY - mouseOffsetY;
					$('emersionbox').style.left = moveX + 'px';
					$('emersionbox').style.top = moveY + 'px';
				}
			}
			// 鼠标松开禁止拖拽
		document.onmouseup = function() {
			isDraging = false;
		}
	}
	// 调用函数
	$('showBtn').onclick = function() {
		showBox()
	};

}