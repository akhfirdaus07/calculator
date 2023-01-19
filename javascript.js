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
    result=operate();
    if(result==null){
        history.textContent=active.textContent+this.textContent;
    }
    else{
        history.textContent=result+this.textContent;
    }
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

// Add operators functions
function operate(){
    let o=history.textContent.slice(-1);
    let x=parseFloat(history.textContent.slice(0, -1));
    let y=parseFloat(active.textContent);
    if (o == '+') {  
        return x+y;  
    } else if (o == '-') {
        return x-y;
    } else if (o == 'x') { 
        return x*y;
    } else if(o =="/") {  
        if(y==0){
            return alert("You can't divide by zero")
        }
        return (Math.round(x/y*1000)/1000);
    } else if(o == "%") {
        return x%y;
    } else{
        return null;
    }
}


// Add equal button function
const equal=document.querySelector(".equal")
equal.addEventListener("click", equalDisplay)
function equalDisplay(){
    result=operate();
    history.textContent+=active.textContent+"=";
    active.textContent=result;
}

// Add keyboard support
let shouldResetScreen = false;
let currentOperation = null;
let firstOperand = ''
let secondOperand = ''

window.addEventListener('keydown', handleKeyboardInput);

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
    if (e.key === '.') appendPoint()
    if (e.key === '=' || e.key === 'Enter') equalDisplay()
    if (e.key === 'Backspace') undoDisplay()
    if (e.key === 'Escape') clearDisplay()
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') convertOperator(e.key)
}
  
function appendNumber(number) {
   if (active.textContent === '0' || shouldResetScreen) resetScreen()
   active.textContent += number
}

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (active.textContent === '') active.textContent = '0'
    if (active.textContent.includes('.')) return active.textContent += '.'
}

function resetScreen() {
    active.textContent = ''
    shouldResetScreen = false
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') history.textContent=active.textContent+'÷';
    if (keyboardOperator === '*') history.textContent=active.textContent+'x';
    if (keyboardOperator === '-') history.textContent=active.textContent+'-';
    if (keyboardOperator === '+') history.textContent=active.textContent+'+';
    operate()
    shouldResetScreen = true
}  