/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeObjectUseInWorkshopMessage = (function (_super) {
    __extends(ExchangeObjectUseInWorkshopMessage, _super);
    function ExchangeObjectUseInWorkshopMessage() {
        this.objectUID = 0;
        this.quantity = 0;
        _super.call(this);
    }
    ExchangeObjectUseInWorkshopMessage.prototype.getMessageId = function () {
        return ExchangeObjectUseInWorkshopMessage.ID;
    };
    ExchangeObjectUseInWorkshopMessage.prototype.reset = function () {
        this.objectUID = 0;
        this.quantity = 0;
    };
    ExchangeObjectUseInWorkshopMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeObjectUseInWorkshopMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeObjectUseInWorkshopMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeObjectUseInWorkshopMessage(param1);
    };
    ExchangeObjectUseInWorkshopMessage.prototype.serializeAs_ExchangeObjectUseInWorkshopMessage = function (param1) {
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element objectUID.');
        }
        param1.writeVarInt(this.objectUID);
        param1.writeVarInt(this.quantity);
    };
    ExchangeObjectUseInWorkshopMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeObjectUseInWorkshopMessage(param1);
    };
    ExchangeObjectUseInWorkshopMessage.prototype.deserializeAs_ExchangeObjectUseInWorkshopMessage = function (param1) {
        this.objectUID = param1.readVarUhInt();
        if (this.objectUID < 0) {
            throw new Error('Forbidden value (' + this.objectUID + ') on element of ExchangeObjectUseInWorkshopMessage.objectUID.');
        }
        this.quantity = param1.readVarInt();
    };
    ExchangeObjectUseInWorkshopMessage.ID = 6004;
    return ExchangeObjectUseInWorkshopMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeObjectUseInWorkshopMessage;
