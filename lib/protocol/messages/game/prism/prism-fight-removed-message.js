/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismFightRemovedMessage = (function (_super) {
    __extends(PrismFightRemovedMessage, _super);
    function PrismFightRemovedMessage() {
        this.subAreaId = 0;
        _super.call(this);
    }
    PrismFightRemovedMessage.prototype.getMessageId = function () {
        return PrismFightRemovedMessage.ID;
    };
    PrismFightRemovedMessage.prototype.reset = function () {
        this.subAreaId = 0;
    };
    PrismFightRemovedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismFightRemovedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismFightRemovedMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismFightRemovedMessage(param1);
    };
    PrismFightRemovedMessage.prototype.serializeAs_PrismFightRemovedMessage = function (param1) {
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element subAreaId.');
        }
        param1.writeVarShort(this.subAreaId);
    };
    PrismFightRemovedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismFightRemovedMessage(param1);
    };
    PrismFightRemovedMessage.prototype.deserializeAs_PrismFightRemovedMessage = function (param1) {
        this.subAreaId = param1.readVarUhShort();
        if (this.subAreaId < 0) {
            throw new Error('Forbidden value (' + this.subAreaId + ') on element of PrismFightRemovedMessage.subAreaId.');
        }
    };
    PrismFightRemovedMessage.ID = 6453;
    return PrismFightRemovedMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismFightRemovedMessage;
