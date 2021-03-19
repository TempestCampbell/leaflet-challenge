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

var mapUS = L.mapUS("map-id", {
    center: [
        40, -95

    ],
    zoom:2.9
});

//Tile layer to map
grayMap.addTo(mapUS);

//earthquake geoJSON data
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson", function(data){

//Functions to find color and radius
function styleInfo(feature) {
    return {
        opacity: 1,
        fillOpacity:1,
        fillColor: getColor(feature.geometry.coordinates[2]),
        color:"#000000",
        radius:getRadius(feature.properties.mag),
        stroke:true,
        weight:0.5
    };
//Function to find color of marker depending on the size of the earthquake (red=large into green=small)


// #00893d, #cfe600, #e8d800, #fdba00, #ec8600, #eb5500, #d31100
// #008026, #ff5d45, #feb482, #ffe97a, #e5ff78, #b2ff65, #59ff3e
    function getColor(depth){
        switch(true) {
        case depth > 90:
            return "#ca3000";
        case depth > 70:
            return "#ff4c02";
        case depth > 50:
            return "#ff8237";
        case depth > 30:
            return "#ffd081";
        case depth > 10:
            return "#fdffa7";
        default:
            return "#b1fe7e";
        }
    }

//Function for figure out redius of the marker for the magnitude of the earthquake
    function getRadius(magnitude){
        if (magnitude === 0) {
            return 1;
        }
        return magnitude *4 ;
    }

//geoJSON Layer

    L.geoJSON(data, {
        Layer: function(feature, latlng){
            return L.cirleMarker(latlng);
        },
        style: styleInfo,

        onEachFeature: function(feature, layer) {
            layer.bindPopup(
                "Magnitude"
                + feature.properties.mag
                +"<br>Depth"
                +feature.geometry.coordinate[2]
                +"<br>Location"
                +features.properties.place
            );
        }
    }).addTo(mapUS);











    }

})