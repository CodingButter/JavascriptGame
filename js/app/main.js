require(['jquery','entity','dynamicentity'],function($,Entity,DynamicEntity){
	//Create the workspace 
	var workspace = new DynamicEntity();
	workspace.width = 800;
	workspace.height= 500;
	workspace.background = "green";
	workspace.name = "workspace";
	$("body").append(workspace.element);
	
	var box = new DynamicEntity();
	workspace.addChild(box);
	setInterval(draw,12);
	function draw(){
		workspace.draw();
	}
});