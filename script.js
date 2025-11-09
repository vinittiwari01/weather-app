const apiKey = "916046d5377a598cdf57775d6f3d4e9b";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherInfo = document.getElementById("weatherInfo");

  if (city === "") {
    weatherInfo.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();

    const { name } = data;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { description, icon } = data.weather[0];

    weatherInfo.innerHTML = `
      <h3>${name}</h3>
     <img src="https://openweathermap.org/img/wn"${description}">
      <p><b>${description.toUpperCase()}</b></p>
      <p>🌡 Temperature: ${temp}°C</p>
      <p>💧 Humidity: ${humidity}%</p>
      <p>🌬 Wind: ${speed} m/s</p>
    `;
  } catch (error) {
    weatherInfo.innerHTML = `<p>❌ City not found. Try again.</p>`;
  }
}
// 🌙 Dark Mode Toggle Logic
const themeToggle = document.getElementById("themeToggle");
const modeLabel = document.getElementById("modeLabel");

// When toggle is changed
themeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  // Update text
  if (document.body.classList.contains("dark")) {
    modeLabel.textContent = "Dark Mode";
  } else {
    modeLabel.textContent = "Light Mode";
  }
});