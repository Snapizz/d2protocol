/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var NotificationListMessage = (function (_super) {
    __extends(NotificationListMessage, _super);
    function NotificationListMessage() {
        this.flags = [];
        _super.call(this);
    }
    NotificationListMessage.prototype.getMessageId = function () {
        return NotificationListMessage.ID;
    };
    NotificationListMessage.prototype.reset = function () {
        this.flags = [];
    };
    NotificationListMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    NotificationListMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    NotificationListMessage.prototype.serialize = function (param1) {
        this.serializeAs_NotificationListMessage(param1);
    };
    NotificationListMessage.prototype.serializeAs_NotificationListMessage = function (param1) {
        param1.writeShort(this.flags.length);
        var _loc2_ = 0;
        while (_loc2_ < this.flags.length) {
            param1.writeVarInt(this.flags[_loc2_]);
            _loc2_++;
        }
    };
    NotificationListMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_NotificationListMessage(param1);
    };
    NotificationListMessage.prototype.deserializeAs_NotificationListMessage = function (param1) {
        var _loc4_ = 0;
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readVarInt();
            this.flags.push(_loc4_);
            _loc3_++;
        }
    };
    NotificationListMessage.ID = 6087;
    return NotificationListMessage;
})(network_message_1.NetworkMessage);
module.exports = NotificationListMessage;
