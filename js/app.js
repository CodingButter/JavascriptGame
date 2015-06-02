requirejs.config({
	"baseUrl":"js",
	"paths":{
		"underscore":"libs/underscore",
		"baseclass":"libs/baseclass",
		"class":"libs/class",
		"keylistener":"libs/keylistener",
		"jquery":"libs/jquery",
		"watch":"libs/watch",
		"webaudio":"libs/webaudio",
		"entity":"app/classes/entities/entity",
		"dynamicentity":"app/classes/entities/dynamicentity",
		"player":"app/classes/entities/player",
		"mouse":"app/classes/display/mouse",
		"renderer":"app/classes/display/renderer",
		'movers':"app/classes/entities/movers",
		"physics":"app/classes/display/physics"
	}
});

// Load the main app module to start application
require(['app/main']);