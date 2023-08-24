
const API_KEY = "256bb870d4cec02e26de5970dcec39b7";
const searchBox = document.querySelector('.searchInput');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    const response = await fetch(url);

    if (response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }
    else {
        const data = await response.json();

        document.querySelector('.city').innerHTML = `${data.name}`;
        document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector('.humidity').innerHTML = `${data.main.humidity} %`;
        document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`;

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none';
    }
};


searchBtn.addEventListener('click', function() {
    checkWeather(searchBox.value);
});
