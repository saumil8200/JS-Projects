const activityBtns = {
    education: document.querySelector(".education"),
    recreational: document.querySelector(".recreational"),
    social: document.querySelector(".social"),
    diy: document.querySelector(".diy"),
    charity: document.querySelector(".charity"),
    cooking: document.querySelector(".cooking"),
    relaxation: document.querySelector(".relaxation"),
    music: document.querySelector(".music"),
    busywork: document.querySelector(".busywork"),
  };
  const randomBtn = document.querySelector(".random")
  
  function fetchActivity(type) {
    const activity = document.querySelector(".activity");
    const url = `http://www.boredapi.com/api/activity?type=${type}`;
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((boredacti) => {
        console.log(boredacti);
        activity.innerHTML = `" ` + boredacti.activity + ` "`;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  randomBtn.addEventListener("click", async function(){
    const activity = document.querySelector(".activity")
   
    try {
        const response = await fetch("http://www.boredapi.com/api/activity/");
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const boredacti = await response.json();
        console.log(boredacti);
        activity.innerHTML = `" ` + boredacti.activity + ` "`;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
});
  
  // Add event listeners for each button
  for (const key in activityBtns) {
    if (activityBtns.hasOwnProperty(key)) {
      activityBtns[key].addEventListener("click", () => {
        fetchActivity(key);
      });
    }
  }
  
