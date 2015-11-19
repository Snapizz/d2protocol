/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildFightLeaveRequestMessage = (function (_super) {
    __extends(GuildFightLeaveRequestMessage, _super);
    function GuildFightLeaveRequestMessage() {
        this.taxCollectorId = 0;
        this.characterId = 0;
        _super.call(this);
    }
    GuildFightLeaveRequestMessage.prototype.getMessageId = function () {
        return GuildFightLeaveRequestMessage.ID;
    };
    GuildFightLeaveRequestMessage.prototype.reset = function () {
        this.taxCollectorId = 0;
        this.characterId = 0;
    };
    GuildFightLeaveRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildFightLeaveRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildFightLeaveRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildFightLeaveRequestMessage(param1);
    };
    GuildFightLeaveRequestMessage.prototype.serializeAs_GuildFightLeaveRequestMessage = function (param1) {
        if (this.taxCollectorId < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorId + ') on element taxCollectorId.');
        }
        param1.writeInt(this.taxCollectorId);
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element characterId.');
        }
        param1.writeVarInt(this.characterId);
    };
    GuildFightLeaveRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildFightLeaveRequestMessage(param1);
    };
    GuildFightLeaveRequestMessage.prototype.deserializeAs_GuildFightLeaveRequestMessage = function (param1) {
        this.taxCollectorId = param1.readInt();
        if (this.taxCollectorId < 0) {
            throw new Error('Forbidden value (' + this.taxCollectorId + ') on element of GuildFightLeaveRequestMessage.taxCollectorId.');
        }
        this.characterId = param1.readVarUhInt();
        if (this.characterId < 0) {
            throw new Error('Forbidden value (' + this.characterId + ') on element of GuildFightLeaveRequestMessage.characterId.');
        }
    };
    GuildFightLeaveRequestMessage.ID = 5715;
    return GuildFightLeaveRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildFightLeaveRequestMessage;
