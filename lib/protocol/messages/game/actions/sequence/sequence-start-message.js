/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SequenceStartMessage = (function (_super) {
    __extends(SequenceStartMessage, _super);
    function SequenceStartMessage() {
        this.sequenceType = 0;
        this.authorId = 0;
        _super.call(this);
    }
    SequenceStartMessage.prototype.getMessageId = function () {
        return SequenceStartMessage.ID;
    };
    SequenceStartMessage.prototype.reset = function () {
        this.sequenceType = 0;
        this.authorId = 0;
    };
    SequenceStartMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SequenceStartMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SequenceStartMessage.prototype.serialize = function (param1) {
        this.serializeAs_SequenceStartMessage(param1);
    };
    SequenceStartMessage.prototype.serializeAs_SequenceStartMessage = function (param1) {
        param1.writeByte(this.sequenceType);
        param1.writeInt(this.authorId);
    };
    SequenceStartMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SequenceStartMessage(param1);
    };
    SequenceStartMessage.prototype.deserializeAs_SequenceStartMessage = function (param1) {
        this.sequenceType = param1.readByte();
        this.authorId = param1.readInt();
    };
    SequenceStartMessage.ID = 955;
    return SequenceStartMessage;
})(network_message_1.NetworkMessage);
module.exports = SequenceStartMessage;
