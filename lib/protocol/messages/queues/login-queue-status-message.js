/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LoginQueueStatusMessage = (function (_super) {
    __extends(LoginQueueStatusMessage, _super);
    function LoginQueueStatusMessage() {
        this.position = 0;
        this.total = 0;
        _super.call(this);
    }
    LoginQueueStatusMessage.prototype.getMessageId = function () {
        return LoginQueueStatusMessage.ID;
    };
    LoginQueueStatusMessage.prototype.reset = function () {
        this.position = 0;
        this.total = 0;
    };
    LoginQueueStatusMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LoginQueueStatusMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LoginQueueStatusMessage.prototype.serialize = function (param1) {
        this.serializeAs_LoginQueueStatusMessage(param1);
    };
    LoginQueueStatusMessage.prototype.serializeAs_LoginQueueStatusMessage = function (param1) {
        if (this.position < 0 || this.position > 65535) {
            throw new Error('Forbidden value (' + this.position + ') on element position.');
        }
        param1.writeShort(this.position);
        if (this.total < 0 || this.total > 65535) {
            throw new Error('Forbidden value (' + this.total + ') on element total.');
        }
        param1.writeShort(this.total);
    };
    LoginQueueStatusMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LoginQueueStatusMessage(param1);
    };
    LoginQueueStatusMessage.prototype.deserializeAs_LoginQueueStatusMessage = function (param1) {
        this.position = param1.readUnsignedShort();
        if (this.position < 0 || this.position > 65535) {
            throw new Error('Forbidden value (' + this.position + ') on element of LoginQueueStatusMessage.position.');
        }
        this.total = param1.readUnsignedShort();
        if (this.total < 0 || this.total > 65535) {
            throw new Error('Forbidden value (' + this.total + ') on element of LoginQueueStatusMessage.total.');
        }
    };
    LoginQueueStatusMessage.ID = 10;
    return LoginQueueStatusMessage;
})(network_message_1.NetworkMessage);
module.exports = LoginQueueStatusMessage;
