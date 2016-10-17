var startButton = document.querySelector('#game-start');
var titleScreen = document.querySelector('#title-wrapper');
var titleScreenBg = document.querySelector('#hyperSpace');
var scoringChart = document.querySelector('#score');
var healthChart = document.querySelector('#health');
var finalScore = document.querySelector('#final-score');
var endScreen = document.querySelector('#end-wrapper');
var enemiesBoard = document.querySelector('#enemies');
var userBoard = document.querySelector('#user');
var finalBorder = document.querySelector('#simplyBorder');


var audio = new Audio('sounds/objective.wav');
var audio2 = new Audio('sounds/take.mp3');
var audio3 = new Audio('sounds/tiger.mp3');


function gameStart() {
    titleScreen.className = 'hide';
    titleScreenBg.className = 'hide';
    draw();
}

function gameEnd() {
    endScreen.className = 'show';
    titleScreenBg.className = 'show';
    enemiesBoard.className = 'hide';
    finalBorder.className = 'show';
    userBoard.className = 'hide';
    finalScore.innerHTML = scoreCounter;
    audio2.pause();
    audio3.play();
}

startButton.addEventListener("click", gameStart);


var objectivesCounter = 0;
var scoreCounter = 0;
var healthCounter = 100;

function checkWin() {
    if (objectivesCounter === 20) {
        console.log('You win!');
        healthSystem();
        scoringSystem();
        gameEnd();

    } else {
        console.log('You have not won yet');
        healthSystem();
        scoringSystem();
    }
}

function scoringSystem(){
    scoreCounter = objectivesCounter * 10;
    scoringChart.innerHTML = 'Score: ' + '<span class="number">' + scoreCounter + '</span>' + '&nbsp;&nbsp;&nbsp;';
}

function healthSystem() {
    healthChart.innerHTML = '&nbsp;Shields: ' + '<span class="number">' + healthCounter + '</span>';
}

function healthCheck(){
    if(healthCounter < 0){
        gameEnd();
    }
}