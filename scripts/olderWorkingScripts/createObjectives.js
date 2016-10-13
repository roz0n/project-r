console.log('Create objectives is online');

var canvas = document.querySelector('#enemies');
var ocv = canvas.getContext('2d');

var objectivesList = [];

function objectiveRange(min, max) {
    var value = Math.random()*(max-min) + min;
    return Math.round(value);
}

function drawObjectives(){

    var objectiveCirc = {
        x:objectiveRange(200, 400),
        y:objectiveRange(200,400),
        r: 4
        //h
        //xSpeed
        //ySpeed
    };

    ocv.beginPath();
    ocv.arc(objectiveCirc.x, objectiveCirc.y, objectiveCirc.r, 0, 2 * Math.PI, true);
    // x-cor, y-cor, radius, starting angle 0 is 3'oclock, end angle
    // true or false is clockwise or counterclockwise
    ocv.fillStyle = 'red';
    ocv.fill();
    ocv.shadowBlur = 10;
    ocv.shadowColor = 'white';

    objectivesList.push(objectiveCirc);

}

for (i=0; i < 3; i++){
    drawObjectives(i);
}

