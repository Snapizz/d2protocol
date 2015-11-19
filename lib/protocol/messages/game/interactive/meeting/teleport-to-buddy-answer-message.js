/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TeleportToBuddyAnswerMessage = (function (_super) {
    __extends(TeleportToBuddyAnswerMessage, _super);
    function TeleportToBuddyAnswerMessage() {
        this.dungeonId = 0;
        this.buddyId = 0;
        this.accept = false;
        _super.call(this);
    }
    TeleportToBuddyAnswerMessage.prototype.getMessageId = function () {
        return TeleportToBuddyAnswerMessage.ID;
    };
    TeleportToBuddyAnswerMessage.prototype.reset = function () {
        this.dungeonId = 0;
        this.buddyId = 0;
        this.accept = false;
    };
    TeleportToBuddyAnswerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TeleportToBuddyAnswerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TeleportToBuddyAnswerMessage.prototype.serialize = function (param1) {
        this.serializeAs_TeleportToBuddyAnswerMessage(param1);
    };
    TeleportToBuddyAnswerMessage.prototype.serializeAs_TeleportToBuddyAnswerMessage = function (param1) {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        if (this.buddyId < 0) {
            throw new Error('Forbidden value (' + this.buddyId + ') on element buddyId.');
        }
        param1.writeVarInt(this.buddyId);
        param1.writeBoolean(this.accept);
    };
    TeleportToBuddyAnswerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TeleportToBuddyAnswerMessage(param1);
    };
    TeleportToBuddyAnswerMessage.prototype.deserializeAs_TeleportToBuddyAnswerMessage = function (param1) {
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of TeleportToBuddyAnswerMessage.dungeonId.');
        }
        this.buddyId = param1.readVarUhInt();
        if (this.buddyId < 0) {
            throw new Error('Forbidden value (' + this.buddyId + ') on element of TeleportToBuddyAnswerMessage.buddyId.');
        }
        this.accept = param1.readBoolean();
    };
    TeleportToBuddyAnswerMessage.ID = 6293;
    return TeleportToBuddyAnswerMessage;
})(network_message_1.NetworkMessage);
module.exports = TeleportToBuddyAnswerMessage;
