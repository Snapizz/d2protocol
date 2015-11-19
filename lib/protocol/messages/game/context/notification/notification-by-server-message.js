/// <reference path="../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../network-message');
var custom_data_wrapper_1 = require('../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var NotificationByServerMessage = (function (_super) {
    __extends(NotificationByServerMessage, _super);
    function NotificationByServerMessage() {
        this.id = 0;
        this.parameters = [];
        this.forceOpen = false;
        _super.call(this);
    }
    NotificationByServerMessage.prototype.getMessageId = function () {
        return NotificationByServerMessage.ID;
    };
    NotificationByServerMessage.prototype.reset = function () {
        this.id = 0;
        this.parameters = [];
        this.forceOpen = false;
    };
    NotificationByServerMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    NotificationByServerMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    NotificationByServerMessage.prototype.serialize = function (param1) {
        this.serializeAs_NotificationByServerMessage(param1);
    };
    NotificationByServerMessage.prototype.serializeAs_NotificationByServerMessage = function (param1) {
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element id.');
        }
        param1.writeVarShort(this.id);
        param1.writeShort(this.parameters.length);
        var _loc2_ = 0;
        while (_loc2_ < this.parameters.length) {
            param1.writeUTF(this.parameters[_loc2_]);
            _loc2_++;
        }
        param1.writeBoolean(this.forceOpen);
    };
    NotificationByServerMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_NotificationByServerMessage(param1);
    };
    NotificationByServerMessage.prototype.deserializeAs_NotificationByServerMessage = function (param1) {
        var _loc4_ = null;
        this.id = param1.readVarUhShort();
        if (this.id < 0) {
            throw new Error('Forbidden value (' + this.id + ') on element of NotificationByServerMessage.id.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc4_ = param1.readUTF();
            this.parameters.push(_loc4_);
            _loc3_++;
        }
        this.forceOpen = param1.readBoolean();
    };
    NotificationByServerMessage.ID = 6103;
    return NotificationByServerMessage;
})(network_message_1.NetworkMessage);
module.exports = NotificationByServerMessage;
