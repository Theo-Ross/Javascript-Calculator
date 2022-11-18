

const buttons = Array.from(document.querySelectorAll(".numbers"))

const operators = Array.from(document.querySelectorAll(".operators"))

const buttonC = document.querySelector(".operator__grey-C");
const buttonSymbol = document.querySelector(".operator__grey-symbol");
const buttonPercent = document.querySelector(".operator__grey-percent");




const buttonDivide = document.querySelector(".operator__divide");
const buttonX = document.querySelector(".operator__x");
const buttonMinus = document.querySelector(".operator__minus");
const buttonPlus = document.querySelector(".operator__plus");
const buttonEquals = document.querySelector(".operator__equals");

let num1 = " ";

let num2 = " ";

let symbol = " ";


//element for displaying the output of my functions

let display = document.querySelector(".button__input");




//pulls all buttons and stores them in an array




//gives every num a click event to add the number to the display

buttons.forEach((event) => {
  event.addEventListener("click", () => {
   return display.innerHTML += event.innerHTML;
  })
  num1 = Number(display.innerHTML);
})


//function and click events to return the add/take/divide/times of a sum

operators.forEach((event) => {
  event.addEventListener("click", () => {
       return display.innerHTML += event.innerHTML;
  })
  symbol = display.innerHTML;
})


//after the zero value  from the symbol in the string takes an input (number)

  


//function and click event to show the current value as a percentage




//function and click event to clear the output and reset number value to 0

buttonC.addEventListener("click", () => {
  display.innerHTML = " ";
});


//function and click event to make numbers negative




//equals button will perform all of the tasks that the symbols require using if statements.


buttonEquals.addEventListener("click", () => {

  if (symbol === "%") {
    answer = (num1/100);
    answer = display.innerHTML;
  }


    
    else if (symbol === "+") {
    answer = num1 + Number(display.innerHTML);
    display.innerHTML = answer;
  }

  else if (
    display.innerhtml = "who knows?"
  )

})
