/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var Shortcut = require('../../../types/game/shortcut/shortcut');
var ProtocolTypeManager = require('../../../protocol-type-manager');
var ShortcutBarContentMessage = (function (_super) {
    __extends(ShortcutBarContentMessage, _super);
    function ShortcutBarContentMessage() {
        this.barType = 0;
        this.shortcuts = [];
        _super.call(this);
    }
    ShortcutBarContentMessage.prototype.getMessageId = function () {
        return ShortcutBarContentMessage.ID;
    };
    ShortcutBarContentMessage.prototype.reset = function () {
        this.barType = 0;
        this.shortcuts = [];
    };
    ShortcutBarContentMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ShortcutBarContentMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ShortcutBarContentMessage.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutBarContentMessage(param1);
    };
    ShortcutBarContentMessage.prototype.serializeAs_ShortcutBarContentMessage = function (param1) {
        param1.writeByte(this.barType);
        param1.writeShort(this.shortcuts.length);
        var _loc2_ = 0;
        while (_loc2_ < this.shortcuts.length) {
            param1.writeShort((this.shortcuts[_loc2_]).getTypeId());
            (this.shortcuts[_loc2_]).serialize(param1);
            _loc2_++;
        }
    };
    ShortcutBarContentMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutBarContentMessage(param1);
    };
    ShortcutBarContentMessage.prototype.deserializeAs_ShortcutBarContentMessage = function (param1) {
        var _loc4_ = 0;
        var _loc5_ = null;
        this.barType = param1.readByte();
        if (this.barType < 0) {
            throw new Error('Forbidden value (' + this.barType + ') on element of ShortcutBarContentMessage.barType.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUnsignedShort();
            _loc5_ = ProtocolTypeManager.getInstance(Shortcut, _loc4_);
            _loc5_.deserialize(param1);
            this.shortcuts.push(_loc5_);
            _loc3_++;
        }
    };
    ShortcutBarContentMessage.ID = 6231;
    return ShortcutBarContentMessage;
})(network_message_1.NetworkMessage);
module.exports = ShortcutBarContentMessage;
