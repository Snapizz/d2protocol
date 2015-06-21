var MapCoordinatesExtended = function() {
    this.subAreaId = 0;
};

require('util').inherits(MapCoordinatesExtended, require('./map-coordinates-and-id.js').class);

MapCoordinatesExtended.prototype.serialize = function(output) {
    this.serializeAs_MapCoordinatesExtended(output);
};

MapCoordinatesExtended.prototype.deserialize = function(input) {
    this.deserializeAs_MapCoordinatesExtended(input);
};

MapCoordinatesExtended.prototype.serializeAs_MapCoordinatesExtended = function(param1) {
    this.serializeAs_MapCoordinatesAndId(param1);
    if (this.subAreaId < 0) {
        throw new Error("Forbidden value (" + this.subAreaId + ") on element subAreaId.");
    } else {
        param1.writeVarShort(this.subAreaId);
        return;
    }
};

MapCoordinatesExtended.prototype.deserializeAs_MapCoordinatesExtended = function(param1) {
    this.deserializeAs_MapCoordinatesAndId(param1);
    this.subAreaId = param1.readVarUhShort();
    if (this.subAreaId < 0) {
        throw new Error("Forbidden value (" + this.subAreaId + ") on element of MapCoordinatesExtended.subAreaId.");
    } else {
        return;
    }
};

MapCoordinatesExtended.prototype.getTypeId = function() {
    return 176;
};

MapCoordinatesExtended.prototype.getClassName = function() {
    return 'MapCoordinatesExtended';
};

module.exports.id = 176;
module.exports.class = MapCoordinatesExtended;
module.exports.getInstance = function() {
    return new MapCoordinatesExtended;
};