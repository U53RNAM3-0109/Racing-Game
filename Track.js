const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = canvas.width/TRACK_W;
const TRACK_ROWS = canvas.height/TRACK_H;

var tileMap = new Array(TRACK_COLS*TRACK_ROWS);

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const CAR_START = 2;
const TRACK_FLAG = 3;
const TRACK_MARKER = 4;
const GRASS = 5;
const GRASS_FLOWER = 6;



//draws tracks
function drawTracks() {
	for(var row=0;row<TRACK_ROWS;row++) {
		for(var col=0;col<TRACK_COLS;col++) {

			var arrayIndex = rowColToArrayIndex(col, row); 
			var tileKindHere = tileMap[arrayIndex];
			var useImg = trackPics[tileKindHere];

			canvasContext.drawImage(useImg,TRACK_W*col,TRACK_H*row);
		} // end of for each track
	} // end of for each row

}

function trackReset(){
    tileMap = [1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,
                1,	4,	0,	0,	0,	1,	1,	1,	1,	1,	4,	0,	0,	0,	0,	0,	0,	0,	4,	1,
                1,	0,	0,	0,	0,	0,	1,	1,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,
                1,	0,	0,	0,	0,	0,	0,	1,	1,	1,	0,	0,	0,	4,	1,	1,	0,	0,	0,	1,
                1,	0,	0,	4,	1,	0,	0,	0,	1,	1,	0,	0,	1,	1,	6,	5,	1,	0,	0,	1,
                1,	0,	0,	1,	1,	1,	0,	0,	0,	0,	0,	0,	1,	6,	6,	1,	4,	0,	0,	1,
                1,	0,	2,	1,	5,	1,	1,	1,	0,	0,	0,	0,	1,	5,	1,	1,	0,	0,	0,	1,
                1,	0,	0,	1,	6,	6,	5,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	0,	0,	1,
                1,	3,	3,	4,	1,	1,	6,	5,	6,	5,	6,	6,	1,	1,	0,	0,	4,	0,	0,	1,
                1,	0,	0,	0,	0,	1,	1,	5,	6,	6,	5,	1,	1,	0,	0,	1,	1,	0,	0,	1,
                1,	0,	0,	4,	0,	0,	4,	1,	1,	1,	1,	1,	0,	0,	1,	1,	1,	0,	0,	1,
                1,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	4,	0,	0,	4,	1,	4,	0,	0,	1,
                1,	0,	0,	0,	4,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,
                1,	4,	0,	0,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	4,	1,
                1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1];
}

function isPassableAtColRow(col, row) {
	if(col >= 0 && col < TRACK_COLS &&
		row >= 0 && row < TRACK_ROWS) {
		 var trackIndexUnderCoord = rowColToArrayIndex(col, row);
		 return (tileMap[trackIndexUnderCoord] != TRACK_ROAD);
	} else {
		return false;
	}
}

function trackCollisions() {
	var carTrackCol = Math.floor(carX / TRACK_W);
	var carTrackRow = Math.floor(carY / TRACK_H);
	var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

	if(carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
		carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {

		if(isPassableAtColRow( carTrackCol,carTrackRow )) {
		    carX -= Math.cos(carAng)*carSpeed;
		    carY -= Math.sin(carAng)*carSpeed;
		    
		    carSpeed *= -0.5;
		} // end of track found
	} // end of valid col and row
} // end of carTrackHandling func

function rowColToArrayIndex(col, row) {
    return col + TRACK_COLS * row;
}

trackReset();