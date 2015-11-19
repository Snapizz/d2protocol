/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InventoryPresetSaveMessage = (function (_super) {
    __extends(InventoryPresetSaveMessage, _super);
    function InventoryPresetSaveMessage() {
        this.presetId = 0;
        this.symbolId = 0;
        this.saveEquipment = false;
        _super.call(this);
    }
    InventoryPresetSaveMessage.prototype.getMessageId = function () {
        return InventoryPresetSaveMessage.ID;
    };
    InventoryPresetSaveMessage.prototype.reset = function () {
        this.presetId = 0;
        this.symbolId = 0;
        this.saveEquipment = false;
    };
    InventoryPresetSaveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InventoryPresetSaveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InventoryPresetSaveMessage.prototype.serialize = function (param1) {
        this.serializeAs_InventoryPresetSaveMessage(param1);
    };
    InventoryPresetSaveMessage.prototype.serializeAs_InventoryPresetSaveMessage = function (param1) {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element symbolId.');
        }
        param1.writeByte(this.symbolId);
        param1.writeBoolean(this.saveEquipment);
    };
    InventoryPresetSaveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InventoryPresetSaveMessage(param1);
    };
    InventoryPresetSaveMessage.prototype.deserializeAs_InventoryPresetSaveMessage = function (param1) {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of InventoryPresetSaveMessage.presetId.');
        }
        this.symbolId = param1.readByte();
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element of InventoryPresetSaveMessage.symbolId.');
        }
        this.saveEquipment = param1.readBoolean();
    };
    InventoryPresetSaveMessage.ID = 6165;
    return InventoryPresetSaveMessage;
})(network_message_1.NetworkMessage);
module.exports = InventoryPresetSaveMessage;
