/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ObjectEffect = require('../../../../types/game/data/items/effects/object-effect');
var ProtocolTypeManager = require('../../../../protocol-type-manager');
var SetUpdateMessage = (function (_super) {
    __extends(SetUpdateMessage, _super);
    function SetUpdateMessage() {
        this.setId = 0;
        this.setObjects = [];
        this.setEffects = [];
        _super.call(this);
    }
    SetUpdateMessage.prototype.getMessageId = function () {
        return SetUpdateMessage.ID;
    };
    SetUpdateMessage.prototype.reset = function () {
        this.setId = 0;
        this.setObjects = [];
        this.setEffects = [];
    };
    SetUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SetUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SetUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_SetUpdateMessage(param1);
    };
    SetUpdateMessage.prototype.serializeAs_SetUpdateMessage = function (param1) {
        if (this.setId < 0) {
            throw new Error('Forbidden value (' + this.setId + ') on element setId.');
        }
        param1.writeVarShort(this.setId);
        param1.writeShort(this.setObjects.length);
        var _loc2_ = 0;
        while (_loc2_ < this.setObjects.length) {
            if (this.setObjects[_loc2_] < 0) {
                throw new Error('Forbidden value (' + this.setObjects[_loc2_] + ') on element 2 (starting at 1) of setObjects.');
            }
            param1.writeVarShort(this.setObjects[_loc2_]);
            _loc2_++;
        }
        param1.writeShort(this.setEffects.length);
        var _loc3_ = 0;
        while (_loc3_ < this.setEffects.length) {
            param1.writeShort((this.setEffects[_loc3_]).getTypeId());
            (this.setEffects[_loc3_]).serialize(param1);
            _loc3_++;
        }
    };
    SetUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SetUpdateMessage(param1);
    };
    SetUpdateMessage.prototype.deserializeAs_SetUpdateMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = 0;
        var _loc8_ = null;
        this.setId = param1.readVarUhShort();
        if (this.setId < 0) {
            throw new Error('Forbidden value (' + this.setId + ') on element of SetUpdateMessage.setId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readVarUhShort();
            if (_loc6_ < 0) {
                throw new Error('Forbidden value (' + _loc6_ + ') on elements of setObjects.');
            }
            this.setObjects.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = param1.readUnsignedShort();
            _loc8_ = ProtocolTypeManager.getInstance(ObjectEffect, _loc7_);
            _loc8_.deserialize(param1);
            this.setEffects.push(_loc8_);
            _loc5_++;
        }
    };
    SetUpdateMessage.ID = 5503;
    return SetUpdateMessage;
})(network_message_1.NetworkMessage);
module.exports = SetUpdateMessage;
