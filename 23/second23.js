window.onload = function() {
	var $ = function(id) {
		return document.getElementById(id);
	}

	function getEvent(ele, type, handler) {
		if (ele.addEventListener) {
			return ele.addEventListener(type, handler, false);
		} else if (ele.attachEvent) {
			return ele.attachEvent("on" + type, handler)
		} else {
			ele["on" + type] = handler;
		}
	}
	var DFT = $('DFT'),
		SFT = $('SFT'),
		DFTS = $('DFTS'),
		SFTS = $('SFTS'),
		divList = [],
		Timer,
		i = 0,
		B1 = $('B1'),
		B1childNUM = B1.getElementsByTagName('div'),
		searchText = $('searchText');

	function DTraversal(node) {
		if (node) {
			fn(node);
			arguments.callee(node.firstElementChild);
			arguments.callee(node.nextElementSibling);
		}
	}

	function STraversal(node) {
		if (node) {
			fn(node);
			arguments.callee(node.nextElementSibling);
			// console.log(divList);
			node = divList[i++];
			// console.log(node.id);
			// console.log(i)
			arguments.callee(node.firstElementChild);
		}
	}

	function fn(node) {
		clearInterval(Timer);
		if (divList.length < B1childNUM.length + 1) {
			divList.push(node);
		}
	}

	function show(fn) {
		i = 0;
		divList[i].style.background = "#ED5C5C";
		Timer = setInterval(function() {
			i++;
			if (i < divList.length && fn()) {
				divList[i - 1].style.background = "#fff";
				divList[i].style.background = "#ED5C5C";
			} else {
				clearInterval(Timer);
				divList[divList.length - 1].style.background = "#fff";
				i = 0;
			}
		}, 500)

	}

	function find() {
		if (divList[i - 1].firstChild.nodeValue.trim().toString() != searchText.value.toString()) {
			return true;
		} else {
			return false;
		}
	}

	function checkText(fn) {
		if (searchText.value) {
			fn;
			show(find);
		} else {
			alert("请输入你要查询的关键字")
		}
	};

	function rst() {
		i = 0;
		for (var i = 0; i < divList.length; i++) {
			divList[i].style.background = "#fff";
		}
		clearInterval(Timer);
	}
	getEvent(DFT, "click", function() {
		rst();
		DTraversal(B1);
		show(function() {
			return true;
		});
	});
	getEvent($('DFTS'), "click", function() {
		rst();
		checkText(DTraversal(B1));
	})

	getEvent($('SFT'), "click", function() {
		rst();
		STraversal(B1);
		show(function() {
			return true;
		});
	});
	getEvent($('SFTS'), "click", function() {
		rst();
		checkText(STraversal(B1));
	})

	getEvent(B1, "click", function(e) {
		if (e.target && e.target.nodeName == "DIV") {
			e.target.style.background = "#f00";
			e.target.className = "Willdo";
		};
	});
	getEvent($('del'), "click", function() {
		rst();
		var classList = document.getElementsByClassName('Willdo');
		for (var i = 0; i < classList.length; i++) {
			console.log(i);
			classList[i].remove();
		}
	})
	getEvent($('apendChild'), "click", function() {
		var classList = B1.getElementsByClassName('Willdo');
		for (var i = 0; i < classList.length; i++) {
			var parid = parseInt(classList[i].id.charAt(1)) + 1;
			console.log(parid);
			var newDIv = document.createElement('div');
			newDIv.id = "B" + parid;
			newDIv.innerText = $('appendText').value;
			classList[i].appendChild(newDIv)

		}
	})
}