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
var xmlHttp = createXmlHttpRequestObject();

function get_some() {
    if(xmlHttp) {
        try {
		xmlHttp.open("GET","ajax/some_file.php", true);
		xmlHttp.setRequestHeader("Cache-Control", "no-store, no-cache, must-revalidate");
		xmlHttp.setRequestHeader("Cache-Control", "post-check=0, pre-check=0");
		xmlHttp.setRequestHeader("Pragma", "no-cache");
		xmlHttp.onreadystatechange=res_some;
		xmlHttp.send(null);
        } catch(e) {
            alert("Невозможно соединиться с сервером:\n" + e.toString()); 
        }
    }
}

function res_some(vall) {
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
