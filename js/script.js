const searchInput = document.querySelector(".search__input");
const form = document.querySelector(".form");
const city = document.querySelector(".city");
const info = document.querySelector(".info");
const date = document.querySelector(".date");
const degree = document.querySelector(".degree__number");
const result = document.querySelector(".result");
const humidity = document.querySelector(".content__bottom__left__humidity");
const windSpeed = document.querySelector(".content__bottom__left__wind-speed");
const icon = document.querySelector(".content__top__right__img");


// update

const update = (weather) => {
    result.innerHTML = `
        <div class="content">
            <div class="content__top">
                <div class="conent__top__left">
                    <div class="city" id="city">${weather.name}, ${weather.sys.country}</div>
                    <div class="date" id="date">${weekDay}  ${month}  ${day}  ${year}</div>
                    <div class="degree" id="degree"><span class="degree__number">${Math.round(weather.main.temp) }</span>°C</div>
                </div>
                <div class="content__top__right">
                    <p class="content__top__right__text">${weather.weather[0].main}</p>
                    <img class="content__top__right__img" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png">
                </div>
            </div>
            <div class="content__bottom">
                <div class="content__bottom__left">
                    <p class="content__bottom__left__text">Humidity</p>
                    <p class="content__bottom__left__humidity ">${weather.main.humidity}%</p>
                </div>
                <div class="content__bottom__left">
                    <p class="content__bottom__left__text">Wind speed</p>
                    <p class="content__bottom__left__wind-speed">${Math.round(weather.wind.speed)} km/s</p>
                </div>
            </div>
        </div>
    `
    
}

// get weather

const getWeather = async (city) =>{
    const data = await getData(city)
    return data
}

// get location
form.addEventListener("submit", (e) =>{
   
    e.preventDefault();
    const cityName = form.city.value.trim();
    form.reset()
    getWeather(cityName).then((data) => update(data));
    
})


searchInput.focus();

const newDate = new Date();
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weekDay = weekDays[newDate.getDay()];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]; 
const month = months[newDate.getMonth()];
const  day = newDate.getDate();
const year = newDate.getFullYear()