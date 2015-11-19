/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TeleportToBuddyOfferMessage = (function (_super) {
    __extends(TeleportToBuddyOfferMessage, _super);
    function TeleportToBuddyOfferMessage() {
        this.dungeonId = 0;
        this.buddyId = 0;
        this.timeLeft = 0;
        _super.call(this);
    }
    TeleportToBuddyOfferMessage.prototype.getMessageId = function () {
        return TeleportToBuddyOfferMessage.ID;
    };
    TeleportToBuddyOfferMessage.prototype.reset = function () {
        this.dungeonId = 0;
        this.buddyId = 0;
        this.timeLeft = 0;
    };
    TeleportToBuddyOfferMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TeleportToBuddyOfferMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TeleportToBuddyOfferMessage.prototype.serialize = function (param1) {
        this.serializeAs_TeleportToBuddyOfferMessage(param1);
    };
    TeleportToBuddyOfferMessage.prototype.serializeAs_TeleportToBuddyOfferMessage = function (param1) {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        if (this.buddyId < 0) {
            throw new Error('Forbidden value (' + this.buddyId + ') on element buddyId.');
        }
        param1.writeVarInt(this.buddyId);
        if (this.timeLeft < 0) {
            throw new Error('Forbidden value (' + this.timeLeft + ') on element timeLeft.');
        }
        param1.writeVarInt(this.timeLeft);
    };
    TeleportToBuddyOfferMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TeleportToBuddyOfferMessage(param1);
    };
    TeleportToBuddyOfferMessage.prototype.deserializeAs_TeleportToBuddyOfferMessage = function (param1) {
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of TeleportToBuddyOfferMessage.dungeonId.');
        }
        this.buddyId = param1.readVarUhInt();
        if (this.buddyId < 0) {
            throw new Error('Forbidden value (' + this.buddyId + ') on element of TeleportToBuddyOfferMessage.buddyId.');
        }
        this.timeLeft = param1.readVarUhInt();
        if (this.timeLeft < 0) {
            throw new Error('Forbidden value (' + this.timeLeft + ') on element of TeleportToBuddyOfferMessage.timeLeft.');
        }
    };
    TeleportToBuddyOfferMessage.ID = 6287;
    return TeleportToBuddyOfferMessage;
})(network_message_1.NetworkMessage);
module.exports = TeleportToBuddyOfferMessage;
