console.log('Hyper space is online');

var canvas = document.getElementById('hyperSpace');
var ctxHs = canvas.getContext('2d');

var spoutArray = [];

// This function creates a random number

function randomRange(min, max){
    return Math.random()*(max-min) + min;
}

// End random ------------------------>


function drawSquares() {

    var spout = {
        x: 250,
        y: 250,
        xSpeed: randomRange(-10, 10),
        ySpeed: randomRange(-10, 10),
        size: 2
    };

    spoutArray.push(spout);
    ctxHs.clearRect(0, 0, 500, 500);

    for (var i = 0; i < spoutArray.length; i++) {

        spout = spoutArray[i];
        ctxHs.fillStyle = "rgb(255,255,255)";
        ctxHs.fillRect(spout.x, spout.y, spout.size, spout.size);
        ctxHs.shadowBlur = 15;
        ctxHs.shadowColor = "rgb(255,59,70)";

        // ctxHs.arc(spout.x, spout.y, 2, 0, 2 * Math.PI, true);
        // ctxHs.fillStyle = 'white';
        // ctxHs.fill();

        spout.x = spout.x + spout.xSpeed;
        spout.y = spout.y + spout.ySpeed;

        spout.size = spout.size * 0.95;
    }
}

setInterval(drawSquares, 75);