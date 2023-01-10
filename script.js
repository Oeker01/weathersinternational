const url = "https://api.openweathermap.org/data/2.5/";
const key = "1e048b9c2de2e9abd4ea31974a1e3a68";

const search = document.querySelector("#search");
const button = document.querySelector(".btn");

button.addEventListener("click", ara);

function ara(){
    
    getResult(search.value)
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(wheather => {
        return wheather.json()
    })
    .then(displayResult)
}
const displayResult = (result) => {
    console.log(result);
    let city = document.querySelector(".sehir");
    city.innerText = `${result.name} `;

    let temper = document.querySelector(".derece");
    temper.innerText=`${Math.round(result.main.temp)}°C`;

    let bulut = document.querySelector(".durum");
    bulut.innerText = result.weather[0].description
}
search.addEventListener("keypress", tus)

function tus(e) {
    if (e.keyCode == "13")
        getResult(search.value)
}
