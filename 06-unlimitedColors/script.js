const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
let startInterval;
let index = 0;

startBtn.addEventListener('click', () => {
  startInterval = setInterval(function () {
    console.log('START');
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  console.log('STOP');
  clearInterval(startInterval);
});
