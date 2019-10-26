// Fonction appelée lors du click du bouton actualiser
function getThreeDayForecast() {
    // La ville étudiée
    let city ="paris";
    if (document.getElementById('city-input').value)
        city=document.getElementById('city-input').value;
    //si la ville n'a pas été attribuée, on garde paris

    // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER(city);
    // Appel de la fonction fetchTodayForecast

    apiWeather
        .fetchThreeDaysForecast()
        .then(function(response) {
            // Récupère la donnée d'une API
            const data = response.data;

            // On récupère l'information principal j+0
            const main = data.list[0].weather[0].main;
            const description = data.list[0].weather[0].description;
            const temp = data.list[0].temp.day;
            const icon = apiWeather.getHTMLElementFromIcon(data.list[0].weather[0].icon);

            // On récupère l'information principal j+1
            const main1 = data.list[1].weather[0].main;
            const description1 = data.list[1].weather[0].description;
            const temp1 = data.list[1].temp.day;
            const icon1 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

            // On récupère l'information principal j+2
            const main2 = data.list[2].weather[0].main;
            const description2 = data.list[2].weather[0].description;
            const temp2 = data.list[2].temp.day;
            const icon2 = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

            // On récupère l'information principal j+3
            const main3 = data.list[3].weather[0].main;
            const description3 = data.list[3].weather[0].description;
            const temp3 = data.list[3].temp.day;
            const icon3 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);



            // Modifier le DOM
            //à j+0
            document.getElementById('today-forecast-main').innerHTML = main;
            document.getElementById('today-forecast-more-info').innerHTML = description;
            document.getElementById('icon-weather-container').innerHTML = icon;
            document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

            //à j+1
            document.getElementById('tomorrow-forecast-main').innerHTML = main1;
            document.getElementById('tomorrow-forecast-more-info').innerHTML = description1;
            document.getElementById('tomorrow-icon-weather-container').innerHTML = icon1;
            document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp1}°C`;

            //à j+2
            document.getElementById('inTwoDays-forecast-main').innerHTML = main2;
            document.getElementById('inTwoDays-forecast-more-info').innerHTML = description2;
            document.getElementById('inTwoDays-icon-weather-container').innerHTML = icon2;
            document.getElementById('inTwoDays-forecast-temp').innerHTML = `${temp2}°C`;

            //à j+3
            document.getElementById('inThreeDays-forecast-main').innerHTML = main3;
            document.getElementById('inThreeDays-forecast-more-info').innerHTML = description3;
            document.getElementById('inThreeDays-icon-weather-container').innerHTML = icon3;
            document.getElementById('inThreeDays-forecast-temp').innerHTML = `${temp3}°C`;

        })
        .catch(function(error) {
            // Affiche une erreur
            console.error(error);
        });
}