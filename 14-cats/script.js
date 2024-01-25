const url = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('.btn');

window.addEventListener('load',async function () {
    const response = await fetch(url);
    const cats = await response.json();
    console.log(cats[0].url);

    const catImg = document.querySelector('.catImg');
    catImg.src = cats[0].url;
});

btn.addEventListener('click', async function () {
    const response = await fetch(url);
    const cats = await response.json();
    console.log(cats[0].url);

    const catImg = document.querySelector('.catImg');
    catImg.src = cats[0].url;
});
