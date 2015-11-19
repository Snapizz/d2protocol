/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeBidHouseBuyResultMessage = (function (_super) {
    __extends(ExchangeBidHouseBuyResultMessage, _super);
    function ExchangeBidHouseBuyResultMessage() {
        this.uid = 0;
        this.bought = false;
        _super.call(this);
    }
    ExchangeBidHouseBuyResultMessage.prototype.getMessageId = function () {
        return ExchangeBidHouseBuyResultMessage.ID;
    };
    ExchangeBidHouseBuyResultMessage.prototype.reset = function () {
        this.uid = 0;
        this.bought = false;
    };
    ExchangeBidHouseBuyResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeBidHouseBuyResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeBidHouseBuyResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeBidHouseBuyResultMessage(param1);
    };
    ExchangeBidHouseBuyResultMessage.prototype.serializeAs_ExchangeBidHouseBuyResultMessage = function (param1) {
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element uid.');
        }
        param1.writeVarInt(this.uid);
        param1.writeBoolean(this.bought);
    };
    ExchangeBidHouseBuyResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeBidHouseBuyResultMessage(param1);
    };
    ExchangeBidHouseBuyResultMessage.prototype.deserializeAs_ExchangeBidHouseBuyResultMessage = function (param1) {
        this.uid = param1.readVarUhInt();
        if (this.uid < 0) {
            throw new Error('Forbidden value (' + this.uid + ') on element of ExchangeBidHouseBuyResultMessage.uid.');
        }
        this.bought = param1.readBoolean();
    };
    ExchangeBidHouseBuyResultMessage.ID = 6272;
    return ExchangeBidHouseBuyResultMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeBidHouseBuyResultMessage;
