/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ShortcutBarRemoveRequestMessage = (function (_super) {
    __extends(ShortcutBarRemoveRequestMessage, _super);
    function ShortcutBarRemoveRequestMessage() {
        this.barType = 0;
        this.slot = 0;
        _super.call(this);
    }
    ShortcutBarRemoveRequestMessage.prototype.getMessageId = function () {
        return ShortcutBarRemoveRequestMessage.ID;
    };
    ShortcutBarRemoveRequestMessage.prototype.reset = function () {
        this.barType = 0;
        this.slot = 0;
    };
    ShortcutBarRemoveRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ShortcutBarRemoveRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ShortcutBarRemoveRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutBarRemoveRequestMessage(param1);
    };
    ShortcutBarRemoveRequestMessage.prototype.serializeAs_ShortcutBarRemoveRequestMessage = function (param1) {
        param1.writeByte(this.barType);
        if (this.slot < 0 || this.slot > 99) {
            throw new Error('Forbidden value (' + this.slot + ') on element slot.');
        }
        param1.writeByte(this.slot);
    };
    ShortcutBarRemoveRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutBarRemoveRequestMessage(param1);
    };
    ShortcutBarRemoveRequestMessage.prototype.deserializeAs_ShortcutBarRemoveRequestMessage = function (param1) {
        this.barType = param1.readByte();
        if (this.barType < 0) {
            throw new Error('Forbidden value (' + this.barType + ') on element of ShortcutBarRemoveRequestMessage.barType.');
        }
        this.slot = param1.readByte();
        if (this.slot < 0 || this.slot > 99) {
            throw new Error('Forbidden value (' + this.slot + ') on element of ShortcutBarRemoveRequestMessage.slot.');
        }
    };
    ShortcutBarRemoveRequestMessage.ID = 6228;
    return ShortcutBarRemoveRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = ShortcutBarRemoveRequestMessage;
