const apiKey="c3896b557cd23f558ec16fa374b09d61"
window.addEventListener("load",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            let lon = position.coords.longitude;
            let lat = position.coords.latitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&` + `lon=${lon}&appid=${apikey}`;
   




    
 






            
 

    

 




   