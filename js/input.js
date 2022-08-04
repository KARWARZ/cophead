
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keypress", keyPressHandler,false);

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;

var leftTrigger = false;
var rightTrigger = false;
var upTrigger = false;
var downTrigger = false;

function keyDownHandler(e) {
	if(e.key == "Right" || e.key == "ArrowRight") {
		rightPressed = true;
	}
	else if(e.key == "Left" || e.key == "ArrowLeft") {
		leftPressed = true;
	}
  else if(e.key == "Up" || e.key == "ArrowUp") {
		upPressed = true;
	}
  else if(e.key == "Down" || e.key == "ArrowDown") {
		downPressed = true;
	}
}

function keyUpHandler(e) {
	if(e.key == "Right" || e.key == "ArrowRight") {
		rightPressed = false;
	}
	else if(e.key == "Left" || e.key == "ArrowLeft") {
		leftPressed = false;
	}
  else if(e.key == "Up" || e.key == "ArrowUp") {
		upPressed = false;
	}
  else if(e.key == "Down" || e.key == "ArrowDown") {
		downPressed = false;
	}
}

function keyPressHandler(e) {
	if(e.key == "Right" || e.key == "ArrowRight") {
		rightTrigger = true;
	}
	else if(e.key == "Left" || e.key == "ArrowLeft") {
		leftTrigger = true;
	}
  else if(e.key == "Up" || e.key == "ArrowUp") {
		upTrigger = true;
	}
  else if(e.key == "Down" || e.key == "ArrowDown") {
		downTrigger = true;
	} else {
		rightTrigger = false;
		leftTrigger = false;
		upTrigger = false;
		downTrigger = false;
	}
}
