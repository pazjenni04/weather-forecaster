# weather-forecaster

The objective of this webpage is to display the weather in an area the user inputs by zipcode.  When the user first navigates to the website, they will be presented with the a blank page, a search bar, the top instructions and the current time displayed.

![The first window the user will be presented with](https://raw.githubusercontent.com/pazjenni04/weather-forecaster/main/images/initial-image.PNG)

The user is instructed to enter a zipcode of their choosing in order to search for the current weather in that area.

![This image shows the resulted page when a user searches for a zipcode](images\search-results.PNG)

Once the user searches for a zipcode, the history of that zipcode will then display onto the page and save onto localstorage.  As the user continues to search for new zipcodes, the history of previous searched zipcodes will continue to build and appear.

![This image shows the history of the searches that the user previously entered.](images\zipcodes.PNG)

The user can continue to repeat the process and the screen should clear when a new zipcode is searched.  If the user attempts to search for a zipcode that is invalid, a modal will appear onto the page alerting the user that they attempted to search for an invalid zipcode and to attempt again.  Once the user clicks the 'close' button, they will be redirected to the first window so that they can continue entering new searches.

![This image shows the modal that prompts if the user attempts to search for an invalid zipcode](images\try-again.PNG)
