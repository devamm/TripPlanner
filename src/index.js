const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
mapboxgl.accessToken =
  'pk.eyJ1IjoiaWNlbWFuNDkzIiwiYSI6ImNqa2s1NnE5YzFuaGwzeHFoYXVoMzRzZnYifQ.Fk_OLWQMYBxmDFRYTVat-Q';
const buildMarker = require('./marker.js');

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

let pin = document.createElement('div');
pin.style.width = '32px';
pin.style.height = '39px';
pin.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

const newMarker = new mapboxgl.Marker(pin)
  .setLngLat([-74.009, 40.705])
  .addTo(map);

const newHotel = buildMarker('hotels', [-74.012, 40.704]);
newHotel.addTo(map);
