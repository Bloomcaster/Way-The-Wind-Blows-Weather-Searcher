const apiKey="c3896b557cd23f558ec16fa374b09d61"
const dateEl = moment(). format('1');
const cityInput = document.querySelector('#city');
const timeEl = querySelector('#time');
const weatherForecastDayEL = document.querySelector('#weather-forecast');
const currentTempEl = document.querySelector('#current-temperature');
const currentWeatherItemsEl = querySelector('#current-weather-items');
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
}

  fetch(apiUrl)
 .then(function(response) {
    if response.ok){
       response.json().then(function (data){
        console.log(data);
        displayWeather(data, city);
       }); 
    } else {
        alert("on noooo");

    }
}






            
 

    

 

/*dev tools are not working, check on why
populateWeatherData ()
function populateWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        let {latitude, longitude } = success.coords;
/*this has been changed to fetch longitude, lat, city and to change unites to imperial for farenheit
        fetch(`https://api.openweathermap.org.data/2.5/onecall?lat=${latitude}&lon=${longitude}&city.name=${city}&exclude
        =hourly,minutely&unites=imperial&appid=${apiKey}`).then(res => res.json()).then(data => {
            console.log(data)
            showWeatherData(data);
        })
    })
}

 
}*/




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

