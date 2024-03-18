const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results");

searchButton.addEventListener("click", function () {
    const query = searchInput.value;

        if (query) {
            // const apiUrl = `https://saavn.dev/api/search?query=${query}`;
            const apiUrl = `https://saavn.dev/api/search/songs?query=${query}`;

            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
})