
// Fonction appelée lors du click du bouton
function start() {
    // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER();
    // Appel de la fonction fetchTodayForecast

    apiWeather
        .fetchTodayForecast()
        .then(function(response) {
            // Récupère la donnée d'une API
            const data = response.data;

            // On récupère l'information principal
            const main = data.weather[0].main;
            const description = data.weather[0].description;
            const temp = data.main.temp;
            const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

            // Modifier le DOM
            document.getElementById('today-forecast-main').innerHTML = main;
            document.getElementById('today-forecast-more-info').innerHTML = description;
            document.getElementById('icon-weather-container').innerHTML = icon;
            document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

        })
        .catch(function(error) {
            // Affiche une erreur
            console.error(error);
        });
}



// Fonction appelée lors du chargement de la page
function start() {
    // Création de l'objet apiWeather'
    const apiWeather = new API_WEATHER();
    // Appel de la fonction fetchTodayForecast

    apiWeather
        .fetchTodayForecast()
        .then(function(response) {
            // Récupère la donnée d'une API
            const data = response.data;

            // On récupère l'information principal
            const main = data.weather[0].main;
            const description = data.weather[0].description;
            const temp = data.main.temp;
            const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);
            console.log("salut bande de salopes");
            console.log(main, description, temp);

            // Modifier le DOM
            document.getElementById('today-forecast-main').innerHTML = main;
            document.getElementById('today-forecast-more-info').innerHTML = description;
            document.getElementById('icon-weather-container').innerHTML = icon;
            document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

        })
        .catch(function(error) {
            // Affiche une erreur
            console.error(error);
        });
}

// Fonction appelée lors du click sur actualiser
function reload() {
    //la ville
    const city = document.getElementById('city-input').value;
    // Création de l'objet apiWeather'
    const apiWeather = new API_WEATHER(city);
    // Appel de la fonction fetchTodayForecast

    apiWeather
        .fetchTodayForecast()
        .then(function(response) {
            // Récupère la donnée d'une API
            const data = response.data;

            // On récupère l'information principal
            const main = data.weather[0].main;
            const description = data.weather[0].description;
            const temp = data.main.temp;
            const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);


            // Modifier le DOM
            document.getElementById('today-forecast-main').innerHTML = main;
            document.getElementById('today-forecast-more-info').innerHTML = description;
            document.getElementById('icon-weather-container').innerHTML = icon;
            document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

        })
        .catch(function(error) {
            // Affiche une erreur
            console.error(error);
        });
}


// Fonction appelée lors du click du bouton actualiser
function threedays() {
    //la ville
    console.log("salut salut");
    const city = document.getElementById('city-input').value;

    // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER(city);
    // Appel de la fonction fetchTodayForecast

    //TODO faire en sorte que l'on rentre dnas apiWeather et que les logs soient affichés
    apiWeather
        .fetchThreeDaysForecast()
        .then(function(response) {
            // Récupère la donnée d'une API
            const data = response.data;

            // On récupère l'information principal j+1
            const main1 = data.list[1].weather[0].main;
            const description1 = data.list[1].weather[0].description;
            const temp1 = data.list[1].main.temp;
            const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);
            console.log("salut bande de gens sympas");
            console.log(main, description, temp);

            // Modifier le DOM
            document.getElementById('tomorrow-forecast-main').innerHTML = main1;
            document.getElementById('tomorrow-forecast-more-info').innerHTML = description1;
            document.getElementById('tomorrow-icon-weather-container').innerHTML = icon1;
            document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp1}°C`;

        })
        .catch(function(error) {
            // Affiche une erreur
            console.error(error);
        });
}


//fonction permettant de récupérer trois jours
function getThreeDayForecast()
{

}