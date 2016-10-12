var canvas = document.querySelector('#hyperSpace');
var contxt = canvas.getContext('2d');

var circles = [];

function Circle(radius, speed, width, xPos, yPos){
    this.radius = radius;
    this.speed = speed;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
    // this.opacity = opacity;

    this.counter = 0;

    // idk what this is
    var signHelper = Math.floor(Math.random()*2);

    if (signHelper == 1) {
        this.sign = -1;
    } else {
        this.sign = 1;
    }
    //idk what this is
}

Circle.prototype.update = function() {

    this.counter += this.sign * this.speed;
    contxt.beginPath();
    contxt.arc(this.xPos + Math.cos(this.counter / 100) * this.radius,
        this.yPos + Math.sin(this.counter / 100) * this.radius,
        this.width,
        0,
        Math.PI * 2,
        false);
    contxt.closePath();
    contxt.fillStyle = 'rgba(185, 211, 238)';
    contxt.fill();
};

function drawAndUpdate() {
    contxt.clearRect(0, 0, 500, 500);

    for(var i = 0; i < circles.length; i++){
        var myCircle= circles[i];
        myCircle.update();
    }

    requestAnimationFrame(drawAndUpdate);
}

function drawCircles () {

    // this function is looping to create the circles
    // the variables inside the for loop are just generating
    // random parameters for our circle object which we call ~ line 39
    for(var i=0; i < 50; i++){
        var randomX= Math.round(-200 + Math.random()*700);
        var randomY = Math.round(-200 + Math.random()*700);
        var speed = .2 + Math.random()*3;
        var size = 5 + Math.random()*100;
        // var radius = 50 + Math.random() * 100;

        var circle = new Circle(100, speed, size, randomX, randomY);

        circles.push(circle);
    }

    drawAndUpdate();
}

drawCircles();