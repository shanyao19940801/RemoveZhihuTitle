//去除巨大的标题
var title = document.getElementsByClassName('QuestionHeader-title');
for (i = 0; i < title.length; i++) {
	title[i].textContent = '';
}

//滚动监听
//去除所有的图片url
document.onmousewheel = function (e) {
	var e = e || window.event;
	// 非火狐浏览器下e.wheelDelta用来监听浏鼠标的滚轮方向，(window)中向上为正（120），向下为负（-120）
	if (e.wheelDelta < 0) {
		// console.log(e.wheelDelta);
		// alert("向下滚动");
		var imgs = document.getElementsByTagName('img');
		for (i = 0; i < imgs.length; i++) {
			imgs[i].src = "";
			imgs[i].srcset = "";
		}

	} else {
		// console.log(e.wheelDelta);
		// alert("向上滚动");
	}
};