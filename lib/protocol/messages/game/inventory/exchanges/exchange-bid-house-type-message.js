/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBidHouseTypeMessage = (function (_super) {
    __extends(ExchangeBidHouseTypeMessage, _super);
    function ExchangeBidHouseTypeMessage() {
        this.type = 0;
        _super.call(this);
    }
    ExchangeBidHouseTypeMessage.prototype.getMessageId = function () {
        return ExchangeBidHouseTypeMessage.ID;
    };
    ExchangeBidHouseTypeMessage.prototype.reset = function () {
        this.type = 0;
    };
    ExchangeBidHouseTypeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidHouseTypeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidHouseTypeMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidHouseTypeMessage(param1);
    };
    ExchangeBidHouseTypeMessage.prototype.serializeAs_ExchangeBidHouseTypeMessage = function (param1) {
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element type.');
        }
        param1.writeVarInt(this.type);
    };
    ExchangeBidHouseTypeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidHouseTypeMessage(param1);
    };
    ExchangeBidHouseTypeMessage.prototype.deserializeAs_ExchangeBidHouseTypeMessage = function (param1) {
        this.type = param1.readVarUhInt();
        if (this.type < 0) {
            throw new Error('Forbidden value (' + this.type + ') on element of ExchangeBidHouseTypeMessage.type.');
        }
    };
    ExchangeBidHouseTypeMessage.ID = 5803;
    return ExchangeBidHouseTypeMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBidHouseTypeMessage;
