var layer = new L.StamenTileLayer("toner");
var map = new L.Map("map", {
  center: new L.LatLng(47.2, -1.65),
  zoom: 12
});
map.addLayer(layer);

var LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: 'location-shadow.svg',
    iconSize:     [42, 42],
    shadowSize:   [42, 42],
    iconAnchor:   [21, 42],
    shadowAnchor: [21, 42],
    popupAnchor:  [0, -45]
  }
});

var locationStartIcon = new LeafIcon({iconUrl: 'location-start.svg'}),
  locationEndIcon = new LeafIcon({iconUrl: 'location-end.svg'});


var gpx = 'coueron_nantes.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(gpx, {
  async: true,
  marker_options: {
    startIconUrl: 'location-shadow.svg',
    endIconUrl: 'location-shadow.svg',
    shadowUrl: 'location-shadow.svg',
    iconSize: 0,
    clickable: false
  }
}).on('loaded', function(e) {
  // Noop
}).on('addpoint', function(e) {
  if(e.point_type == 'start') {
    L.marker([e.point._latlng.lat, e.point._latlng.lng], {icon: locationStartIcon}).addTo(map).bindPopup('<h4>Start</h4><p>Let\'s go!!!</p>');
  }
  else {
    L.marker([e.point._latlng.lat, e.point._latlng.lng], {icon: locationEndIcon}).addTo(map).bindPopup('<h4>Finish</h4><p>Congratulations !!!</p>');
  }

}).addTo(map);

