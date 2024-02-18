const btn = document.querySelector('.shuffle');
const shuffleValue = document.querySelector('.shuffle-values')
const result = document.querySelector('.result')

btn.addEventListener('click', function() {
  const inputString = document.querySelector('.input-string').value.trim();

  if (inputString === '') {
    alert('Please enter a string');
    return;
  }

  let arr = [];

  for (let i = 0; i < inputString.length; i++) {
    arr.push(inputString[i]);
  }

  shuffleArray(arr);

  // Convert the shuffled array back to a string
  const shuffledString = arr.join('');

  shuffleValue.innerHTML = shuffledString;

  if (shuffledString === inputString) {
    result.textContent = "Matched"
  } else {
    result.textContent = "Not Matched"
  }
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
