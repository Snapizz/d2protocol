/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var SetEnablePVPRequestMessage = (function (_super) {
    __extends(SetEnablePVPRequestMessage, _super);
    function SetEnablePVPRequestMessage() {
        this.enable = false;
        _super.call(this);
    }
    SetEnablePVPRequestMessage.prototype.getMessageId = function () {
        return SetEnablePVPRequestMessage.ID;
    };
    SetEnablePVPRequestMessage.prototype.reset = function () {
        this.enable = false;
    };
    SetEnablePVPRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    SetEnablePVPRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    SetEnablePVPRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_SetEnablePVPRequestMessage(param1);
    };
    SetEnablePVPRequestMessage.prototype.serializeAs_SetEnablePVPRequestMessage = function (param1) {
        param1.writeBoolean(this.enable);
    };
    SetEnablePVPRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_SetEnablePVPRequestMessage(param1);
    };
    SetEnablePVPRequestMessage.prototype.deserializeAs_SetEnablePVPRequestMessage = function (param1) {
        this.enable = param1.readBoolean();
    };
    SetEnablePVPRequestMessage.ID = 1810;
    return SetEnablePVPRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = SetEnablePVPRequestMessage;
