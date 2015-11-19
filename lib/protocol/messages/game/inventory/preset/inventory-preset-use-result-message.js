/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var InventoryPresetUseResultMessage = (function (_super) {
    __extends(InventoryPresetUseResultMessage, _super);
    function InventoryPresetUseResultMessage() {
        this.presetId = 0;
        this.code = 3;
        this.unlinkedPosition = [];
        _super.call(this);
    }
    InventoryPresetUseResultMessage.prototype.getMessageId = function () {
        return InventoryPresetUseResultMessage.ID;
    };
    InventoryPresetUseResultMessage.prototype.reset = function () {
        this.presetId = 0;
        this.code = 3;
        this.unlinkedPosition = [];
    };
    InventoryPresetUseResultMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    InventoryPresetUseResultMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    InventoryPresetUseResultMessage.prototype.serialize = function (param1) {
        this.serializeAs_InventoryPresetUseResultMessage(param1);
    };
    InventoryPresetUseResultMessage.prototype.serializeAs_InventoryPresetUseResultMessage = function (param1) {
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element presetId.');
        }
        param1.writeByte(this.presetId);
        param1.writeByte(this.code);
        param1.writeShort(this.unlinkedPosition.length);
        var _loc2_ = 0;
        while (_loc2_ < this.unlinkedPosition.length) {
            param1.writeByte(this.unlinkedPosition[_loc2_]);
            _loc2_++;
        }
    };
    InventoryPresetUseResultMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_InventoryPresetUseResultMessage(param1);
    };
    InventoryPresetUseResultMessage.prototype.deserializeAs_InventoryPresetUseResultMessage = function (param1) {
        var _loc4_ = 0;
        this.presetId = param1.readByte();
        if (this.presetId < 0) {
            throw new Error('Forbidden value (' + this.presetId + ') on element of InventoryPresetUseResultMessage.presetId.');
        }
        this.code = param1.readByte();
        if (this.code < 0) {
            throw new Error('Forbidden value (' + this.code + ') on element of InventoryPresetUseResultMessage.code.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedByte();
            if (_loc4_ < 0 || _loc4_ > 255) {
                throw new Error('Forbidden value (' + _loc4_ + ') on elements of unlinkedPosition.');
            }
            this.unlinkedPosition.push(_loc4_);
            _loc3_++;
        }
    };
    InventoryPresetUseResultMessage.ID = 6163;
    return InventoryPresetUseResultMessage;
})(network_message_1.NetworkMessage);
module.exports = InventoryPresetUseResultMessage;
