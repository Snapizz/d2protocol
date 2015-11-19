/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage = (function (_super) {
    __extends(ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage, _super);
    function ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage() {
        this.allow = false;
        _super.call(this);
    }
    ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.getMessageId = function () {
        return ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.ID;
    };
    ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.reset = function () {
        this.allow = false;
    };
    ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(param1);
    };
    ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.serializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage = function (param1) {
        param1.writeBoolean(this.allow);
    };
    ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage(param1);
    };
    ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.prototype.deserializeAs_ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage = function (param1) {
        this.allow = param1.readBoolean();
    };
    ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage.ID = 6021;
    return ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage;
