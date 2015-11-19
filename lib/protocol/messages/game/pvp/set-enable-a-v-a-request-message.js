/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SetEnableAVARequestMessage = (function (_super) {
    __extends(SetEnableAVARequestMessage, _super);
    function SetEnableAVARequestMessage() {
        this.enable = false;
        _super.call(this);
    }
    SetEnableAVARequestMessage.prototype.getMessageId = function () {
        return SetEnableAVARequestMessage.ID;
    };
    SetEnableAVARequestMessage.prototype.reset = function () {
        this.enable = false;
    };
    SetEnableAVARequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SetEnableAVARequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SetEnableAVARequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_SetEnableAVARequestMessage(param1);
    };
    SetEnableAVARequestMessage.prototype.serializeAs_SetEnableAVARequestMessage = function (param1) {
        param1.writeBoolean(this.enable);
    };
    SetEnableAVARequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SetEnableAVARequestMessage(param1);
    };
    SetEnableAVARequestMessage.prototype.deserializeAs_SetEnableAVARequestMessage = function (param1) {
        this.enable = param1.readBoolean();
    };
    SetEnableAVARequestMessage.ID = 6443;
    return SetEnableAVARequestMessage;
})(network_message_1.NetworkMessage);
module.exports = SetEnableAVARequestMessage;
