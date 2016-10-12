console.log('The game board is online');

// First we declare our canvas and set the context to 2D

var canvas = document.getElementById('gameBoard');
var c = canvas.getContext('2d');

// Now we make an array to store many squares or blobs

var blobArray = [];

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

    var blob = {
        x : 450,
        y: 450,
        xSpeed: randomRange(-10, 10),
        ySpeed: randomRange(-10, 10),
        size: 30
    };

    blobArray.push(blob);
    c.clearRect(0,0,900,900);

    for(var i = 0; i < blobArray.length; i++) {

        blob = blobArray[i];
        c.fillStyle = 'white';
        c.fillRect(blob.x, blob.y, blob.size, blob.size);
        blob.x = blob.x + blob.xSpeed;
        blob.y = blob.y + blob.ySpeed;

        blob.size = blob.size * 0.95;
    }
}

// This is calling our function drawSquare, every thirty milliseconds

setInterval(drawSquares, 50);


canvas.addEventListener("mousemove", mouseMoving, false);

function mouseMoving(e) {
    console.log(e.clientX + " " + e.clientY);
}