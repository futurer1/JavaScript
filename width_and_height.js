function width_scr() {    //ширина окна браузера
	if(typeof( window.innerWidth ) == 'number') {
		var wscr = window.innerWidth;
	} else if (document.documentElement && document.documentElement.clientWidth) {
		var wscr = document.documentElement.clientWidth;
	} else if (document.body && document.body.clientWidth) {
		var wscr = document.body.clientWidth;
	}
	return wscr;
}

function height_scr() {   //высота окна браузера
	if (typeof( window.innerHeight ) == 'number') {
		var hscr = window.innerHeight;
	} else if (document.documentElement && document.documentElement.clientHeight) {
		var hscr = document.documentElement.clientHeight;
	} else if (document.body && document.body.clientHeight) {
		var hscr = document.body.clientHeight;
	}
	return hscr;
}

function scroll_height() {   //высота прокрученной области в пикселях
	if (typeof( window.scrollY ) == 'number') {
		var hscr = window.scrollY;
	} else if (document.documentElement && document.documentElement.scrollTop) {
		var hscr = document.documentElement.scrollTop;
	} else if (document.body && document.body.scrollTop) {
		var hscr = document.body.scrollTop;
	}
	return hscr;
}

var scrollHeight = document.documentElement.scrollHeight;
var clientHeight = document.documentElement.clientHeight;
scrollHeight = Math.max(scrollHeight, clientHeight);  //максимальное из двух значений

var block_h=document.getElementById("id_div").offsetHeight; //высота элемента
