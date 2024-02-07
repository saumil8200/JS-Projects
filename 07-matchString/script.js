const actualValue = document.querySelector('.actual-string').textContent;
console.log(actualValue);
const btn = document.querySelector('.shuffle');
const shuffleValue = document.querySelector('.shuffle-values')
const result = document.querySelector('.result')

let arr = [];

for (let i = 0; i < actualValue.length; i++) {
  arr.push(actualValue[i]);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

btn.addEventListener('click', function() {
  shuffleArray(arr);

  // Convert the shuffled array back to a string
  const shuffledString = arr.join('');

  shuffleValue.innerHTML = shuffledString;
  console.log('Shuffled String:', shuffledString);

  if (shuffledString === actualValue) {
    result.textContent = "Matched"
  } else {
    result.textContent = "Not Matched"
  }

  // if (shuffledString === actualValue) {
  //   alert('Matched!');
  // } else {
  //   alert('Not matched!');
  // }
});
