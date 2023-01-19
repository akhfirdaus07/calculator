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
const history=document.querySelector(".history");
const active=document.querySelector(".active");
const numbers=document.querySelectorAll(".num");
const operators=document.querySelectorAll(".operator")
for(let number of numbers){
    number.addEventListener("click", numToDisplay)
}
function numToDisplay(){
    if(active.textContent==0){
        active.textContent=this.textContent;
    } else{
    active.textContent+=this.textContent;
    }
}

for(let operator of operators){
    operator.addEventListener("click", opToDisplay)
}
function opToDisplay(){
    history.textContent=active.textContent+this.textContent;
    active.textContent="";
}

// Add clear button function
const clear=document.querySelector("#clear");
clear.addEventListener("click", clearDisplay)
function clearDisplay(){
    active.textContent="";
    history.textContent="";
    
}

// Add undo button function
const undo=document.querySelector("#undo");
undo.addEventListener("click", undoDisplay)
function undoDisplay(){
    active.textContent=active.textContent.substring(0,active.textContent.length-1)
}

// Add plusMinus button function
const plusMinus=document.querySelector(".plusMinus");
plusMinus.addEventListener("click", addPlusMinus);
function addPlusMinus(){
    active.textContent = parseInt(active.textContent)*-1;
}

// Add decimal button function

// Add operators functions
function add(x,y){
    return x+y;
}
function subtract(x,y){
    return x-y;
} 
function multiply(x,y){
    return x*y;
} 
function divide(x,y){
    return x/y;
} 
function mod(x,y){
    return x%y;
}