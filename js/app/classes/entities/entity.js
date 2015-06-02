define(['jquery','baseclass'],function($,Class){
	window.entities = 0;
	var Entity = Class.extend({
		init:function(){
			//run the parent class constructor
			this._super();
			
			//_this for use outside of scope
			var _this = this;
			
			//create the dom element for this class
			this.element = $("<div id='"+this.name+"'></div>");
			//set css defaults for element
			this.element.css({"overflow":"hidden","position":"absolute","transform-origin":"0 0"});
			//set up children and parent variables.
			this.children = [];
			this.parent = "";
			
			//Check if rotation is greater than 360 or less than -360 reset to 0
			this.checkrot = function(val){
				if(val < -360 || val > 360)return 0;
				else return val;
			};
			this.correctScale = function(val){
				return val + "," + val;	
			};
			//watch elemental properties and update
			var watch =	[{prop:"x",call:"css",cval:"left",pre:"", suff:"px",def:0},
						 {prop:"y",call:"css",cval:"top",pre:"",suff:"px",def:0},
						 {prop:"width",call:"css",cval:"width",pre:"",suff:"px",def:50},
						 {prop:"height",call:"css",cval:"height",pre:"",suff:"px",def:50},
						 {prop:"scale",call:"css",cval:"-webkit-transform",pre:"scale(",suff:")",def:1,func:"correctScale"},
						 {prop:"background",call:"css",cval:"background",pre:"",suff:"",def:"grey"},
						 {prop:"rotation",call:"css",cval:"-webkit-transform",pre:"rotate(",suff:"deg)",def:0,func:"checkrot"},
						 {prop:"name",call:"attr",cval:"id",pre:"",suff:"",def:"entity_"+ window.entities},
						 {prop:"class",call:"attr",cval:"class",pre:"",suff:"",def:"entity_"+ window.entities}];
			_.each(watch,function(_data){
				_this.watch(_data.prop,function(id,oldval,newval){
					if(typeof _data.func !== "undefined"){newval = _this[_data.func](newval);}
					_this.element[_data.call](_data.cval,_data.pre + newval + _data.suff);
					return newval;
				});
				window.entities++;
				//set property default
				_this[_data.prop] = _data.def;
			});	
		}
	});
	
	Entity.prototype.addChild = function(_ent){
		//push entity into children array
		this.children.push(_ent);
		_ent.parent = this;
	}
	Entity.prototype.addTo = function(_ent){
		_ent.addChild(this);
	}
	Entity.prototype.removeChild = function(_ent){
		var pos = this.children.indexOf(_ent);
		console.log(pos);
		this.children.splice(pos,1);
		_ent = null;
	}
	Entity.prototype.delete = function(){
		this.parent.removeChild(this);
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