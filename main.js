const apiKey = "4d8fb5b93d4af21d66a2948710284366";

async function getWeather() {
    const city = document.querySelector("#cityInput").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.cod === 200) {
            const weatherCard = document.createElement("div");
            weatherCard.className = "weather-card";
            weatherCard.innerHTML = `
                <div class="flex"><h2>${data.name}</h2> <h5>${data.sys.country}</h5>
                </div>
                <h1>${data.main.temp}°C</h1>
                 <div class="icon">
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                </div>
                <p>${data.weather[0].description.toUpperCase()}</p>
            `;
            document.querySelector("#weatherResults").appendChild(weatherCard);
        } else {
            alert("City not found");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Error");
    }
}

