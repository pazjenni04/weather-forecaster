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
    .then(function (data) {
        
        for(var i = 0; i < data.length; i++) {
        var listItems = document.createElement("li");

        listItems.textContent = data[i].main;
        listItems.textContent = data[i].name;
        listItems.textContent = data[i].weather[0].description;
        searchResults.appendChild(listItems);

    };

});

};

//eventlistener takes the value from the user
userInput.addEventListener("input", function() {
    console.log(userInput.value)

});


//need input and when click search it should fetch api with the parameters set
//need results displayed on the page

//when the user clicks on the search button, it will concatenate the url along with the user's input and should relocate the window with the results
function search() {
    var results = requestURL+ "zip=" + userInput + ",us&appid=11a183a9809c0b88f3ea75fbbf8c9613"
    window.location.href = results;

};

//if the user clicks the search button, the system should retrieve the api
if(search){
    getApi();
};


//when you click on the search button, it will run the function getApi
document.getElementById("searchBtn").addEventListener("click", search);

//once get search results, need to create local storage to store results in and display on page
