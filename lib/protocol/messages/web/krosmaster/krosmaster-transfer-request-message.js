/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var KrosmasterTransferRequestMessage = (function (_super) {
    __extends(KrosmasterTransferRequestMessage, _super);
    function KrosmasterTransferRequestMessage() {
        this.uid = '';
        _super.call(this);
    }
    KrosmasterTransferRequestMessage.prototype.getMessageId = function () {
        return KrosmasterTransferRequestMessage.ID;
    };
    KrosmasterTransferRequestMessage.prototype.reset = function () {
        this.uid = '';
    };
    KrosmasterTransferRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    KrosmasterTransferRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    KrosmasterTransferRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_KrosmasterTransferRequestMessage(param1);
    };
    KrosmasterTransferRequestMessage.prototype.serializeAs_KrosmasterTransferRequestMessage = function (param1) {
        param1.writeUTF(this.uid);
    };
    KrosmasterTransferRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_KrosmasterTransferRequestMessage(param1);
    };
    KrosmasterTransferRequestMessage.prototype.deserializeAs_KrosmasterTransferRequestMessage = function (param1) {
        this.uid = param1.readUTF();
    };
    KrosmasterTransferRequestMessage.ID = 6349;
    return KrosmasterTransferRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = KrosmasterTransferRequestMessage;
