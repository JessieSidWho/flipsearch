var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {

    center: { lat: 37.871, lng: -122.272747 },
    zoom: 12


    
  });

  map.data.loadGeoJson('https://gist.githubusercontent.com/JessieSidWho/390d018648b7c4a7cbe88deb813db0a7/raw/45879ff7bf33b9364e0cb8bfe3cddea7e53091e5/sfbay.geojson');
  
  var geocoder = new google.maps.Geocoder;
  // var infowindow = new google.maps.InfoWindow;

  const results = geocodeLatLng(geocoder);

  // console.log(results);
  // document.getElementById('submit').addEventListener('click', function() {
  //   geocodeLatLng(geocoder, map, infowindow);
  // });
}

function geocodeLatLng(geocoder) {
  // var input = document.getElementById('latlng').value;
  const input = `37.8716,-122.2727`; // Berkeley, CA
  var latlngStr = input.split(',', 2);
  var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};

  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {

        console.log(results);

        console.log(results[0].address_components[2].long_name); // city
        console.log(results[0].address_components[4].long_name); // state
        console.log(results[0].address_components[6].long_name); // zip code

        // return results;
        // map.setZoom(11);
        // var marker = new google.maps.Marker({
        //   position: latlng,
        //   map: map
        // });
        // infowindow.setContent(results[0].formatted_address);
        // infowindow.open(map, marker);
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}