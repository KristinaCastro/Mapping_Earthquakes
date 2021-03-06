// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// create an airline route from SFO, AUS, YYZ to JFK
// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [30.1934, -97.6650],
    [43.6785, -79.6291],
    [40.6429, -73.7793]
  ];

// Create a polyline using the line coordinates and make the line route a blue dashed line.
L.polyline(line, {
    color: "blue",
    dashArray: "10 10",
    weight: 4,
    opacity: 0.5
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
