/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeObjectMessage = (function (_super) {
    __extends(ExchangeObjectMessage, _super);
    function ExchangeObjectMessage() {
        this.remote = false;
        _super.call(this);
    }
    ExchangeObjectMessage.prototype.getMessageId = function () {
        return ExchangeObjectMessage.ID;
    };
    ExchangeObjectMessage.prototype.reset = function () {
        this.remote = false;
    };
    ExchangeObjectMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectMessage(param1);
    };
    ExchangeObjectMessage.prototype.serializeAs_ExchangeObjectMessage = function (param1) {
        param1.writeBoolean(this.remote);
    };
    ExchangeObjectMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectMessage(param1);
    };
    ExchangeObjectMessage.prototype.deserializeAs_ExchangeObjectMessage = function (param1) {
        this.remote = param1.readBoolean();
    };
    ExchangeObjectMessage.ID = 5515;
    return ExchangeObjectMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeObjectMessage;
