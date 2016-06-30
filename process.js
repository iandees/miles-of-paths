var createRuler = require('cheap-ruler');

module.exports = function(data, tile, writeData, done) {
  var ruler = createRuler.fromTile(tile[1], tile[2]);
  var length = 0;
  data.na.osm.features.filter(function(val) {
    return (
         val.geometry.type == 'LineString' 
      && val.properties.highway 
      && (val.properties.highway == 'footway' || val.properties.highway == 'cycleway')
    );
  }).forEach(function(way){
    length += ruler.lineDistance(way.geometry.coordinates);
  });
  done(null, length);
};
