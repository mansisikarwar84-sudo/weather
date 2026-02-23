function getWeather() {

  // 1. City name lena
  let city = document.getElementById("city").value;

  // 2. API key (yahan apni key paste karo)
  let apiKey = "549bfc269e390b4662655f692619fd65";

  // 3. API URL banana
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // 4. API call karna
  fetch(url)
    .then(response => response.json())
    .then(data => {

      // 5. Data screen par dikhana
      document.getElementById("location").innerText = data.name;
      document.getElementById("temp").innerText = data.main.temp + " °C";
      document.getElementById("condition").innerText = data.weather[0].main;
      document.getElementById("humidity").innerText =
        "Humidity: " + data.main.humidity + "%";
      document.getElementById("wind").innerText =
        "Wind: " + data.wind.speed + " km/h";
    })
    .catch(error => {
      alert("City not found or API error");
    });
}