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


//created elements to display certain info from the API onto the page when the user searches
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

//eventlistener takes the value from the user's typed in zipcode
userInput.addEventListener("input", function() {
    console.log(userInput.value)

});



//when the user clicks on the search button, it will concatenate the url along with the user's input and should relocate the window with the results
function search(event) {
    event.preventDefault();

    var generatedUrl = requestURL+ "zip=" + userInput.value + ",us&units=imperial&icon&appid=11a183a9809c0b88f3ea75fbbf8c9613"
    
    fetch(generatedUrl) 
        // .then(response => response.json())
        .then(function (response){
            console.log(response)
            if (response.status === 400) {
            document.getElementById('myModal').style.display = "block";
            } return response.json();
        })
        .then(data => displayResults(data))


    saveToLocal();

};




function clearContent() {
    document.getElementById(searchResults).innerHTML = " "; //Need to set a for loop to clear whenever click search again
}






// Need to create a modalto not allow the user to click search and it add onto the array



//when you click on the search button, it will run the function getApi
document.getElementById("searchBtn").addEventListener("click", search);

 
//saves the users entered zip codes into local storage
var savedItem = JSON.parse(localStorage.getItem("zips")) || [];

function saveToLocal() {

    var cityzip = userInput.value

    savedItem.push(cityzip);

    if(cityzip){
        localStorage.setItem("zips", cityzip)
    }

    localStorage.setItem("zips", JSON.stringify(savedItem));

};

//displays the local storage onto the page for the user to see their history
function displayzips() {
    
    var zipCodes = JSON.parse(localStorage.getItem('zips'));
    var zipCodeString = ""; //created an empty string to push entered zip codes

    //created a for loop so that can create a bullet point everytime a zipcode is added onto the string
    zipCodes.forEach(function (zipcodes) {
    for(var i=0; i < zipCodes.length; i++){
          
    zipCodeString +='<li>'+ zipCodes[i] + '</li>';
    
    };
    
});

    zipCodeString = '<ul>' + zipCodeString + '</ul>'
    console.log(zipCodeString);

    document.getElementById("zipcodeResults").innerHTML = zipCodeString;  //displays the bullet points onto the webpage for the user to see their history
    zipCodeString.className = "displayzips";

};

displayzips();