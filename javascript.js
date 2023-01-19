// Add Mouse hovering effect
const buttons=document.querySelectorAll("button");

for(let button of buttons){
    button.addEventListener("mouseover", mouseoverEffect)
    button.addEventListener("mouseout", mouseoutEffect)
}

function mouseoverEffect(){
    this.style.opacity=0.5;
}

function mouseoutEffect(){
    this.style.opacity=1;
}

// Add display function
const display=document.querySelector(".display");
const numbers=document.querySelectorAll(".num");
const operators=document.querySelectorAll(".operator")
for(let number of numbers){
    number.addEventListener("click", clickToDisplay)
}
for(let operator of operators){
    operator.addEventListener("click", clickToDisplay)
}
function clickToDisplay(){
    display.textContent+=this.textContent
}

// Add clear button function
const clear=document.querySelector("#clear");
clear.addEventListener("click", clearDisplay)
function clearDisplay(){
    display.textContent="";
}

// Add undo button function
const undo=document.querySelector("#undo");
undo.addEventListener("click", undoDisplay)
function undoDisplay(){
    display.textContent=display.textContent.substring(0,display.textContent.length-1)
}