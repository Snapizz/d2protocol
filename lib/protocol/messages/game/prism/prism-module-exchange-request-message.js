/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PrismModuleExchangeRequestMessage = (function (_super) {
    __extends(PrismModuleExchangeRequestMessage, _super);
    function PrismModuleExchangeRequestMessage() {
        _super.call(this);
    }
    PrismModuleExchangeRequestMessage.prototype.getMessageId = function () {
        return PrismModuleExchangeRequestMessage.ID;
    };
    PrismModuleExchangeRequestMessage.prototype.reset = function () {
    };
    PrismModuleExchangeRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PrismModuleExchangeRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PrismModuleExchangeRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_PrismModuleExchangeRequestMessage(param1);
    };
    PrismModuleExchangeRequestMessage.prototype.serializeAs_PrismModuleExchangeRequestMessage = function (param1) {
    };
    PrismModuleExchangeRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PrismModuleExchangeRequestMessage(param1);
    };
    PrismModuleExchangeRequestMessage.prototype.deserializeAs_PrismModuleExchangeRequestMessage = function (param1) {
    };
    PrismModuleExchangeRequestMessage.ID = 6531;
    return PrismModuleExchangeRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = PrismModuleExchangeRequestMessage;
