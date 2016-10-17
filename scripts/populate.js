console.log('Game board is populated');

audio2.play();

var canvas = document.querySelector('#enemies');
var ctx2 = canvas.getContext('2d');
var enemiesList = [];
var objectivesList = []; //this is new
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
        ctx2.fillStyle = 'aqua';
        ctx2.fillRect(this.x, this.y, this.wh, this.wh);
    }
}

for (j=0; j < 7; j++) {
    enemiesList.push(new Enemy(enemyRange(50,400), enemyRange(50,400), 50, enemyRange(1,2), enemyRange(1,2), 1));
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
            // console.log('y collision is working');
            enemiesList[j].ySpeed = -enemiesList[j].ySpeed;
        }

        if (enemiesList[j].x + enemiesList[j].xSpeed + 50 > 500 ||
            enemiesList[j].x + enemiesList[j].xSpeed <= 0 ||
            enemiesList[j].x + enemiesList[j].xSpeed > 500 ||
            enemiesList[j].x + enemiesList[j].xSpeed < 0) {
            // console.log('x collision is working');
            enemiesList[j].xSpeed = -enemiesList[j].xSpeed;
        }
    }
}

// These are the functions for the objectives

function objectiveRange(min, max) {
    var value = Math.random()*(max-min) + min;
    return 20 * Math.round(value/20);
}

// This is the constructor for the objectives

function Objective(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.draw = function() {
        ctx2.beginPath();
        ctx2.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
        // x-cor, y-cor, radius, starting angle 0 is 3'oclock, end angle
        // true or false is clockwise or counterclockwise
        ctx2.fillStyle = 'rgb(255,59,136)';
        ctx2.fill();
    }
}

// This is creating the objectives and pushing it into the array

for(var i=0; i < 20; i++) {
    objectivesList.push(new Objective(objectiveRange(50, 450), objectiveRange(50,450), 10));
}

function drawObjectives(){
    for(var i = 0; i < objectivesList.length; i++){
        objectivesList[i].draw();
    }
}

function detectCollision2() {
    for (var m = 0; m < objectivesList.length; m++) {
        if(pointer.x == objectivesList[m].x &&
            pointer.y == objectivesList[m].y) {
            objectivesList.splice(m, 1);
            audio.play();
            objectivesCounter ++;
            checkWin();
            ctx2.fillStyle = 'white';
            ctx2.fillRect(0, 0, 500, 500);
            console.log('Obtained objective!');
        }
    }
}


function someFunc(pointer, enemiesList) {

    var distX = Math.abs(pointer.x - enemiesList.x);
    var distY = Math.abs(pointer.y - enemiesList.y);

    if (distX > (enemiesList.wh/2 + 5)) {
        // console.log('None');
        return false;
    }

    if(distY > (enemiesList.wh/2 + 5)){
        // console.log('None');
        return false;
    }

    if(distX < (enemiesList.wh/2 + 5)){
        console.log('Definitely colliding');
        ctx2.globalAlpha=0.5;
        ctx2.fillStyle = 'rgb(255, 0, 0)';
        ctx2.fillRect(0, 0, 500, 500);
        ctx2.globalAlpha=1;
        healthCounter -= 1;
        healthCheck();
        console.log(healthCounter);
        return true;
    }

    if(distY < (enemiesList.wh/2 + 5)){
        console.log('Definitely colliding');
        console.log(distY, enemiesList.wh/2);
        ctx2.globalAlpha=0.5;
        ctx2.fillStyle = 'rgb(255, 0, 0)';
        ctx2.fillRect(0, 0, 500, 500);
        ctx2.globalAlpha=1;
        healthCounter -= 1;
        healthCheck();
        console.log(healthCounter);
        return true;
    }

    var hypot = (distX - enemiesList.wh/2) * (distX - enemiesList/2) +
        (distY - enemiesList.wh/2) * (distY - enemiesList/2);

    console.log(hypot <= (pointer.r*pointer.r));
    return (hypot <= (pointer.r*pointer.r));

}

function detectCollision3() {
    for(var g = 0; g < enemiesList.length; g++){
        someFunc(pointer, enemiesList[g]);
    }
}

// This is drawing the objects ultimately

var pointer = new User(20,20,10);

function draw() {
    drawObjectives();
    pointer.draw();
    drawEnemies();
    animateEnemies();
    ctx2.fillStyle = 'rgba(102,54,232, 0.3)';
    ctx2.fillRect(0, 0, 500, 500);
    detectCollision();
    detectCollision2();
    detectCollision3();
    healthSystem();
    raf = window.requestAnimationFrame(draw);

}