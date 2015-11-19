/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBidHouseItemRemoveOkMessage = (function (_super) {
    __extends(ExchangeBidHouseItemRemoveOkMessage, _super);
    function ExchangeBidHouseItemRemoveOkMessage() {
        this.sellerId = 0;
        _super.call(this);
    }
    ExchangeBidHouseItemRemoveOkMessage.prototype.getMessageId = function () {
        return ExchangeBidHouseItemRemoveOkMessage.ID;
    };
    ExchangeBidHouseItemRemoveOkMessage.prototype.reset = function () {
        this.sellerId = 0;
    };
    ExchangeBidHouseItemRemoveOkMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidHouseItemRemoveOkMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidHouseItemRemoveOkMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidHouseItemRemoveOkMessage(param1);
    };
    ExchangeBidHouseItemRemoveOkMessage.prototype.serializeAs_ExchangeBidHouseItemRemoveOkMessage = function (param1) {
        param1.writeInt(this.sellerId);
    };
    ExchangeBidHouseItemRemoveOkMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidHouseItemRemoveOkMessage(param1);
    };
    ExchangeBidHouseItemRemoveOkMessage.prototype.deserializeAs_ExchangeBidHouseItemRemoveOkMessage = function (param1) {
        this.sellerId = param1.readInt();
    };
    ExchangeBidHouseItemRemoveOkMessage.ID = 5946;
    return ExchangeBidHouseItemRemoveOkMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBidHouseItemRemoveOkMessage;
