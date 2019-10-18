$("#search").on("click", function(location)  {
    location.preventDefault();
    var location = $("#location").val().trim();
    searchCurrentLocalWeather(location);
    search5dayLocalWeather(location);

    $("#date").append(moment().format('LL'));

    function searchCurrentLocalWeather(location) {
        var location = $("#location").val().trim();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + ",ca&appid=999176920710ee7337e355f3640da48f";
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            $("#currentWeatherImg").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
            $(".currentTemperature").text('Temperature: ' + (Math.round((response.main.temp)-273.15)) + ' °C');
            $(".currentWindspeed").text('Wind Speed: ' + response.wind.speed + ' mps');
            $(".currentHumidity").text('Humidity: ' + response.main.humidity + '%');
        });
    }

    $(".day1").append(moment().add(1, 'day').format("ll"));
    $(".day2").append(moment().add(2,'days').format("ll"));
    $(".day3").append(moment().add(3, 'days').format('ll'));
    $(".day4").append(moment().add(4, 'days').format('ll'));
    $(".day5").append(moment().add(5,'days').format('ll'));

    function search5dayLocalWeather(location) {
        var location = $("#location").val().trim();
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast/?q="  + location + ",ca&appid=6be09550488d008cc9128d33cf413b5b";
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            $("#weatherImg1").attr("src", "http://openweathermap.org/img/w/" + response.list[5].weather[0].icon + ".png");
            $(".temperature1").text('Temp: ' + (Math.round((response.list[4].main.temp)-273.15)) + ' °C');
            $(".humidity1").text('Humidity: ' + response.list[4].main.humidity + '%');
            $("#weatherImg2").attr("src", "http://openweathermap.org/img/w/" + response.list[13].weather[0].icon + ".png");
            $(".temperature2").text('Temp: ' + (Math.round((response.list[12].main.temp)-273.15)) + ' °C');
            $(".humidity2").text('Humidity: ' + response.list[12].main.humidity + '%');
            $("#weatherImg3").attr("src", "http://openweathermap.org/img/w/" + response.list[21].weather[0].icon + ".png");
            $(".temperature3").text('Temp: ' + (Math.round((response.list[20].main.temp)-273.15)) + ' °C');
            $(".humidity3").text('Humidity: ' + response.list[20].main.humidity + '%');
            $("#weatherImg4").attr("src", "http://openweathermap.org/img/w/" + response.list[29].weather[0].icon + ".png");
            $(".temperature4").text('Temp: ' + (Math.round((response.list[28].main.temp)-273.15)) + ' °C');
            $(".humidity4").text('Humidity: ' + response.list[28].main.humidity + '%');
            $("#weatherImg5").attr("src", "http://openweathermap.org/img/w/" + response.list[37].weather[0].icon + ".png");
            $(".temperature5").text('Temp: ' + (Math.round((response.list[36].main.temp)-273.15)) + ' °C');
            $(".humidity5").text('Humidity: ' + response.list[36].main.humidity + '%');
        });
    }
})

document.getElementById("search").addEventListener("click", saveLocation); {
    function saveLocation() { 
      var searchHistory = document.getElementById("location");
      var mySearchHistory = {History: searchHistory.value};
      var myJSON = JSON.stringify(mySearchHistory);
      localStorage.setItem("Location", myJSON);
    } 
}

function retrieveSearchHistory() {
    var searchHistory = localStorage.getItem("Location");
    console.log(searchHistory);
    var locationSearchHistory = JSON.parse(searchHistory);
    console.log(locationSearchHistory);
    document.getElementById("location").innerHTML = locationSearchHistory;
}

document.addEventListener("DOMContentLoaded", retrieveSearchHistory(location));
   

