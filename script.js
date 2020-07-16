var without = require('lodash/without');

var array = [1, 2, 3, 4, 5, 6, 7 ,8];
console.log('without3', without(array, 3));

var cssStyle = document.querySelector("#cssStyle");
var bgGradient = document.querySelector("#backgroundGradient");
var clrLeft = document.querySelector("#clrleft");
var clrRight = document.querySelector("#clrright");
var btnGenerator = document.querySelector("#generator");


function setGradient() {
    bgGradient.style.background = "linear-gradient(to right, "+ clrLeft.value +", "+ clrRight.value +")";
    cssStyle.textContent = bgGradient.style.background + ";";
    btnGenerator.style.background = "linear-gradient(to right, "+ clrRight.value +", "+ clrLeft.value +")";
}



clrLeft.addEventListener("input", setGradient);

clrRight.addEventListener("input", setGradient);



btnGenerator.addEventListener("click", randomGenerator)

function randomHexaColor () {
    var number = (Math.random() * 0xfffff * 1000000). toString(16);
    return '#' + number.slice(0, 6);
}

function randomGenerator () {
    clrLeft.value = randomHexaColor();
    clrRight.value = randomHexaColor();
    setGradient();
}



setGradient();

