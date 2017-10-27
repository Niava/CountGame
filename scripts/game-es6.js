
//logic for the game
class Game{
	
	constructor(){
		console.log(`Welcome to the game. Version ${this.version()}`);
		this.canvas = document.getElementById("game-canvas");
		this.stage = new createjs.Stage(this.canvas);

		createjs.Ticker.setFPS(60);
	}

	version(){
		return '1.0.0';
	}
}


// start the game
var game = new Game();




