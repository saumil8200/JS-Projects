// const url = 'https://api.thecatapi.com/v1/images/search';

// const btn = document.querySelector('.btn');

// window.addEventListener('load',async function () {
//     const response = await fetch(url);
//     const cats = await response.json();
//     console.log(cats[0].url);

//     const catImg = document.querySelector('.catImg');
//     catImg.src = cats[0].url;
// });

// btn.addEventListener('click', async function () {
//     const response = await fetch(url);
//     const cats = await response.json();
//     console.log(cats[0].url);

//     const catImg = document.querySelector('.catImg');
//     catImg.src = cats[0].url;
// });


const url = 'https://api.thecatapi.com/v1/images/search';
const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

window.addEventListener('load', async function () {
    await fetchAndDisplayCatImage();
});

btn.addEventListener('click', async function () {
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

        container.appendChild(catImg);
    } catch (error) {
        console.error('Error:', error);
    }
}
