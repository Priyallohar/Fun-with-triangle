const Base = document.querySelector("#base")
const Height = document.querySelector("#height")
const triangleArea = document.querySelector(".triangle-area")
const CheckResultBtn = document.querySelector("#Check-Result")
const errorMessage= document.querySelector(".error-message")


CheckResultBtn.addEventListener("click",areaCalculate)

function areaCalculate(){
    let baseValue = Number(Base.value)
    let heightValue = Number(Height.value)
    let areaOftriangle = (baseValue*heightValue)/2

    if(baseValue==""||heightValue==""){
        triangleArea.style.display = "none"
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "<h1>Please enter valid input</h1>"
    } else {
        errorMessage.style.display = "none"
        triangleArea.style.display = "block"
        triangleArea.innerHTML = `<h1> Hey!! Area of the triangle is ${areaOftriangle}`
    }
}