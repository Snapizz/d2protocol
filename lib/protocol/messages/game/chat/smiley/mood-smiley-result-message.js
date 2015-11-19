/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MoodSmileyResultMessage = (function (_super) {
    __extends(MoodSmileyResultMessage, _super);
    function MoodSmileyResultMessage() {
        this.resultCode = 1;
        this.smileyId = 0;
        _super.call(this);
    }
    MoodSmileyResultMessage.prototype.getMessageId = function () {
        return MoodSmileyResultMessage.ID;
    };
    MoodSmileyResultMessage.prototype.reset = function () {
        this.resultCode = 1;
        this.smileyId = 0;
    };
    MoodSmileyResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MoodSmileyResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MoodSmileyResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_MoodSmileyResultMessage(param1);
    };
    MoodSmileyResultMessage.prototype.serializeAs_MoodSmileyResultMessage = function (param1) {
        param1.writeByte(this.resultCode);
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element smileyId.');
        }
        param1.writeVarShort(this.smileyId);
    };
    MoodSmileyResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MoodSmileyResultMessage(param1);
    };
    MoodSmileyResultMessage.prototype.deserializeAs_MoodSmileyResultMessage = function (param1) {
        this.resultCode = param1.readByte();
        if (this.resultCode < 0) {
            throw new Error('Forbidden value (' + this.resultCode + ') on element of MoodSmileyResultMessage.resultCode.');
        }
        this.smileyId = param1.readVarUhShort();
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element of MoodSmileyResultMessage.smileyId.');
        }
    };
    MoodSmileyResultMessage.ID = 6196;
    return MoodSmileyResultMessage;
})(network_message_1.NetworkMessage);
module.exports = MoodSmileyResultMessage;
