/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PaddockBuyResultMessage = (function (_super) {
    __extends(PaddockBuyResultMessage, _super);
    function PaddockBuyResultMessage() {
        this.paddockId = 0;
        this.bought = false;
        this.realPrice = 0;
        _super.call(this);
    }
    PaddockBuyResultMessage.prototype.getMessageId = function () {
        return PaddockBuyResultMessage.ID;
    };
    PaddockBuyResultMessage.prototype.reset = function () {
        this.paddockId = 0;
        this.bought = false;
        this.realPrice = 0;
    };
    PaddockBuyResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PaddockBuyResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PaddockBuyResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_PaddockBuyResultMessage(param1);
    };
    PaddockBuyResultMessage.prototype.serializeAs_PaddockBuyResultMessage = function (param1) {
        param1.writeInt(this.paddockId);
        param1.writeBoolean(this.bought);
        if (this.realPrice < 0) {
            throw new Error('Forbidden value (' + this.realPrice + ') on element realPrice.');
        }
        param1.writeVarInt(this.realPrice);
    };
    PaddockBuyResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PaddockBuyResultMessage(param1);
    };
    PaddockBuyResultMessage.prototype.deserializeAs_PaddockBuyResultMessage = function (param1) {
        this.paddockId = param1.readInt();
        this.bought = param1.readBoolean();
        this.realPrice = param1.readVarUhInt();
        if (this.realPrice < 0) {
            throw new Error('Forbidden value (' + this.realPrice + ') on element of PaddockBuyResultMessage.realPrice.');
        }
    };
    PaddockBuyResultMessage.ID = 6516;
    return PaddockBuyResultMessage;
})(network_message_1.NetworkMessage);
module.exports = PaddockBuyResultMessage;
