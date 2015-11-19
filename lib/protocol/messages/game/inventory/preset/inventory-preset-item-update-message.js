/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var PresetItem = require('../../../../types/game/inventory/preset/preset-item');
var InventoryPresetItemUpdateMessage = (function (_super) {
    __extends(InventoryPresetItemUpdateMessage, _super);
    function InventoryPresetItemUpdateMessage() {
        this.presetId = 0;
        this.presetItem = new PresetItem();
        _super.call(this);
    }
    InventoryPresetItemUpdateMessage.prototype.getMessageId = function () {
        return InventoryPresetItemUpdateMessage.ID;
    };
    InventoryPresetItemUpdateMessage.prototype.reset = function () {
        this.presetId = 0;
        this.presetItem = new PresetItem();
    };
    InventoryPresetItemUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InventoryPresetItemUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InventoryPresetItemUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_InventoryPresetItemUpdateMessage(param1);
    };
    InventoryPresetItemUpdateMessage.prototype.serializeAs_InventoryPresetItemUpdateMessage = function (param1) {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        this.presetItem.serializeAs_PresetItem(param1);
    };
    InventoryPresetItemUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InventoryPresetItemUpdateMessage(param1);
    };
    InventoryPresetItemUpdateMessage.prototype.deserializeAs_InventoryPresetItemUpdateMessage = function (param1) {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of InventoryPresetItemUpdateMessage.presetId.');
        }
        this.presetItem = new PresetItem();
        this.presetItem.deserialize(param1);
    };
    InventoryPresetItemUpdateMessage.ID = 6168;
    return InventoryPresetItemUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = InventoryPresetItemUpdateMessage;
