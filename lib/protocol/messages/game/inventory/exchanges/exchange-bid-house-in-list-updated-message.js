/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBidHouseInListAddedMessage = require('./exchange-bid-house-in-list-added-message');
var ExchangeBidHouseInListUpdatedMessage = (function (_super) {
    __extends(ExchangeBidHouseInListUpdatedMessage, _super);
    function ExchangeBidHouseInListUpdatedMessage() {
        _super.call(this);
    }
    ExchangeBidHouseInListUpdatedMessage.prototype.getMessageId = function () {
        return ExchangeBidHouseInListUpdatedMessage.ID;
    };
    ExchangeBidHouseInListUpdatedMessage.prototype.reset = function () {
    };
    ExchangeBidHouseInListUpdatedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidHouseInListUpdatedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidHouseInListUpdatedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidHouseInListUpdatedMessage(param1);
    };
    ExchangeBidHouseInListUpdatedMessage.prototype.serializeAs_ExchangeBidHouseInListUpdatedMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeBidHouseInListAddedMessage.call(this, param1);
    };
    ExchangeBidHouseInListUpdatedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidHouseInListUpdatedMessage(param1);
    };
    ExchangeBidHouseInListUpdatedMessage.prototype.deserializeAs_ExchangeBidHouseInListUpdatedMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    ExchangeBidHouseInListUpdatedMessage.ID = 6337;
    return ExchangeBidHouseInListUpdatedMessage;
})(ExchangeBidHouseInListAddedMessage);
module.exports = ExchangeBidHouseInListUpdatedMessage;
