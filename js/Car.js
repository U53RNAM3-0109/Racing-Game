var carX = 75;
var carY = 75;

var carSpeed = 1;
var carAng = 0;

const SPEED_DECAY = 0.98;
const DRIVE_STRENGTH = 0.05;
const BRAKE_STRENGTH = 0.05;
const TURNING_STRENGTH = 0.05;

const MIN_SPEED_TO_TURN = 0.5;



function carMove() {
    carSpeed *= SPEED_DECAY;
    
    if(keyUpHeld) {
        carSpeed += DRIVE_STRENGTH;
    }
    if(keyDownHeld) {
        carSpeed -= BRAKE_STRENGTH;

    }
    if(keyLeftHeld) {
        if(Math.abs(carSpeed) > MIN_SPEED_TO_TURN) {
            carAng -= TURNING_STRENGTH;
        }
    }
    if(keyRightHeld) {
        if(Math.abs(carSpeed) > MIN_SPEED_TO_TURN) {
            carAng += TURNING_STRENGTH;
        }
    }
    
    carX+= Math.cos(carAng)*carSpeed;
    carY+= Math.sin(carAng)*carSpeed;
}

function carReset() {
    for(var row=0;row<TRACK_ROWS;row++) {
		for(var col=0;col<TRACK_COLS;col++) {

			var arrayIndex = rowColToArrayIndex(col,row);

			if(tileMap[arrayIndex] == CAR_START) {
			    tileMap[arrayIndex] = TRACK_ROAD;
			    carX =col * TRACK_W;
			    carY =row * TRACK_H;
			    carAng = -Math.PI/2;
			    carSpeed = 0;
			    
			}
		}
    }
}

function drawCar() {
    drawBitmapCenteredWithRotation(carPic,carX,carY,carAng);
}
