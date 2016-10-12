console.log("Styler is online");

var canvasBG = document.getElementsByTagName("body")[0];
var canvasBR = document.getElementById("gameBoard");
// heroColor is our hero color
// heroShadow is our hero's shadow color

function styleChanger(colorBG, colorBR, colorHero, colorShadow, markersColor){
    canvasBG.style.backgroundColor = colorBG;
    canvasBR.style.borderColor = colorBR;
    heroColor = colorHero;
    heroShadow = colorShadow;
    return true;
}

