canvas = document.getElementById('gameCanvas'); //sets size
canvasContext = canvas.getContext('2d'); //gets details on graphics
    
//Don't have to declare variables in JS but it's good practice
var canvas, canvasContext;

//waits for window to be loaded and sets up our important things
window.onload = function() {
    
    drawRect(0,0,canvas.width,canvas.height,"#000000");
    colourText("Loading.",10,10,"#ffffff");

    loadImages();
};

function startGame() {  //only called once images are loaded
    setUpInput();
    carReset();
    //sets FPS then cycles updates to create our animated screen
    var framesPerSecond = 70;
    setInterval(updateAll, 1000/framesPerSecond);
}

function updateAll() {
    moveAll();
    drawAll();
}

//MOVE ALL//
function moveAll() {
    carMove();
    trackCollisions();
}

//DRAW ALL//
function drawAll() {
    drawTracks();
    drawCar();
}