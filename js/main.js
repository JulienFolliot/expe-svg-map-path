var layer = new L.StamenTileLayer("toner");
var map = new L.Map("map", {
  center: new L.LatLng(47.218371, -1.7),
  zoom: 11
});
map.addLayer(layer);
