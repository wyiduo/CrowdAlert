let map;
let crowds = new Map();
let location2;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: -74.0060 },
    zoom: 8
    
  });
}


function initAutocomplete() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: -74.0060 },
    zoom: 13,
    mapTypeId: "roadmap"
  });
  // Create the search box and link it to the UI element.
  const input = document.getElementById("pac-input");
  
  const searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  // Bias the SearchBox results towards current map's viewport.
  map.addListener("bounds_changed", () => {
    searchBox.setBounds(map.getBounds());
  });
  let markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    // Clear out the old markers.
    markers.forEach(marker => {
      marker.setMap(null);
    });
    markers = [];
    // For each place, get the icon, name and location.
    const bounds = new google.maps.LatLngBounds();
    places.forEach(place => {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };
      // Create a marker for each place.
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location
         
        })
        
      );
      location2 = place.name;
      updateMap(0);
      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
    
  });

  function updateMap( value){
        if(!crowds.has(location2)){
            crowds.set(location2, 0);
        }
        var danger = crowds.get(location2);
        if(value > danger){
          crowds.set(location2, value);
        }if(danger < 10){
          window.alert("This location is safe.");
        }if(danger >= 10 && danger < 50){
          window.alert("Caution is advised at this location");
        }if( danger >= 50){
          window.alert("Danger do not go to this location");
        }

  }
 
}
