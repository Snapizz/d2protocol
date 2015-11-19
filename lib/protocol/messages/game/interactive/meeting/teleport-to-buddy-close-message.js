/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var TeleportToBuddyCloseMessage = (function (_super) {
    __extends(TeleportToBuddyCloseMessage, _super);
    function TeleportToBuddyCloseMessage() {
        this.dungeonId = 0;
        this.buddyId = 0;
        _super.call(this);
    }
    TeleportToBuddyCloseMessage.prototype.getMessageId = function () {
        return TeleportToBuddyCloseMessage.ID;
    };
    TeleportToBuddyCloseMessage.prototype.reset = function () {
        this.dungeonId = 0;
        this.buddyId = 0;
    };
    TeleportToBuddyCloseMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    TeleportToBuddyCloseMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    TeleportToBuddyCloseMessage.prototype.serialize = function (param1) {
        this.serializeAs_TeleportToBuddyCloseMessage(param1);
    };
    TeleportToBuddyCloseMessage.prototype.serializeAs_TeleportToBuddyCloseMessage = function (param1) {
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element dungeonId.');
        }
        param1.writeVarShort(this.dungeonId);
        if (this.buddyId < 0) {
            throw new Error('Forbidden value (' + this.buddyId + ') on element buddyId.');
        }
        param1.writeVarInt(this.buddyId);
    };
    TeleportToBuddyCloseMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_TeleportToBuddyCloseMessage(param1);
    };
    TeleportToBuddyCloseMessage.prototype.deserializeAs_TeleportToBuddyCloseMessage = function (param1) {
        this.dungeonId = param1.readVarUhShort();
        if (this.dungeonId < 0) {
            throw new Error('Forbidden value (' + this.dungeonId + ') on element of TeleportToBuddyCloseMessage.dungeonId.');
        }
        this.buddyId = param1.readVarUhInt();
        if (this.buddyId < 0) {
            throw new Error('Forbidden value (' + this.buddyId + ') on element of TeleportToBuddyCloseMessage.buddyId.');
        }
    };
    TeleportToBuddyCloseMessage.ID = 6303;
    return TeleportToBuddyCloseMessage;
})(network_message_1.NetworkMessage);
module.exports = TeleportToBuddyCloseMessage;
