/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBidHouseListMessage = (function (_super) {
    __extends(ExchangeBidHouseListMessage, _super);
    function ExchangeBidHouseListMessage() {
        this.id = 0;
        _super.call(this);
    }
    ExchangeBidHouseListMessage.prototype.getMessageId = function () {
        return ExchangeBidHouseListMessage.ID;
    };
    ExchangeBidHouseListMessage.prototype.reset = function () {
        this.id = 0;
    };
    ExchangeBidHouseListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidHouseListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidHouseListMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidHouseListMessage(param1);
    };
    ExchangeBidHouseListMessage.prototype.serializeAs_ExchangeBidHouseListMessage = function (param1) {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);
    };
    ExchangeBidHouseListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidHouseListMessage(param1);
    };
    ExchangeBidHouseListMessage.prototype.deserializeAs_ExchangeBidHouseListMessage = function (param1) {
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of ExchangeBidHouseListMessage.id.');
        }
    };
    ExchangeBidHouseListMessage.ID = 5807;
    return ExchangeBidHouseListMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBidHouseListMessage;
