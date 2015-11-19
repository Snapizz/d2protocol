/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var GuestModeMessage = (function (_super) {
    __extends(GuestModeMessage, _super);
    function GuestModeMessage() {
        this.active = false;
        _super.call(this);
    }
    GuestModeMessage.prototype.getMessageId = function () {
        return GuestModeMessage.ID;
    };
    GuestModeMessage.prototype.reset = function () {
        this.active = false;
    };
    GuestModeMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    GuestModeMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    GuestModeMessage.prototype.serialize = function (param1) {
        this.serializeAs_GuestModeMessage(param1);
    };
    GuestModeMessage.prototype.serializeAs_GuestModeMessage = function (param1) {
        param1.writeBoolean(this.active);
    };
    GuestModeMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_GuestModeMessage(param1);
    };
    GuestModeMessage.prototype.deserializeAs_GuestModeMessage = function (param1) {
        this.active = param1.readBoolean();
    };
    GuestModeMessage.ID = 6505;
    return GuestModeMessage;
})(network_message_1.NetworkMessage);
module.exports = GuestModeMessage;
