/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LeaveDialogRequestMessage = (function (_super) {
    __extends(LeaveDialogRequestMessage, _super);
    function LeaveDialogRequestMessage() {
        _super.call(this);
    }
    LeaveDialogRequestMessage.prototype.getMessageId = function () {
        return LeaveDialogRequestMessage.ID;
    };
    LeaveDialogRequestMessage.prototype.reset = function () {
    };
    LeaveDialogRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LeaveDialogRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LeaveDialogRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_LeaveDialogRequestMessage(param1);
    };
    LeaveDialogRequestMessage.prototype.serializeAs_LeaveDialogRequestMessage = function (param1) {
    };
    LeaveDialogRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LeaveDialogRequestMessage(param1);
    };
    LeaveDialogRequestMessage.prototype.deserializeAs_LeaveDialogRequestMessage = function (param1) {
    };
    LeaveDialogRequestMessage.ID = 5501;
    return LeaveDialogRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = LeaveDialogRequestMessage;
