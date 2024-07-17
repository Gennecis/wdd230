document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '74c1b8badf13585d8d212c25371a13b0';
    const weatherInfoElement = document.querySelector('#weather-info');

    function fetchWeather() {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Abeokuta,NG&units=metric&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    const temperature = data.main.temp;
                    const weatherDescription = data.weather[0].description;
                    weatherInfoElement.textContent = `${temperature}°C, ${weatherDescription}`;
                } else {
                    weatherInfoElement.textContent = "Unable to fetch weather data.";
                }
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
                weatherInfoElement.textContent = "Error fetching weather data.";
            });
    }

    fetchWeather();
});
