// API : https://openweathermap.org/api

// Clé api
const API_KEY = "4081444b7b90198136fefe6ed4ccf35b";
// Url API
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_URL_BIS = "https://api.openweathermap.org/data/2.5/forecast/daily";
// Base source icon
const API_URL_ICON = "http://openweathermap.org/img/wn/";


class API_WEATHER{
  constructor(city){
    // Si la ville n'est pas définit alors la ville par défault est Paris
    if(city === undefined){
      city = "paris";
    }
    this.city = city;
  }

  // Faire la requete à l'API openweathermap
  // Retourne une promise
  fetchTodayForecast(){
    console.log('yo');
    console.log(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}`);
    console.log(`${API_URL_BIS}?q=${this.city}&units=metric&appid=${API_KEY}&cnt=3`);
    return axios
        .get(`${API_URL}?q=${this.city}&units=metric&appid=${API_KEY}`, {
          crossdomain: true
        })
  }
  // Retourne l'element HTML de l'icon symbolisant la méteo.
  getHTMLElementFromIcon(icon){
    return `<img src=${API_URL_ICON}${icon}@2x.png class="weather-icon"/>`
  }

  fetchThreeDaysForecast(){
    return axios
        .get(`${API_URL_BIS}?q=${this.city}&units=metric&appid=${API_KEY}&cnt=3`, {
          crossdomain: true
        })
  }
}