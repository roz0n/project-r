console.log('Mouse follow is online');

var canvas = document.querySelector('#pointer');
var ctx = canvas.getContext("2d");
var heroColor = 'white';
var heroShadow = 'aquamarine';

var canvasPos = getPosition(canvas);
var mouseX = 0;
var mouseY = 0;

var xPosition = 0;
var yPosition = 0;

// event listener for our mouse
// this is only taking into account the mouse position from the top left corner of the viewport
// it's inaccurate. to fix this, we need getPosition.

canvas.addEventListener("mousemove", setMousePosition, false);

// This contains collision detection for hero and its objectives

function setMousePosition(e) {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;

    for(var i = 0; i < objectivesList.length; i++) {
        // collision detection between user and objectives
        // this is buggy
        if (mouseX  + mouseY === objectivesList[i].x - objectivesList[i].y &&
            mouseY - mouseX != objectivesList[i].x - objectivesList[i].y) {
            objectivesList.splice(i, 1);
            objectivesCounter++;
            console.log('object removed');
            checkWin();
        }
    }
}

// drawing the circle

function buildCircle() {
    ctx.clearRect(0,0,500,500);
    ctx.beginPath();
    ctx.arc(mouseX,mouseY,6,0,2 * Math.PI, true);
            // x-cor, y-cor, radius, starting angle 0 is 3'oclock, end angle
            // true or false is clockwise or counterclockwise
    ctx.fillStyle = heroColor;
    ctx.fill();
    ctx.shadowBlur = 10;
    ctx.shadowColor = heroShadow;
    requestAnimationFrame(buildCircle);
}

for(var i=0; i < objectivesList.length; i++){

}

var pointer = buildCircle();

// this is the helper function that is helping get an accurate mouse position
// we pass in the element whose position we are interested in
// this function then returns an object containing the xPosition and yPosition of the object

function getPosition(el) {
    var xPosition = 0;
    var yPosition = 0;

    while (el) {
        xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
        yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
        el = el.offsetParent;
    }

    return {
        x: xPosition,
        y: yPosition
    };
}