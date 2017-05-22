window.onkeypress = function pressed(e) {  //нажатие клавиши enter
   var key = e.keyCode || e.which;
   if(key == 13) {
       //обработка события
   }
}
window.onresize = function new_correct(e) {  //изменение размера окна
    //обработка события
}
window.onpaste = function(e) {  //запрет вставки чего-либо из буфера
   e = e || event;
   return false;
}
