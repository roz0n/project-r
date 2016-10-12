console.log('The game board is online');

// First we declare our canvas and set the context to 2D

var canvas = document.getElementById('gameBoard');
var ctxGb = canvas.getContext('2d');

// Now we make an array to store many squares or spouts

var spoutArray = [];
// var spoutPositionX = [];
// var spoutPositionY = [];

// var xPos = 250;
// var yPos = 250;
// var xSpeed = 10;
// var xSpeed = randomRange(-10, 10);

// This function creates a random number

function randomRange(min, max){
    return Math.random()*(max-min) + min;
}

// End random ------------------------>


function drawSquares(){

    var spout = {
        x : 250,
        y: 250,
        xSpeed: randomRange(-10, 10),
        ySpeed: randomRange(-10, 10),
        size: 2
    };

    spoutArray.push(spout);
    ctxGb.clearRect(0,0,500,500);

    for(var i = 0; i < spoutArray.length; i++) {

        spout = spoutArray[i];
        ctxGb.fillStyle = "rgb(255,255,255)";
        ctxGb.fillRect(spout.x, spout.y, spout.size, spout.size);
        ctxGb.shadowBlur = 15;
        ctxGb.shadowColor = "rgb(255,59,70)";

        // ctxGb.arc(spout.x, spout.y, 2, 0, 2 * Math.PI, true);
        // ctxGb.fillStyle = 'white';
        // ctxGb.fill();

        spout.x = spout.x + spout.xSpeed;
        spout.y = spout.y + spout.ySpeed;

        spout.size = spout.size * 0.95;
    }

    // this collision detection works but it's not going to work with the sprout

    // if (Math.round(spout.x ) && Math.round(spout.y) === mouseX && mouseY) {
    //     console.log("You're touching both");
    // } else if (Math.round(spout.y) === mouseY) {
    //     console.log("You're touching Y");
    // } else if (Math.round(spout.x) === mouseX) {
    //     console.log("You're touching X");
    // } else {
    //     console.log("No touch");
    // }


    // for (var t = 0; t < spoutArray.length; t++) {
    //     spoutPositionX.push(spout.x);
    //     spoutPositionY.push(spout.y);
    // }
}

// This is calling our function drawSquare, every thirty milliseconds

setInterval(drawSquares, 75);

// canvas.addEventListener("mousemove", mouseMoving, false);
//
// function mouseMoving(e) {
//     console.log(e.clientX + " " + e.clientY);
// }