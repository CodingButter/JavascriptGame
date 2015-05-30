requirejs.config({
	"baseUrl":"js",
	"paths":{
		"baseclass":"libs/baseclass",
		"class":"libs/class",
		"keylistener":"libs/keylistener",
		"jquery":"libs/jquery",
		"watch":"libs/watch",
		"webaudio":"libs/webaudio",
		"entity":"app/classes/entities/entity",
		"dynamicentity":"app/classes/entities/dynamicentity",
		"gravity":"app/classes/entities/helpers/gravity"
	}
});

// Load the main app module to start application
require(['app/main']);