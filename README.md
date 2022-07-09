TeamTreeHouse
Full Stack Java Script Tech Degree
Unit 7 React Photo Gallery using Flicker App

App.js is the main container - switch element, nest inside 3 routes for tags of the 3 default topics

Stateless components - Photo component that display the li and img elements - Nav component for the apps nav links - NotFound component that displays a user-friendly message when the search return no results

Statefull Component - seach form - photo container where data is managed with state - url should show the correnct path when you navigate with forward and back buttons
Flickr non comercial API key
config.js file imports API key inot the app that allows usr to request data from API - import to src/App.js

config and nodemodules added to .gitignore

React Router set routes: - "search" link - lets users search for photos - navLink - navigates user to correct route and displays the appropriate info - currentl rount is reflected in the URL - display 3 default topic links that return a list of photots matching it - sunsets - bts - thailand - request and load the photos for the 3 defaults topics when then the app first loads. dont need to re-request and reload new data everythime one of the pages is loaded

Requesting the Data - Fetch data from Flickr API - done in App.js - limit the num of results to 24 using the per_page argument - choose JSON as the output, "Do not sign call" - "call Method" see an example of the API call that we need to make - fetch data in container and pass it down to the display,the url bar will match what is displayed on the page if you use nav buttons

Search - includes a serach field and search route to search for new categories of imgs

Displaying the Data - each img gets a unique key prop - no console warning regarding key - provide the title of each img via props - current route is reflected in the URL - 24 img are displayed

CSS styles - match the general mockup
