/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MapComplementaryInformationsDataMessage = require('./map-complementary-informations-data-message');
var MapComplementaryInformationsWithCoordsMessage = (function (_super) {
    __extends(MapComplementaryInformationsWithCoordsMessage, _super);
    function MapComplementaryInformationsWithCoordsMessage() {
        this.worldX = 0;
        this.worldY = 0;
        _super.call(this);
    }
    MapComplementaryInformationsWithCoordsMessage.prototype.getMessageId = function () {
        return MapComplementaryInformationsWithCoordsMessage.ID;
    };
    MapComplementaryInformationsWithCoordsMessage.prototype.reset = function () {
        this.worldX = 0;
        this.worldY = 0;
    };
    MapComplementaryInformationsWithCoordsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MapComplementaryInformationsWithCoordsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MapComplementaryInformationsWithCoordsMessage.prototype.serialize = function (param1) {
        this.serializeAs_MapComplementaryInformationsWithCoordsMessage(param1);
    };
    MapComplementaryInformationsWithCoordsMessage.prototype.serializeAs_MapComplementaryInformationsWithCoordsMessage = function (param1) {
        _super.prototype.serializeAs_MapComplementaryInformationsDataMessage.call(this, param1);
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element worldX.');
        }
        param1.writeShort(this.worldX);
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element worldY.');
        }
        param1.writeShort(this.worldY);
    };
    MapComplementaryInformationsWithCoordsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MapComplementaryInformationsWithCoordsMessage(param1);
    };
    MapComplementaryInformationsWithCoordsMessage.prototype.deserializeAs_MapComplementaryInformationsWithCoordsMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.worldX = param1.readShort();
        if (this.worldX < -255 || this.worldX > 255) {
            throw new Error('Forbidden value (' + this.worldX + ') on element of MapComplementaryInformationsWithCoordsMessage.worldX.');
        }
        this.worldY = param1.readShort();
        if (this.worldY < -255 || this.worldY > 255) {
            throw new Error('Forbidden value (' + this.worldY + ') on element of MapComplementaryInformationsWithCoordsMessage.worldY.');
        }
    };
    MapComplementaryInformationsWithCoordsMessage.ID = 6268;
    return MapComplementaryInformationsWithCoordsMessage;
})(MapComplementaryInformationsDataMessage);
module.exports = MapComplementaryInformationsWithCoordsMessage;
