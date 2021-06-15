var currentTime = document.getElementById("time");
var requestURL = "https://api.openweathermap.org/data/2.5/weather?"
var searchResults = document.getElementById('search-results');
var userInput = document.getElementById("input");
var zipresults = document.getElementById("zipcodeResults");


//time is displayed at top of page
function time() {
    var timeInterval = setInterval(function() {
        currentTime.textContent = moment().format("dddd, MMM Do YYYY, h:mm:ss a");
    }, 1000);
}

time();



displayResults = data => {
    var name = document.createElement('div');
    var temp = document.createElement('div');
    var coordinates = document.createElement('div');
    var description = document.createElement('div');
    var humidty = document.createElement('div');
    var feelsLike = document.createElement('div');
    var pressure = document.createElement('div');
    

    name.className = "name";
    temp.className = "temperature";
    coordinates.className = "coordinates";
    description.className = "description";
    humidty.className = "humidity";
    feelsLike.className = "feelsLike";
    pressure.className = "pressure";
    

    name.innerText = `City name: ${data.name}`;
    temp.innerText = `Temperature: ${data.main.temp} F°`;
    coordinates.innerText = `Latitude: ${data.coord.lat}, Longitude: ${data.coord.lon}`;
    description.innerText = `Description: ${data.weather[0].description}`;
    humidty.innerText = `Humidity: ${data.main.humidity}%`;
    feelsLike.innerText = `Feels like: ${data.main.feels_like} F°`;
    pressure.innerText = `Pressure: ${data.main.pressure} hPa`;
    
    
    searchResults.appendChild(name);
    searchResults.appendChild(temp);
    searchResults.appendChild(coordinates);
    searchResults.appendChild(description);
    searchResults.appendChild(humidty);
    searchResults.appendChild(feelsLike);
    searchResults.appendChild(pressure);
    
};

//eventlistener takes the value from the user
userInput.addEventListener("input", function() {
    console.log(userInput.value)

});


//need input and when click search it should fetch api with the parameters set
//need results displayed on the page

//function gets weather's API and console log's whether the fetch was successful and console logs the results of the main properties pulling from the data
//when the user clicks on the search button, it will concatenate the url along with the user's input and should relocate the window with the results
function search(event) {
    event.preventDefault();

    var generatedUrl = requestURL+ "zip=" + userInput.value + ",us&units=imperial&icon&appid=11a183a9809c0b88f3ea75fbbf8c9613"
    
    fetch(generatedUrl) 
        .then(response => response.json())
        .then(data => displayResults(data))


    saveToLocal();

  
};



//when you click on the search button, it will run the function getApi
document.getElementById("searchBtn").addEventListener("click", search);

//once get search results, need to create local storage to store results in and display on page

var savedItem = JSON.parse(localStorage.getItem("zips")) || [];

function saveToLocal() {

    var cityzip = userInput.value

    savedItem.push(cityzip);

    localStorage.setItem("zips", JSON.stringify(savedItem));

};

function displayzips() {
    
    var zipCodes = JSON.parse(localStorage.getItem('zips'));
    var zipCodeString = "";

    zipCodes.forEach(function(zipcodes){
    for(var i=0; i < zipCodes.length; i++){
          
    zipCodeString +='<li>'+ zipCodes[i] + '</li>';
    
    };
    
});

    zipCodeString = '<ul>' + zipCodeString + '</ul>'
    console.log(zipCodeString);

    document.getElementById("zipcodeResults").innerHTML = zipCodeString;
    zipCodeString.className = "displayzips";

    // zipresults.appendChild(zipCodeString);
};

displayzips();