var MapCoordinatesAndId = function() {
  this.mapId = 0;
};



MapCoordinatesAndId.prototype.serialize = function(output) {
  this.serializeAs_MapCoordinatesAndId(output);
};

MapCoordinatesAndId.prototype.deserialize = function(input) {
  this.deserializeAs_MapCoordinatesAndId(input);
};

MapCoordinatesAndId.prototype.serializeAs_MapCoordinatesAndId = function(param1) {
  this.serializeAs_MapCoordinates(param1);
  param1.writeInt(this.mapId);
};

MapCoordinatesAndId.prototype.deserializeAs_MapCoordinatesAndId = function(param1) {
  this.deserialize(param1);
  this.mapId = param1.readInt();
};

MapCoordinatesAndId.prototype.getTypeId = function() {
  return 392;
};

MapCoordinatesAndId.prototype.getClassName = function() {
  return 'MapCoordinatesAndId';
};

module.exports.id = 392;
module.exports.class = MapCoordinatesAndId;