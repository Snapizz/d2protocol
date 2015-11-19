/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var MapCoordinatesExtended = require('./../map-coordinates-extended');
var AtlasPointsInformations = (function () {
    function AtlasPointsInformations() {
        this.type = 0;
        this.coords = [];
    }
    AtlasPointsInformations.prototype.getTypeId = function () {
        return AtlasPointsInformations.ID;
    };
    AtlasPointsInformations.prototype.reset = function () {
        this.type = 0;
        this.coords = [];
    };
    AtlasPointsInformations.prototype.serialize = function (param1) {
        this.serializeAs_AtlasPointsInformations(param1);
    };
    AtlasPointsInformations.prototype.serializeAs_AtlasPointsInformations = function (param1) {
        param1.writeByte(this.type);
        param1.writeShort(this.coords.length);
        var _loc2_ = 0;
        while (_loc2_ < this.coords.length) {
            (this.coords[_loc2_]).serializeAs_MapCoordinatesExtended(param1);
            _loc2_++;
        }
    };
    AtlasPointsInformations.prototype.deserialize = function (param1) {
        this.deserializeAs_AtlasPointsInformations(param1);
    };
    AtlasPointsInformations.prototype.deserializeAs_AtlasPointsInformations = function (param1) {
        var _loc4_ = null;
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of AtlasPointsInformations.type.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new MapCoordinatesExtended();
            _loc4_.deserialize(param1);
            this.coords.push(_loc4_);
            _loc3_++;
        }
    };
    AtlasPointsInformations.ID = 175;
    return AtlasPointsInformations;
})();
module.exports = AtlasPointsInformations;
