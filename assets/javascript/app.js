require(`dotenv`).config();

const keys = require(`../../config/keys`);

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {

    center: { lat: 37.871, lng: -122.272747 },
    zoom: 12


  });

  map.data.loadGeoJson('https://gist.githubusercontent.com/JessieSidWho/390d018648b7c4a7cbe88deb813db0a7/raw/45879ff7bf33b9364e0cb8bfe3cddea7e53091e5/sfbay.geojson');

  // map.data.setStyle({
  //   fillColor: '#2687bf',
  //   fillOpacity: .3,
  //   strokeWeight: 0
  // })

}

$("body").append(`<script src="https://maps.googleapis.com/maps/api/js?key=${keys.google.api}&callback=initMap">`)