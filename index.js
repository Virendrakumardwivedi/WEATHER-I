// const url = "https://api.openweathermap.org/data/2.5/weather?q=satna&appid=aba0359b16180c5a0a561032fe8c3883"


// fetch(url)
// .then(function(res){
//    return res.json();
// })
// .then(function(res){
//     //append(res);
//     console.log(res);
// })
// .catch(function(res){
//     console.log(err);
// })
//  src="https://www.google.com/maps/embed/v1/place?key=API_KEY&q=Space+Needle,Seattle+WA"

function getData(){
    let city = document.getElementById("city").value;

    const url = 
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aba0359b16180c5a0a561032fe8c3883`

    fetch(url)
    .then(function(res){
       return res.json();
    })
    .then(function(res){
        append(res);
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    })
}

function append (data){

    let box = document.getElementById('box');
    let map = document.getElementById("gmap_canvas");

    box.innerHTML=null;

    let city = document.createElement("p");
    city.innerText = `CITY: ${data.name}`;

    let min = document.createElement("p")
    min.innerText = `Min Temp: ${data.main.temp_min}`;

    let max = document.createElement("p")
    max.innerText = `Max Temp: ${data.main.temp_max}`;

    let wind = document.createElement("p")
    wind.innerText = `Wind: ${data.wind.speed}`;

    let clounds = document.createElement("p")
    clounds.innerText = `Clounds: ${data.all}`;

    let sunrise = document.createElement("p")
    sunrise.innerText = `Sunrise: ${data.sys.sunrise}`;
    
    
    let sunset = document.createElement("p")
    sunset.innerText = `Sunset: ${data.sys.sunset}`;

    box.append(city, min, max, wind, clounds, sunrise, sunset)
    // map.src=`https://www.google.com/maps/embed/v1/place?key=${data.name}&q=Space+Needle,Seattle+WA`;
    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

}