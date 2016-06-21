window.onload = function() {
	var $ = function(id) {
		return document.getElementById(id);
	}
	var Timer,
		List = [],
		DLR = $("DLR"),
		LDR = $("LDR"),
	LRD = $('LRD'),
		B1 = $('B1'),
		divList = document.getElementsByTagName('div');

	function preOrder(node) {
		if (node) {
			fn(node);
			preOrder(node.firstElementChild);
			preOrder(node.lastElementChild);
		}
	};

	function inOrder(node) {
		if (node) {
			inOrder(node.firstElementChild);
			fn(node);
			inOrder(node.lastElementChild);
		}
	};
	function postOrder(node) {
		if (node) {
			postOrder(node.firstElementChild);
			postOrder(node.lastElementChild);
			fn(node);
		}
	}

	function rst() {
		i=0;
		for (var i = 0; i < divList.length; i++) {
			divList[i].style.background = "#fff";
		}	
		clearInterval(Timer);
	}

	function fn(node) {
		clearInterval(Timer);
		List.push(node);
		console.log("list的元素个数为:" + List.length);
		console.log(List);
}
function changeColor(){
		var i=0;
		List[i].style.background = "#f00";
		Timer = setInterval(function() {
			i++;
			if (i<List.length ) {
				List[i - 1].style.background = "#fff";
				List[i].style.background = "#f00";
			} else {	
				clearInterval(Timer);
				List[List.length-1].style.backgroundColor = '#fff';
				List.length=0;
			}
			console.log("i的值为：" + i);
		}, 500)
	}

	LDR.onclick = function() {
		rst();
		inOrder(B1);
		changeColor()
	}
	DLR.onclick = function() {
		rst();
		preOrder(B1);
		changeColor()
	}
	LRD.onclick = function() {
		rst();
		postOrder(B1);
		changeColor()
	}
}