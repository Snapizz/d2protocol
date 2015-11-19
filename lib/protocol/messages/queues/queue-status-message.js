/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var QueueStatusMessage = (function (_super) {
    __extends(QueueStatusMessage, _super);
    function QueueStatusMessage() {
        this.position = 0;
        this.total = 0;
        _super.call(this);
    }
    QueueStatusMessage.prototype.getMessageId = function () {
        return QueueStatusMessage.ID;
    };
    QueueStatusMessage.prototype.reset = function () {
        this.position = 0;
        this.total = 0;
    };
    QueueStatusMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    QueueStatusMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    QueueStatusMessage.prototype.serialize = function (param1) {
        this.serializeAs_QueueStatusMessage(param1);
    };
    QueueStatusMessage.prototype.serializeAs_QueueStatusMessage = function (param1) {
        if (this.position < 0 || this.position > 65535) {
            throw new Error('Forbidden value (' + this.position + ') on element position.');
        }
        param1.writeShort(this.position);
        if (this.total < 0 || this.total > 65535) {
            throw new Error('Forbidden value (' + this.total + ') on element total.');
        }
        param1.writeShort(this.total);
    };
    QueueStatusMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_QueueStatusMessage(param1);
    };
    QueueStatusMessage.prototype.deserializeAs_QueueStatusMessage = function (param1) {
        this.position = param1.readUnsignedShort();
        if (this.position < 0 || this.position > 65535) {
            throw new Error('Forbidden value (' + this.position + ') on element of QueueStatusMessage.position.');
        }
        this.total = param1.readUnsignedShort();
        if (this.total < 0 || this.total > 65535) {
            throw new Error('Forbidden value (' + this.total + ') on element of QueueStatusMessage.total.');
        }
    };
    QueueStatusMessage.ID = 6100;
    return QueueStatusMessage;
})(network_message_1.NetworkMessage);
module.exports = QueueStatusMessage;
