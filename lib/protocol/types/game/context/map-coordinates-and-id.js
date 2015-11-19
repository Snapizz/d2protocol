/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MapCoordinates = require('./map-coordinates');
var MapCoordinatesAndId = (function (_super) {
    __extends(MapCoordinatesAndId, _super);
    function MapCoordinatesAndId() {
        this.mapId = 0;
        _super.call(this);
    }
    MapCoordinatesAndId.prototype.getTypeId = function () {
        return MapCoordinatesAndId.ID;
    };
    MapCoordinatesAndId.prototype.reset = function () {
        this.mapId = 0;
    };
    MapCoordinatesAndId.prototype.serialize = function (param1) {
        this.serializeAs_MapCoordinatesAndId(param1);
    };
    MapCoordinatesAndId.prototype.serializeAs_MapCoordinatesAndId = function (param1) {
        _super.prototype.serializeAs_MapCoordinates.call(this, param1);
        param1.writeInt(this.mapId);
    };
    MapCoordinatesAndId.prototype.deserialize = function (param1) {
        this.deserializeAs_MapCoordinatesAndId(param1);
    };
    MapCoordinatesAndId.prototype.deserializeAs_MapCoordinatesAndId = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.mapId = param1.readInt();
    };
    MapCoordinatesAndId.ID = 392;
    return MapCoordinatesAndId;
})(MapCoordinates);
module.exports = MapCoordinatesAndId;
