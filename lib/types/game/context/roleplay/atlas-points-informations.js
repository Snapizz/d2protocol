var AtlasPointsInformations = module.exports = function() {
    this.type = 0;
    this.coords = [];

    return this;
};

AtlasPointsInformations.prototype.serialize = function(output) {
    this.serializeAs_AtlasPointsInformations(output);
};

AtlasPointsInformations.prototype.deserialize = function(input) {
    this.deserializeAs_AtlasPointsInformations(input);
};

AtlasPointsInformations.prototype.serializeAs_AtlasPointsInformations = function(param1) {
    param1.writeByte(this.type);
    param1.writeShort(this.coords.length);
    var _loc2_ = 0;
    while (_loc2_ < this.coords.length) {
        (this.coords[_loc2_]).serializeAs_MapCoordinatesExtended(param1);
        _loc2_++;
    }
};

AtlasPointsInformations.prototype.deserializeAs_AtlasPointsInformations = function(param1) {
    var _loc4_ = null;
    this.type = param1.readByte();
    if (this.type < 0) {
        throw new Error("Forbidden value (" + this.type + ") on element of AtlasPointsInformations.type.");
    } else {
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new MapCoordinatesExtended();
            _loc4_.deserialize(param1);
            this.coords.push(_loc4_);
            _loc3_++;
        }
        return;
    }
};

AtlasPointsInformations.prototype.getTypeId = function() {
    return 175;
};

AtlasPointsInformations.prototype.getClassName = function() {
    return 'AtlasPointsInformations';
};

module.exports.id = 175;