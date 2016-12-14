var canvas = document.querySelector('#user');
var ctx2 = canvas.getContext('2d');
var raf2;

window.addEventListener("keydown", moveSomething, false);
// window.addEventListener("keyup", keysReleased, false);

var speedX = 0;
var speedY = 0;

function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
            pointer.x = pointer.x - 20;
            break;
        case 38:
            pointer.y = pointer.y - 20;
            break;
        case 39:
            pointer.x = pointer.x + 20;
            break;
        case 40:
            pointer.y = pointer.y + 20;
            break;
    }
    e.preventDefault();

    if (pointer.x == 500) {
        pointer.x = pointer.x - 20;
    }

    if (pointer.y == 500) {
        pointer.y = pointer.y -20;
    }

    if(pointer.x == 0) {
        pointer.x = pointer.x + 20;
    }

    if (pointer.y == 0) {
        pointer.y = pointer.y + 20;
    }
}

function User(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.draw = function() {
        ctx2.beginPath();
        ctx2.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
        ctx2.fillStyle = 'white';
        ctx2.fill();
    }
}
