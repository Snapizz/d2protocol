/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AdminCommandMessage = require('./admin-command-message');
var AdminQuietCommandMessage = (function (_super) {
    __extends(AdminQuietCommandMessage, _super);
    function AdminQuietCommandMessage() {
        _super.call(this);
    }
    AdminQuietCommandMessage.prototype.getMessageId = function () {
        return AdminQuietCommandMessage.ID;
    };
    AdminQuietCommandMessage.prototype.reset = function () {
    };
    AdminQuietCommandMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AdminQuietCommandMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AdminQuietCommandMessage.prototype.serialize = function (param1) {
        this.serializeAs_AdminQuietCommandMessage(param1);
    };
    AdminQuietCommandMessage.prototype.serializeAs_AdminQuietCommandMessage = function (param1) {
        _super.prototype.serializeAs_AdminCommandMessage.call(this, param1);
    };
    AdminQuietCommandMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AdminQuietCommandMessage(param1);
    };
    AdminQuietCommandMessage.prototype.deserializeAs_AdminQuietCommandMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
    };
    AdminQuietCommandMessage.ID = 5662;
    return AdminQuietCommandMessage;
})(AdminCommandMessage);
module.exports = AdminQuietCommandMessage;
