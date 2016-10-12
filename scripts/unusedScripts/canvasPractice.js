console.log('Js loaded');

var canvas = document.getElementById('gameBoard');
var ctx = canvas.getContext('2d');

// Start building triangles

// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(125, 125);
// ctx.lineTo(225, 225);
// ctx.closePath();
// ctx.fill();

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(125, 125);
ctx.lineTo(225, 225);
ctx.closePath();
ctx.fill();

// Drawing paths

// beginPath | starts a new path.
// moveTo | moves the point that the path is drawn from.
// lineTo  | draws a straight path to this point from the point defined in moveTo,
// or the point from the last call to lineTo.
// closePath | closes the path by connecting the last point to the starting point.
// fill fills the path with a colour.
// stroke outlines the path.

// Canvas methods

//ctx.fillRect(x, y, width, height);
//ctx.strokeRect
//ctx.fillStyle
//ctx.strokeStyle
//ctx.lineWidth

// Start building rectangles

function largeSquare(r,g,b,x,y){
    ctx.fillStyle = 'rgb(' + r +','+ g + ',' + b + ')';
    ctx.fillRect(x, y, 400, 400);
}

largeSquare(255,59,70, 200, 200);

largeSquare(165,255,54, 450, 450);

ctx.lineWidth = 50;
ctx.strokeStyle = 'rgb(15, 15, 15)';
ctx.strokeRect(300, 315, 200, 200);

ctx.lineWidth = 15;
ctx.strokeStyle = 'rgb(255, 255, 255)';
ctx.strokeRect(25, 25, 200, 200);




