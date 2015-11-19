/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ShortcutBarRemoveErrorMessage = (function (_super) {
    __extends(ShortcutBarRemoveErrorMessage, _super);
    function ShortcutBarRemoveErrorMessage() {
        this.error = 0;
        _super.call(this);
    }
    ShortcutBarRemoveErrorMessage.prototype.getMessageId = function () {
        return ShortcutBarRemoveErrorMessage.ID;
    };
    ShortcutBarRemoveErrorMessage.prototype.reset = function () {
        this.error = 0;
    };
    ShortcutBarRemoveErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ShortcutBarRemoveErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ShortcutBarRemoveErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutBarRemoveErrorMessage(param1);
    };
    ShortcutBarRemoveErrorMessage.prototype.serializeAs_ShortcutBarRemoveErrorMessage = function (param1) {
        param1.writeByte(this.error);
    };
    ShortcutBarRemoveErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutBarRemoveErrorMessage(param1);
    };
    ShortcutBarRemoveErrorMessage.prototype.deserializeAs_ShortcutBarRemoveErrorMessage = function (param1) {
        this.error = param1.readByte();
        if (this.error < 0) {
            throw new Error('Forbidden value (' + this.error + ') on element of ShortcutBarRemoveErrorMessage.error.');
        }
    };
    ShortcutBarRemoveErrorMessage.ID = 6222;
    return ShortcutBarRemoveErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = ShortcutBarRemoveErrorMessage;
