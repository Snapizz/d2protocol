/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InventoryPresetSaveCustomMessage = (function (_super) {
    __extends(InventoryPresetSaveCustomMessage, _super);
    function InventoryPresetSaveCustomMessage() {
        this.presetId = 0;
        this.symbolId = 0;
        this.itemsPositions = [];
        this.itemsUids = [];
        _super.call(this);
    }
    InventoryPresetSaveCustomMessage.prototype.getMessageId = function () {
        return InventoryPresetSaveCustomMessage.ID;
    };
    InventoryPresetSaveCustomMessage.prototype.reset = function () {
        this.presetId = 0;
        this.symbolId = 0;
        this.itemsPositions = [];
        this.itemsUids = [];
    };
    InventoryPresetSaveCustomMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InventoryPresetSaveCustomMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InventoryPresetSaveCustomMessage.prototype.serialize = function (param1) {
        this.serializeAs_InventoryPresetSaveCustomMessage(param1);
    };
    InventoryPresetSaveCustomMessage.prototype.serializeAs_InventoryPresetSaveCustomMessage = function (param1) {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element symbolId.');
        }
        param1.writeByte(this.symbolId);
        param1.writeShort(this.itemsPositions.length);
        var _loc2_ = 0;
        while (_loc2_ < this.itemsPositions.length) {
            param1.writeByte(this.itemsPositions[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.itemsUids.length);
        var _loc3_ = 0;
        while (_loc3_ < this.itemsUids.length) {
            if (this.itemsUids[_loc3_] < 0) {
                throw new Error('Forbidden value (' + this.itemsUids[_loc3_] + ') on element 4 (starting at 1) of itemsUids.');
            }
            param1.writeVarInt(this.itemsUids[_loc3_]);
            _loc3_++;
        }
    };
    InventoryPresetSaveCustomMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InventoryPresetSaveCustomMessage(param1);
    };
    InventoryPresetSaveCustomMessage.prototype.deserializeAs_InventoryPresetSaveCustomMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = 0;
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of InventoryPresetSaveCustomMessage.presetId.');
        }
        this.symbolId = param1.readByte();
        if (this.symbolId < 0) {
            throw new Error('Forbidden value (' + this.symbolId + ') on element of InventoryPresetSaveCustomMessage.symbolId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readUnsignedByte();
            if (_loc6_ < 0 || _loc6_ > 255) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of itemsPositions.');
            }
            this.itemsPositions.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readVarUhInt();
            if (_loc7_ < 0) {
                throw new Error('Forbidden value (' + _loc7_ + ') on elements of itemsUids.');
            }
            this.itemsUids.push(_loc7_);
            _loc5_++;
        }
    };
    InventoryPresetSaveCustomMessage.ID = 6329;
    return InventoryPresetSaveCustomMessage;
})(network_message_1.NetworkMessage);
module.exports = InventoryPresetSaveCustomMessage;
