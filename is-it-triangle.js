const  firstAngle = document.querySelector("#first-Angle")
const  secondAngle = document.querySelector("#second-Angle")
const  thirdAngle = document.querySelector("#third-Angle")
const CheckResult = document.querySelector("#Check-Result")
const errorMessage = document.querySelector(".error-message")
const triangleResult = document.querySelector('.triangle-result')

CheckResult.addEventListener("click" , checkResult)


function checkResult(){
    let firstAngleValue = Number(firstAngle.value)
    let secondAngleValue= Number(secondAngle.value)
    let thirdAngleValue= Number(thirdAngle.value)
    let triangle = firstAngleValue + secondAngleValue + thirdAngleValue

    if(firstAngleValue==""||secondAngleValue==""|| thirdAngleValue==""){
        errorMessage.style.display = "block"
        triangleResult.style.display ="none"
        errorMessage.innerHTML = "<h1>Please enter valid input</h1>"

    } else if (triangle===180){
        errorMessage.style.display = "none"
        triangleResult.style.display ="block"
        triangleResult.style.backgroundColor="green"
        triangleResult.innerHTML = "<h1>Yay!!! You got right it is triangle</h1>"
    } else{
        errorMessage.style.display = "none"
        triangleResult.style.display ="block"
        triangleResult.style.backgroundColor="red"
        triangleResult.innerHTML = "<h1>Oops!!! that is not triangle</h1>"
    }
}