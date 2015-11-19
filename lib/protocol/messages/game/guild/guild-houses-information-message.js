/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseInformationsForGuild = require('../../../types/game/house/house-informations-for-guild');
var GuildHousesInformationMessage = (function (_super) {
    __extends(GuildHousesInformationMessage, _super);
    function GuildHousesInformationMessage() {
        this.housesInformations = [];
        _super.call(this);
    }
    GuildHousesInformationMessage.prototype.getMessageId = function () {
        return GuildHousesInformationMessage.ID;
    };
    GuildHousesInformationMessage.prototype.reset = function () {
        this.housesInformations = [];
    };
    GuildHousesInformationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildHousesInformationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildHousesInformationMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildHousesInformationMessage(param1);
    };
    GuildHousesInformationMessage.prototype.serializeAs_GuildHousesInformationMessage = function (param1) {
        param1.writeShort(this.housesInformations.length);
        var _loc2_ = 0;
        while (_loc2_ < this.housesInformations.length) {
            (this.housesInformations[_loc2_]).serializeAs_HouseInformationsForGuild(param1);
            _loc2_++;
        }
    };
    GuildHousesInformationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildHousesInformationMessage(param1);
    };
    GuildHousesInformationMessage.prototype.deserializeAs_GuildHousesInformationMessage = function (param1) {
        var _loc4_ = null;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new HouseInformationsForGuild();
            _loc4_.deserialize(param1);
            this.housesInformations.push(_loc4_);
            _loc3_++;
        }
    };
    GuildHousesInformationMessage.ID = 5919;
    return GuildHousesInformationMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildHousesInformationMessage;
