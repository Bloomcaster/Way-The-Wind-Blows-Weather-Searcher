const apiKey="c3896b557cd23f558ec16fa374b09d61"
const dateEl = moment(). format('1');
const cityInput = document.querySelector('#city');
const timeEl = querySelector('#time');
const weatherForecastDayEL = document.querySelector('#weather-forecast');
const currentTempEl = document.querySelector('#current-temperature');
const currentWeatherItemsEl = querySelector('#weather-forecast');

const currentTime = moment().format("LLLL");
$("#time").text(moment().format("LLLL"))

const months =['January', 'February', 'March', 'April', 'May', 'June', 
               'July', 'August', 'September', 'October', 'November', 'December'];
 const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] ;             



setInterval (() => {

    const month = time.getMonth ();
    const day = time.getDay ();
    const date = time.getDate ();
    const hour = time.getHours ();
    const minutes = time.getMinutes ();
    timeEl.innerHTML = hourin24hourformat + ':' + minutes;
    dateEl.innerHTML = day[day] + ',' + date + ' ' + months[months]

}, 1000);

const formSubmitHandler = function (event){
    event.preventDefault();

    let city = cityInput.value;

    if (city) {
        newQuery(city);

        cityInput.value = '';
    } else {
        alert("oh nooooo");
    }
    };


const newQuery = function city () {
    apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

   /*
    fetch(apiKey)
    .then(function (response) {
        if (response.ok) {
            response.json().then(function (data){
                
                displayWeather(data, city);
            })
        .then(data => {
            localStorage.setItem('city',
           
            json.stringify(data))
            console.log(data);
        })
    }
}*/

  fetch(apiUrl)
 .then(function(response) {
     response.json().then(function (data){
        console.log(data);
        displayWeather(data, city);
       }); 
  

    /*
       function showWeatherData (data) {
        let {wind_speed, humidity, temperature} = data.current;



        currentWeatherItemsEl.innerHTML =
      ` <div class="stormy" id="all-weather-items">
       <div class="weather-item">
         <div>Wind Speed</div>
         <div>${wind_speed}</div>
       </div>

       <div class="weather-item">
         <div>Humidity</div>
         <div>${humidity}%</div>
       </div>

      <div class="weather-item">
         <div>Temperature</div>
         <div>${temperature}</div>
       </div>;
    



            
 

    

 




   