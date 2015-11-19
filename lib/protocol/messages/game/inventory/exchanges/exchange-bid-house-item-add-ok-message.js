/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectItemToSellInBid = require('../../../../types/game/data/items/object-item-to-sell-in-bid');
var ExchangeBidHouseItemAddOkMessage = (function (_super) {
    __extends(ExchangeBidHouseItemAddOkMessage, _super);
    function ExchangeBidHouseItemAddOkMessage() {
        this.itemInfo = new ObjectItemToSellInBid();
        _super.call(this);
    }
    ExchangeBidHouseItemAddOkMessage.prototype.getMessageId = function () {
        return ExchangeBidHouseItemAddOkMessage.ID;
    };
    ExchangeBidHouseItemAddOkMessage.prototype.reset = function () {
        this.itemInfo = new ObjectItemToSellInBid();
    };
    ExchangeBidHouseItemAddOkMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidHouseItemAddOkMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidHouseItemAddOkMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidHouseItemAddOkMessage(param1);
    };
    ExchangeBidHouseItemAddOkMessage.prototype.serializeAs_ExchangeBidHouseItemAddOkMessage = function (param1) {
        this.itemInfo.serializeAs_ObjectItemToSellInBid(param1);
    };
    ExchangeBidHouseItemAddOkMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidHouseItemAddOkMessage(param1);
    };
    ExchangeBidHouseItemAddOkMessage.prototype.deserializeAs_ExchangeBidHouseItemAddOkMessage = function (param1) {
        this.itemInfo = new ObjectItemToSellInBid();
        this.itemInfo.deserialize(param1);
    };
    ExchangeBidHouseItemAddOkMessage.ID = 5945;
    return ExchangeBidHouseItemAddOkMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBidHouseItemAddOkMessage;
