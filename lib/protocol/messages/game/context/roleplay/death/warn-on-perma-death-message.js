/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var WarnOnPermaDeathMessage = (function (_super) {
    __extends(WarnOnPermaDeathMessage, _super);
    function WarnOnPermaDeathMessage() {
        this.enable = false;
        _super.call(this);
    }
    WarnOnPermaDeathMessage.prototype.getMessageId = function () {
        return WarnOnPermaDeathMessage.ID;
    };
    WarnOnPermaDeathMessage.prototype.reset = function () {
        this.enable = false;
    };
    WarnOnPermaDeathMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    WarnOnPermaDeathMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    WarnOnPermaDeathMessage.prototype.serialize = function (param1) {
        this.serializeAs_WarnOnPermaDeathMessage(param1);
    };
    WarnOnPermaDeathMessage.prototype.serializeAs_WarnOnPermaDeathMessage = function (param1) {
        param1.writeBoolean(this.enable);
    };
    WarnOnPermaDeathMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_WarnOnPermaDeathMessage(param1);
    };
    WarnOnPermaDeathMessage.prototype.deserializeAs_WarnOnPermaDeathMessage = function (param1) {
        this.enable = param1.readBoolean();
    };
    WarnOnPermaDeathMessage.ID = 6512;
    return WarnOnPermaDeathMessage;
})(network_message_1.NetworkMessage);
module.exports = WarnOnPermaDeathMessage;
