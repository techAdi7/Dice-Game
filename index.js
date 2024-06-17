// VERY EXCIETING CHALLENGE (-_-) !!!.



var randomNumber1 = Math.floor((6 * Math.random())+1); // random number from 1 to 6 .
var randomNumber2 = Math.floor((6 * Math.random())+1);

var randomImage_1_Source = "./images/"+"dice"+randomNumber1+".png"; // random image source from image_1 to image_6 .
var randomImage_2_Source = "./images/"+"dice"+randomNumber2+".png";

var image_1=document.querySelectorAll("img")[0];

image_1.setAttribute("src",randomImage_1_Source);

var image_2=document.querySelectorAll("img")[1];

image_2.setAttribute("src",randomImage_2_Source);

// case of Draw.
function audio (){var Aud_1=new Audio("./sounds/crash.mp3"); 
        Aud_1.play();}

if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").textContent="DRAW 🚩";
} else {
    if (randomNumber1 > randomNumber2) {   //case of winning of player 1.
        audio();
        document.querySelector("h1").textContent="P_1 WINS (-_-) ";
    } else {
        document.querySelector("h1").textContent="P_2 WINS (-_-) ";  //case of winning of player 2.
    }
}

