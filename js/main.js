var layer = new L.StamenTileLayer("toner");
var map = new L.Map("map", {
  center: new L.LatLng(47.218371, -1.7),
  zoom: 11
});
map.addLayer(layer);


var gpx = 'coueron_nantes.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(gpx, {
  async: true,
  marker_options: {
    startIconUrl: 'location.svg',
    endIconUrl: 'location.svg',
    shadowUrl: 'location-shadow.svg'
  }
}).on('loaded', function(e) {
  map.fitBounds(e.target.getBounds());
}).addTo(map);
