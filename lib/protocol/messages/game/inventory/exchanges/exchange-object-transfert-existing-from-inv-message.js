/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeObjectTransfertExistingFromInvMessage = (function (_super) {
    __extends(ExchangeObjectTransfertExistingFromInvMessage, _super);
    function ExchangeObjectTransfertExistingFromInvMessage() {
        _super.call(this);
    }
    ExchangeObjectTransfertExistingFromInvMessage.prototype.getMessageId = function () {
        return ExchangeObjectTransfertExistingFromInvMessage.ID;
    };
    ExchangeObjectTransfertExistingFromInvMessage.prototype.reset = function () {
    };
    ExchangeObjectTransfertExistingFromInvMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectTransfertExistingFromInvMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectTransfertExistingFromInvMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectTransfertExistingFromInvMessage(param1);
    };
    ExchangeObjectTransfertExistingFromInvMessage.prototype.serializeAs_ExchangeObjectTransfertExistingFromInvMessage = function (param1) {
    };
    ExchangeObjectTransfertExistingFromInvMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectTransfertExistingFromInvMessage(param1);
    };
    ExchangeObjectTransfertExistingFromInvMessage.prototype.deserializeAs_ExchangeObjectTransfertExistingFromInvMessage = function (param1) {
    };
    ExchangeObjectTransfertExistingFromInvMessage.ID = 6325;
    return ExchangeObjectTransfertExistingFromInvMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeObjectTransfertExistingFromInvMessage;
