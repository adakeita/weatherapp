const weather = {
   fetchWeather: function (city) {
      fetch(
         "https://api.weatherapi.com/v1/current.json?key=3ea1691ec8284893ade143831231502&q="
         +city
         +"&aqi=no"
         + this.apiKey
      )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
   },
   displayWeather: function(data) {
     const { name } = data.location;
     const { icon, text } = data.current.condition;
     const { temp_c, humidity } = data.current;

     document.querySelector(".city").innerText = "Weather in " + name;
     document.querySelector(".icon").src = "https:" + icon;
     document.querySelector(".text").innerText = text;
     document.querySelector(".temp_c").innerText = temp_c + "°C";
     document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";

     document.querySelector(".weather").classList.remove("loading")
     document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
   },
   search: function () {
  this.fetchWeather(document.querySelector(".search-bar").value);
}
};



document.querySelector(".searchbutton").addEventListener("click", function () {
   weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
   if (event.key == "Enter" ) {
      weather.search();
   }
});

weather.fetchWeather("Bamako");