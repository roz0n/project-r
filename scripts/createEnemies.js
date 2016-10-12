console.log('Create enemies is online');

var canvas = document.querySelector('#enemies');
var tcv = canvas.getContext('2d');
var enemiesList = [];
var raf;

// This is a random number generator

function enemyRange(min, max) {
    var value = Math.random()*(max-min) + min;
    return Math.round(value);
}

// This is the constructor

function Enemy(x, y, wh, xSpeed, ySpeed, damage) {
    this.x = x;
    this.y = y;
    this.wh = wh;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.damage = damage;
    this.draw = function() {
        tcv.fillStyle = 'aqua';
        tcv.fillRect(this.x, this.y, this.wh, this.wh);
    }
}

for (j=0; j < 7; j++) {
    enemiesList.push(new Enemy(enemyRange(50,400), enemyRange(50,400), 50, enemyRange(3,5), enemyRange(3,5), 1));
}

function drawEnemies(){
    for (j=0; j < 7; j++) {
        enemiesList[j].draw();
    }
}

// This is animating the enemies

function animateEnemies() {
    for (var i=0; i < enemiesList.length; i++) {
    enemiesList[i].x += enemiesList[i].xSpeed;
    enemiesList[i].y += enemiesList[i].ySpeed;

    }
}

// This detects collision between enemy squares and the board

function detectCollision(){

    for(j=0; j < enemiesList.length; j++) {

        if (enemiesList[j].y + enemiesList[j].ySpeed + 50 > 500 ||
            enemiesList[j].y + enemiesList[j].ySpeed <= 0 ||
            enemiesList[j].y + enemiesList[j].ySpeed - 50 > 500 ||
            enemiesList[j].y + enemiesList[j].ySpeed < 0 ) {
            console.log('y collision is working');
            enemiesList[j].ySpeed = -enemiesList[j].ySpeed;
        }

        if (enemiesList[j].x + enemiesList[j].xSpeed + 50 > 500 ||
            enemiesList[j].x + enemiesList[j].xSpeed <= 0 ||
            enemiesList[j].x + enemiesList[j].xSpeed > 500 ||
            enemiesList[j].x + enemiesList[j].xSpeed < 0) {
            console.log('x collision is working');
            enemiesList[j].xSpeed = -enemiesList[j].xSpeed;
        }
    }
}

// This is drawing the enemies ultimately

function draw() {
    drawEnemies();
    animateEnemies();
    tcv.fillStyle = 'rgba(102,54,232, 0.3)';
    tcv.fillRect(0, 0, 500, 500);
    raf = window.requestAnimationFrame(draw);
    detectCollision();
}

draw();