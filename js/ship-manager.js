var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 31.86, lng: 117.27},
    zoom: 8
  });
}
