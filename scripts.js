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
    billValue = Number(billAmount.value.trim())
})

numPeople.addEventListener('keyup', (e) => {
    numPeopleValue = Number(numPeople.value.trim())
    if(numPeople.classList.contains("error")){
        numPeople.classList.remove("error")
    }
})

chooseBtn.addEventListener('click', (e) => {
    if(e.target.classList.contains('choice')){
       choiceValue = Number(e.target.innerHTML.slice(0, -1))

    //    Check to see if the input for the number of persons paying the bill is not empty if it isnt 
    //    we call the calculateBill(), if  it is we throw an error message and attach the error class
    if(numPeopleValue){
        calculateBill()
    }
    else{
        numPeople.classList.add("error")
    }
    }
})

tipInput.addEventListener('change', (e) => {
    tipInputValue = Number(tipInput.value.trim())
    if(!choiceValue && numPeopleValue){
        choiceValue = tipInputValue
        calculateBill()
    }
    
})

// 
 function calculateBill() {
    let tip = choiceValue/100 * billValue
    let tipPerPerson = Number(tip)/numPeopleValue
    tipPerPerson = tipPerPerson.toFixed(2)

    tipAmount.innerText= `$${tipPerPerson}`

    let totalPerPerson = (billValue + Number(tip))/numPeopleValue
    totalPerPerson = totalPerPerson.toFixed(2)
    
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

