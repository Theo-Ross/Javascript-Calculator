const buttons = Array.from(document.querySelectorAll(".numbers"));

const buttonC = document.querySelector(".operator__grey-C");
const buttonSymbol = document.querySelector(".operator__grey-symbol");
const buttonPercent = document.querySelector(".operator__grey-percent");

let buttonDivide = document.querySelector(".operator__divide");
let buttonX = document.querySelector(".operator__x");
let buttonMinus = document.querySelector(".operator__minus");
let buttonPlus = document.querySelector(".operator__plus");
let buttonEquals = document.querySelector(".operator__equals");

let display = document.querySelector(".display");
let display2 = document.querySelector(".display2");
let number = "";
let symbol = "";

//buttons

buttons.forEach((event) => {
  event.addEventListener("click", () => {
    return (display.innerHTML += event.innerHTML);
  });
  console.log(display.innerHTML);
});

// function buttons

buttonC.addEventListener("click", () => {
  display.innerHTML = "";
  number = "";
  display2.innerHTML = "";
});

// operator buttons

const makeSum = (event) => {
  number = Number(display.innerHTML);

  symbol = event.target.innerHTML;

  display2.innerHTML = number + symbol;
  display.innerHTML = "";
};

buttonDivide.addEventListener("click", makeSum);

buttonPlus.addEventListener("click", makeSum);

buttonMinus.addEventListener("click", makeSum);

buttonX.addEventListener("click", makeSum);

// percentage function

const makePercent = (event) => {
  number = Number(display.innerHTML);
  number = number / 100;
  display.innerHTML = number;
};

buttonPercent.addEventListener("click", makePercent);

// positive <--> negative function

const changeValue = (event) => {
  number = Number(display.innerHTML);
  if (display.innerHTML.includes("-")) {
    number = Math.abs(number);
    display.innerHTML = number;
  } else {
    number = -Math.abs(number);
    display.innerHTML = number;
  }
};

buttonSymbol.addEventListener("click", changeValue);

// equals button

const makeAnswer = () => {
  display2.innerHTML = "";
  if (symbol === "X") {
    number *= Number(display.innerHTML);
    display.innerHTML = number;
  } else if (symbol === "+") {
    number += Number(display.innerHTML);
    display.innerHTML = number;
  } else if (symbol === "-") {
    number -= Number(display.innerHTML);
    display.innerHTML = number;
  } else if (symbol === "÷") {
    number /= Number(display.innerHTML);
    display.innerHTML = number;
  } else {
    display.innerHTML = "ERROR";
  }
};
buttonEquals.addEventListener("click", makeAnswer);
