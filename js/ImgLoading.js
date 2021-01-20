//Set up variables for image loading

//creates the element "img" and assigns it to the car
var carPic = document.createElement("img"); 
var trackPics = [];


var imgsToLoad = 0;

function countLoadedImgs() {
    imgsToLoad--;
        if(imgsToLoad === 0) {
            startGame();
        }
}

function beginLoadingImg(imgVar,fileName) {
    imgVar.onload = countLoadedImgs();
	imgVar.src = fileName;
}

function loadImageForTrackCode(trackCode, fileName) {
	trackPics[trackCode] = document.createElement("img");
	beginLoadingImg(trackPics[trackCode], fileName);
}

//Calls for each image to be loaded
function loadImages() { //overarching function
    var imageList = [
        {varName: carPic, fileName: "images/Player_Car1.png"},
        {trackType: TRACK_ROAD, fileName: "images/Track_Road.png"},
        {trackType: TRACK_WALL, fileName: "images/Track_Wall.png"},
        {trackType: TRACK_FLAG, fileName: "images/Track_Flag.png"},
        {trackType: TRACK_MARKER, fileName: "images/Track_Marker.png"},
        {trackType: GRASS, fileName: "images/Grass.png"},
        {trackType: GRASS_FLOWER, fileName: "images/Grass_Flower.png"}
        ];
    
    imgsToLoad = imageList.length;
    
    for(var i=0;i<imageList.length;i++) {
		if(imageList[i].varName !== undefined) {
			beginLoadingImg(imageList[i].varName, imageList[i].theFile);
		} else {
			loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
		}
	}
}
