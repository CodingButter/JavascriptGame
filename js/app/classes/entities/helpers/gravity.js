define(['baseclass'],function(Class){
	var Gravity = Class.extend({
		init:function(){
			this._super();
			this.speed = 0;
			this.rate = 0.098;
			this.maxspeed = 5;
		}
	});
	Gravity.prototype.update = function(){
		if(this.speed<this.maxspeed)
			this.speed+=this.rate;
		else
			this.speed = this.maxspeed;
	}
	return Gravity;
});