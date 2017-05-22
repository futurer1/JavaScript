function setCookie(name, value, maxage, path, domain, secure) { //устанавливаем кукис
	var path="/";
	var curCookie = name + "=" + escape(value) +
		 ((maxage) ? "; max-age=" + maxage : "") +
	     ((path) ? "; path=" + path : "") +
    	 ((domain) ? "; domain=" + domain : "") +
	     ((secure) ? "; secure" : "");
	document.cookie = curCookie;
}

function getCookie(name) {                                      //читаем кукис
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	if (begin == -1) {
	    begin = dc.indexOf(prefix);
    	if (begin != 0) return null;
	} else
	     begin += 2;
	var end = document.cookie.indexOf(";", begin);
	if (end == -1)
	    end = dc.length;
	return unescape(dc.substring(begin + prefix.length, end));
}

//Пример использования
setCookie("mob", 1, 60*60*24, "/");   //переменная mob устанавливается значение 1 на сутки для корня домена
value = getCookie("mob");             //читаем значение кукиса
