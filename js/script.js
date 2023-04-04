let numOne = "";
let numTwo = "";
let operator = "";
let resultBox = document.getElementById("calc")

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");
const button0 = document.getElementById("button10");
const acButton = document.getElementById("ac");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const equalsButton = document.getElementById("equals");

button1.addEventListener("click", () => {
  if (!operator) {
    numOne += "1";
    resultBox.innerText = numOne;
  } else {
    numTwo += "1";
    resultBox.innerText = numOne + operator + numTwo;
  }
});

button2.addEventListener("click", () => {
  if (!operator) {
    numOne += "2";
    resultBox.innerText = numOne;
  } else {
    numTwo += "2";
    resultBox.innerText = numOne + operator + numTwo;
  }
});

button3.addEventListener("click", () => {
  if (!operator) {
    numOne += "3";
    resultBox.innerText = numOne;
  } else {
    numTwo += "3";
    resultBox.innerText = numOne + operator + numTwo;
  }
});

button4.addEventListener("click", () => {
  if (!operator) {
    numOne += "4";
    resultBox.innerText = numOne;
  } else {
    numTwo += "4";
    resultBox.innerText = numOne + operator + numTwo;
  }
});

button5.addEventListener("click", () => {
  if (!operator) {
    numOne += "5";
    resultBox.innerText = numOne;
  } else {
    numTwo += "5";
    resultBox.innerText = numOne + operator + numTwo;
  }
});

button6.addEventListener("click", () => {
  if (!operator) {
    numOne += "6";
    resultBox.innerText = numOne;
  } else {
    numTwo += "6";
    resultBox.innerText = numOne + operator + numTwo;
  }
});

button7.addEventListener("click", () => {
  if (!operator) {
    numOne += "7";
    resultBox.innerText = numOne;
  } else {
    numTwo += "7";
    resultBox.innerText = numOne + operator + numTwo;
  }
});

button8.addEventListener("click", () => {
    if (!operator) {
      numOne += "8";
      resultBox.innerText = numOne;
    } else {
      numTwo += "8";
      resultBox.innerText = numOne + operator + numTwo;
    }
  });

button9.addEventListener("click", () => {
    if (!operator) {
      numOne += "9";
      resultBox.innerText = numOne;
    } else {
      numTwo += "9";
      resultBox.innerText = numOne + operator + numTwo;
    }
  });

button0.addEventListener("click", () => {
    if (!operator) {
      numOne += "0";
      resultBox.innerText = numOne;
    } else {
      numTwo += "0";
      resultBox.innerText = numOne + operator + numTwo;
    }
});
      acButton.addEventListener("click", () => {
        numOne = "";
        numTwo = "";
        operator = "";
        resultBox.innerText = "";
      });
      
      plusButton.addEventListener("click", () => {
        if (numOne && !operator) {
          operator = "+";
          resultBox.innerText = numOne + operator;
        }
      });
      
      minusButton.addEventListener("click", () => {
        if (numOne && !operator) {
          operator = "-";
          resultBox.innerText = numOne + operator;
        }
      });
      
      multiplyButton.addEventListener("click", () => {
        if (numOne && !operator) {
          operator = "*";
          resultBox.innerText = numOne + operator;
        }
      });
      
      divideButton.addEventListener("click", () => {
        if (numOne && !operator) {
          operator = "/";
          resultBox.innerText = numOne + operator;
        }
      });
      
      equalsButton.addEventListener("click", () => {
        if (numOne && numTwo && operator) {
          let result;
          switch (operator) {
            case "+":
              result = Number(numOne) + Number(numTwo);
              break;
            case "-":
              result = Number(numOne) - Number(numTwo);
              break;
            case "*":
              result = Number(numOne) * Number(numTwo);
              break;
            case "/":
              result = Number(numOne) / Number(numTwo);
              break;
          }
          numOne = result.toString();
          numTwo = "";
          operator = "";
          resultBox.innerText = result;
        }
        });      