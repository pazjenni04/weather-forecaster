var currentTime = document.getElementById("time");
var requestURL = "https://api.openweathermap.org/data/2.5/weather?"
var searchResults = document.getElementById('search-results');
var userInput = document.getElementById("input");



//time is displayed at top of page
function time() {
    var timeInterval = setInterval(function() {
        currentTime.textContent = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
    }, 1000);
}

time();


//function gets weather's API and console log's whether the fetch was successful and console logs the results of the main properties pulling from the data
function getApi() {

    fetch(requestURL)
    .then (function (response) {
        return response.json();
    
    })
    .then(data => displayResults(data.results));
        
};

displayResults = data => {
    var name = document.createElement('div');
    var main = document.createElement('div');
    var description = document.createElement('div');

    name.innerText = "City name: $(data.name)";
    main.innerText = "$(data.main)";
    description.innerText = "Description: $(data.weather[0].description";

    searchResults.appendChild(name);
    searchResults.appendChild(main);
    searchResults.appendChild(description);
};

//eventlistener takes the value from the user
userInput.addEventListener("input", function() {
    console.log(userInput.value)

});


//need input and when click search it should fetch api with the parameters set
//need results displayed on the page

//when the user clicks on the search button, it will concatenate the url along with the user's input and should relocate the window with the results
function search(event) {
    event.preventDefault();

    var results = requestURL+ "zip=" + userInput.value + ",us&appid=11a183a9809c0b88f3ea75fbbf8c9613"
    window.location.href = results;
    console.log(results);

};



//when you click on the search button, it will run the function getApi
document.getElementById("searchBtn").addEventListener("click", search);

//once get search results, need to create local storage to store results in and display on page
