/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeStartOkRecycleTradeMessage = (function (_super) {
    __extends(ExchangeStartOkRecycleTradeMessage, _super);
    function ExchangeStartOkRecycleTradeMessage() {
        this.percentToPrism = 0;
        this.percentToPlayer = 0;
        _super.call(this);
    }
    ExchangeStartOkRecycleTradeMessage.prototype.getMessageId = function () {
        return ExchangeStartOkRecycleTradeMessage.ID;
    };
    ExchangeStartOkRecycleTradeMessage.prototype.reset = function () {
        this.percentToPrism = 0;
        this.percentToPlayer = 0;
    };
    ExchangeStartOkRecycleTradeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeStartOkRecycleTradeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeStartOkRecycleTradeMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeStartOkRecycleTradeMessage(param1);
    };
    ExchangeStartOkRecycleTradeMessage.prototype.serializeAs_ExchangeStartOkRecycleTradeMessage = function (param1) {
        if (this.percentToPrism < 0) {
            throw new Error('Forbidden value (' + this.percentToPrism + ') on element percentToPrism.');
        }
        param1.writeShort(this.percentToPrism);
        if (this.percentToPlayer < 0) {
            throw new Error('Forbidden value (' + this.percentToPlayer + ') on element percentToPlayer.');
        }
        param1.writeShort(this.percentToPlayer);
    };
    ExchangeStartOkRecycleTradeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeStartOkRecycleTradeMessage(param1);
    };
    ExchangeStartOkRecycleTradeMessage.prototype.deserializeAs_ExchangeStartOkRecycleTradeMessage = function (param1) {
        this.percentToPrism = param1.readShort();
        if (this.percentToPrism < 0) {
            throw new Error('Forbidden value (' + this.percentToPrism + ') on element of ExchangeStartOkRecycleTradeMessage.percentToPrism.');
        }
        this.percentToPlayer = param1.readShort();
        if (this.percentToPlayer < 0) {
            throw new Error('Forbidden value (' + this.percentToPlayer + ') on element of ExchangeStartOkRecycleTradeMessage.percentToPlayer.');
        }
    };
    ExchangeStartOkRecycleTradeMessage.ID = 6600;
    return ExchangeStartOkRecycleTradeMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeStartOkRecycleTradeMessage;
