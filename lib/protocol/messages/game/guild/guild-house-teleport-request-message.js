/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildHouseTeleportRequestMessage = (function (_super) {
    __extends(GuildHouseTeleportRequestMessage, _super);
    function GuildHouseTeleportRequestMessage() {
        this.houseId = 0;
        _super.call(this);
    }
    GuildHouseTeleportRequestMessage.prototype.getMessageId = function () {
        return GuildHouseTeleportRequestMessage.ID;
    };
    GuildHouseTeleportRequestMessage.prototype.reset = function () {
        this.houseId = 0;
    };
    GuildHouseTeleportRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildHouseTeleportRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildHouseTeleportRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildHouseTeleportRequestMessage(param1);
    };
    GuildHouseTeleportRequestMessage.prototype.serializeAs_GuildHouseTeleportRequestMessage = function (param1) {
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element houseId.');
        }
        param1.writeVarInt(this.houseId);
    };
    GuildHouseTeleportRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildHouseTeleportRequestMessage(param1);
    };
    GuildHouseTeleportRequestMessage.prototype.deserializeAs_GuildHouseTeleportRequestMessage = function (param1) {
        this.houseId = param1.readVarUhInt();
        if (this.houseId < 0) {
            throw new Error('Forbidden value (' + this.houseId + ') on element of GuildHouseTeleportRequestMessage.houseId.');
        }
    };
    GuildHouseTeleportRequestMessage.ID = 5712;
    return GuildHouseTeleportRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildHouseTeleportRequestMessage;
