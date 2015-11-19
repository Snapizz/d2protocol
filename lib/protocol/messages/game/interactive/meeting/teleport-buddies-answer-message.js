/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TeleportBuddiesAnswerMessage = (function (_super) {
    __extends(TeleportBuddiesAnswerMessage, _super);
    function TeleportBuddiesAnswerMessage() {
        this.accept = false;
        _super.call(this);
    }
    TeleportBuddiesAnswerMessage.prototype.getMessageId = function () {
        return TeleportBuddiesAnswerMessage.ID;
    };
    TeleportBuddiesAnswerMessage.prototype.reset = function () {
        this.accept = false;
    };
    TeleportBuddiesAnswerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TeleportBuddiesAnswerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TeleportBuddiesAnswerMessage.prototype.serialize = function (param1) {
        this.serializeAs_TeleportBuddiesAnswerMessage(param1);
    };
    TeleportBuddiesAnswerMessage.prototype.serializeAs_TeleportBuddiesAnswerMessage = function (param1) {
        param1.writeBoolean(this.accept);
    };
    TeleportBuddiesAnswerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TeleportBuddiesAnswerMessage(param1);
    };
    TeleportBuddiesAnswerMessage.prototype.deserializeAs_TeleportBuddiesAnswerMessage = function (param1) {
        this.accept = param1.readBoolean();
    };
    TeleportBuddiesAnswerMessage.ID = 6294;
    return TeleportBuddiesAnswerMessage;
})(network_message_1.NetworkMessage);
module.exports = TeleportBuddiesAnswerMessage;
