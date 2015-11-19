/// <reference path="../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../network-message');
var custom_data_wrapper_1 = require('../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var CredentialsAcknowledgementMessage = (function (_super) {
    __extends(CredentialsAcknowledgementMessage, _super);
    function CredentialsAcknowledgementMessage() {
        _super.call(this);
    }
    CredentialsAcknowledgementMessage.prototype.getMessageId = function () {
        return CredentialsAcknowledgementMessage.ID;
    };
    CredentialsAcknowledgementMessage.prototype.reset = function () {
    };
    CredentialsAcknowledgementMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    CredentialsAcknowledgementMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    CredentialsAcknowledgementMessage.prototype.serialize = function (param1) {
        this.serializeAs_CredentialsAcknowledgementMessage(param1);
    };
    CredentialsAcknowledgementMessage.prototype.serializeAs_CredentialsAcknowledgementMessage = function (param1) {
    };
    CredentialsAcknowledgementMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_CredentialsAcknowledgementMessage(param1);
    };
    CredentialsAcknowledgementMessage.prototype.deserializeAs_CredentialsAcknowledgementMessage = function (param1) {
    };
    CredentialsAcknowledgementMessage.ID = 6314;
    return CredentialsAcknowledgementMessage;
})(network_message_1.NetworkMessage);
module.exports = CredentialsAcknowledgementMessage;
