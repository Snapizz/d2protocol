/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LeaveDialogMessage = (function (_super) {
    __extends(LeaveDialogMessage, _super);
    function LeaveDialogMessage() {
        this.dialogType = 0;
        _super.call(this);
    }
    LeaveDialogMessage.prototype.getMessageId = function () {
        return LeaveDialogMessage.ID;
    };
    LeaveDialogMessage.prototype.reset = function () {
        this.dialogType = 0;
    };
    LeaveDialogMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    LeaveDialogMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    LeaveDialogMessage.prototype.serialize = function (param1) {
        this.serializeAs_LeaveDialogMessage(param1);
    };
    LeaveDialogMessage.prototype.serializeAs_LeaveDialogMessage = function (param1) {
        param1.writeByte(this.dialogType);
    };
    LeaveDialogMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_LeaveDialogMessage(param1);
    };
    LeaveDialogMessage.prototype.deserializeAs_LeaveDialogMessage = function (param1) {
        this.dialogType = param1.readByte();
        if (this.dialogType < 0) {
            throw new Error('Forbidden value (' + this.dialogType + ') on element of LeaveDialogMessage.dialogType.');
        }
    };
    LeaveDialogMessage.ID = 5502;
    return LeaveDialogMessage;
})(network_message_1.NetworkMessage);
module.exports = LeaveDialogMessage;
