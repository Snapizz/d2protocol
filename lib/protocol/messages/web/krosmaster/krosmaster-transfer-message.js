/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var KrosmasterTransferMessage = (function (_super) {
    __extends(KrosmasterTransferMessage, _super);
    function KrosmasterTransferMessage() {
        this.uid = '';
        this.failure = 0;
        _super.call(this);
    }
    KrosmasterTransferMessage.prototype.getMessageId = function () {
        return KrosmasterTransferMessage.ID;
    };
    KrosmasterTransferMessage.prototype.reset = function () {
        this.uid = '';
        this.failure = 0;
    };
    KrosmasterTransferMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    KrosmasterTransferMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    KrosmasterTransferMessage.prototype.serialize = function (param1) {
        this.serializeAs_KrosmasterTransferMessage(param1);
    };
    KrosmasterTransferMessage.prototype.serializeAs_KrosmasterTransferMessage = function (param1) {
        param1.writeUTF(this.uid);
        param1.writeByte(this.failure);
    };
    KrosmasterTransferMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_KrosmasterTransferMessage(param1);
    };
    KrosmasterTransferMessage.prototype.deserializeAs_KrosmasterTransferMessage = function (param1) {
        this.uid = param1.readUTF();
        this.failure = param1.readByte();
        if (this.failure < 0) {
            throw new Error('Forbidden value (' + this.failure + ') on element of KrosmasterTransferMessage.failure.');
        }
    };
    KrosmasterTransferMessage.ID = 6348;
    return KrosmasterTransferMessage;
})(network_message_1.NetworkMessage);
module.exports = KrosmasterTransferMessage;
