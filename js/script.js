const currDisplay = document.querySelector(".current-display");
const prevDisplay = document.querySelector(".prev-display");
const buttons = document.querySelectorAll(".button");
const operator = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear")
const del = document.querySelector(".delete")
const equal = document.querySelector(".equal")

let operation;

const getNumber = (num) => {
    currDisplay.innerText += num;
}

buttons.forEach((button) =>{
    button.addEventListener("click", (e) => {
        const keyValue = e.target.innerText;
        getNumber(keyValue);
    })
})

const getOperator = (operator) => {
    if(currDisplay.innerText === "") return;
    operation = operator;
    currDisplay.innerText += operator;
    prevDisplay.innerText = currDisplay.innerText;
    currDisplay.innerText = ""; 
}

operator.forEach((button) => {
    button.addEventListener("click", (e) => {
        const keyValue = e.target.innerText;
        getOperator(keyValue);
    })
})

const compute = () => {
    let result;
    const prevValue = parseFloat(prevDisplay.innerText);
    const currValue = parseFloat(currDisplay.innerText);

    if(isNaN(prevValue) || isNaN(currValue)) return;

    switch(operation) {
        case "+":
            result = prevValue + currValue;
            break;
        case "-":
            result = prevValue - currValue;
            break;
        case "*":
            result = prevValue * currValue;
            break;
        case "/":
            result = prevValue / currValue;
            break;
        case "%":
            result = prevValue % currValue;
            break;
        default:
            return;
    }

    currDisplay.innerText = result;
}

clear.addEventListener("click", () => {
    currDisplay.innerText = "";
    prevDisplay.innerText = "";
})

del.addEventListener("click", () => {
    currDisplay.innerText = currDisplay.innerText.slice(0,-1);
})

equal.addEventListener("click", () => {
    compute();
    prevDisplay.innerText ="";
    
})