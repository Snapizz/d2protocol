/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ConsoleMessage = (function (_super) {
    __extends(ConsoleMessage, _super);
    function ConsoleMessage() {
        this.type = 0;
        this.content = '';
        _super.call(this);
    }
    ConsoleMessage.prototype.getMessageId = function () {
        return ConsoleMessage.ID;
    };
    ConsoleMessage.prototype.reset = function () {
        this.type = 0;
        this.content = '';
    };
    ConsoleMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ConsoleMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ConsoleMessage.prototype.serialize = function (param1) {
        this.serializeAs_ConsoleMessage(param1);
    };
    ConsoleMessage.prototype.serializeAs_ConsoleMessage = function (param1) {
        param1.writeByte(this.type);
        param1.writeUTF(this.content);
    };
    ConsoleMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ConsoleMessage(param1);
    };
    ConsoleMessage.prototype.deserializeAs_ConsoleMessage = function (param1) {
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of ConsoleMessage.type.');
        }
        this.content = param1.readUTF();
    };
    ConsoleMessage.ID = 75;
    return ConsoleMessage;
})(network_message_1.NetworkMessage);
module.exports = ConsoleMessage;
