define(['jquery','baseclass'],function($,Class){
	var Mouse = Class.extend({
		init:function(){
			var _this = this;
			this.x = 0;
			this.y = 0;
			this.speedx = 0;
			this.speedy = 0;
			this.scale = 1;
			var lastx = 0;
			var lasty = 0;
			var currentx = 0;
			var currenty = 0;
			$('body').mousemove(function(e){
				_this.x = e.pageX / _this.scale;
				_this.y = e.pageY / _this.scale;
			});
			this.update = function(){
				lastx = currentx;
				lasty = currenty;
				currentx = this.x;
				currenty = this.y;
				this.speedx = currentx - lastx;
				this.speedy = currenty - lasty;
			};
		}
	});
	return Mouse;
});