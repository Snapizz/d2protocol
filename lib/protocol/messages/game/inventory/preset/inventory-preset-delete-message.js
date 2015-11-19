/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InventoryPresetDeleteMessage = (function (_super) {
    __extends(InventoryPresetDeleteMessage, _super);
    function InventoryPresetDeleteMessage() {
        this.presetId = 0;
        _super.call(this);
    }
    InventoryPresetDeleteMessage.prototype.getMessageId = function () {
        return InventoryPresetDeleteMessage.ID;
    };
    InventoryPresetDeleteMessage.prototype.reset = function () {
        this.presetId = 0;
    };
    InventoryPresetDeleteMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InventoryPresetDeleteMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InventoryPresetDeleteMessage.prototype.serialize = function (param1) {
        this.serializeAs_InventoryPresetDeleteMessage(param1);
    };
    InventoryPresetDeleteMessage.prototype.serializeAs_InventoryPresetDeleteMessage = function (param1) {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
    };
    InventoryPresetDeleteMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InventoryPresetDeleteMessage(param1);
    };
    InventoryPresetDeleteMessage.prototype.deserializeAs_InventoryPresetDeleteMessage = function (param1) {
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of InventoryPresetDeleteMessage.presetId.');
        }
    };
    InventoryPresetDeleteMessage.ID = 6169;
    return InventoryPresetDeleteMessage;
})(network_message_1.NetworkMessage);
module.exports = InventoryPresetDeleteMessage;
