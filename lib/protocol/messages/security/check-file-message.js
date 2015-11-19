/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CheckFileMessage = (function (_super) {
    __extends(CheckFileMessage, _super);
    function CheckFileMessage() {
        this.filenameHash = '';
        this.type = 0;
        this.value = '';
        _super.call(this);
    }
    CheckFileMessage.prototype.getMessageId = function () {
        return CheckFileMessage.ID;
    };
    CheckFileMessage.prototype.reset = function () {
        this.filenameHash = '';
        this.type = 0;
        this.value = '';
    };
    CheckFileMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CheckFileMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CheckFileMessage.prototype.serialize = function (param1) {
        this.serializeAs_CheckFileMessage(param1);
    };
    CheckFileMessage.prototype.serializeAs_CheckFileMessage = function (param1) {
        param1.writeUTF(this.filenameHash);
        param1.writeByte(this.type);
        param1.writeUTF(this.value);
    };
    CheckFileMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CheckFileMessage(param1);
    };
    CheckFileMessage.prototype.deserializeAs_CheckFileMessage = function (param1) {
        this.filenameHash = param1.readUTF();
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of CheckFileMessage.type.');
        }
        this.value = param1.readUTF();
    };
    CheckFileMessage.ID = 6156;
    return CheckFileMessage;
})(network_message_1.NetworkMessage);
module.exports = CheckFileMessage;
