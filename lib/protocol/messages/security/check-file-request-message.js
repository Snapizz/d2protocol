/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CheckFileRequestMessage = (function (_super) {
    __extends(CheckFileRequestMessage, _super);
    function CheckFileRequestMessage() {
        this.filename = '';
        this.type = 0;
        _super.call(this);
    }
    CheckFileRequestMessage.prototype.getMessageId = function () {
        return CheckFileRequestMessage.ID;
    };
    CheckFileRequestMessage.prototype.reset = function () {
        this.filename = '';
        this.type = 0;
    };
    CheckFileRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CheckFileRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CheckFileRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_CheckFileRequestMessage(param1);
    };
    CheckFileRequestMessage.prototype.serializeAs_CheckFileRequestMessage = function (param1) {
        param1.writeUTF(this.filename);
        param1.writeByte(this.type);
    };
    CheckFileRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CheckFileRequestMessage(param1);
    };
    CheckFileRequestMessage.prototype.deserializeAs_CheckFileRequestMessage = function (param1) {
        this.filename = param1.readUTF();
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of CheckFileRequestMessage.type.');
        }
    };
    CheckFileRequestMessage.ID = 6154;
    return CheckFileRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = CheckFileRequestMessage;
