/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SequenceNumberMessage = (function (_super) {
    __extends(SequenceNumberMessage, _super);
    function SequenceNumberMessage() {
        this.number = 0;
        _super.call(this);
    }
    SequenceNumberMessage.prototype.getMessageId = function () {
        return SequenceNumberMessage.ID;
    };
    SequenceNumberMessage.prototype.reset = function () {
        this.number = 0;
    };
    SequenceNumberMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SequenceNumberMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SequenceNumberMessage.prototype.serialize = function (param1) {
        this.serializeAs_SequenceNumberMessage(param1);
    };
    SequenceNumberMessage.prototype.serializeAs_SequenceNumberMessage = function (param1) {
        if (this.number < 0 || this.number > 65535) {
            throw new Error('Forbidden value (' + this.number + ') on element number.');
        }
        param1.writeShort(this.number);
    };
    SequenceNumberMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SequenceNumberMessage(param1);
    };
    SequenceNumberMessage.prototype.deserializeAs_SequenceNumberMessage = function (param1) {
        this.number = param1.readUnsignedShort();
        if (this.number < 0 || this.number > 65535) {
            throw new Error('Forbidden value (' + this.number + ') on element of SequenceNumberMessage.number.');
        }
    };
    SequenceNumberMessage.ID = 6317;
    return SequenceNumberMessage;
})(network_message_1.NetworkMessage);
module.exports = SequenceNumberMessage;
