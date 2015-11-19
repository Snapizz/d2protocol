/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseBuyRequestMessage = (function (_super) {
    __extends(HouseBuyRequestMessage, _super);
    function HouseBuyRequestMessage() {
        this.proposedPrice = 0;
        _super.call(this);
    }
    HouseBuyRequestMessage.prototype.getMessageId = function () {
        return HouseBuyRequestMessage.ID;
    };
    HouseBuyRequestMessage.prototype.reset = function () {
        this.proposedPrice = 0;
    };
    HouseBuyRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseBuyRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseBuyRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseBuyRequestMessage(param1);
    };
    HouseBuyRequestMessage.prototype.serializeAs_HouseBuyRequestMessage = function (param1) {
        if (this.proposedPrice < 0) {
            throw new Error('Forbidden value (' + this.proposedPrice + ') on element proposedPrice.');
        }
        param1.writeVarInt(this.proposedPrice);
    };
    HouseBuyRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseBuyRequestMessage(param1);
    };
    HouseBuyRequestMessage.prototype.deserializeAs_HouseBuyRequestMessage = function (param1) {
        this.proposedPrice = param1.readVarUhInt();
        if (this.proposedPrice < 0) {
            throw new Error('Forbidden value (' + this.proposedPrice + ') on element of HouseBuyRequestMessage.proposedPrice.');
        }
    };
    HouseBuyRequestMessage.ID = 5738;
    return HouseBuyRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = HouseBuyRequestMessage;
