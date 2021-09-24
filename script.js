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
    this.previousCalc = ""
    this.currentCalc = ""
    this.operation = undefined
}

// delete function deletes and removes the elements from the calculator screen.//
delete(){
    this.currentCalc = this.currentCalc.slice(0, this.currentCalc.length-1)
 
}

// placeNumber function places the selected number input by the user into the calculator screen.//
placeNumber(number){
    if(number === "." && this.currentCalc.includes(".")) return 
     this.currentCalc = this.currentCalc.toString()+ number.toString() 
     // working on the below code.//
}

// selectedOperation function handles the user input of the mathematical operation selected on the calc.// 
selectedOperation(operation){
    if(this.currentCalc === "") return
    if(this.previousCalc !== ""){
        this.compute()
    }
    this.operation = operation
    this.previousCalc = this.currentCalc
    this.currentCalc = ""
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





    // return stripCommas = this.currentCalc.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')

// getDisplayElement(number){
//     // const stringNumber = number.toString()
//     // // const integerDigits = parseFloat(stringNumber.split('.')[0])
//     // // const decimalDigits = stringNumber.split('.')[1]
//     // // let integerDisplay
//     // // if (isNaN(integerDigits)) {
//     // //   integerDisplay = ''
//     // // } else {
//     // //   integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
//     // // }
//     // // if (decimalDigits != null) {
//     // //   return `${integerDisplay}.${decimalDigits}`
//     // // } else {
//     // //   return integerDisplay
//     // // }
// }

getDisplayElement(calcStringNumber){ 
     let calcStringNumber = number.toString();
     let calcParts = [];
    // checks for decimal & only allow (1) decimal. stops any other entered.//
    if(calcStringNumber === "." && this.currentCalc.includes(".")){
        return
    }
    // asign calcStringNumber with split("")[method] @ (".");
    calcParts = calcStringNumber.split(".");
    // get the parts of the calcStringNumber.split(".") which would be an array of (2) parts.//
    calcParts[0];  // this calcParts[0] holds everything before the (".")decimal place.//
    calcParts[1];  // this calcParts[1] holds everything after the (".")decimal place.//
    // now have to get everything from calcParts[0] the tring array of the calcParts.//
    Array.from(calcParts[0]);
    // this step remove all commas from calcParts[0].//
    calcParts[0] = calcParts[0].split(",").join("");
    // declare variable i to take value of calcParts[0].length-3.//
     let i = calcParts[0].length-3;
    // this step need a loop to travel through calcParts[0] array 
    
    // create variable to hold the calculator number into a string.//
    //  let calsStringNumber = number.toString();

    // this.currentCalc = this.currentCalc.
    return calcStringNumber
}

//
updateDisplay(){
 this.currentCalcTextElement.innerText = this.getDisplayElement(this.currentCalc)
//  this.previousCalcTextElement = this.previousCalc
 if(this.operation != null){
     this.previousCalcTextElement.innerText = `${this.getDisplayElement(this.previousCalc)} ${this.operation}`
 } else{
     this.previousCalcTextElement.innerText = ""
 }
}
}


// below gets the data class appended to the div classes. //
const numbersButtons = document.querySelectorAll("[data-numbers]");
const operationsButtons = document.querySelectorAll("[data-operations]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.getElementById("data-all-clear");
const equalsButton = document.querySelector("[data-equals]");
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
    calculator.allClear()
    calculator.updateDisplay()
})

deleteButton.addEventListener("click", button => {
    calculator.delete()
    calculator.updateDisplay()
})