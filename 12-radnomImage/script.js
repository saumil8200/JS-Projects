const baseURL = 'https://source.unsplash.com/all/300x300';
function getRandomImageURL() {
  const randomNum = Math.floor(Math.random() * 1000) + 1;
  return `${baseURL}?random=${randomNum}`;
}

const button = document.getElementById('generateButton');
const contentDiv = document.querySelector('.content');

button.addEventListener('click', function addRandomImage() {
  const img = document.createElement('img');
  img.src = getRandomImageURL();
  contentDiv.appendChild(img);
});