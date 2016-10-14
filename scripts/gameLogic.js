// window.onload = function(){
//     window.alert('Collect all the dots');
// };

var startButton = document.querySelector('#game-start');
var titleScreen = document.querySelector('#title-wrapper');
var titleScreenBg = document.querySelector('#hyperSpace');

function gameStart() {
    titleScreen.className = 'hide';
    titleScreenBg.className = 'hide';
    draw();
}

startButton.addEventListener("click", gameStart);


var objectivesCounter = 0;
var scoreCounter = 0;

function checkWin() {
    if (objectivesCounter === 10) {
        window.alert('You win!');
        console.log('You win!');
    } else {
        console.log('You have not won yet');
    }
}

function upScore(){

}
