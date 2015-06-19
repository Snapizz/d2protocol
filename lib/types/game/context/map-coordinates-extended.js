var BaseMessage = require('./map-coordinates-and-id.js').class,
  util = require('util');

var MapCoordinatesExtended = function() {
  this.subAreaId = 0;
};

util.inherits(MapCoordinatesExtended, BaseMessage);

MapCoordinatesExtended.prototype.serialize = function(output) {
  this.serializeAs_MapCoordinatesExtended(output);
};

MapCoordinatesExtended.prototype.deserialize = function(input) {
  this.deserializeAs_MapCoordinatesExtended(input);
};

MapCoordinatesExtended.prototype.serializeAs_MapCoordinatesExtended = function(output) {
  this.serializeAs_MapCoordinatesAndId(output);
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element subAreaId.")));
  };
  output.writeVarShort(this.subAreaId);
};

MapCoordinatesExtended.prototype.deserializeAs_MapCoordinatesExtended = function(input) {
  this.deserialize(input);
  this.subAreaId = input.readVarUhShort();
  if (this.subAreaId < 0) {
    throw (new Error((("Forbidden value (" + this.subAreaId) + ") on element of MapCoordinatesExtended.subAreaId.")));
  };
};

MapCoordinatesExtended.prototype.getTypeId = function() {
  return 176;
};

MapCoordinatesExtended.prototype.getClassName = function() {
  return 'MapCoordinatesExtended';
};

module.exports.id = 176;
module.exports.class = MapCoordinatesExtended;