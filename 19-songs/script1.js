document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const results = document.getElementById("results");

    searchButton.addEventListener("click", function () {
        const query = searchInput.value;

        if (query) {
            const apiUrl = `https://saavn.dev/search/songs?query=${query}`;
            
            fetch(apiUrl)
                .then((response) => response.json())
                .then((data) => {
                    displayResults(data.data.results);
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                });
        }
    });

    function displayResults(songs) {
        results.innerHTML = "";

        if (songs && songs.length > 0) {
            songs.forEach((song) => {
                const audioElement = document.createElement("audio");
                audioElement.src = song.downloadUrl[4].link;

                const songElement = document.createElement("div");
                songElement.className = "song";

                const songInfo = document.createElement("div");
                songInfo.className = "songs_display";
                songInfo.innerHTML = `
                    <img src="${song.image[1].link}" alt="${song.title}" />
                    <div>
                        <strong>${song.name}</strong> - ${song.primaryArtists}<br>
                        <span class="timeleft"></span>
                        <a href="${song.downloadUrl[4].link}" target="_blank">
                            <button>Download</button>
                        </a>
                    </div>
                `;

                const audioControls = document.createElement("div");
                audioControls.className = "audio-controls";
                audioControls.innerHTML = `
                    <button class="play">Play</button>
                    <button class="pause">Pause</button>
                `;

                const playButton = audioControls.querySelector(".play");
                const pauseButton = audioControls.querySelector(".pause");

                playButton.addEventListener("click", function () {
                    audioElement.play();
                });

                pauseButton.addEventListener("click", function () {
                    audioElement.pause();
                });

                audioElement.addEventListener("timeupdate", function() {
                    const duration = Math.floor(audioElement.duration);
                    const currentTime = Math.floor(audioElement.currentTime);
                    const timeLeft = duration - currentTime;
                    const minutes = Math.floor(timeLeft / 60);
                    const seconds = timeLeft % 60;
                    songInfo.querySelector(".timeleft").textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
                });

                songElement.appendChild(songInfo);
                songElement.appendChild(audioControls);
                results.appendChild(songElement);
            });
        } else {
            results.textContent = "No results found.";
        }
    }
});
