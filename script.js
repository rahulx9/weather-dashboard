const weatherData = [
  {
    city: "Delhi",
    temperature: "30°C",
    description: "Sunny",
    humidity: "50%",
    windSpeed: "10 km/h",
  },
  {
    city: "Mumbai",
    temperature: "28°C",
    description: "Partly Cloudy",
    humidity: "65%",
    windSpeed: "15 km/h",
  },
  {
    city: "Bangalore",
    temperature: "25°C",
    description: "Rainy",
    humidity: "80%",
    windSpeed: "12 km/h",
  },
  {
    city: "Kolkata",
    temperature: "32°C",
    description: "Humid",
    humidity: "75%",
    windSpeed: "8 km/h",
  },
  {
    city: "Chennai",
    temperature: "29°C",
    description: "Thunderstorms",
    humidity: "85%",
    windSpeed: "20 km/h",
  },
  {
    city: "Hyderabad",
    temperature: "27°C",
    description: "Cloudy",
    humidity: "70%",
    windSpeed: "10 km/h",
  },
  {
    city: "Ahmedabad",
    temperature: "33°C",
    description: "Hot",
    humidity: "40%",
    windSpeed: "18 km/h",
  },
  {
    city: "Pune",
    temperature: "26°C",
    description: "Cloudy",
    humidity: "78%",
    windSpeed: "11 km/h",
  },
  {
    city: "Jaipur",
    temperature: "31°C",
    description: "Dry",
    humidity: "45%",
    windSpeed: "12 km/h",
  },
  {
    city: "Lucknow",
    temperature: "29°C",
    description: "Mild",
    humidity: "60%",
    windSpeed: "9 km/h",
  },
  {
    city: "Nagpur",
    temperature: "35°C",
    description: "Very Hot",
    humidity: "35%",
    windSpeed: "10 km/h",
  },
  {
    city: "Indore",
    temperature: "30°C",
    description: "Clear Skies",
    humidity: "50%",
    windSpeed: "10 km/h",
  },
  {
    city: "Bhopal",
    temperature: "28°C",
    description: "Windy",
    humidity: "60%",
    windSpeed: "14 km/h",
  },
  {
    city: "Visakhapatnam",
    temperature: "27°C",
    description: "Sunny",
    humidity: "65%",
    windSpeed: "16 km/h",
  },
  {
    city: "Patna",
    temperature: "29°C",
    description: "Foggy",
    humidity: "70%",
    windSpeed: "9 km/h",
  },
  {
    city: "Vadodara",
    temperature: "34°C",
    description: "Hot and Dry",
    humidity: "30%",
    windSpeed: "17 km/h",
  },
  {
    city: "Ghaziabad",
    temperature: "31°C",
    description: "Dusty",
    humidity: "45%",
    windSpeed: "13 km/h",
  },
  {
    city: "Ludhiana",
    temperature: "32°C",
    description: "Humid",
    humidity: "68%",
    windSpeed: "9 km/h",
  },
  {
    city: "Agra",
    temperature: "35°C",
    description: "Scorching",
    humidity: "30%",
    windSpeed: "15 km/h",
  },
  {
    city: "Amritsar",
    temperature: "28°C",
    description: "Pleasant",
    humidity: "55%",
    windSpeed: "10 km/h",
  },
  {
    city: "Rajkot",
    temperature: "36°C",
    description: "Hot",
    humidity: "45%",
    windSpeed: "13 km/h",
  },
  {
    city: "Faridabad",
    temperature: "33°C",
    description: "Sunny",
    humidity: "48%",
    windSpeed: "11 km/h",
  },
  {
    city: "Meerut",
    temperature: "28°C",
    description: "Mild",
    humidity: "58%",
    windSpeed: "8 km/h",
  },
  {
    city: "Jodhpur",
    temperature: "37°C",
    description: "Very Hot",
    humidity: "32%",
    windSpeed: "16 km/h",
  },
  {
    city: "Madurai",
    temperature: "31°C",
    description: "Cloudy",
    humidity: "66%",
    windSpeed: "12 km/h",
  },
  {
    city: "Guwahati",
    temperature: "29°C",
    description: "Rainy",
    humidity: "83%",
    windSpeed: "9 km/h",
  },
  {
    city: "Gwalior",
    temperature: "32°C",
    description: "Clear Skies",
    humidity: "52%",
    windSpeed: "13 km/h",
  },
  {
    city: "Vijayawada",
    temperature: "33°C",
    description: "Humid",
    humidity: "71%",
    windSpeed: "14 km/h",
  },
  {
    city: "Mysore",
    temperature: "26°C",
    description: "Pleasant",
    humidity: "64%",
    windSpeed: "10 km/h",
  },
  {
    city: "Ranchi",
    temperature: "28°C",
    description: "Windy",
    humidity: "60%",
    windSpeed: "12 km/h",
  },
  {
    city: "Jalandhar",
    temperature: "30°C",
    description: "Clear Skies",
    humidity: "49%",
    windSpeed: "10 km/h",
  },
  {
    city: "Thiruvananthapuram",
    temperature: "29°C",
    description: "Partly Cloudy",
    humidity: "76%",
    windSpeed: "8 km/h",
  },
  {
    city: "Salem",
    temperature: "31°C",
    description: "Cloudy",
    humidity: "69%",
    windSpeed: "14 km/h",
  },
  {
    city: "Warangal",
    temperature: "34°C",
    description: "Hot",
    humidity: "56%",
    windSpeed: "12 km/h",
  },
  {
    city: "Kochi",
    temperature: "27°C",
    description: "Humid",
    humidity: "81%",
    windSpeed: "8 km/h",
  },
  {
    city: "Solapur",
    temperature: "33°C",
    description: "Dry",
    humidity: "45%",
    windSpeed: "16 km/h",
  },
  {
    city: "Hubli",
    temperature: "29°C",
    description: "Partly Cloudy",
    humidity: "67%",
    windSpeed: "11 km/h",
  },
  {
    city: "Bareilly",
    temperature: "30°C",
    description: "Clear Skies",
    humidity: "60%",
    windSpeed: "13 km/h",
  },
  {
    city: "Moradabad",
    temperature: "32°C",
    description: "Sunny",
    humidity: "52%",
    windSpeed: "9 km/h",
  },
  {
    city: "Guntur",
    temperature: "33°C",
    description: "Humid",
    humidity: "73%",
    windSpeed: "15 km/h",
  },
  {
    city: "Gaya",
    temperature: "34°C",
    description: "Hot and Humid",
    humidity: "70%",
    windSpeed: "12 km/h",
  },
  {
    city: "Ujjain",
    temperature: "29°C",
    description: "Pleasant",
    humidity: "58%",
    windSpeed: "10 km/h",
  },
  {
    city: "Dehradun",
    temperature: "27°C",
    description: "Foggy",
    humidity: "78%",
    windSpeed: "9 km/h",
  },
  {
    city: "Nellore",
    temperature: "31°C",
    description: "Sunny",
    humidity: "63%",
    windSpeed: "12 km/h",
  },
  {
    city: "Karnal",
    temperature: "29°C",
    description: "Clear Skies",
    humidity: "54%",
    windSpeed: "8 km/h",
  },
  {
    city: "Ajmer",
    temperature: "33°C",
    description: "Dry",
    humidity: "47%",
    windSpeed: "10 km/h",
  },
  {
    city: "Kakinada",
    temperature: "30°C",
    description: "Humid",
    humidity: "70%",
    windSpeed: "13 km/h",
  },
  {
    city: "Udaipur",
    temperature: "29°C",
    description: "Pleasant",
    humidity: "56%",
    windSpeed: "9 km/h",
  },
  {
    city: "Durgapur",
    temperature: "28°C",
    description: "Rainy",
    humidity: "77%",
    windSpeed: "10 km/h",
  },
  {
    city: "Siliguri",
    temperature: "29°C",
    description: "Foggy",
    humidity: "85%",
    windSpeed: "8 km/h",
  },
  {
    city: "Bilaspur",
    temperature: "32°C",
    description: "Sunny",
    humidity: "62%",
    windSpeed: "14 km/h",
  },
  {
    city: "Akola",
    temperature: "35°C",
    description: "Very Hot",
    humidity: "33%",
    windSpeed: "15 km/h",
  },
  {
    city: "Latur",
    temperature: "31°C",
    description: "Clear Skies",
    humidity: "50%",
    windSpeed: "12 km/h",
  },
  {
    city: "Pondicherry",
    temperature: "28°C",
    description: "Humid",
    humidity: "82%",
    windSpeed: "11 km/h",
  },
  {
    city: "Shillong",
    temperature: "24°C",
    description: "Cool",
    humidity: "75%",
    windSpeed: "9 km/h",
  },
  {
    city: "Nashik",
    temperature: "27°C",
    description: "Clear Skies",
    humidity: "59%",
    windSpeed: "10 km/h",
  },
  {
    city: "Panaji",
    temperature: "29°C",
    description: "Humid",
    humidity: "74%",
    windSpeed: "12 km/h",
  },
  {
    city: "Tiruchirappalli",
    temperature: "32°C",
    description: "Sunny",
    humidity: "61%",
    windSpeed: "14 km/h",
  },
  {
    city: "Thrissur",
    temperature: "27°C",
    description: "Cloudy",
    humidity: "80%",
    windSpeed: "8 km/h",
  },
  {
    city: "Jhansi",
    temperature: "35°C",
    description: "Very Hot",
    humidity: "40%",
    windSpeed: "13 km/h",
  },
  {
    city: "Tumkur",
    temperature: "28°C",
    description: "Pleasant",
    humidity: "63%",
    windSpeed: "10 km/h",
  },
  {
    city: "Raichur",
    temperature: "34°C",
    description: "Dry",
    humidity: "45%",
    windSpeed: "12 km/h",
  },
];

function displayWeather(data) {
  const container = document.getElementById("weather-container");
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = `<p>No results found for the search.</p>`;
    return;
  }

  data.forEach((weather) => {
    const cityElement = document.createElement("div");
    cityElement.classList.add("city");

    cityElement.innerHTML = `
            <h2>${weather.city}</h2>
            <p><strong>Temperature:</strong> ${weather.temperature}</p>
            <p><strong>Description:</strong> ${weather.description}</p>
            <p><strong>Humidity:</strong> ${weather.humidity}</p>
            <p><strong>Wind Speed:</strong> ${weather.windSpeed}</p>
        `;

    container.appendChild(cityElement);
  });
}

function searchWeather() {
  const searchInput = document.getElementById("citySearch").value.toLowerCase();
  const filteredData = weatherData.filter((weather) =>
    weather.city.toLowerCase().includes(searchInput)
  );
  displayWeather(filteredData);
}

displayWeather(weatherData);
