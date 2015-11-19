/// <reference path="../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../network-message');
var custom_data_wrapper_1 = require('../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var ContactLookRequestMessage = require('./contact-look-request-message');
var ContactLookRequestByIdMessage = (function (_super) {
    __extends(ContactLookRequestByIdMessage, _super);
    function ContactLookRequestByIdMessage() {
        this.playerId = 0;
        _super.call(this);
    }
    ContactLookRequestByIdMessage.prototype.getMessageId = function () {
        return ContactLookRequestByIdMessage.ID;
    };
    ContactLookRequestByIdMessage.prototype.reset = function () {
        this.playerId = 0;
    };
    ContactLookRequestByIdMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    ContactLookRequestByIdMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    ContactLookRequestByIdMessage.prototype.serialize = function (param1) {
        this.serializeAs_ContactLookRequestByIdMessage(param1);
    };
    ContactLookRequestByIdMessage.prototype.serializeAs_ContactLookRequestByIdMessage = function (param1) {
        _super.prototype.serializeAs_ContactLookRequestMessage.call(this, param1);
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element playerId.');
        }
        param1.writeVarInt(this.playerId);
    };
    ContactLookRequestByIdMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_ContactLookRequestByIdMessage(param1);
    };
    ContactLookRequestByIdMessage.prototype.deserializeAs_ContactLookRequestByIdMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.playerId = param1.readVarUhInt();
        if (this.playerId < 0) {
            throw new Error('Forbidden value (' + this.playerId + ') on element of ContactLookRequestByIdMessage.playerId.');
        }
    };
    ContactLookRequestByIdMessage.ID = 5935;
    return ContactLookRequestByIdMessage;
})(ContactLookRequestMessage);
module.exports = ContactLookRequestByIdMessage;
