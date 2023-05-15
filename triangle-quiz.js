const triangleQuiz = document.getElementById('triangleQuiz');
const result = document.getElementById('result');
const question = document.querySelectorAll('.question');
const submitBtn = document.querySelector('.submit-btn');

const correctAnswers = ['3', '2', '0', '15', '62.35'];

function calculateScore(event) {
  event.preventDefault(); 

  const formResults = new FormData(triangleQuiz);
  let score = 0,
    index = 0;

  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score += 1;
    }
    index += 1;
  }
  result.style.display = "block"
  result.innerText = 'The score is ' + score;
}

submitBtn.addEventListener('click', calculateScore);
