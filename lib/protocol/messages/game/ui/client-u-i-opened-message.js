/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ClientUIOpenedMessage = (function (_super) {
    __extends(ClientUIOpenedMessage, _super);
    function ClientUIOpenedMessage() {
        this.type = 0;
        _super.call(this);
    }
    ClientUIOpenedMessage.prototype.getMessageId = function () {
        return ClientUIOpenedMessage.ID;
    };
    ClientUIOpenedMessage.prototype.reset = function () {
        this.type = 0;
    };
    ClientUIOpenedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ClientUIOpenedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ClientUIOpenedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ClientUIOpenedMessage(param1);
    };
    ClientUIOpenedMessage.prototype.serializeAs_ClientUIOpenedMessage = function (param1) {
        param1.writeByte(this.type);
    };
    ClientUIOpenedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ClientUIOpenedMessage(param1);
    };
    ClientUIOpenedMessage.prototype.deserializeAs_ClientUIOpenedMessage = function (param1) {
        this.type = param1.readByte();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of ClientUIOpenedMessage.type.');
        }
    };
    ClientUIOpenedMessage.ID = 6459;
    return ClientUIOpenedMessage;
})(network_message_1.NetworkMessage);
module.exports = ClientUIOpenedMessage;
