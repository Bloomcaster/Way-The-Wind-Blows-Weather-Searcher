const apiKey="c3896b557cd23f558ec16fa374b09d61"
const dateEl = moment(). format('1');
const cityInputEl = document.querySelector('#city');
const city = [];
const timeEl = getElementById('time');
const weatherForecastDayEL = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById("current-temperature");
const currentWeatherItemsEl = getElementById('current-weather-items');
/*
const currentTime = moment().format("LLLL");
$("#time").text(moment().format("LLLL"))*/

const months =['January', 'February', 'March', 'April', 'May', 'June', 
               'July', 'August', 'September', 'October', 'November', 'December'];
 const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] ;             



setInterval ( ) => {

    const month = time.getMonth ();
    const day = time.getDay ();
    const date = time.getDate ();
    const hour = time.getHours ();
    const minutes = time.getMinutes ();
    timeEl.innerHTML = hourin24hourformat + ':' + minutes;
    dateEl.innerHTML = day[day] + ',' + date + ' ' + months[months]

} 1000;
/*dev tools are not working, check on why*/
populateWeatherData ()
function populateWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        let {latitude, longitude } = success.coords;
/*this has been changed to fetch longitude, lat, city and to change unites to imperial for farenheit*/
        fetch(`https://api.openweathermap.org.data/2.5/onecall?lat=${latitude}&lon=${longitude}&city.name=${city}&exclude
        =hourly,minutely&unites=imperial&appid=${apiKey}`).then(res => res.json()).then(data => {
            console.log(data)
            showWeatherData(data);
        })
    })
}

function showWeatherData(data) {
    let 
}


















/* keeping these wriiten functions in case
function citySearch () {
let city = $('#city').val();
fetch var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
}
*/
/*
fetch (apiKey)
.then(function(response) {
    //convert to JSON object
    return response.json();
})
.then(funtion(data) {
    //display html here
    let  = data.response.docs;
    for (let i = 0; i< docArray.length; i ++) {
        let listItem = document.createElement("li");
        listItem.textContent = docArray[i].city;
        listEl.appendChild(listItem);
    }) */

