const Base = document.querySelector("#base")
const  perpendicular = document.querySelector("#perpendicular")
const CheckResultBtn = document.querySelector("#Check-Result-btn")
const errorMessage = document.querySelector(".error-message")
const Result = document.querySelector('.hypotenuse-result')

CheckResultBtn.addEventListener("click" , calculateHypotenuse)

function calculateHypotenuse(){
    let baseValue = Number(Base.value)
    let perpendicularValue = Number(perpendicular.value)
    let sumOfBP = Math.pow(baseValue,2) + Math.pow(perpendicularValue,2)
    let hypotenuseValue = Math.sqrt(sumOfBP).toFixed(2)

    if(baseValue==""||perpendicularValue==""){
        Result.style.display = "none"
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "<h1>Please enter valid input</h1>"
    } else{
        Result.style.display = "block"
        errorMessage.style.display = "none"
        Result.innerHTML = `<h1> Hey!! Value of hypotenuse is ${hypotenuseValue}`
    }
}