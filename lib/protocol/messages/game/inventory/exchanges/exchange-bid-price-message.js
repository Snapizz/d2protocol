/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBidPriceMessage = (function (_super) {
    __extends(ExchangeBidPriceMessage, _super);
    function ExchangeBidPriceMessage() {
        this.genericId = 0;
        this.averagePrice = 0;
        _super.call(this);
    }
    ExchangeBidPriceMessage.prototype.getMessageId = function () {
        return ExchangeBidPriceMessage.ID;
    };
    ExchangeBidPriceMessage.prototype.reset = function () {
        this.genericId = 0;
        this.averagePrice = 0;
    };
    ExchangeBidPriceMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidPriceMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidPriceMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidPriceMessage(param1);
    };
    ExchangeBidPriceMessage.prototype.serializeAs_ExchangeBidPriceMessage = function (param1) {
        if (this.genericId < 0) {
            throw new Error('Forbidden value (' + this.genericId + ') on element genericId.');
        }
        param1.writeVarShort(this.genericId);
        param1.writeVarInt(this.averagePrice);
    };
    ExchangeBidPriceMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidPriceMessage(param1);
    };
    ExchangeBidPriceMessage.prototype.deserializeAs_ExchangeBidPriceMessage = function (param1) {
        this.genericId = param1.readVarUhShort();
        if (this.genericId < 0) {
            throw new Error('Forbidden value (' + this.genericId + ') on element of ExchangeBidPriceMessage.genericId.');
        }
        this.averagePrice = param1.readVarInt();
    };
    ExchangeBidPriceMessage.ID = 5755;
    return ExchangeBidPriceMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBidPriceMessage;
