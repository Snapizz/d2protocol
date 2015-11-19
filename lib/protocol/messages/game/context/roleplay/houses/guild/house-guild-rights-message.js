/// <reference path="../../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildInformations = require('../../../../../../types/game/context/roleplay/guild-informations');
var HouseGuildRightsMessage = (function (_super) {
    __extends(HouseGuildRightsMessage, _super);
    function HouseGuildRightsMessage() {
        this.houseId = 0;
        this.guildInfo = new GuildInformations();
        this.rights = 0;
        _super.call(this);
    }
    HouseGuildRightsMessage.prototype.getMessageId = function () {
        return HouseGuildRightsMessage.ID;
    };
    HouseGuildRightsMessage.prototype.reset = function () {
        this.houseId = 0;
        this.guildInfo = new GuildInformations();
        this.rights = 0;
    };
    HouseGuildRightsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseGuildRightsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseGuildRightsMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseGuildRightsMessage(param1);
    };
    HouseGuildRightsMessage.prototype.serializeAs_HouseGuildRightsMessage = function (param1) {
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);
        this.guildInfo.serializeAs_GuildInformations(param1);
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element rights.');
        }
        param1.writeVarInt(this.rights);
    };
    HouseGuildRightsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseGuildRightsMessage(param1);
    };
    HouseGuildRightsMessage.prototype.deserializeAs_HouseGuildRightsMessage = function (param1) {
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of HouseGuildRightsMessage.houseId.');
        }
        this.guildInfo = new GuildInformations();
        this.guildInfo.deserialize(param1);
        this.rights = param1.readVarUhInt();
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element of HouseGuildRightsMessage.rights.');
        }
    };
    HouseGuildRightsMessage.ID = 5703;
    return HouseGuildRightsMessage;
})(network_message_1.NetworkMessage);
module.exports = HouseGuildRightsMessage;
