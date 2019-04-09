var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {

    center: { lat: 37.871, lng: -122.272747 },
    zoom: 12,

  });

  const geocoder = new google.maps.Geocoder;

  map.data.addListener("click", function(event) {

    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    const latlng = `${lat},${lng}`

    geocodeLatLng(geocoder, latlng);
  });

  map.data.loadGeoJson('https://gist.githubusercontent.com/JessieSidWho/390d018648b7c4a7cbe88deb813db0a7/raw/45879ff7bf33b9364e0cb8bfe3cddea7e53091e5/sfbay.geojson');

  

  // Color each letter gray. Change the color when the isColorful property
  // is set to true.
  map.data.setStyle(function(feature) {
    var color = 'white';
    // if (feature.getProperty('isColorful')) {
    //   color = feature.getProperty('color');
    // }
    return /** @type {!google.maps.Data.StyleOptions} */({
      fillColor: color,
      strokeColor: "grey",
      strokeWeight: 1,
      // strokeOpacity: 0.1
    });
  });

  // When the user clicks, set 'isColorful', changing the color of the letters.
  map.data.addListener('click', function(event) {
    event.feature.setProperty('isColorful', true);
  });

  // When the user hovers, tempt them to click by outlining the letters.
  // Call revertStyle() to remove all overrides. This will use the style rules
  // defined in the function passed to setStyle()
  map.data.addListener('mouseover', function(event) {
    map.data.revertStyle();
    map.data.overrideStyle(event.feature, {
      strokeWeight: 4,
      fillColor: "blue",
      // strokeOpacity: 0.5
    });
  });

  map.data.addListener('mouseout', function(event) {
    map.data.revertStyle();
  });

  // map.data.setStyle({});
}

function geocodeLatLng(geocoder, input) {
  const latlngStr = input.split(',', 2);
  const latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};

  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        const address = results[0].formatted_address.split(",");
        const stateNzip = address[2].toLowerCase().trim().split(" ");
        const city = address[1].toLowerCase().trim();
        const state = stateNzip[0];
        const zip = stateNzip[1];

        $.ajax({
          url: "/",
          method: "POST",
          contentType: "application/json",
          data: JSON.stringify({
            city,
            state,
            zip
          })
        }).then(result => {

          const url = `https://www.zillow.com/widgets/search/LargeSearchBoxWidget.htm?did=zillow-large-search-box-iframe-widget&type=iframe&rgname=${result.city}+${result.state}&shvi=yes`

          $("#widget").attr("src", url);
        }); 

      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}

