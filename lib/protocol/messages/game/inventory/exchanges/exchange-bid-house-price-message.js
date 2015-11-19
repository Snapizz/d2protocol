/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBidHousePriceMessage = (function (_super) {
    __extends(ExchangeBidHousePriceMessage, _super);
    function ExchangeBidHousePriceMessage() {
        this.genId = 0;
        _super.call(this);
    }
    ExchangeBidHousePriceMessage.prototype.getMessageId = function () {
        return ExchangeBidHousePriceMessage.ID;
    };
    ExchangeBidHousePriceMessage.prototype.reset = function () {
        this.genId = 0;
    };
    ExchangeBidHousePriceMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidHousePriceMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidHousePriceMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidHousePriceMessage(param1);
    };
    ExchangeBidHousePriceMessage.prototype.serializeAs_ExchangeBidHousePriceMessage = function (param1) {
        if (this.genId < 0) {
            throw new Error('Forbidden value (' + this.genId + ') on element genId.');
        }
        param1.writeVarShort(this.genId);
    };
    ExchangeBidHousePriceMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidHousePriceMessage(param1);
    };
    ExchangeBidHousePriceMessage.prototype.deserializeAs_ExchangeBidHousePriceMessage = function (param1) {
        this.genId = param1.readVarUhShort();
        if (this.genId < 0) {
            throw new Error('Forbidden value (' + this.genId + ') on element of ExchangeBidHousePriceMessage.genId.');
        }
    };
    ExchangeBidHousePriceMessage.ID = 5805;
    return ExchangeBidHousePriceMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBidHousePriceMessage;
