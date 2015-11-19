/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeShopStockMovementRemovedMessage = (function (_super) {
    __extends(ExchangeShopStockMovementRemovedMessage, _super);
    function ExchangeShopStockMovementRemovedMessage() {
        this.objectId = 0;
        _super.call(this);
    }
    ExchangeShopStockMovementRemovedMessage.prototype.getMessageId = function () {
        return ExchangeShopStockMovementRemovedMessage.ID;
    };
    ExchangeShopStockMovementRemovedMessage.prototype.reset = function () {
        this.objectId = 0;
    };
    ExchangeShopStockMovementRemovedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeShopStockMovementRemovedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeShopStockMovementRemovedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeShopStockMovementRemovedMessage(param1);
    };
    ExchangeShopStockMovementRemovedMessage.prototype.serializeAs_ExchangeShopStockMovementRemovedMessage = function (param1) {
        if (this.objectId < 0) {
            throw new Error('Forbidden value (' + this.objectId + ') on element objectId.');
        }
        param1.writeVarInt(this.objectId);
    };
    ExchangeShopStockMovementRemovedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeShopStockMovementRemovedMessage(param1);
    };
    ExchangeShopStockMovementRemovedMessage.prototype.deserializeAs_ExchangeShopStockMovementRemovedMessage = function (param1) {
        this.objectId = param1.readVarUhInt();
        if (this.objectId < 0) {
            throw new Error('Forbidden value (' + this.objectId + ') on element of ExchangeShopStockMovementRemovedMessage.objectId.');
        }
    };
    ExchangeShopStockMovementRemovedMessage.ID = 5907;
    return ExchangeShopStockMovementRemovedMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeShopStockMovementRemovedMessage;
