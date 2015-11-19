/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SellerBuyerDescriptor = require('../../../../types/game/data/items/seller-buyer-descriptor');
var ExchangeStartedBidBuyerMessage = (function (_super) {
    __extends(ExchangeStartedBidBuyerMessage, _super);
    function ExchangeStartedBidBuyerMessage() {
        this.buyerDescriptor = new SellerBuyerDescriptor();
        _super.call(this);
    }
    ExchangeStartedBidBuyerMessage.prototype.getMessageId = function () {
        return ExchangeStartedBidBuyerMessage.ID;
    };
    ExchangeStartedBidBuyerMessage.prototype.reset = function () {
        this.buyerDescriptor = new SellerBuyerDescriptor();
    };
    ExchangeStartedBidBuyerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartedBidBuyerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartedBidBuyerMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartedBidBuyerMessage(param1);
    };
    ExchangeStartedBidBuyerMessage.prototype.serializeAs_ExchangeStartedBidBuyerMessage = function (param1) {
        this.buyerDescriptor.serializeAs_SellerBuyerDescriptor(param1);
    };
    ExchangeStartedBidBuyerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartedBidBuyerMessage(param1);
    };
    ExchangeStartedBidBuyerMessage.prototype.deserializeAs_ExchangeStartedBidBuyerMessage = function (param1) {
        this.buyerDescriptor = new SellerBuyerDescriptor();
        this.buyerDescriptor.deserialize(param1);
    };
    ExchangeStartedBidBuyerMessage.ID = 5904;
    return ExchangeStartedBidBuyerMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStartedBidBuyerMessage;
