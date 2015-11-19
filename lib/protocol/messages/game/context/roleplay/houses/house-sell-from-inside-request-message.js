/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var HouseSellRequestMessage = require('./house-sell-request-message');
var HouseSellFromInsideRequestMessage = (function (_super) {
    __extends(HouseSellFromInsideRequestMessage, _super);
    function HouseSellFromInsideRequestMessage() {
        _super.call(this);
    }
    HouseSellFromInsideRequestMessage.prototype.getMessageId = function () {
        return HouseSellFromInsideRequestMessage.ID;
    };
    HouseSellFromInsideRequestMessage.prototype.reset = function () {
    };
    HouseSellFromInsideRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    HouseSellFromInsideRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    HouseSellFromInsideRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_HouseSellFromInsideRequestMessage(param1);
    };
    HouseSellFromInsideRequestMessage.prototype.serializeAs_HouseSellFromInsideRequestMessage = function (param1) {
        _super.prototype.serializeAs_HouseSellRequestMessage.call(this, param1);
    };
    HouseSellFromInsideRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_HouseSellFromInsideRequestMessage(param1);
    };
    HouseSellFromInsideRequestMessage.prototype.deserializeAs_HouseSellFromInsideRequestMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    HouseSellFromInsideRequestMessage.ID = 5884;
    return HouseSellFromInsideRequestMessage;
})(HouseSellRequestMessage);
module.exports = HouseSellFromInsideRequestMessage;
