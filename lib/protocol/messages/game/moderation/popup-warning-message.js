/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PopupWarningMessage = (function (_super) {
    __extends(PopupWarningMessage, _super);
    function PopupWarningMessage() {
        this.lockDuration = 0;
        this.author = '';
        this.content = '';
        _super.call(this);
    }
    PopupWarningMessage.prototype.getMessageId = function () {
        return PopupWarningMessage.ID;
    };
    PopupWarningMessage.prototype.reset = function () {
        this.lockDuration = 0;
        this.author = '';
        this.content = '';
    };
    PopupWarningMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PopupWarningMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PopupWarningMessage.prototype.serialize = function (param1) {
        this.serializeAs_PopupWarningMessage(param1);
    };
    PopupWarningMessage.prototype.serializeAs_PopupWarningMessage = function (param1) {
        if (this.lockDuration < 0 || this.lockDuration > 255) {
            throw new Error('Forbidden value (' + this.lockDuration + ') on element lockDuration.');
        }
        param1.writeByte(this.lockDuration);
        param1.writeUTF(this.author);
        param1.writeUTF(this.content);
    };
    PopupWarningMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PopupWarningMessage(param1);
    };
    PopupWarningMessage.prototype.deserializeAs_PopupWarningMessage = function (param1) {
        this.lockDuration = param1.readUnsignedByte();
        if (this.lockDuration < 0 || this.lockDuration > 255) {
            throw new Error('Forbidden value (' + this.lockDuration + ') on element of PopupWarningMessage.lockDuration.');
        }
        this.author = param1.readUTF();
        this.content = param1.readUTF();
    };
    PopupWarningMessage.ID = 6134;
    return PopupWarningMessage;
})(network_message_1.NetworkMessage);
module.exports = PopupWarningMessage;
