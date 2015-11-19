/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuildFightJoinRequestMessage = (function (_super) {
    __extends(GuildFightJoinRequestMessage, _super);
    function GuildFightJoinRequestMessage() {
        this.taxCollectorId = 0;
        _super.call(this);
    }
    GuildFightJoinRequestMessage.prototype.getMessageId = function () {
        return GuildFightJoinRequestMessage.ID;
    };
    GuildFightJoinRequestMessage.prototype.reset = function () {
        this.taxCollectorId = 0;
    };
    GuildFightJoinRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuildFightJoinRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuildFightJoinRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuildFightJoinRequestMessage(param1);
    };
    GuildFightJoinRequestMessage.prototype.serializeAs_GuildFightJoinRequestMessage = function (param1) {
        param1.writeInt(this.taxCollectorId);
    };
    GuildFightJoinRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuildFightJoinRequestMessage(param1);
    };
    GuildFightJoinRequestMessage.prototype.deserializeAs_GuildFightJoinRequestMessage = function (param1) {
        this.taxCollectorId = param1.readInt();
    };
    GuildFightJoinRequestMessage.ID = 5717;
    return GuildFightJoinRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = GuildFightJoinRequestMessage;
