/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AuthenticationTicketRefusedMessage = (function (_super) {
    __extends(AuthenticationTicketRefusedMessage, _super);
    function AuthenticationTicketRefusedMessage() {
        _super.call(this);
    }
    AuthenticationTicketRefusedMessage.prototype.getMessageId = function () {
        return AuthenticationTicketRefusedMessage.ID;
    };
    AuthenticationTicketRefusedMessage.prototype.reset = function () {
    };
    AuthenticationTicketRefusedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AuthenticationTicketRefusedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AuthenticationTicketRefusedMessage.prototype.serialize = function (param1) {
        this.serializeAs_AuthenticationTicketRefusedMessage(param1);
    };
    AuthenticationTicketRefusedMessage.prototype.serializeAs_AuthenticationTicketRefusedMessage = function (param1) {
    };
    AuthenticationTicketRefusedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AuthenticationTicketRefusedMessage(param1);
    };
    AuthenticationTicketRefusedMessage.prototype.deserializeAs_AuthenticationTicketRefusedMessage = function (param1) {
    };
    AuthenticationTicketRefusedMessage.ID = 112;
    return AuthenticationTicketRefusedMessage;
})(network_message_1.NetworkMessage);
module.exports = AuthenticationTicketRefusedMessage;
