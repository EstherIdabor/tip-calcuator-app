const billAmount = document.querySelector("#bill")
const chooseBtn = document.querySelector(".choice-btn")
const choiceTab = document.querySelector(".choice")
const tipInput = document.querySelector('.choose-input')
const numPeople = document.querySelector('#people')
const tipAmount = document.querySelector('#tip-amount')
const totalAmount = document.querySelector('#total-amount')
const resetButton = document.querySelector('#reset')
let billValue
let choiceValue
let numPeopleValue
let tipInputValue

billAmount.addEventListener('keyup', (e) => {
    // console.log(billAmount.value)
    billValue = Number(billAmount.value.trim())
    // console.log(billValue)
    // console.log(typeof(billValue))
})

numPeople.addEventListener('keyup', (e) => {
    numPeopleValue = Number(numPeople.value.trim())
    if(numPeople.classList.contains("error")){
        numPeople.classList.remove("error")
    }
    // console.log(numPeopleValue)
    // console.log(typeof(numPeopleValue))
})

chooseBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains('choice')){
       choiceValue = Number(e.target.innerHTML.slice(0, -1))

    //    console.log(typeof(choiceValue))
    //    console.log(billValue)
    //    console.log(numPeopleValue)

    //    Check to see if the input for the number of persons paying the bill is not empty if it isnt 
    //    we call the calculateBill(), if  is we throw an error message and attach the error class
    if(numPeopleValue){
        // console.log("not empty")
        calculateBill()
    }
    else{
        numPeople.classList.add("error")
    }

    //    calculateBill()
    }
})

tipInput.addEventListener('oninput', (e) => {
    tipInputValue = Number(tipInput.value.trim())
    if(!choiceValue && numPeopleValue){
        choiceValue = tipInputValue
        calculateBill()
    }

    // console.log(tipInputValue)
    
})

// 
 function calculateBill() {
    // console.log(choiceValue)
    // console.log(billAmount)
    const tip = choiceValue/100 * billValue
    console.log(tip)
    const tipPerPerson = Number(tip)/numPeopleValue
    console.log(tipPerPerson)

    tipAmount.innerText= `$${tipPerPerson}`

    const totalPerPerson = (billValue + Number(tip))/numPeopleValue
    totalAmount.innerText = `$${totalPerPerson}`
}

resetButton.addEventListener('click', (e) => {
    billAmount.value = ''
    choiceValue = 0
    numPeople.value = ''
    tipInput.value = ''
    tipAmount.innerText= `$0.00`
    totalAmount.innerText= `$0.00`
})

