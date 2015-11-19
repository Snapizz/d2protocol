/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeObjectMoveKamaMessage = (function (_super) {
    __extends(ExchangeObjectMoveKamaMessage, _super);
    function ExchangeObjectMoveKamaMessage() {
        this.quantity = 0;
        _super.call(this);
    }
    ExchangeObjectMoveKamaMessage.prototype.getMessageId = function () {
        return ExchangeObjectMoveKamaMessage.ID;
    };
    ExchangeObjectMoveKamaMessage.prototype.reset = function () {
        this.quantity = 0;
    };
    ExchangeObjectMoveKamaMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectMoveKamaMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectMoveKamaMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectMoveKamaMessage(param1);
    };
    ExchangeObjectMoveKamaMessage.prototype.serializeAs_ExchangeObjectMoveKamaMessage = function (param1) {
        param1.writeVarInt(this.quantity);
    };
    ExchangeObjectMoveKamaMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectMoveKamaMessage(param1);
    };
    ExchangeObjectMoveKamaMessage.prototype.deserializeAs_ExchangeObjectMoveKamaMessage = function (param1) {
        this.quantity = param1.readVarInt();
    };
    ExchangeObjectMoveKamaMessage.ID = 5520;
    return ExchangeObjectMoveKamaMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeObjectMoveKamaMessage;
