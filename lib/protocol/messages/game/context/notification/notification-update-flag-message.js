/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var NotificationUpdateFlagMessage = (function (_super) {
    __extends(NotificationUpdateFlagMessage, _super);
    function NotificationUpdateFlagMessage() {
        this.index = 0;
        _super.call(this);
    }
    NotificationUpdateFlagMessage.prototype.getMessageId = function () {
        return NotificationUpdateFlagMessage.ID;
    };
    NotificationUpdateFlagMessage.prototype.reset = function () {
        this.index = 0;
    };
    NotificationUpdateFlagMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    NotificationUpdateFlagMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    NotificationUpdateFlagMessage.prototype.serialize = function (param1) {
        this.serializeAs_NotificationUpdateFlagMessage(param1);
    };
    NotificationUpdateFlagMessage.prototype.serializeAs_NotificationUpdateFlagMessage = function (param1) {
        if (this.index < 0) {
            throw new Error('Forbidden value (' + this.index + ') on element index.');
        }
        param1.writeVarShort(this.index);
    };
    NotificationUpdateFlagMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_NotificationUpdateFlagMessage(param1);
    };
    NotificationUpdateFlagMessage.prototype.deserializeAs_NotificationUpdateFlagMessage = function (param1) {
        this.index = param1.readVarUhShort();
        if (this.index < 0) {
            throw new Error('Forbidden value (' + this.index + ') on element of NotificationUpdateFlagMessage.index.');
        }
    };
    NotificationUpdateFlagMessage.ID = 6090;
    return NotificationUpdateFlagMessage;
})(network_message_1.NetworkMessage);
module.exports = NotificationUpdateFlagMessage;
