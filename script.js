const apiKey="c3896b557cd23f558ec16fa374b09d61"


 function GetInfo() {
    const newName = document.getElementById("cityInput");
    const cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--"
 } 

 fetch("api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid={API key}"
 .themn(response => response.json())
 .then(data => {
    for(i=0;i<5;i++){
        document.getElementById("day" +(i+1)+"Min").innerHTML = "Min:" +Number(data.list[i].main.temp) 
    }
 })
    
 






            
 

    

 




   