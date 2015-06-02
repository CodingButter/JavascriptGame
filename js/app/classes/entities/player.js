define(['dynamicentity'],function(DyanmieEntity){
	var Player = DynamicEntity.extend({
		init:function(){
			this._super();
			var _this = this;
			this.class = "box";
			this.width = this.height = 25;
			this.rotspeed = 1;
			this.background = "black";
			this.element.css("transform-origin","50% 50%");
			//create rotate functionu
			this.Rotate = function(dt){
				_this.rotation+=this.rotspeed * dt;
			};
			this.updatefuncs.push("Rotate");
			
			//follow mouse
			this.followMouse = function(){
				this.x = window.Mouse.x;
				this.y = window.Mouse.y;
			};
			this.updatefuncs.push("followMouse");
		}
	});
	return Player;
});