/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBidHouseGenericItemAddedMessage = (function (_super) {
    __extends(ExchangeBidHouseGenericItemAddedMessage, _super);
    function ExchangeBidHouseGenericItemAddedMessage() {
        this.objGenericId = 0;
        _super.call(this);
    }
    ExchangeBidHouseGenericItemAddedMessage.prototype.getMessageId = function () {
        return ExchangeBidHouseGenericItemAddedMessage.ID;
    };
    ExchangeBidHouseGenericItemAddedMessage.prototype.reset = function () {
        this.objGenericId = 0;
    };
    ExchangeBidHouseGenericItemAddedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidHouseGenericItemAddedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidHouseGenericItemAddedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidHouseGenericItemAddedMessage(param1);
    };
    ExchangeBidHouseGenericItemAddedMessage.prototype.serializeAs_ExchangeBidHouseGenericItemAddedMessage = function (param1) {
        if (this.objGenericId < 0) {
            throw new Error('Forbidden value (' + this.objGenericId + ') on element objGenericId.');
        }
        param1.writeVarShort(this.objGenericId);
    };
    ExchangeBidHouseGenericItemAddedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidHouseGenericItemAddedMessage(param1);
    };
    ExchangeBidHouseGenericItemAddedMessage.prototype.deserializeAs_ExchangeBidHouseGenericItemAddedMessage = function (param1) {
        this.objGenericId = param1.readVarUhShort();
        if (this.objGenericId < 0) {
            throw new Error('Forbidden value (' + this.objGenericId + ') on element of ExchangeBidHouseGenericItemAddedMessage.objGenericId.');
        }
    };
    ExchangeBidHouseGenericItemAddedMessage.ID = 5947;
    return ExchangeBidHouseGenericItemAddedMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBidHouseGenericItemAddedMessage;
