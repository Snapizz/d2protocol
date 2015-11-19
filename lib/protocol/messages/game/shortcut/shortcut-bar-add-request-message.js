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
var ShortcutBarAddRequestMessage = (function (_super) {
    __extends(ShortcutBarAddRequestMessage, _super);
    function ShortcutBarAddRequestMessage() {
        this.barType = 0;
        this.shortcut = new Shortcut();
        _super.call(this);
    }
    ShortcutBarAddRequestMessage.prototype.getMessageId = function () {
        return ShortcutBarAddRequestMessage.ID;
    };
    ShortcutBarAddRequestMessage.prototype.reset = function () {
        this.barType = 0;
        this.shortcut = new Shortcut();
    };
    ShortcutBarAddRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ShortcutBarAddRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ShortcutBarAddRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutBarAddRequestMessage(param1);
    };
    ShortcutBarAddRequestMessage.prototype.serializeAs_ShortcutBarAddRequestMessage = function (param1) {
        param1.writeByte(this.barType);
        param1.writeShort(this.shortcut.getTypeId());
        this.shortcut.serialize(param1);
    };
    ShortcutBarAddRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutBarAddRequestMessage(param1);
    };
    ShortcutBarAddRequestMessage.prototype.deserializeAs_ShortcutBarAddRequestMessage = function (param1) {
        this.barType = param1.readByte();
        if (this.barType < 0) {
            throw new Error('Forbidden value (' + this.barType + ') on element of ShortcutBarAddRequestMessage.barType.');
        }
        var _loc2_ = param1.readUnsignedShort();
        this.shortcut = ProtocolTypeManager.getInstance(Shortcut, _loc2_);
        this.shortcut.deserialize(param1);
    };
    ShortcutBarAddRequestMessage.ID = 6225;
    return ShortcutBarAddRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = ShortcutBarAddRequestMessage;
