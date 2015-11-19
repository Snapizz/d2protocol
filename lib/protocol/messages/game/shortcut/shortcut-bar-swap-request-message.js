/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ShortcutBarSwapRequestMessage = (function (_super) {
    __extends(ShortcutBarSwapRequestMessage, _super);
    function ShortcutBarSwapRequestMessage() {
        this.barType = 0;
        this.firstSlot = 0;
        this.secondSlot = 0;
        _super.call(this);
    }
    ShortcutBarSwapRequestMessage.prototype.getMessageId = function () {
        return ShortcutBarSwapRequestMessage.ID;
    };
    ShortcutBarSwapRequestMessage.prototype.reset = function () {
        this.barType = 0;
        this.firstSlot = 0;
        this.secondSlot = 0;
    };
    ShortcutBarSwapRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ShortcutBarSwapRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ShortcutBarSwapRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_ShortcutBarSwapRequestMessage(param1);
    };
    ShortcutBarSwapRequestMessage.prototype.serializeAs_ShortcutBarSwapRequestMessage = function (param1) {
        param1.writeByte(this.barType);
        if (this.firstSlot < 0 || this.firstSlot > 99) {
            throw new Error('Forbidden value (' + this.firstSlot + ') on element firstSlot.');
        }
        param1.writeByte(this.firstSlot);
        if (this.secondSlot < 0 || this.secondSlot > 99) {
            throw new Error('Forbidden value (' + this.secondSlot + ') on element secondSlot.');
        }
        param1.writeByte(this.secondSlot);
    };
    ShortcutBarSwapRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ShortcutBarSwapRequestMessage(param1);
    };
    ShortcutBarSwapRequestMessage.prototype.deserializeAs_ShortcutBarSwapRequestMessage = function (param1) {
        this.barType = param1.readByte();
        if (this.barType < 0) {
            throw new Error('Forbidden value (' + this.barType + ') on element of ShortcutBarSwapRequestMessage.barType.');
        }
        this.firstSlot = param1.readByte();
        if (this.firstSlot < 0 || this.firstSlot > 99) {
            throw new Error('Forbidden value (' + this.firstSlot + ') on element of ShortcutBarSwapRequestMessage.firstSlot.');
        }
        this.secondSlot = param1.readByte();
        if (this.secondSlot < 0 || this.secondSlot > 99) {
            throw new Error('Forbidden value (' + this.secondSlot + ') on element of ShortcutBarSwapRequestMessage.secondSlot.');
        }
    };
    ShortcutBarSwapRequestMessage.ID = 6230;
    return ShortcutBarSwapRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = ShortcutBarSwapRequestMessage;
