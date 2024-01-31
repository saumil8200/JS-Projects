const url = 'https://api.thecatapi.com/v1/images/search';
const button = document.getElementById('generateButton');
const contentDiv = document.querySelector('.content');

window.addEventListener('load', async function () {
    await fetchAndDisplayCatImage();
});

button.addEventListener('click', async function () {
    await fetchAndDisplayCatImage();
});

async function fetchAndDisplayCatImage() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch cat image');
        }
        const cats = await response.json();
        console.log(cats[0].url);

        const catImg = document.createElement('img');
        catImg.src = cats[0].url;
        catImg.classList.add('catImg');

        contentDiv.appendChild(catImg);
    } catch (error) {
        console.error('Error:', error);
    }
}
