/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ShortcutBarRemovedMessage = (function (_super) {
    __extends(ShortcutBarRemovedMessage, _super);
    function ShortcutBarRemovedMessage() {
        this.barType = 0;
        this.slot = 0;
        _super.call(this);
    }
    ShortcutBarRemovedMessage.prototype.getMessageId = function () {
        return ShortcutBarRemovedMessage.ID;
    };
    ShortcutBarRemovedMessage.prototype.reset = function () {
        this.barType = 0;
        this.slot = 0;
    };
    ShortcutBarRemovedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ShortcutBarRemovedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ShortcutBarRemovedMessage.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutBarRemovedMessage(param1);
    };
    ShortcutBarRemovedMessage.prototype.serializeAs_ShortcutBarRemovedMessage = function (param1) {
        param1.writeByte(this.barType);
        if (this.slot < 0 || this.slot > 99) {
            throw new Error('Forbidden value (' + this.slot + ') on element slot.');
        }
        param1.writeByte(this.slot);
    };
    ShortcutBarRemovedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutBarRemovedMessage(param1);
    };
    ShortcutBarRemovedMessage.prototype.deserializeAs_ShortcutBarRemovedMessage = function (param1) {
        this.barType = param1.readByte();
        if (this.barType < 0) {
            throw new Error('Forbidden value (' + this.barType + ') on element of ShortcutBarRemovedMessage.barType.');
        }
        this.slot = param1.readByte();
        if (this.slot < 0 || this.slot > 99) {
            throw new Error('Forbidden value (' + this.slot + ') on element of ShortcutBarRemovedMessage.slot.');
        }
    };
    ShortcutBarRemovedMessage.ID = 6224;
    return ShortcutBarRemovedMessage;
})(network_message_1.NetworkMessage);
module.exports = ShortcutBarRemovedMessage;
