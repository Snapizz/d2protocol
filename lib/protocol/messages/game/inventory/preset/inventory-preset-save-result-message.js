/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InventoryPresetSaveResultMessage = (function (_super) {
    __extends(InventoryPresetSaveResultMessage, _super);
    function InventoryPresetSaveResultMessage() {
        this.presetId = 0;
        this.code = 2;
        _super.call(this);
    }
    InventoryPresetSaveResultMessage.prototype.getMessageId = function () {
        return InventoryPresetSaveResultMessage.ID;
    };
    InventoryPresetSaveResultMessage.prototype.reset = function () {
        this.presetId = 0;
        this.code = 2;
    };
    InventoryPresetSaveResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InventoryPresetSaveResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InventoryPresetSaveResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_InventoryPresetSaveResultMessage(param1);
    };
    InventoryPresetSaveResultMessage.prototype.serializeAs_InventoryPresetSaveResultMessage = function (param1) {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        param1.writeByte(this.code);
    };
    InventoryPresetSaveResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InventoryPresetSaveResultMessage(param1);
    };
    InventoryPresetSaveResultMessage.prototype.deserializeAs_InventoryPresetSaveResultMessage = function (param1) {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of InventoryPresetSaveResultMessage.presetId.');
        }
        this.code = param1.readByte();
        if (this.code < 0) {
            throw new Error('Forbidden value (' + this.code + ') on element of InventoryPresetSaveResultMessage.code.');
        }
    };
    InventoryPresetSaveResultMessage.ID = 6170;
    return InventoryPresetSaveResultMessage;
})(network_message_1.NetworkMessage);
module.exports = InventoryPresetSaveResultMessage;
