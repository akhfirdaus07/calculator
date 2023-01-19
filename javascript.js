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

for(let button of buttons){
    console.log(button.textContent)
    button.addEventListener("click", clickToDisplay)
    
}
function clickToDisplay(){
    display.textContent+=this.textContent
}