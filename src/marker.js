// Activity - Hotel - Restaurant Pins
const mapboxgl = require('mapbox-gl');

const iconURLs = {
  hotels: 'http://i.imgur.com/D9574Cu.png',
  restaurants: 'http://i.imgur.com/cqR6pUI.png',
  activities: 'http://i.imgur.com/WbMOfMl.png',
};

const buildMarker = (type, coords) => {
  const pin = document.createElement('div');
  pin.style.width = '32px';
  pin.style.height = '39px';
  pin.style.backgroundImage = 'url(' + iconURLs[type] + ')';

  return new mapboxgl.Marker(pin).setLngLat(coords);
};

module.exports = buildMarker;
