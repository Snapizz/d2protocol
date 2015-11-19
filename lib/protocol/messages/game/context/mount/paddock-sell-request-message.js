/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PaddockSellRequestMessage = (function (_super) {
    __extends(PaddockSellRequestMessage, _super);
    function PaddockSellRequestMessage() {
        this.price = 0;
        _super.call(this);
    }
    PaddockSellRequestMessage.prototype.getMessageId = function () {
        return PaddockSellRequestMessage.ID;
    };
    PaddockSellRequestMessage.prototype.reset = function () {
        this.price = 0;
    };
    PaddockSellRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PaddockSellRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PaddockSellRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PaddockSellRequestMessage(param1);
    };
    PaddockSellRequestMessage.prototype.serializeAs_PaddockSellRequestMessage = function (param1) {
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element price.');
        }
        param1.writeVarInt(this.price);
    };
    PaddockSellRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockSellRequestMessage(param1);
    };
    PaddockSellRequestMessage.prototype.deserializeAs_PaddockSellRequestMessage = function (param1) {
        this.price = param1.readVarUhInt();
        if (this.price < 0) {
            throw new Error('Forbidden value (' + this.price + ') on element of PaddockSellRequestMessage.price.');
        }
    };
    PaddockSellRequestMessage.ID = 5953;
    return PaddockSellRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = PaddockSellRequestMessage;
