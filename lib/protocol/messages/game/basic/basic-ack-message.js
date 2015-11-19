/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var BasicAckMessage = (function (_super) {
    __extends(BasicAckMessage, _super);
    function BasicAckMessage() {
        this.seq = 0;
        this.lastPacketId = 0;
        _super.call(this);
    }
    BasicAckMessage.prototype.getMessageId = function () {
        return BasicAckMessage.ID;
    };
    BasicAckMessage.prototype.reset = function () {
        this.seq = 0;
        this.lastPacketId = 0;
    };
    BasicAckMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    BasicAckMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    BasicAckMessage.prototype.serialize = function (param1) {
        this.serializeAs_BasicAckMessage(param1);
    };
    BasicAckMessage.prototype.serializeAs_BasicAckMessage = function (param1) {
        if (this.seq < 0) {
            throw new Error('Forbidden value (' + this.seq + ') on element seq.');
        }
        param1.writeVarInt(this.seq);
        if (this.lastPacketId < 0) {
            throw new Error('Forbidden value (' + this.lastPacketId + ') on element lastPacketId.');
        }
        param1.writeVarShort(this.lastPacketId);
    };
    BasicAckMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_BasicAckMessage(param1);
    };
    BasicAckMessage.prototype.deserializeAs_BasicAckMessage = function (param1) {
        this.seq = param1.readVarUhInt();
        if (this.seq < 0) {
            throw new Error('Forbidden value (' + this.seq + ') on element of BasicAckMessage.seq.');
        }
        this.lastPacketId = param1.readVarUhShort();
        if (this.lastPacketId < 0) {
            throw new Error('Forbidden value (' + this.lastPacketId + ') on element of BasicAckMessage.lastPacketId.');
        }
    };
    BasicAckMessage.ID = 6362;
    return BasicAckMessage;
})(network_message_1.NetworkMessage);
module.exports = BasicAckMessage;
