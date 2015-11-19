/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ShortcutBarSwapErrorMessage = (function (_super) {
    __extends(ShortcutBarSwapErrorMessage, _super);
    function ShortcutBarSwapErrorMessage() {
        this.error = 0;
        _super.call(this);
    }
    ShortcutBarSwapErrorMessage.prototype.getMessageId = function () {
        return ShortcutBarSwapErrorMessage.ID;
    };
    ShortcutBarSwapErrorMessage.prototype.reset = function () {
        this.error = 0;
    };
    ShortcutBarSwapErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ShortcutBarSwapErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ShortcutBarSwapErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutBarSwapErrorMessage(param1);
    };
    ShortcutBarSwapErrorMessage.prototype.serializeAs_ShortcutBarSwapErrorMessage = function (param1) {
        param1.writeByte(this.error);
    };
    ShortcutBarSwapErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutBarSwapErrorMessage(param1);
    };
    ShortcutBarSwapErrorMessage.prototype.deserializeAs_ShortcutBarSwapErrorMessage = function (param1) {
        this.error = param1.readByte();
        if (this.error < 0) {
            throw new Error('Forbidden value (' + this.error + ') on element of ShortcutBarSwapErrorMessage.error.');
        }
    };
    ShortcutBarSwapErrorMessage.ID = 6226;
    return ShortcutBarSwapErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = ShortcutBarSwapErrorMessage;
