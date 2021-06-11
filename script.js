var currentTime = document.getElementById("time");
var requestURL = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=11a183a9809c0b88f3ea75fbbf8c9613"
var searchResults = document.getElementById('search-results');

function time() {
    var timeInterval = setInterval(function() {
        currentTime.textContent = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
    }, 1000);
}

time();

function getApi(requestURL) {

    fetch(requestURL)
    .then (function (response) {
        return response.json();
    })
    .then(function (data) {
        for (var i = 0; data.length; i++) {
        var listItems = document.createElement("li" + i);

        listItems.textContent = data[i].html_url;
        searchResults.appendChild(listItems);
        }
    });

};

getApi();
