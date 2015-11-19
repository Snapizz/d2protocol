/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeObjectMovePricedMessage = require('./exchange-object-move-priced-message');
var ExchangeObjectModifyPricedMessage = (function (_super) {
    __extends(ExchangeObjectModifyPricedMessage, _super);
    function ExchangeObjectModifyPricedMessage() {
        _super.call(this);
    }
    ExchangeObjectModifyPricedMessage.prototype.getMessageId = function () {
        return ExchangeObjectModifyPricedMessage.ID;
    };
    ExchangeObjectModifyPricedMessage.prototype.reset = function () {
    };
    ExchangeObjectModifyPricedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectModifyPricedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectModifyPricedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectModifyPricedMessage(param1);
    };
    ExchangeObjectModifyPricedMessage.prototype.serializeAs_ExchangeObjectModifyPricedMessage = function (param1) {
        _super.prototype.serializeAs_ExchangeObjectMovePricedMessage.call(this, param1);
    };
    ExchangeObjectModifyPricedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectModifyPricedMessage(param1);
    };
    ExchangeObjectModifyPricedMessage.prototype.deserializeAs_ExchangeObjectModifyPricedMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    ExchangeObjectModifyPricedMessage.ID = 6238;
    return ExchangeObjectModifyPricedMessage;
})(ExchangeObjectMovePricedMessage);
module.exports = ExchangeObjectModifyPricedMessage;
