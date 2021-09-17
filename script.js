// below constructor handles the fucntion of the previous-calc and the current-calc//
// these set the elements within the calculator class. //

class Calculator{
    constructor(previousCalcTextElement, currentCalcTextElement){
        this.previousCalcTextElement = previousCalcTextElement
        this.currentCalcTextElement = currentCalcTextElement
        this.allClear()
    }

// clear function clears the elements from the calculator taking the current, previous & operation and clearing them.//
allClear(){
    this.currentCalc = ""
    this.previousCalc = ""
    this.operation = undefined
}

// delete function deletes and removes the elements from the calculator screen.//
delete(){

}

// placeNumber function places the selected number input by the user into the calculator screen.//
placeNumber(number){
    if(number === "." && this.currentCalc.includes(".")) return
   this.currentCalc = this.currentCalc.toString() + number.toString()
}

// selectedOperation function handles the user input of the mathematical operation selected on the calc.// 
selectedOperation(operation){
    if(this.currentCalc === " ") return
    if(this.previousCalc !== " "){
        this.compute()
    }
    this.operation = operation
    this.previousCalc = this.currentCalc
    this.currentCalc = " "
}

// compute function handles the computation of the numbers input by the user.//
compute(){
  let computation
  const prev = parseFloat(this.previousCalc)
  const current = parseFloat(this.currentCalc)
  if(isNaN(prev) || isNaN(current)) return
  switch (this.operation){
      case "+":
          computation = prev + current
       break;
      case "-":
          computation = prev - current
        break;
      case "x":
           computation = prev * current
        break;
      case "÷":
          computation = prev / current
        break;
     default: return
  } 
  this.currentCalc = computation
  this.operation = undefined
  this.previousCalc = ""
}

//
updateDisplay(){
 this.currentCalcTextElement.innerText = this.currentCalc
 this.previousCalcTextElement.innerText = this.previousCalc
}

}




// below gets the data class appended to the div classes. //
const numbersButtons = document.querySelectorAll("[data-numbers]");
const operationsButtons = document.querySelectorAll("[data-operations]");
const deleteButton = document.getElementById("data-delete");
const clearButton = document.getElementById("data-all-clear");
const equalsButton = document.querySelector("[data-equas]");
const previousCalcTextElement = document.querySelector("[data-previous-calc]");
const currentCalcTextElement = document.querySelector("[data-current-calc]");


// create a new calculator class and them pass everything from the constructor into the calculator.//
const calculator = new Calculator(previousCalcTextElement,currentCalcTextElement)


numbersButtons.forEach(button => {
    button.addEventListener("click", () => {
         calculator.placeNumber(button.innerText)
         calculator.updateDisplay()
    })
})

operationsButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.selectedOperation(button.innerText)
        calculator.updateDisplay()
    } )
})


equalsButton.addEventListener("click", button => {
    calculator.compute()
    calculator.updateDisplay()
})

clearButton.addEventListener("click", button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener("click", button => {
    calculator.allClear()
    calculator.updateDisplay()
})