/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeObjectTransfertAllToInvMessage = (function (_super) {
    __extends(ExchangeObjectTransfertAllToInvMessage, _super);
    function ExchangeObjectTransfertAllToInvMessage() {
        _super.call(this);
    }
    ExchangeObjectTransfertAllToInvMessage.prototype.getMessageId = function () {
        return ExchangeObjectTransfertAllToInvMessage.ID;
    };
    ExchangeObjectTransfertAllToInvMessage.prototype.reset = function () {
    };
    ExchangeObjectTransfertAllToInvMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectTransfertAllToInvMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectTransfertAllToInvMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectTransfertAllToInvMessage(param1);
    };
    ExchangeObjectTransfertAllToInvMessage.prototype.serializeAs_ExchangeObjectTransfertAllToInvMessage = function (param1) {
    };
    ExchangeObjectTransfertAllToInvMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectTransfertAllToInvMessage(param1);
    };
    ExchangeObjectTransfertAllToInvMessage.prototype.deserializeAs_ExchangeObjectTransfertAllToInvMessage = function (param1) {
    };
    ExchangeObjectTransfertAllToInvMessage.ID = 6032;
    return ExchangeObjectTransfertAllToInvMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeObjectTransfertAllToInvMessage;
