/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AllianceChangeGuildRightsMessage = (function (_super) {
    __extends(AllianceChangeGuildRightsMessage, _super);
    function AllianceChangeGuildRightsMessage() {
        this.guildId = 0;
        this.rights = 0;
        _super.call(this);
    }
    AllianceChangeGuildRightsMessage.prototype.getMessageId = function () {
        return AllianceChangeGuildRightsMessage.ID;
    };
    AllianceChangeGuildRightsMessage.prototype.reset = function () {
        this.guildId = 0;
        this.rights = 0;
    };
    AllianceChangeGuildRightsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AllianceChangeGuildRightsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AllianceChangeGuildRightsMessage.prototype.serialize = function (param1) {
        this.serializeAs_AllianceChangeGuildRightsMessage(param1);
    };
    AllianceChangeGuildRightsMessage.prototype.serializeAs_AllianceChangeGuildRightsMessage = function (param1) {
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element guildId.');
        }
        param1.writeVarInt(this.guildId);
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element rights.');
        }
        param1.writeByte(this.rights);
    };
    AllianceChangeGuildRightsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AllianceChangeGuildRightsMessage(param1);
    };
    AllianceChangeGuildRightsMessage.prototype.deserializeAs_AllianceChangeGuildRightsMessage = function (param1) {
        this.guildId = param1.readVarUhInt();
        if (this.guildId < 0) {
            throw new Error('Forbidden value (' + this.guildId + ') on element of AllianceChangeGuildRightsMessage.guildId.');
        }
        this.rights = param1.readByte();
        if (this.rights < 0) {
            throw new Error('Forbidden value (' + this.rights + ') on element of AllianceChangeGuildRightsMessage.rights.');
        }
    };
    AllianceChangeGuildRightsMessage.ID = 6426;
    return AllianceChangeGuildRightsMessage;
})(network_message_1.NetworkMessage);
module.exports = AllianceChangeGuildRightsMessage;
