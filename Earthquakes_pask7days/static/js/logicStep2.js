// Add console.log to check to see if our code is working
console.log("working")




// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {

  // We turn each feature (ie recorded earthquake) into a circleMarker on the map.
  
  pointToLayer: function(feature, latlng) {
              console.log(data);
              return L.circleMarker(latlng);
          },
      }).addTo(map);
 

// Grabbing our GeoJSON data.
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson').then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});







