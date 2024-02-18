// Function to fetch data from the API
async function fetchData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to create a card for each country
function createCountryCard(country) {
    const card = document.createElement("div");
    card.classList.add("card");
    
    let currenciesHTML = "";
    let currenciesSymbol = "";
    if (country.currencies) {
        currenciesHTML = Object.values(country.currencies)
            .map(currency => currency.name)
            .join(", ");
        currenciesSymbol = Object.values(country.currencies)
            .map(currency => currency.symbol)
            .join(", ");
    } else {
        currenciesHTML = "N/A"; // Display "N/A" if currency data is not available
        currenciesSymbol = "N/A"; // Display "N/A" if currency data is not available
    }

    let countryLanguages = "";
    if (country.languages) {
        countryLanguages = Object.values(country.languages)
    }
    else {
        countryLanguages = "N/A";
    }

    let countryBorders = ""
    if (country.borders) {
        countryBorders = Object.values(country.borders)
    }
    else {
        countryBorders = "N/A"
    }


    card.innerHTML = `
        <div class="card-sub">
            <div class="card-sub-img">
                <img src="${country.flags.png}">
            </div>
            <div>
                <div>
                    <h3>${country.name.common} <sup>${country.flag}</sup> : </h3>
                    <b>${country.flags.alt}</b>
                </div>
                <p>Capital: ${country.capital}</p>
                <p>Population: ${country.population.toLocaleString()}</p>
                <p>Region: ${country.region}</p>
                <p>Currency: ${currenciesHTML} | ${currenciesSymbol}</p>
                <p>Languages: ${countryLanguages}</p>
                <p>Car Driver Seat: ${country.car.side}</p>
                <p>Borders: ${countryBorders}</p>
                <p>
                    Maps URL: 
                    <a href="${country.maps.googleMaps}" target="_blank">${country.maps.googleMaps}</a> 
                </p>
            </div>
        </div>
    `;

    return card;
}

// Function to display country cards
async function displayCountryCards() {
    const countries = await fetchData();

    if (Array.isArray(countries)) {

        // Sort countries by name
        countries.sort((a, b) => {
            const nameA = a.name.common.toUpperCase();
            const nameB = b.name.common.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });

        const countryCardsContainer = document.getElementById("country-cards");
        countries.forEach(country => {
            const card = createCountryCard(country);
            countryCardsContainer.appendChild(card);
        });
    }
}

// Call the function to display country cards
displayCountryCards();

// Function to filter and display country cards based on the global search input
function globalSearch(searchTerm) {
    const countryCardsContainer = document.getElementById("country-cards");
    const cards = countryCardsContainer.getElementsByClassName("card");

    for (const card of cards) {
        const countryName = card.querySelector("h3").textContent.toLowerCase();
        const capital = card.querySelector("p:nth-of-type(1)").textContent.toLowerCase();
        const region = card.querySelector("p:nth-of-type(3)").textContent.toLowerCase();
        const currency = card.querySelector("p:nth-of-type(4)").textContent.toLowerCase();
        const language = card.querySelector("p:nth-of-type(5)").textContent.toLowerCase();

        if (
            countryName.includes(searchTerm.toLowerCase()) ||
            capital.includes(searchTerm.toLowerCase()) ||
            region.includes(searchTerm.toLowerCase()) ||
            currency.includes(searchTerm.toLowerCase()) ||
            language.includes(searchTerm.toLowerCase())
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}

// Add an event listener to the global search input
const globalSearchInput = document.getElementById("global-search");
globalSearchInput.addEventListener("input", function () {
    const searchTerm = globalSearchInput.value;
    globalSearch(searchTerm);
});