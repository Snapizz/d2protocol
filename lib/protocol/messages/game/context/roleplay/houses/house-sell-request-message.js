/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseSellRequestMessage = (function (_super) {
    __extends(HouseSellRequestMessage, _super);
    function HouseSellRequestMessage() {
        this.amount = 0;
        _super.call(this);
    }
    HouseSellRequestMessage.prototype.getMessageId = function () {
        return HouseSellRequestMessage.ID;
    };
    HouseSellRequestMessage.prototype.reset = function () {
        this.amount = 0;
    };
    HouseSellRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseSellRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseSellRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseSellRequestMessage(param1);
    };
    HouseSellRequestMessage.prototype.serializeAs_HouseSellRequestMessage = function (param1) {
        if (this.amount < 0) {
            throw new Error('Forbidden value (' + this.amount + ') on element amount.');
        }
        param1.writeVarInt(this.amount);
    };
    HouseSellRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseSellRequestMessage(param1);
    };
    HouseSellRequestMessage.prototype.deserializeAs_HouseSellRequestMessage = function (param1) {
        this.amount = param1.readVarUhInt();
        if (this.amount < 0) {
            throw new Error('Forbidden value (' + this.amount + ') on element of HouseSellRequestMessage.amount.');
        }
    };
    HouseSellRequestMessage.ID = 5697;
    return HouseSellRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = HouseSellRequestMessage;
