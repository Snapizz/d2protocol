/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AdminCommandMessage = (function (_super) {
    __extends(AdminCommandMessage, _super);
    function AdminCommandMessage() {
        this.content = '';
        _super.call(this);
    }
    AdminCommandMessage.prototype.getMessageId = function () {
        return AdminCommandMessage.ID;
    };
    AdminCommandMessage.prototype.reset = function () {
        this.content = '';
    };
    AdminCommandMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AdminCommandMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AdminCommandMessage.prototype.serialize = function (param1) {
        this.serializeAs_AdminCommandMessage(param1);
    };
    AdminCommandMessage.prototype.serializeAs_AdminCommandMessage = function (param1) {
        param1.writeUTF(this.content);
    };
    AdminCommandMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AdminCommandMessage(param1);
    };
    AdminCommandMessage.prototype.deserializeAs_AdminCommandMessage = function (param1) {
        this.content = param1.readUTF();
    };
    AdminCommandMessage.ID = 76;
    return AdminCommandMessage;
})(network_message_1.NetworkMessage);
module.exports = AdminCommandMessage;
