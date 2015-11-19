/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InventoryContentMessage = require('./inventory-content-message');
var Preset = require('../../../../types/game/inventory/preset/preset');
var IdolsPreset = require('../../../../types/game/inventory/preset/idols-preset');
var InventoryContentAndPresetMessage = (function (_super) {
    __extends(InventoryContentAndPresetMessage, _super);
    function InventoryContentAndPresetMessage() {
        this.presets = [];
        this.idolsPresets = [];
        _super.call(this);
    }
    InventoryContentAndPresetMessage.prototype.getMessageId = function () {
        return InventoryContentAndPresetMessage.ID;
    };
    InventoryContentAndPresetMessage.prototype.reset = function () {
        this.presets = [];
        this.idolsPresets = [];
    };
    InventoryContentAndPresetMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InventoryContentAndPresetMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InventoryContentAndPresetMessage.prototype.serialize = function (param1) {
        this.serializeAs_InventoryContentAndPresetMessage(param1);
    };
    InventoryContentAndPresetMessage.prototype.serializeAs_InventoryContentAndPresetMessage = function (param1) {
        _super.prototype.serializeAs_InventoryContentMessage.call(this, param1);
        param1.writeShort(this.presets.length);
        var _loc2_ = 0;
        while (_loc2_ < this.presets.length) {
            (this.presets[_loc2_]).serializeAs_Preset(param1);
            _loc2_++;
        }
        param1.writeShort(this.idolsPresets.length);
        var _loc3_ = 0;
        while (_loc3_ < this.idolsPresets.length) {
            (this.idolsPresets[_loc3_]).serializeAs_IdolsPreset(param1);
            _loc3_++;
        }
    };
    InventoryContentAndPresetMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InventoryContentAndPresetMessage(param1);
    };
    InventoryContentAndPresetMessage.prototype.deserializeAs_InventoryContentAndPresetMessage = function (param1) {
        var _loc6_ = null;
        var _loc7_ = null;
        _super.prototype.deserialize.call(this, param1);
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = new Preset();
            _loc6_.deserialize(param1);
            this.presets.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = new IdolsPreset();
            _loc7_.deserialize(param1);
            this.idolsPresets.push(_loc7_);
            _loc5_++;
        }
    };
    InventoryContentAndPresetMessage.ID = 6162;
    return InventoryContentAndPresetMessage;
})(InventoryContentMessage);
module.exports = InventoryContentAndPresetMessage;
