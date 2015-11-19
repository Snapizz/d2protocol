/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SequenceEndMessage = (function (_super) {
    __extends(SequenceEndMessage, _super);
    function SequenceEndMessage() {
        this.actionId = 0;
        this.authorId = 0;
        this.sequenceType = 0;
        _super.call(this);
    }
    SequenceEndMessage.prototype.getMessageId = function () {
        return SequenceEndMessage.ID;
    };
    SequenceEndMessage.prototype.reset = function () {
        this.actionId = 0;
        this.authorId = 0;
        this.sequenceType = 0;
    };
    SequenceEndMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SequenceEndMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SequenceEndMessage.prototype.serialize = function (param1) {
        this.serializeAs_SequenceEndMessage(param1);
    };
    SequenceEndMessage.prototype.serializeAs_SequenceEndMessage = function (param1) {
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element actionId.');
        }
        param1.writeVarShort(this.actionId);
        param1.writeInt(this.authorId);
        param1.writeByte(this.sequenceType);
    };
    SequenceEndMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SequenceEndMessage(param1);
    };
    SequenceEndMessage.prototype.deserializeAs_SequenceEndMessage = function (param1) {
        this.actionId = param1.readVarUhShort();
        if (this.actionId < 0) {
            throw new Error('Forbidden value (' + this.actionId + ') on element of SequenceEndMessage.actionId.');
        }
        this.authorId = param1.readInt();
        this.sequenceType = param1.readByte();
    };
    SequenceEndMessage.ID = 956;
    return SequenceEndMessage;
})(network_message_1.NetworkMessage);
module.exports = SequenceEndMessage;
