let apiKey="c3896b557cd23f558ec16fa374b09d61"
let todaysDate = moment(). format('1');
let cityInputEl = document.querySelector('#city');
let citySearch = [];
let dataFormEl = document.querySelector('#data-form');
let listEl - document.getElementById('myData');
/*
function citySearch () {
let city = $('#city').val();
fetch var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
}
*/

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
    })

