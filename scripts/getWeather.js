const currentTemp = document.querySelector('#weather-info');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

let lat = 5.898920899500054;
let lon = 6.8351733472007;
let apiKey= '74c1b8badf13585d8d212c25371a13b0';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if(response.status === 200) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
};

apiFetch(url);

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}