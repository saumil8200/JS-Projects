// const baseURL = 'https://source.unsplash.com/random';

// const body = document.querySelector('body');
// const button = document.querySelector('button');

// button.addEventListener('click', function () {
//   console.log(baseURL);
//   body.style.backgroundImage = `url(${baseURL})`;
//   location.reload(true);
// });

const baseURL = 'https://source.unsplash.com/random/'; // Use '/random' to get a random image each time

const body = document.querySelector('body');
const button = document.querySelector('button');

// Function to set the background image from local storage
function setBackgroundFromStorage() {
  const storedImage = localStorage.getItem('backgroundImage');
  if (storedImage) {
    body.style.backgroundImage = `url(${storedImage})`;
  }
}

// Function to set the background image and update local storage
function setBackgroundAndRefresh() {
  body.style.backgroundImage = `url(${baseURL})`;

  // Store the current image URL in local storage
  localStorage.setItem('backgroundImage', baseURL);

  // Auto-refresh the page
  location.reload(true);
}

// Initial background setup when the page loads
setBackgroundFromStorage();

// Event listener for the button click
button.addEventListener('click', setBackgroundAndRefresh);