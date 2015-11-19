/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TeleportBuddiesMessage = (function (_super) {
    __extends(TeleportBuddiesMessage, _super);
    function TeleportBuddiesMessage() {
        this.dungeonId = 0;
        _super.call(this);
    }
    TeleportBuddiesMessage.prototype.getMessageId = function () {
        return TeleportBuddiesMessage.ID;
    };
    TeleportBuddiesMessage.prototype.reset = function () {
        this.dungeonId = 0;
    };
    TeleportBuddiesMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TeleportBuddiesMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TeleportBuddiesMessage.prototype.serialize = function (param1) {
        this.serializeAs_TeleportBuddiesMessage(param1);
    };
    TeleportBuddiesMessage.prototype.serializeAs_TeleportBuddiesMessage = function (param1) {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
    };
    TeleportBuddiesMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TeleportBuddiesMessage(param1);
    };
    TeleportBuddiesMessage.prototype.deserializeAs_TeleportBuddiesMessage = function (param1) {
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of TeleportBuddiesMessage.dungeonId.');
        }
    };
    TeleportBuddiesMessage.ID = 6289;
    return TeleportBuddiesMessage;
})(network_message_1.NetworkMessage);
module.exports = TeleportBuddiesMessage;
