/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBidHouseInListRemovedMessage = (function (_super) {
    __extends(ExchangeBidHouseInListRemovedMessage, _super);
    function ExchangeBidHouseInListRemovedMessage() {
        this.itemUID = 0;
        _super.call(this);
    }
    ExchangeBidHouseInListRemovedMessage.prototype.getMessageId = function () {
        return ExchangeBidHouseInListRemovedMessage.ID;
    };
    ExchangeBidHouseInListRemovedMessage.prototype.reset = function () {
        this.itemUID = 0;
    };
    ExchangeBidHouseInListRemovedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidHouseInListRemovedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidHouseInListRemovedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidHouseInListRemovedMessage(param1);
    };
    ExchangeBidHouseInListRemovedMessage.prototype.serializeAs_ExchangeBidHouseInListRemovedMessage = function (param1) {
        param1.writeInt(this.itemUID);
    };
    ExchangeBidHouseInListRemovedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidHouseInListRemovedMessage(param1);
    };
    ExchangeBidHouseInListRemovedMessage.prototype.deserializeAs_ExchangeBidHouseInListRemovedMessage = function (param1) {
        this.itemUID = param1.readInt();
    };
    ExchangeBidHouseInListRemovedMessage.ID = 5950;
    return ExchangeBidHouseInListRemovedMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBidHouseInListRemovedMessage;
