/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InventoryPresetUseMessage = (function (_super) {
    __extends(InventoryPresetUseMessage, _super);
    function InventoryPresetUseMessage() {
        this.presetId = 0;
        _super.call(this);
    }
    InventoryPresetUseMessage.prototype.getMessageId = function () {
        return InventoryPresetUseMessage.ID;
    };
    InventoryPresetUseMessage.prototype.reset = function () {
        this.presetId = 0;
    };
    InventoryPresetUseMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InventoryPresetUseMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InventoryPresetUseMessage.prototype.serialize = function (param1) {
        this.serializeAs_InventoryPresetUseMessage(param1);
    };
    InventoryPresetUseMessage.prototype.serializeAs_InventoryPresetUseMessage = function (param1) {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
    };
    InventoryPresetUseMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InventoryPresetUseMessage(param1);
    };
    InventoryPresetUseMessage.prototype.deserializeAs_InventoryPresetUseMessage = function (param1) {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of InventoryPresetUseMessage.presetId.');
        }
    };
    InventoryPresetUseMessage.ID = 6167;
    return InventoryPresetUseMessage;
})(network_message_1.NetworkMessage);
module.exports = InventoryPresetUseMessage;
