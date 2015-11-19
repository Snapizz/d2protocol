/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ClientKeyMessage = (function (_super) {
    __extends(ClientKeyMessage, _super);
    function ClientKeyMessage() {
        this.key = '';
        _super.call(this);
    }
    ClientKeyMessage.prototype.getMessageId = function () {
        return ClientKeyMessage.ID;
    };
    ClientKeyMessage.prototype.reset = function () {
        this.key = '';
    };
    ClientKeyMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ClientKeyMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ClientKeyMessage.prototype.serialize = function (param1) {
        this.serializeAs_ClientKeyMessage(param1);
    };
    ClientKeyMessage.prototype.serializeAs_ClientKeyMessage = function (param1) {
        param1.writeUTF(this.key);
    };
    ClientKeyMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ClientKeyMessage(param1);
    };
    ClientKeyMessage.prototype.deserializeAs_ClientKeyMessage = function (param1) {
        this.key = param1.readUTF();
    };
    ClientKeyMessage.ID = 5607;
    return ClientKeyMessage;
})(network_message_1.NetworkMessage);
module.exports = ClientKeyMessage;
