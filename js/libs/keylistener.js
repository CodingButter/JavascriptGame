define(['class'],function(Class){
	var KeyListener = Class.extend({
		init:function(ent){
		  keymap ={left:37,right:39,up:38,down:40,shift:16,space:32};
		  this.pressed = function(_k){
		    var _pressed = _k.toLowerCase();
		    if(typeof keymap[_pressed] != "undefined")
		      if(map[keymap[_pressed]])return true;
		        else return false;
		    else
		      if(map[_pressed])return true;
		        else return false;
		  }
			var map = []; // Or you could call it "key"
			window.onkeydown = window.onkeyup = function(e){
				e = e || event; // to deal with IE
				map[e.keyCode] = e.type == 'keydown';
			}
			this.keys = map;
		}
	});
	return KeyListener;
});