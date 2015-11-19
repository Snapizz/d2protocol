/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ContactLookRequestMessage = (function (_super) {
    __extends(ContactLookRequestMessage, _super);
    function ContactLookRequestMessage() {
        this.requestId = 0;
        this.contactType = 0;
        _super.call(this);
    }
    ContactLookRequestMessage.prototype.getMessageId = function () {
        return ContactLookRequestMessage.ID;
    };
    ContactLookRequestMessage.prototype.reset = function () {
        this.requestId = 0;
        this.contactType = 0;
    };
    ContactLookRequestMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ContactLookRequestMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ContactLookRequestMessage.prototype.serialize = function (param1) {
        this.serializeAs_ContactLookRequestMessage(param1);
    };
    ContactLookRequestMessage.prototype.serializeAs_ContactLookRequestMessage = function (param1) {
        if (this.requestId < 0 || this.requestId > 255) {
            throw new Error('Forbidden value (' + this.requestId + ') on element requestId.');
        }
        param1.writeByte(this.requestId);
        param1.writeByte(this.contactType);
    };
    ContactLookRequestMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ContactLookRequestMessage(param1);
    };
    ContactLookRequestMessage.prototype.deserializeAs_ContactLookRequestMessage = function (param1) {
        this.requestId = param1.readUnsignedByte();
        if (this.requestId < 0 || this.requestId > 255) {
            throw new Error('Forbidden value (' + this.requestId + ') on element of ContactLookRequestMessage.requestId.');
        }
        this.contactType = param1.readByte();
        if (this.contactType < 0) {
            throw new Error('Forbidden value (' + this.contactType + ') on element of ContactLookRequestMessage.contactType.');
        }
    };
    ContactLookRequestMessage.ID = 5932;
    return ContactLookRequestMessage;
})(network_message_1.NetworkMessage);
module.exports = ContactLookRequestMessage;
