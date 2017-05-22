var touch_start_x;
var touch_start_y;
var delta_x=0;
var detecting=false;
var started=false;
var vertical_move=0;
var obj_div_menu=document.getElementById("id_div_slidermenu");

obj_div_menu.addEventListener('touchstart', function(event) {
		if(event.touches.length != 1 || started) {
			return;
		}
		detecting=true;
				
		touch_start_x = event.touches[0].pageX;
		touch_start_y = event.touches[0].pageY;
	}, false);
	
	obj_div_menu.addEventListener('touchmove', function(event) {
		if(!started && !detecting){
			return;
		}
		if(detecting){
			if (Math.abs(touch_start_x - event.touches[0].pageX) >= Math.abs(touch_start_y - event.touches[0].pageY)) {
				event.preventDefault();
				started=true;
				vertical_move=0;
			} else {
				vertical_move=1;
			}
			detecting = false;
		}
		if(started){
			event.preventDefault();
			var left=event.touches[0].pageX;
			delta_x=touch_start_x-left;
			if (Math.abs(delta_x)<10) { return false; }
			document.getElementById("id_div_slidermenu").style="-webkit-transform: translate3d("+left+"px, 0px, 0px); -moz-transform: translate3d("+left+"px, 0px, 0px); -ms-transform: translate3d("+left+"px, 0px, 0px); -o-transform: translate3d("+left+"px, 0px, 0px); transform: translate3d("+left+"px, 0px, 0px);";
		}
	}, false);
	
	obj_div_menu.addEventListener('touchend', function(event) {
		var tmp_move_x = touch_start_x-event.changedTouches[0].pageX;
		var tmp_move_y = touch_start_y-event.changedTouches[0].pageY;
		
		if(!vertical_move && tmp_move_x && Math.abs(tmp_move_x)>10){
			event.preventDefault();
			if (tmp_move_x<0) {
				if(Math.ceil(Math.abs(tmp_move_x))>40){
					close_menu();
				} else {
					open_menu();
				}
			} else {
				if(Math.ceil(Math.abs(tmp_move_x))>40){
					open_menu();
				} else {
					close_menu();
				}
			}
		}
		started=false;
		vertical_move=0;
	}, false);
