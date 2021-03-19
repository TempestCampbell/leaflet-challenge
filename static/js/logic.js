var grayMap= L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/light-v10",
      accessToken: API_KEY
    }
);

var mapUS = L.map("map-id", {
    center: [
        40, -95

    ],
    zoom:2.9
});

//Tile layer to map
grayMap.addTo(mapUS);

//earthquake geoJSON data
d3.json(https:"//earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson", function(data){

//Functions to find color and radius
function styleInfo(feature){
    return {
        opacity: 1,
        fillOpacity:1,

    }

}







})