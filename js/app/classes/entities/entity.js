define(['jquery','baseclass'],function($,Class){
	window.entities = 0;
	var Entity = Class.extend({
		init:function(){
			//run the parent class constructor
			this._super();
			
			//_this for use outside of scope
			var _this = this;
			
			//set name
			this.name = "entity_"+ window.entities++;
			
			//create the dom element for this class
			this.element = $("<div id='"+this.name+"'></div>");
			//set css defaults for element
			this.element.css({"overflow":"hidden","position":"absolute"});
			
			//set up position and size variables
			this.x;this.y;this.width;this.height;this.rotation;
			//set up background variables
			this.background;
			
			//set up children and parent variables.
			this.children = [];
			this.parent;
			
			//watch elemental properties and update
			var csswatch =	[["x","left","", "px",0],
							 ["y","top","","px",0],
							 ["width", "width","", "px",50],
							 ["height", "height","", "px",50],
							 ["background", "background","", "","grey"],
							 ["rotation","-webkit-transform","rotate(","deg)",0]];
			csswatch.forEach(function(array){
				_this.watch(array[0],function(id,oldval,newval){
					_this.element.css(array[1],array[2] + newval + array[3]);
					return newval;
				});
				//set property default
				_this[array[0]] = array[4];
			});
		
			this.watch("name",function(id,oldval,newval){
				this.element.attr("id",newval);
				return newval;
			});
					
		}
	});
	
	Entity.prototype.addChild = function(_ent){
		//push entity into children array
		this.children.push(_ent);
		this.element.append(_ent.element);
		_ent.parent = this;
	}
	Entity.prototype.addTo = function(_ent){
		_ent.addChild(this);
	}
	Entity.prototype.hitTest = function(_ent){
		var collision = false;
		if(this.x < _ent.x + _ent.width &&
			this.x + this.width > _ent.x &&
			this.y < _ent.y + _ent.height &&
			this.y + this.height > _ent.y) collision = true;
		return collision;
	}
	return Entity;
});