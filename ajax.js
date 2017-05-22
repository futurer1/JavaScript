function createXmlHttpRequestObject() {     //функция возвращает объект для выполнения AJAX-запроса
    var xmlHttp; 
    try { 
        xmlHttp = new XMLHttpRequest(); 
    } catch(e) { 
        var XmlHttpVersions = new Array("MSXML2.XMLHTTP.6.0","Microsoft.XMLHTTP"); 
        for(var i=0;i < XmlHttpVersions.length && !xmlHttp;i++){ 
            try{ 
                xmlHttp=new ActiveXObject(XmlHttpVersions[i]); 
            } catch(e){} 
        } 
    } 
    if(!xmlHttp) { 
        alert('Ошибка создания объекта XMLHttpRequest.'); 
    } else return xmlHttp; 
}

//Ajax методом GET
//----------------
var xmlHttp = createXmlHttpRequestObject();

function send_get_some() {	//отправляем на сервер данные
    if(xmlHttp) {
        try {
		xmlHttp.open("GET","ajax/some_file.php", true);
		xmlHttp.setRequestHeader("Cache-Control", "no-store, no-cache, must-revalidate");
		xmlHttp.setRequestHeader("Cache-Control", "post-check=0, pre-check=0");
		xmlHttp.setRequestHeader("Pragma", "no-cache");
		xmlHttp.onreadystatechange=res_get_some;
		xmlHttp.send(null);
        } catch(e) {
            alert("Невозможно соединиться с сервером:\n" + e.toString()); 
        }
    }
}

function res_get_some(vall) {    //принимаем и разбираем ответ
    if(xmlHttp.readyState == 4) {
        if(xmlHttp.status==200) {
            try {
    		var result = xmlHttp.responseText;
		//обрабатываем ответ
		
            } catch(e) {
                alert("Ошибка чтения ответа: " + e.toString()); 
	    }
	}
    }
}


//Ajax методом POST
//-----------------
var xmlHttp_POST = createXmlHttpRequestObject();	//объект для POST запроса

function send_post_some() {	//отправляем POST запрос на сервер
    var some_val=document.getElementById("id_some_elem").value;
    var some_val1=document.getElementById("id_some_elem1").value;	
    var str_send="var="+encodeURIComponent(some_val) + "&var1="+encodeURIComponent(some_val1);
    if(xmlHttp_POST && str_send.length){ 
        try {
            xmlHttp_POST.open("post","ajax/some_file.php", true); 
            xmlHttp_POST.setRequestHeader("Cache-Control", "no-store, no-cache, must-revalidate");
            xmlHttp_POST.setRequestHeader("Pragma", "no-cache");
            xmlHttp_POST.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xmlHttp_POST.onreadystatechange=res_post_some;
            xmlHttp_POST.setRequestHeader('Content-Length', str_send.length); 
            xmlHttp_POST.send(str_send);
        } catch(e) { 
            alert("Невозможно соединиться с сервером из send_post_some():\n" + e.toString()); 
        }
    }
}

function res_post_some() {	//принимаем и разбираем ответ
    if(xmlHttp_POST.readyState == 4) { 
        if(xmlHttp_POST.status == 200) { 
            try {
                var result = xmlHttp_POST.responseText;
		//обрабатываем ответ
                
            } catch(e) {
                alert("Ошибка чтения ответа из res_post_some(): " + e.toString()); 
            } 
        }
    }
}
