define(['dynamicentity'],function(DyanmieEntity){
	var Movers = DynamicEntity.extend({
		init:function(edges){
			this._super();
			var _this = this;
			this.class = "box";
			this.width = this.height = Math.random()*25 + 15;
			this.speed = this.startspeed = (Math.random()*5) + 1;
			this.xspeed = 0;
			this.yspeed = 0;
			this.xkill = this.ykill = 0;
			this.state = (Math.random() < 0.5)?true:false;
			this.dir = Math.floor((Math.random()*400)/100);
			this.offset = 100;
			switch(this.dir){
				case 0:
					_this.x = edges.right + _this.offset;
					_this.y = (Math.random() * edges.bottom) + (edges.top + _this.offset);
					_this.xspeed = - _this.speed;
					_this.xkill = edges.left - _this.offset;
					break;
				case 1:
					_this.x = edges.left - _this.offset;
					_this.y = (Math.random() * edges.bottom) + (edges.top + _this.offset);
					_this.xspeed = _this.speed;
					_this.xkill = edges.right + _this.offset;
					break;
				case 2:
					_this.y = edges.bottom + _this.offset;
					_this.x = (Math.random() * edges.right) + (edges.left + _this.offset);
					_this.yspeed = - _this.speed;
					_this.ykill = edges.top - _this.offset;
					break;
				case 3:
					_this.y = edges.top - _this.offset;
					_this.x = (Math.random() * edges.right) + (edges.left + _this.offset);
					_this.yspeed = _this.speed;
					_this.ykill = edges.bottom + _this.offset;
					break;
			}
			
			switch (this.state) {
				case true:
					_this.background = "red";
					break;
				case false:
					_this.background = "black";
					break;
			}
			
			this.move = function(){
				this.x +=this.xspeed;
				this.y +=this.yspeed;
				if(this.xspeed<0 && this.x<this.xkill){
				   	this.delete();
				}else if(this.xspeed>0 && this.x>this.xkill){
					this.delete();   
				}else if(this.yspeed<0 && this.y<this.ykill){
					this.delete();
				}else if(this.yspeed>0 && this.y>this.ykill){
					this.delete();
				}
			};
			this.updatefuncs.push("move");
			this.element.css("transform-origin","50% 50%");
		}
	});
	return Movers;
});