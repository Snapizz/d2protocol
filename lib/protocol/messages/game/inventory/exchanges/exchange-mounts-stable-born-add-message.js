/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeMountsStableAddMessage = require('./exchange-mounts-stable-add-message');
var ExchangeMountsStableBornAddMessage = (function (_super) {
    __extends(ExchangeMountsStableBornAddMessage, _super);
    function ExchangeMountsStableBornAddMessage() {
        _super.call(this);
    }
    ExchangeMountsStableBornAddMessage.prototype.getMessageId = function () {
        return ExchangeMountsStableBornAddMessage.ID;
    };
    ExchangeMountsStableBornAddMessage.prototype.reset = function () {
    };
    ExchangeMountsStableBornAddMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeMountsStableBornAddMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeMountsStableBornAddMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeMountsStableBornAddMessage(param1);
    };
    ExchangeMountsStableBornAddMessage.prototype.serializeAs_ExchangeMountsStableBornAddMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeMountsStableAddMessage.call(this, param1);
    };
    ExchangeMountsStableBornAddMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeMountsStableBornAddMessage(param1);
    };
    ExchangeMountsStableBornAddMessage.prototype.deserializeAs_ExchangeMountsStableBornAddMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    ExchangeMountsStableBornAddMessage.ID = 6557;
    return ExchangeMountsStableBornAddMessage;
})(ExchangeMountsStableAddMessage);
module.exports = ExchangeMountsStableBornAddMessage;
