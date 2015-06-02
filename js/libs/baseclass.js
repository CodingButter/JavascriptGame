define(['class','underscore'],function(Class,_){
  window.class_id = 0;
  var BaseClass = Class.extend({
    init:function(){
		window.class_id++;
    }
  });
  return BaseClass;
});