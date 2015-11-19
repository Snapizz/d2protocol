/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ExchangeMultiCraftCrafterCanUseHisRessourcesMessage = (function (_super) {
    __extends(ExchangeMultiCraftCrafterCanUseHisRessourcesMessage, _super);
    function ExchangeMultiCraftCrafterCanUseHisRessourcesMessage() {
        this.allowed = false;
        _super.call(this);
    }
    ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.prototype.getMessageId = function () {
        return ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.ID;
    };
    ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.prototype.reset = function () {
        this.allowed = false;
    };
    ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeMultiCraftCrafterCanUseHisRessourcesMessage(param1);
    };
    ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.prototype.serializeAs_ExchangeMultiCraftCrafterCanUseHisRessourcesMessage = function (param1) {
        param1.writeBoolean(this.allowed);
    };
    ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeMultiCraftCrafterCanUseHisRessourcesMessage(param1);
    };
    ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.prototype.deserializeAs_ExchangeMultiCraftCrafterCanUseHisRessourcesMessage = function (param1) {
        this.allowed = param1.readBoolean();
    };
    ExchangeMultiCraftCrafterCanUseHisRessourcesMessage.ID = 6020;
    return ExchangeMultiCraftCrafterCanUseHisRessourcesMessage;
})(network_message_1.NetworkMessage);
module.exports = ExchangeMultiCraftCrafterCanUseHisRessourcesMessage;
