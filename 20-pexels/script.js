const apikey="";
const input=document.querySelector("input");
const searchBtn=document.querySelector(".search_btn");
const showmoreBtn=document.querySelector(".showmore");

let pageNum = 1;
let searchText = '';
let search = false;

input.addEventListener('input', function(event) {
    event.preventDefault();
    searchText = event.target.value;
    // console.log(searchText);
})

searchBtn.addEventListener('click', function() {
    if(input.value==="")
    {
        alert("Please enter the some text")
        return;
    }
    clearGallery()
    search=true;
    searchPhotos(searchText, pageNum);
})

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        clearGallery()
        search=true;
        searchPhotos(searchText, pageNum);
    }
});

showmoreBtn.addEventListener('click', function() {
    if(!search) {
        pageNum = pageNum + 1;
        curatedPhotos([pageNum])
    }
    else {
        if(searchText.value==="")
        return;
        pageNum = pageNum + 1;
        searchPhotos(searchText,pageNum);
    }
})

async function searchPhotos(searchText, pageNum) {
    const data=await fetch(`https://api.pexels.com/v1/search?query=${searchText}&page=${pageNum}`, 
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: apikey,
        },
    });
    const response=await data.json();
    console.log(response);

    displayImages(response);
}

async function curatedPhotos(pageNum){
    const data=await fetch(`https://api.pexels.com/v1/curated?page=${pageNum}`, 
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: apikey,
        },
    });
    const response=await data.json(); 
    console.log(response);

    displayImages(response); 
}

function clearGallery(){
    document.querySelector(".display_images").innerHTML="";
    page_num=1;
}

// function displayImages(response) {
//     // response.photos.forEach((image) => {
//     //     const photo=document.createElement("div");
//     //     photo.innerHTML=`<img src=${image.src.large}>`;
//     //     document.querySelector(".display_images").appendChild(photo);
//     // });
//     const displayContainer = document.querySelector(".display_images");

//     response.photos.forEach((image) => {
//         const photo = document.createElement("div");
//         const imageElement = document.createElement("img");
//         const imageDownloadBtn = document.createElement("button");

//         imageElement.src = image.src.large;
//         imageDownloadBtn.textContent = 'DOWNLOAD'
//         imageDownloadBtn.addEventListener('click', () => downloadImage(image.src.original, 'image.jpg'));

//         photo.appendChild(imageElement);
//         photo.appendChild(imageDownloadBtn);
//         displayContainer.appendChild(photo);
//     });
// }

function displayImages(response) {
    const displayContainer = document.querySelector(".display_images");

    // Shuffle the array of photos randomly
    const shuffledPhotos = shuffleArray(response.photos);

    shuffledPhotos.forEach((image) => {
        const photo = document.createElement("div");
        const imageElement = document.createElement("img");
        const imageDownloadBtn = document.createElement("button");

        imageElement.src = image.src.large;
        imageDownloadBtn.textContent = 'DOWNLOAD'
        imageDownloadBtn.classList.add('imageDownloadBtn')
        imageDownloadBtn.addEventListener('click', () => downloadImage(image.src.original, 'image.jpg'));

        photo.appendChild(imageElement);
        photo.appendChild(imageDownloadBtn);
        displayContainer.appendChild(photo);
    });
}

function shuffleArray(array) {
    // Create a copy of the array to avoid modifying the original array
    const shuffledArray = array.slice();
  
    // Fisher-Yates (Knuth) shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    return shuffledArray;
}


function downloadImage(url, filename) {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const a = document.createElement('a');
            const url = window.URL.createObjectURL(blob);

            a.href = url;
            a.download = filename;

            // Set the download attribute and simulate a click event
            a.setAttribute('download', filename);
            a.style.display = 'none'; // Ensure the element is not visible

            document.body.appendChild(a);
            a.click();

            window.URL.revokeObjectURL(url); // Release the object URL
            document.body.removeChild(a);
        })
        .catch(error => console.error('Error fetching image:', error));
}

// Use Intersection Observer for infinite scrolling
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        if (search) {
            if (searchText === "") return;
            pageNum++;
            searchPhotos(searchText, pageNum);
        } else {
            pageNum++;
            curatedPhotos(pageNum);
        }
    }
}, { threshold: 1.0 });

observer.observe(document.querySelector('.showmore'));

curatedPhotos(pageNum)