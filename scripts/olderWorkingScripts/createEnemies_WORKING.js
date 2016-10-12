console.log('Create enemies is online');

var canvas = document.querySelector('#enemies');
var tcv = canvas.getContext('2d');
var enemiesList = [];
var raf;

function enemyRange(min, max) {
    var value = Math.random()*(max-min) + min;
    return Math.round(value);
}

 var enemySquare = {
        x: enemyRange(0,500),
        y: enemyRange(0,500),
        wh: 100,
        xSpeed: 2,
        ySpeed: 2,
        Damage: 1,
        draw: function(){
            tcv.fillStyle = 'aqua';
            tcv.fillRect(enemySquare.x, enemySquare.y, enemySquare.wh, enemySquare.wh);
        }
};

function draw() {

    tcv.fillStyle = 'rgba(102,54,232, 0.3)';
    tcv.fillRect(0, 0, 500, 500);
    enemySquare.draw();
    enemySquare.x += enemySquare.xSpeed;
    enemySquare.y += enemySquare.ySpeed;
    raf = window.requestAnimationFrame(draw);

    if (enemySquare.y + enemySquare.ySpeed + 100 > 500 ||
        enemySquare.y + enemySquare.ySpeed <= 0 ||
        enemySquare.y + enemySquare.ySpeed - 100 > 500 ||
        enemySquare.y + enemySquare.ySpeed < 0 ) {
        console.log(enemySquare.y, enemySquare.x, '< y > 5000 or < 0');
        enemySquare.ySpeed = -enemySquare.ySpeed;
    }

    if (enemySquare.x + enemySquare.xSpeed + 100 > 500 ||
        enemySquare.x + enemySquare.xSpeed <= 0 ||
        enemySquare.x + enemySquare.xSpeed > 500 ||
        enemySquare.x + enemySquare.xSpeed < 0) {
        console.log(enemySquare.y, enemySquare.x, '< x > 5000 or < 0');
        enemySquare.xSpeed = -enemySquare.xSpeed;
    }

}

draw();