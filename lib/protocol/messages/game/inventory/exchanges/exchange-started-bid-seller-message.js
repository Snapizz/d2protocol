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
var ObjectItemToSellInBid = require('../../../../types/game/data/items/object-item-to-sell-in-bid');
var ExchangeStartedBidSellerMessage = (function (_super) {
    __extends(ExchangeStartedBidSellerMessage, _super);
    function ExchangeStartedBidSellerMessage() {
        this.sellerDescriptor = new SellerBuyerDescriptor();
        this.objectsInfos = [];
        _super.call(this);
    }
    ExchangeStartedBidSellerMessage.prototype.getMessageId = function () {
        return ExchangeStartedBidSellerMessage.ID;
    };
    ExchangeStartedBidSellerMessage.prototype.reset = function () {
        this.sellerDescriptor = new SellerBuyerDescriptor();
        this.objectsInfos = [];
    };
    ExchangeStartedBidSellerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartedBidSellerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartedBidSellerMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartedBidSellerMessage(param1);
    };
    ExchangeStartedBidSellerMessage.prototype.serializeAs_ExchangeStartedBidSellerMessage = function (param1) {
        this.sellerDescriptor.serializeAs_SellerBuyerDescriptor(param1);
        param1.writeShort(this.objectsInfos.length);
        var _loc2_ = 0;
        while (_loc2_ < this.objectsInfos.length) {
            (this.objectsInfos[_loc2_]).serializeAs_ObjectItemToSellInBid(param1);
            _loc2_++;
        }
    };
    ExchangeStartedBidSellerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartedBidSellerMessage(param1);
    };
    ExchangeStartedBidSellerMessage.prototype.deserializeAs_ExchangeStartedBidSellerMessage = function (param1) {
        var _loc4_ = null;
        this.sellerDescriptor = new SellerBuyerDescriptor();
        this.sellerDescriptor.deserialize(param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = new ObjectItemToSellInBid();
            _loc4_.deserialize(param1);
            this.objectsInfos.push(_loc4_);
            _loc3_++;
        }
    };
    ExchangeStartedBidSellerMessage.ID = 5905;
    return ExchangeStartedBidSellerMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStartedBidSellerMessage;
