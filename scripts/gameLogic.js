window.onload = function(){
    window.alert('Collect all the dots');
};

var objectivesCounter = 0;

function checkWin() {
    if (objectivesCounter === 10) {
        window.alert('You win!');
        console.log('You win!');
    } else {
        console.log('You have not won yet');
    }
}