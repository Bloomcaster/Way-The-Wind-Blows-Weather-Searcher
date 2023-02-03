const apiKey="c3896b557cd23f558ec16fa374b09d61"

let gotPosition = function(pos) {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    getForecast(lat, long);
}

let getForecast = function(lat, long) {
    let url = "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"
    getWeatherText(url);
}

async function getWeatherText(url) {
    let weatherObject = await fetch(url);
    let weatherText = await weatherObject.text();
    parseWeather(weatherText);
}

let parseWeather = function(weatherText) {
    let weatherJSON = JSON.parse(weatherText);
    let dailyForecast = weather.JSON.daily;

    for (x = 0; x< dailyForecast.legnth; x++) {
        let day = dailyForecast[x];
        let today = new Date().getDay() + x;
        
    }
    let dayOfWeek = getDayOfWeek(today);
    let description = day.weather[0].description;
    let icon = day.weather[0].icon;
    let sunrise = timestampToTime(day.sunrise);
    let sunset = timestampToTime(day.sunset);
    let hightTemp = kToF(day.temp.max);
    let lowTemp = kToF(day.temp.min);
    let humidity = day.humidity;
    let windSpeed = day.wind_speed;
    let windGust = day.wind_gust;
    displayWeatherDay(dayOfWeek, description, icon, sunrise, sunset, hightTemp, lowTemp, humidity, windSpeed, windGust );
 }

let displayWeatherDay = function(dayOfWeek, description, icon, sunrise, sunset, hightTemp, lowTemp, humidity, wind_speed, windGust)
 let out = "<"



    
 






            
 

    

 




   