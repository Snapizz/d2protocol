/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismsListRegisterMessage = (function (_super) {
    __extends(PrismsListRegisterMessage, _super);
    function PrismsListRegisterMessage() {
        this.listen = 0;
        _super.call(this);
    }
    PrismsListRegisterMessage.prototype.getMessageId = function () {
        return PrismsListRegisterMessage.ID;
    };
    PrismsListRegisterMessage.prototype.reset = function () {
        this.listen = 0;
    };
    PrismsListRegisterMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismsListRegisterMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismsListRegisterMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismsListRegisterMessage(param1);
    };
    PrismsListRegisterMessage.prototype.serializeAs_PrismsListRegisterMessage = function (param1) {
        param1.writeByte(this.listen);
    };
    PrismsListRegisterMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismsListRegisterMessage(param1);
    };
    PrismsListRegisterMessage.prototype.deserializeAs_PrismsListRegisterMessage = function (param1) {
        this.listen = param1.readByte();
        if (this.listen < 0) {
            throw new Error('Forbidden value (' + this.listen + ') on element of PrismsListRegisterMessage.listen.');
        }
    };
    PrismsListRegisterMessage.ID = 6441;
    return PrismsListRegisterMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismsListRegisterMessage;
