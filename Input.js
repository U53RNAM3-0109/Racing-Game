var mouseX;
var mouseY;
const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;

var keyLeftHeld = false;
var keyUpHeld = false;
var keyRightHeld = false;
var keyDownHeld = false;

function setUpInput() {
    canvas.addEventListener('mousemove', updateMousePos);
    
    document.addEventListener('keydown',keyPressed);
    document.addEventListener('keyup',keyReleased);
}

function updateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    
    mouseX = evt.clientX - rect.left - root.scrollLeft;
    mouseY = evt.clientY - rect.top - root.scrollTop;
}

function keyPressed(evt) {
    //console.log("Key pressed: " + evt.keyCode);
    if(evt.keyCode == KEY_LEFT) {
        keyLeftHeld = true;
    }
    if(evt.keyCode == KEY_RIGHT) {
        keyRightHeld = true;
    }
    if(evt.keyCode == KEY_UP) {
        keyUpHeld = true;
    }
    if(evt.keyCode == KEY_DOWN) {
        keyDownHeld = true;
    }
    
    evt.preventDefault();
}

function keyReleased(evt) {
    //console.log("Key released: " +evt.keyCode);
    if(evt.keyCode == KEY_LEFT) {
        keyLeftHeld = false;
    }
    if(evt.keyCode == KEY_RIGHT) {
        keyRightHeld = false;
    }
    if(evt.keyCode == KEY_UP) {
        keyUpHeld = false;
    }
    if(evt.keyCode == KEY_DOWN) {
        keyDownHeld = false;
    }
    
}