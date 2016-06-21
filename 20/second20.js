window.onload = function() {
	//		封装取id函数
	var $ = function(id) {
		return document.getElementById(id);
	}
	var showBox = $("showBox");
	var data = [];

	function addEvent(element, type, handler) {
		if (element.addEventlistener) {
			element.addEventlistener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	}
	addEvent($("insert"), "click", insert);
	addEvent($("query"), "click", query);
	addEvent($("empty"), "click", empty);

	function show() {
		var text = '';
		for (var i = 0; i < data.length; i++) {
			text += "<a>" + data[i] + "</a>"
			console.log(i)
		}
		showBox.innerHTML = text;
		$("textarea").value = '';
	}

	function insert() {
		var textarea_text = $("textarea").value.toString();
		if (!textarea_text == '') {
			var reg = /[^0-9a-zA-Z\u4e00-\u9fa5]+/;
			splittext = textarea_text.split(reg);
			for (var i = 0; i < splittext.length; i++) {
				data.push(splittext[i]);
			}
			show();
		} else {
			alert("您的输入有误");
		}
		$("textarea").focus();
	}
	function empty(){
		data='';
		show();
	}
	function query (){
		var search_text=$("search_text").value.toString();
		var alist=$("showBox").getElementsByTagName('a');
		for(var i=0;i<alist.length;i++)
		{	
			var alist_text=alist[i].innerHTML.toString().split('');
			for(var j=0;j<alist_text.length;j++)
				if (alist_text[j]===search_text) {
					alist[i].style.background="#f00";
				}
		}
	}
}