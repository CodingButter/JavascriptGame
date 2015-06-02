require(['jquery','entity','dynamicentity',
		 'renderer','player','mouse','movers','physics'],function($,Entity,DynamicEntity,
														 Renderer,Player,MouseListener,Movers,Physics){
	//Create the workspace
	
	window.Mouse = new MouseListener();
	var workspace = new DynamicEntity();
	workspace.width = 800;
	workspace.height= 600;
	var scale = $(document).width() > $(document).height() ? $(document).width() / workspace.width : $(document).height() / workspace.width;
	workspace.scale = scale;
	window.Mouse.scale = scale;
	workspace.background = "green";
	workspace.name = "workspace";
	$("body").append(workspace.element);
	
	var player = new Player();
	player.x = 100;
	player.y = 150;
	player.name = "player_1";
	workspace.addChild(player);
	
	window.renderer = new Renderer();
	function render(){
		renderer.render(workspace);
		window.Mouse.update();
		setTimeout(render,1000);
		//requestAnimationFrame( render );
	}
	render();
	var physengine = new Physics();
	
	function physics(){
		physengine.update(workspace);
		setTimeout(physics,17);
	}
	physics();
	var createMovers = function(){
		var box = new Movers({"left":0,"right":workspace.width,"top":0,"bottom":workspace.height});
		workspace.addChild(box);
		setTimeout(createMovers,(Math.random()*1000) + 100);
	};
	createMovers();
});