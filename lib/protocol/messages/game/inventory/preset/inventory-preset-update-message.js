/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var Preset = require('../../../../types/game/inventory/preset/preset');
var InventoryPresetUpdateMessage = (function (_super) {
    __extends(InventoryPresetUpdateMessage, _super);
    function InventoryPresetUpdateMessage() {
        this.preset = new Preset();
        _super.call(this);
    }
    InventoryPresetUpdateMessage.prototype.getMessageId = function () {
        return InventoryPresetUpdateMessage.ID;
    };
    InventoryPresetUpdateMessage.prototype.reset = function () {
        this.preset = new Preset();
    };
    InventoryPresetUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InventoryPresetUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InventoryPresetUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_InventoryPresetUpdateMessage(param1);
    };
    InventoryPresetUpdateMessage.prototype.serializeAs_InventoryPresetUpdateMessage = function (param1) {
        this.preset.serializeAs_Preset(param1);
    };
    InventoryPresetUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InventoryPresetUpdateMessage(param1);
    };
    InventoryPresetUpdateMessage.prototype.deserializeAs_InventoryPresetUpdateMessage = function (param1) {
        this.preset = new Preset();
        this.preset.deserialize(param1);
    };
    InventoryPresetUpdateMessage.ID = 6171;
    return InventoryPresetUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = InventoryPresetUpdateMessage;
