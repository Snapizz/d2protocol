/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var MapCoordinates = (function () {
    function MapCoordinates() {
        this.worldX = 0;
        this.worldY = 0;
    }
    MapCoordinates.prototype.getTypeId = function () {
        return MapCoordinates.ID;
    };
    MapCoordinates.prototype.reset = function () {
        this.worldX = 0;
        this.worldY = 0;
    };
    MapCoordinates.prototype.serialize = function (param1) {
        this.serializeAs_MapCoordinates(param1);
    };
    MapCoordinates.prototype.serializeAs_MapCoordinates = function (param1) {
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
    };
    MapCoordinates.prototype.deserialize = function (param1) {
        this.deserializeAs_MapCoordinates(param1);
    };
    MapCoordinates.prototype.deserializeAs_MapCoordinates = function (param1) {
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of MapCoordinates.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of MapCoordinates.worldY.');
        }
    };
    MapCoordinates.ID = 174;
    return MapCoordinates;
})();
module.exports = MapCoordinates;
