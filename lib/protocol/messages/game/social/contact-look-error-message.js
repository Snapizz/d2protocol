/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ContactLookErrorMessage = (function (_super) {
    __extends(ContactLookErrorMessage, _super);
    function ContactLookErrorMessage() {
        this.requestId = 0;
        _super.call(this);
    }
    ContactLookErrorMessage.prototype.getMessageId = function () {
        return ContactLookErrorMessage.ID;
    };
    ContactLookErrorMessage.prototype.reset = function () {
        this.requestId = 0;
    };
    ContactLookErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ContactLookErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ContactLookErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_ContactLookErrorMessage(param1);
    };
    ContactLookErrorMessage.prototype.serializeAs_ContactLookErrorMessage = function (param1) {
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element requestId.');
        }
        param1.writeVarInt(this.requestId);
    };
    ContactLookErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ContactLookErrorMessage(param1);
    };
    ContactLookErrorMessage.prototype.deserializeAs_ContactLookErrorMessage = function (param1) {
        this.requestId = param1.readVarUhInt();
        if (this.requestId < 0) {
            throw new Error('Forbidden value (' + this.requestId + ') on element of ContactLookErrorMessage.requestId.');
        }
    };
    ContactLookErrorMessage.ID = 6045;
    return ContactLookErrorMessage;
})(network_message_1.NetworkMessage);
module.exports = ContactLookErrorMessage;
