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
var GuildHouseUpdateInformationMessage = (function (_super) {
    __extends(GuildHouseUpdateInformationMessage, _super);
    function GuildHouseUpdateInformationMessage() {
        this.housesInformations = new HouseInformationsForGuild();
        _super.call(this);
    }
    GuildHouseUpdateInformationMessage.prototype.getMessageId = function () {
        return GuildHouseUpdateInformationMessage.ID;
    };
    GuildHouseUpdateInformationMessage.prototype.reset = function () {
        this.housesInformations = new HouseInformationsForGuild();
    };
    GuildHouseUpdateInformationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildHouseUpdateInformationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildHouseUpdateInformationMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildHouseUpdateInformationMessage(param1);
    };
    GuildHouseUpdateInformationMessage.prototype.serializeAs_GuildHouseUpdateInformationMessage = function (param1) {
        this.housesInformations.serializeAs_HouseInformationsForGuild(param1);
    };
    GuildHouseUpdateInformationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildHouseUpdateInformationMessage(param1);
    };
    GuildHouseUpdateInformationMessage.prototype.deserializeAs_GuildHouseUpdateInformationMessage = function (param1) {
        this.housesInformations = new HouseInformationsForGuild();
        this.housesInformations.deserialize(param1);
    };
    GuildHouseUpdateInformationMessage.ID = 6181;
    return GuildHouseUpdateInformationMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildHouseUpdateInformationMessage;
