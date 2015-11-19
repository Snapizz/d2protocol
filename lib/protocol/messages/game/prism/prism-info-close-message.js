/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismInfoCloseMessage = (function (_super) {
    __extends(PrismInfoCloseMessage, _super);
    function PrismInfoCloseMessage() {
        _super.call(this);
    }
    PrismInfoCloseMessage.prototype.getMessageId = function () {
        return PrismInfoCloseMessage.ID;
    };
    PrismInfoCloseMessage.prototype.reset = function () {
    };
    PrismInfoCloseMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismInfoCloseMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismInfoCloseMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismInfoCloseMessage(param1);
    };
    PrismInfoCloseMessage.prototype.serializeAs_PrismInfoCloseMessage = function (param1) {
    };
    PrismInfoCloseMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismInfoCloseMessage(param1);
    };
    PrismInfoCloseMessage.prototype.deserializeAs_PrismInfoCloseMessage = function (param1) {
    };
    PrismInfoCloseMessage.ID = 5853;
    return PrismInfoCloseMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismInfoCloseMessage;
