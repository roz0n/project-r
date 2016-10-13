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

function setMousePosition(e) {
    mouseX = e.clientX - canvasPos.x;
    mouseY = e.clientY - canvasPos.y;
    // console.log(mouseX + " " + mouseY);
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

function detectMouseCollision(){

    for(var j=0; j < enemiesList.length; j++){
        if(mouseX == enemiesList[j].x + enemiesList[j].wh &&
            mouseY == enemiesList[j].y + enemiesList[j].wh){
            console.log('This is a massive collision');
        }
    }
}

detectMouseCollision();










// if (enemiesList[j].y + enemiesList[j].ySpeed + 50 > 500 ||
//     enemiesList[j].y + enemiesList[j].ySpeed <= 0 ||
//     enemiesList[j].y + enemiesList[j].ySpeed - 50 > 500 ||
//     enemiesList[j].y + enemiesList[j].ySpeed < 0 ) {
//     // console.log('y collision is working');
//     enemiesList[j].ySpeed = -enemiesList[j].ySpeed;
// }
//
// if (enemiesList[j].x + enemiesList[j].xSpeed + 50 > 500 ||
//     enemiesList[j].x + enemiesList[j].xSpeed <= 0 ||
//     enemiesList[j].x + enemiesList[j].xSpeed > 500 ||
//     enemiesList[j].x + enemiesList[j].xSpeed < 0) {
//     // console.log('x collision is working');
//     enemiesList[j].xSpeed = -enemiesList[j].xSpeed;
// }