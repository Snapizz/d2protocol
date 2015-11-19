/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeCraftCountRequestMessage = (function (_super) {
    __extends(ExchangeCraftCountRequestMessage, _super);
    function ExchangeCraftCountRequestMessage() {
        this.count = 0;
        _super.call(this);
    }
    ExchangeCraftCountRequestMessage.prototype.getMessageId = function () {
        return ExchangeCraftCountRequestMessage.ID;
    };
    ExchangeCraftCountRequestMessage.prototype.reset = function () {
        this.count = 0;
    };
    ExchangeCraftCountRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeCraftCountRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeCraftCountRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeCraftCountRequestMessage(param1);
    };
    ExchangeCraftCountRequestMessage.prototype.serializeAs_ExchangeCraftCountRequestMessage = function (param1) {
        param1.writeVarInt(this.count);
    };
    ExchangeCraftCountRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeCraftCountRequestMessage(param1);
    };
    ExchangeCraftCountRequestMessage.prototype.deserializeAs_ExchangeCraftCountRequestMessage = function (param1) {
        this.count = param1.readVarInt();
    };
    ExchangeCraftCountRequestMessage.ID = 6597;
    return ExchangeCraftCountRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeCraftCountRequestMessage;
