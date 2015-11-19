/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AuthenticationTicketMessage = (function (_super) {
    __extends(AuthenticationTicketMessage, _super);
    function AuthenticationTicketMessage() {
        this.lang = '';
        this.ticket = '';
        _super.call(this);
    }
    AuthenticationTicketMessage.prototype.getMessageId = function () {
        return AuthenticationTicketMessage.ID;
    };
    AuthenticationTicketMessage.prototype.reset = function () {
        this.lang = '';
        this.ticket = '';
    };
    AuthenticationTicketMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AuthenticationTicketMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AuthenticationTicketMessage.prototype.serialize = function (param1) {
        this.serializeAs_AuthenticationTicketMessage(param1);
    };
    AuthenticationTicketMessage.prototype.serializeAs_AuthenticationTicketMessage = function (param1) {
        param1.writeUTF(this.lang);
        param1.writeUTF(this.ticket);
    };
    AuthenticationTicketMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AuthenticationTicketMessage(param1);
    };
    AuthenticationTicketMessage.prototype.deserializeAs_AuthenticationTicketMessage = function (param1) {
        this.lang = param1.readUTF();
        this.ticket = param1.readUTF();
    };
    AuthenticationTicketMessage.ID = 110;
    return AuthenticationTicketMessage;
})(network_message_1.NetworkMessage);
module.exports = AuthenticationTicketMessage;
