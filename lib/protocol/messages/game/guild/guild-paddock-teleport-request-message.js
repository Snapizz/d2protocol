/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildPaddockTeleportRequestMessage = (function (_super) {
    __extends(GuildPaddockTeleportRequestMessage, _super);
    function GuildPaddockTeleportRequestMessage() {
        this.paddockId = 0;
        _super.call(this);
    }
    GuildPaddockTeleportRequestMessage.prototype.getMessageId = function () {
        return GuildPaddockTeleportRequestMessage.ID;
    };
    GuildPaddockTeleportRequestMessage.prototype.reset = function () {
        this.paddockId = 0;
    };
    GuildPaddockTeleportRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildPaddockTeleportRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildPaddockTeleportRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildPaddockTeleportRequestMessage(param1);
    };
    GuildPaddockTeleportRequestMessage.prototype.serializeAs_GuildPaddockTeleportRequestMessage = function (param1) {
        param1.writeInt(this.paddockId);
    };
    GuildPaddockTeleportRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildPaddockTeleportRequestMessage(param1);
    };
    GuildPaddockTeleportRequestMessage.prototype.deserializeAs_GuildPaddockTeleportRequestMessage = function (param1) {
        this.paddockId = param1.readInt();
    };
    GuildPaddockTeleportRequestMessage.ID = 5957;
    return GuildPaddockTeleportRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildPaddockTeleportRequestMessage;
