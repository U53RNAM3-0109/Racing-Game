//draws rectangles
function drawRect(drawX,drawY, width,height, colour) {
    canvasContext.fillStyle = colour;
    canvasContext.fillRect(drawX,drawY, width,height);
}
//draws full circles
function drawCirc(centreX,centreY, radius, colour) {
    canvasContext.fillStyle = colour;
    canvasContext.beginPath();
    canvasContext.arc(centreX,centreY, radius,0,Math.PI*2,true);
    canvasContext.fill();
}
//writes text
function colourText(text,drawX,drawY,colour) {
    canvasContext.fillStyle = colour;
    canvasContext.fillText(text,drawX,drawY);
}

function drawBitmapCenteredWithRotation(useBitmap,atX,atY,withAng) {
    canvasContext.save();
    canvasContext.translate(atX,atY);
    canvasContext.rotate(withAng);
    canvasContext.drawImage(useBitmap,-useBitmap.width/2,-useBitmap.height/2);
    canvasContext.restore();
}

function clearScreen() {
    //draws canvas
    drawRect(0,0,canvas.width,canvas.height,'#000000');
}
