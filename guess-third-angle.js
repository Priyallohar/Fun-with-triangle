const fisrtAngle = document.querySelector(".first-angle");
const secondAngle = document.querySelector(".second-angle");
const thirdAngle = document.querySelector("#third-angle");
const CheckResultBtn = document.querySelector("#Check-Result-btn");
const errorMessage = document.querySelector(".guess-error-message");
const Result = document.querySelector(".guess-result");
const generateAngle = document.querySelector(".generate-angle");

function angleGenerator() {
  let angleOne = Math.floor(Math.random() * 90 + 0);
  let angleTwo = Math.floor(Math.random() * 80 + 0);
  fisrtAngle.style.display = "block";
  secondAngle.style.display = "block";
  fisrtAngle.innerText = `${angleOne}`;
  secondAngle.innerText = `${angleTwo}`;
}

generateAngle.addEventListener("click", angleGenerator);

CheckResultBtn.addEventListener("click", function () {
  let angleOneValue = parseInt(fisrtAngle.innerText)
  
  let angleTwoValue = parseInt(secondAngle.innerText)
  let thirdAngleValue = Number(thirdAngle.value);

  if (thirdAngleValue == "" || isNaN(thirdAngleValue)||angleTwoValue==""||angleTwoValue=="") {
    Result.style.display = "none";
    errorMessage.style.display = "block";
    errorMessage.innerText = "Please enter a valid input";
  } else {
    errorMessage.style.display = "none";
    checkAngleAnswer(angleOneValue, angleTwoValue, thirdAngleValue);
  }
});

function checkAngleAnswer(angleOneValue, angleTwoValue, angleThirdValue) {
  let sumOfAngle = angleOneValue + angleTwoValue + angleThirdValue;

  if (sumOfAngle === 180) {
    Result.style.display = "block";
    errorMessage.style.display = "none";
    Result.style.backgroundColor="green"
    Result.innerText= "Hey!! you got it correct";
  } else {
    Result.style.display = "block";
    errorMessage.style.display = "none";
    Result.style.backgroundColor="red"
    Result.innerText = " Oops!! that is not the right answer";
  }
}
