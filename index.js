var tileReduce = require('tile-reduce');
var path = require('path');

var length = 0.0;

tileReduce({
  zoom: 12,
  map: path.join(__dirname, 'process.js'),
  //bbox: [-88.0087, 43.0466, -87.8491, 43.1222],
  sources: [
    {name: 'na', mbtiles: 'united_states_of_america.mbtiles'}
  ]
})
/*.on('start', function() {
  console.log('Starting');
})
.on('map', function(tile, wkid) {
  console.log('about to process ' + JSON.stringify(tile) +' on worker '+wkid);
})*/
.on('reduce', function(len) {
  length += len;
})
.on('end', function() {
  console.log('Feature length: %d', length);
});
