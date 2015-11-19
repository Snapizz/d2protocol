/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ShortcutBarAddErrorMessage = (function (_super) {
    __extends(ShortcutBarAddErrorMessage, _super);
    function ShortcutBarAddErrorMessage() {
        this.error = 0;
        _super.call(this);
    }
    ShortcutBarAddErrorMessage.prototype.getMessageId = function () {
        return ShortcutBarAddErrorMessage.ID;
    };
    ShortcutBarAddErrorMessage.prototype.reset = function () {
        this.error = 0;
    };
    ShortcutBarAddErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ShortcutBarAddErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ShortcutBarAddErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutBarAddErrorMessage(param1);
    };
    ShortcutBarAddErrorMessage.prototype.serializeAs_ShortcutBarAddErrorMessage = function (param1) {
        param1.writeByte(this.error);
    };
    ShortcutBarAddErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutBarAddErrorMessage(param1);
    };
    ShortcutBarAddErrorMessage.prototype.deserializeAs_ShortcutBarAddErrorMessage = function (param1) {
        this.error = param1.readByte();
        if (this.error < 0) {
            throw new Error('Forbidden value (' + this.error + ') on element of ShortcutBarAddErrorMessage.error.');
        }
    };
    ShortcutBarAddErrorMessage.ID = 6227;
    return ShortcutBarAddErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = ShortcutBarAddErrorMessage;
