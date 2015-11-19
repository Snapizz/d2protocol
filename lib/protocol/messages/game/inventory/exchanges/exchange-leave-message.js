/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var LeaveDialogMessage = require('../../dialog/leave-dialog-message');
var ExchangeLeaveMessage = (function (_super) {
    __extends(ExchangeLeaveMessage, _super);
    function ExchangeLeaveMessage() {
        this.success = false;
        _super.call(this);
    }
    ExchangeLeaveMessage.prototype.getMessageId = function () {
        return ExchangeLeaveMessage.ID;
    };
    ExchangeLeaveMessage.prototype.reset = function () {
        this.success = false;
    };
    ExchangeLeaveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ExchangeLeaveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ExchangeLeaveMessage.prototype.serialize = function (param1) {
        this.serializeAs_ExchangeLeaveMessage(param1);
    };
    ExchangeLeaveMessage.prototype.serializeAs_ExchangeLeaveMessage = function (param1) {
        _super.prototype.serializeAs_LeaveDialogMessage.call(this, param1);
        param1.writeBoolean(this.success);
    };
    ExchangeLeaveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ExchangeLeaveMessage(param1);
    };
    ExchangeLeaveMessage.prototype.deserializeAs_ExchangeLeaveMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.success = param1.readBoolean();
    };
    ExchangeLeaveMessage.ID = 5628;
    return ExchangeLeaveMessage;
})(LeaveDialogMessage);
module.exports = ExchangeLeaveMessage;
