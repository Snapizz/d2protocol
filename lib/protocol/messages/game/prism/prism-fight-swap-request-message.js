/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismFightSwapRequestMessage = (function (_super) {
    __extends(PrismFightSwapRequestMessage, _super);
    function PrismFightSwapRequestMessage() {
        this.subAreaId = 0;
        this.targetId = 0;
        _super.call(this);
    }
    PrismFightSwapRequestMessage.prototype.getMessageId = function () {
        return PrismFightSwapRequestMessage.ID;
    };
    PrismFightSwapRequestMessage.prototype.reset = function () {
        this.subAreaId = 0;
        this.targetId = 0;
    };
    PrismFightSwapRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismFightSwapRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismFightSwapRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismFightSwapRequestMessage(param1);
    };
    PrismFightSwapRequestMessage.prototype.serializeAs_PrismFightSwapRequestMessage = function (param1) {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element targetId.');
        }
        param1.writeVarInt(this.targetId);
    };
    PrismFightSwapRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismFightSwapRequestMessage(param1);
    };
    PrismFightSwapRequestMessage.prototype.deserializeAs_PrismFightSwapRequestMessage = function (param1) {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismFightSwapRequestMessage.subAreaId.');
        }
        this.targetId = param1.readVarUhInt();
        if (this.targetId < 0) {
            throw new Error('Forbidden value (' + this.targetId + ') on element of PrismFightSwapRequestMessage.targetId.');
        }
    };
    PrismFightSwapRequestMessage.ID = 5901;
    return PrismFightSwapRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismFightSwapRequestMessage;
