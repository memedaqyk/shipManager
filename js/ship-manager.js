require(['esri/map', 'dojo/domReady!'], function(Map) {
  var map = new Map('map', {
    center: [-118, 34.5],
    zoom: 8,
    basemap: 'topo'
  });
});

var _map = document.getElementById('map');
_map.style.height = document.body.clientHeight - 45 + 'px';
console.log(document.body.clientHeight);
