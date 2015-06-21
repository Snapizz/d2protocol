var MapCoordinatesAndId = function() {
    this.mapId = 0;
};

require('util').inherits(MapCoordinatesAndId, require('./map-coordinates.js'));

module.exports = function() {
    return new MapCoordinatesAndId();
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
    this.deserializeAs_MapCoordinates(param1);
    this.mapId = param1.readInt();
};

MapCoordinatesAndId.prototype.getTypeId = function() {
    return 392;
};

MapCoordinatesAndId.prototype.getClassName = function() {
    return 'MapCoordinatesAndId';
};

module.exports.id = 392;
module.exports.MapCoordinatesAndId = MapCoordinatesAndId;