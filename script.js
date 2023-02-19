const weather = {
   apiKey: "5cdac300a9ee476da6e93e192f4a9a43",
   fetchWeather: function (city) {
      fetch(
         "https://api.weatherapi.com/v1/current.json?key=3ea1691ec8284893ade143831231502&q="+city+"&aqi=no"
      ).then((response) => response.json())
      .then((data) => console.log(data));
   },
   displayWeather: function(data) {
     const { name } = data;
     const { icon, description } = data.weather;
   } 
};