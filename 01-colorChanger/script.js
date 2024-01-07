const colors = ['grey', 'red', 'blue', 'yellow', 'purple', 'orange', 'green']; // Add more colors as needed
const buttonsContainer = document.getElementById('colorButtons');
const body = document.querySelector('body');

colors.forEach(function (color) {
  const button = document.createElement('span');
  button.classList.add('button');
  button.id = color;
  button.style.background = color;
  buttonsContainer.appendChild(button);

  button.addEventListener('click', function () {
    body.id = color;
  });

  const styleRule = `#${color} { background: ${color} }`;
  const styleElement = document.createElement('style');
  styleElement.textContent = styleRule;
  document.head.appendChild(styleElement);
});
