/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MapCoordinatesAndId = require('./map-coordinates-and-id');
var MapCoordinatesExtended = (function (_super) {
    __extends(MapCoordinatesExtended, _super);
    function MapCoordinatesExtended() {
        this.subAreaId = 0;
        _super.call(this);
    }
    MapCoordinatesExtended.prototype.getTypeId = function () {
        return MapCoordinatesExtended.ID;
    };
    MapCoordinatesExtended.prototype.reset = function () {
        this.subAreaId = 0;
    };
    MapCoordinatesExtended.prototype.serialize = function (param1) {
        this.serializeAs_MapCoordinatesExtended(param1);
    };
    MapCoordinatesExtended.prototype.serializeAs_MapCoordinatesExtended = function (param1) {
        _super.prototype.serializeAs_MapCoordinatesAndId.call(this, param1);
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
    };
    MapCoordinatesExtended.prototype.deserialize = function (param1) {
        this.deserializeAs_MapCoordinatesExtended(param1);
    };
    MapCoordinatesExtended.prototype.deserializeAs_MapCoordinatesExtended = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of MapCoordinatesExtended.subAreaId.');
        }
    };
    MapCoordinatesExtended.ID = 176;
    return MapCoordinatesExtended;
})(MapCoordinatesAndId);
module.exports = MapCoordinatesExtended;
