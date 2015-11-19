/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AuthenticationTicketAcceptedMessage = (function (_super) {
    __extends(AuthenticationTicketAcceptedMessage, _super);
    function AuthenticationTicketAcceptedMessage() {
        _super.call(this);
    }
    AuthenticationTicketAcceptedMessage.prototype.getMessageId = function () {
        return AuthenticationTicketAcceptedMessage.ID;
    };
    AuthenticationTicketAcceptedMessage.prototype.reset = function () {
    };
    AuthenticationTicketAcceptedMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    AuthenticationTicketAcceptedMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    AuthenticationTicketAcceptedMessage.prototype.serialize = function (param1) {
        this.serializeAs_AuthenticationTicketAcceptedMessage(param1);
    };
    AuthenticationTicketAcceptedMessage.prototype.serializeAs_AuthenticationTicketAcceptedMessage = function (param1) {
    };
    AuthenticationTicketAcceptedMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_AuthenticationTicketAcceptedMessage(param1);
    };
    AuthenticationTicketAcceptedMessage.prototype.deserializeAs_AuthenticationTicketAcceptedMessage = function (param1) {
    };
    AuthenticationTicketAcceptedMessage.ID = 111;
    return AuthenticationTicketAcceptedMessage;
})(network_message_1.NetworkMessage);
module.exports = AuthenticationTicketAcceptedMessage;
