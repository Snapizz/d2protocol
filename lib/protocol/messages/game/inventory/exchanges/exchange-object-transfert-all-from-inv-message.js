/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeObjectTransfertAllFromInvMessage = (function (_super) {
    __extends(ExchangeObjectTransfertAllFromInvMessage, _super);
    function ExchangeObjectTransfertAllFromInvMessage() {
        _super.call(this);
    }
    ExchangeObjectTransfertAllFromInvMessage.prototype.getMessageId = function () {
        return ExchangeObjectTransfertAllFromInvMessage.ID;
    };
    ExchangeObjectTransfertAllFromInvMessage.prototype.reset = function () {
    };
    ExchangeObjectTransfertAllFromInvMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectTransfertAllFromInvMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectTransfertAllFromInvMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectTransfertAllFromInvMessage(param1);
    };
    ExchangeObjectTransfertAllFromInvMessage.prototype.serializeAs_ExchangeObjectTransfertAllFromInvMessage = function (param1) {
    };
    ExchangeObjectTransfertAllFromInvMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectTransfertAllFromInvMessage(param1);
    };
    ExchangeObjectTransfertAllFromInvMessage.prototype.deserializeAs_ExchangeObjectTransfertAllFromInvMessage = function (param1) {
    };
    ExchangeObjectTransfertAllFromInvMessage.ID = 6184;
    return ExchangeObjectTransfertAllFromInvMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeObjectTransfertAllFromInvMessage;
