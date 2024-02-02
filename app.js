




function api(){

   let myapi='be2e7d66e7eca3c4314817460f74500a'


   let cityName=document.getElementById("cityName")
   let city=document.getElementById("city").value
   let degrees=document.getElementById("degrees")
   let wind=document.getElementById("wind")
   let humidity=document.getElementById("humidity")
  let tempMin=document.getElementById("tempMin")
  let pressure=document.getElementById("pressure")


 
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myapi}`
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    cityName.innerHTML=data.name
    degrees.innerHTML=Math.floor(data.main.temp-273)+"°C degree"
    wind.innerHTML=data.wind.speed+"km/h"
    humidity.innerHTML=data.main.humidity+"%"
    tempMin.innerHTML=data.main.temp_min+"t/min"
    pressure.innerHTML=data.main.pressure+"p"
  });
}