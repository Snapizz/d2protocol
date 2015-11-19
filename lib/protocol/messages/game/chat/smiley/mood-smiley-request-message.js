/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var MoodSmileyRequestMessage = (function (_super) {
    __extends(MoodSmileyRequestMessage, _super);
    function MoodSmileyRequestMessage() {
        this.smileyId = 0;
        _super.call(this);
    }
    MoodSmileyRequestMessage.prototype.getMessageId = function () {
        return MoodSmileyRequestMessage.ID;
    };
    MoodSmileyRequestMessage.prototype.reset = function () {
        this.smileyId = 0;
    };
    MoodSmileyRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    MoodSmileyRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    MoodSmileyRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_MoodSmileyRequestMessage(param1);
    };
    MoodSmileyRequestMessage.prototype.serializeAs_MoodSmileyRequestMessage = function (param1) {
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element smileyId.');
        }
        param1.writeVarShort(this.smileyId);
    };
    MoodSmileyRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_MoodSmileyRequestMessage(param1);
    };
    MoodSmileyRequestMessage.prototype.deserializeAs_MoodSmileyRequestMessage = function (param1) {
        this.smileyId = param1.readVarUhShort();
        if (this.smileyId < 0) {
            throw new Error('Forbidden value (' + this.smileyId + ') on element of MoodSmileyRequestMessage.smileyId.');
        }
    };
    MoodSmileyRequestMessage.ID = 6192;
    return MoodSmileyRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = MoodSmileyRequestMessage;
