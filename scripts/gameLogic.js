// window.onload = function(){
//     window.alert('Collect all the dots');
// };

var startButton = document.querySelector('#game-start');
var titleScreen = document.querySelector('#title-wrapper');
var titleScreenBg = document.querySelector('#hyperSpace');
var scoringChart = document.querySelector('#score');
var healthChart = document.querySelector('#health');

function gameStart() {
    titleScreen.className = 'hide';
    titleScreenBg.className = 'hide';
    draw();
    checkDetection3();
}

startButton.addEventListener("click", gameStart);


var objectivesCounter = 0;
var scoreCounter = 0;
var healthCounter = 100;

function checkWin() {
    if (objectivesCounter === 20) {
        window.alert('You win!');
        console.log('You win!');
        scoringSystem();
    } else {
        console.log('You have not won yet');
        scoringSystem();
    }
}

function scoringSystem(){
    scoreCounter = objectivesCounter * 10;
    scoringChart.innerHTML = 'Score: ' + '<span class="number">' + scoreCounter + '</span>';
}
