var BaseMessage = require('./map-coordinates.js').class,
  util = require('util');

var MapCoordinatesAndId = function() {
  this.mapId = 0;
};

util.inherits(MapCoordinatesAndId, BaseMessage);

MapCoordinatesAndId.prototype.serialize = function(output) {
  this.serializeAs_MapCoordinatesAndId(output);
};

MapCoordinatesAndId.prototype.deserialize = function(input) {
  this.deserializeAs_MapCoordinatesAndId(input);
};

MapCoordinatesAndId.prototype.serializeAs_MapCoordinatesAndId = function(output) {
  this.serializeAs_MapCoordinates(output);
  output.writeInt(this.mapId);
};

MapCoordinatesAndId.prototype.deserializeAs_MapCoordinatesAndId = function(input) {
  this.deserialize(input);
  this.mapId = input.readInt();
};

MapCoordinatesAndId.prototype.getTypeId = function() {
  return 392;
};

MapCoordinatesAndId.prototype.getClassName = function() {
  return 'MapCoordinatesAndId';
};

module.exports.id = 392;
module.exports.class = MapCoordinatesAndId;