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
var HouseInformationsInside = require('../../../../types/game/house/house-informations-inside');
var MapComplementaryInformationsDataInHouseMessage = (function (_super) {
    __extends(MapComplementaryInformationsDataInHouseMessage, _super);
    function MapComplementaryInformationsDataInHouseMessage() {
        this.currentHouse = new HouseInformationsInside();
        _super.call(this);
    }
    MapComplementaryInformationsDataInHouseMessage.prototype.getMessageId = function () {
        return MapComplementaryInformationsDataInHouseMessage.ID;
    };
    MapComplementaryInformationsDataInHouseMessage.prototype.reset = function () {
        this.currentHouse = new HouseInformationsInside();
    };
    MapComplementaryInformationsDataInHouseMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MapComplementaryInformationsDataInHouseMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MapComplementaryInformationsDataInHouseMessage.prototype.serialize = function (param1) {
        this.serializeAs_MapComplementaryInformationsDataInHouseMessage(param1);
    };
    MapComplementaryInformationsDataInHouseMessage.prototype.serializeAs_MapComplementaryInformationsDataInHouseMessage = function (param1) {
        _super.prototype.serializeAs_MapComplementaryInformationsDataMessage.call(this, param1);
        this.currentHouse.serializeAs_HouseInformationsInside(param1);
    };
    MapComplementaryInformationsDataInHouseMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MapComplementaryInformationsDataInHouseMessage(param1);
    };
    MapComplementaryInformationsDataInHouseMessage.prototype.deserializeAs_MapComplementaryInformationsDataInHouseMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.currentHouse = new HouseInformationsInside();
        this.currentHouse.deserialize(param1);
    };
    MapComplementaryInformationsDataInHouseMessage.ID = 6130;
    return MapComplementaryInformationsDataInHouseMessage;
})(MapComplementaryInformationsDataMessage);
module.exports = MapComplementaryInformationsDataInHouseMessage;
