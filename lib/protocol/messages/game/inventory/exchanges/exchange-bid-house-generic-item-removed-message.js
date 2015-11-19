/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBidHouseGenericItemRemovedMessage = (function (_super) {
    __extends(ExchangeBidHouseGenericItemRemovedMessage, _super);
    function ExchangeBidHouseGenericItemRemovedMessage() {
        this.objGenericId = 0;
        _super.call(this);
    }
    ExchangeBidHouseGenericItemRemovedMessage.prototype.getMessageId = function () {
        return ExchangeBidHouseGenericItemRemovedMessage.ID;
    };
    ExchangeBidHouseGenericItemRemovedMessage.prototype.reset = function () {
        this.objGenericId = 0;
    };
    ExchangeBidHouseGenericItemRemovedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidHouseGenericItemRemovedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidHouseGenericItemRemovedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidHouseGenericItemRemovedMessage(param1);
    };
    ExchangeBidHouseGenericItemRemovedMessage.prototype.serializeAs_ExchangeBidHouseGenericItemRemovedMessage = function (param1) {
        if (this.objGenericId < 0) {
            throw new Error('Forbidden value (' + this.objGenericId + ') on element objGenericId.');
        }
        param1.writeVarShort(this.objGenericId);
    };
    ExchangeBidHouseGenericItemRemovedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidHouseGenericItemRemovedMessage(param1);
    };
    ExchangeBidHouseGenericItemRemovedMessage.prototype.deserializeAs_ExchangeBidHouseGenericItemRemovedMessage = function (param1) {
        this.objGenericId = param1.readVarUhShort();
        if (this.objGenericId < 0) {
            throw new Error('Forbidden value (' + this.objGenericId + ') on element of ExchangeBidHouseGenericItemRemovedMessage.objGenericId.');
        }
    };
    ExchangeBidHouseGenericItemRemovedMessage.ID = 5948;
    return ExchangeBidHouseGenericItemRemovedMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBidHouseGenericItemRemovedMessage;
