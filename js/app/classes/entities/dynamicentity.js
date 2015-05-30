define(['entity'],function(Entity){
	DynamicEntity = Entity.extend({
		init:function(){
			//run parent constructor
			this._super();
			
			//_this for use outside of scope
			var _this = this;
			
			//collision toggle
			this.collidable = true;
			
			//create dynamic variables
			this.speed = 4;
			
			//draw function array
			this.drawfuncs = [];
			
			this.drawChildren = function(){
				this.children.forEach(function(child){
					if(typeof child.draw != "undefined")child.draw();
				});
			}
			//push drawChild function into the drawfunc array that it loops through each frame
			this.drawfuncs.push("drawChildren");
			
			//Creat the draw function which will run each frame
			this.draw = function(){
				this.drawfuncs.forEach(function(_func){
					_this[_func]();
				});
			}
			
			this.moveleft = function(){this.x-=this.speed;}
			this.moveright = function(){this.x+=this.speed;}
			this.moveup = function(){this.y-=this.speed;}
			this.movedown = function(){this.y+=this.speed;}
		}
	});
	
	return DynamicEntity;
});