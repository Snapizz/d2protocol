/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectItemToSell = require('../../../../types/game/data/items/object-item-to-sell');
var ExchangeShopStockMovementUpdatedMessage = (function (_super) {
    __extends(ExchangeShopStockMovementUpdatedMessage, _super);
    function ExchangeShopStockMovementUpdatedMessage() {
        this.objectInfo = new ObjectItemToSell();
        _super.call(this);
    }
    ExchangeShopStockMovementUpdatedMessage.prototype.getMessageId = function () {
        return ExchangeShopStockMovementUpdatedMessage.ID;
    };
    ExchangeShopStockMovementUpdatedMessage.prototype.reset = function () {
        this.objectInfo = new ObjectItemToSell();
    };
    ExchangeShopStockMovementUpdatedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeShopStockMovementUpdatedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeShopStockMovementUpdatedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeShopStockMovementUpdatedMessage(param1);
    };
    ExchangeShopStockMovementUpdatedMessage.prototype.serializeAs_ExchangeShopStockMovementUpdatedMessage = function (param1) {
        this.objectInfo.serializeAs_ObjectItemToSell(param1);
    };
    ExchangeShopStockMovementUpdatedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeShopStockMovementUpdatedMessage(param1);
    };
    ExchangeShopStockMovementUpdatedMessage.prototype.deserializeAs_ExchangeShopStockMovementUpdatedMessage = function (param1) {
        this.objectInfo = new ObjectItemToSell();
        this.objectInfo.deserialize(param1);
    };
    ExchangeShopStockMovementUpdatedMessage.ID = 5909;
    return ExchangeShopStockMovementUpdatedMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeShopStockMovementUpdatedMessage;
