/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MoodSmileyUpdateMessage = (function (_super) {
    __extends(MoodSmileyUpdateMessage, _super);
    function MoodSmileyUpdateMessage() {
        this.accountId = 0;
        this.playerId = 0;
        this.smileyId = 0;
        _super.call(this);
    }
    MoodSmileyUpdateMessage.prototype.getMessageId = function () {
        return MoodSmileyUpdateMessage.ID;
    };
    MoodSmileyUpdateMessage.prototype.reset = function () {
        this.accountId = 0;
        this.playerId = 0;
        this.smileyId = 0;
    };
    MoodSmileyUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MoodSmileyUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MoodSmileyUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_MoodSmileyUpdateMessage(param1);
    };
    MoodSmileyUpdateMessage.prototype.serializeAs_MoodSmileyUpdateMessage = function (param1) {
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element accountId.');
        }
        param1.writeInt(this.accountId);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element smileyId.');
        }
        param1.writeVarShort(this.smileyId);
    };
    MoodSmileyUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MoodSmileyUpdateMessage(param1);
    };
    MoodSmileyUpdateMessage.prototype.deserializeAs_MoodSmileyUpdateMessage = function (param1) {
        this.accountId = param1.readInt();
        if (this.accountId < 0) {
            throw new Error('Forbidden value (' + this.accountId + ') on element of MoodSmileyUpdateMessage.accountId.');
        }
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of MoodSmileyUpdateMessage.playerId.');
        }
        this.smileyId = param1.readVarUhShort();
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element of MoodSmileyUpdateMessage.smileyId.');
        }
    };
    MoodSmileyUpdateMessage.ID = 6388;
    return MoodSmileyUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = MoodSmileyUpdateMessage;
