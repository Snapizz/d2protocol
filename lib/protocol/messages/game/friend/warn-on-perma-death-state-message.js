/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var WarnOnPermaDeathStateMessage = (function (_super) {
    __extends(WarnOnPermaDeathStateMessage, _super);
    function WarnOnPermaDeathStateMessage() {
        this.enable = false;
        _super.call(this);
    }
    WarnOnPermaDeathStateMessage.prototype.getMessageId = function () {
        return WarnOnPermaDeathStateMessage.ID;
    };
    WarnOnPermaDeathStateMessage.prototype.reset = function () {
        this.enable = false;
    };
    WarnOnPermaDeathStateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    WarnOnPermaDeathStateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    WarnOnPermaDeathStateMessage.prototype.serialize = function (param1) {
        this.serializeAs_WarnOnPermaDeathStateMessage(param1);
    };
    WarnOnPermaDeathStateMessage.prototype.serializeAs_WarnOnPermaDeathStateMessage = function (param1) {
        param1.writeBoolean(this.enable);
    };
    WarnOnPermaDeathStateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_WarnOnPermaDeathStateMessage(param1);
    };
    WarnOnPermaDeathStateMessage.prototype.deserializeAs_WarnOnPermaDeathStateMessage = function (param1) {
        this.enable = param1.readBoolean();
    };
    WarnOnPermaDeathStateMessage.ID = 6513;
    return WarnOnPermaDeathStateMessage;
})(network_message_1.NetworkMessage);
module.exports = WarnOnPermaDeathStateMessage;
