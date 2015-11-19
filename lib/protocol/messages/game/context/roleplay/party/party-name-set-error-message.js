/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractPartyMessage = require('./abstract-party-message');
var PartyNameSetErrorMessage = (function (_super) {
    __extends(PartyNameSetErrorMessage, _super);
    function PartyNameSetErrorMessage() {
        this.result = 0;
        _super.call(this);
    }
    PartyNameSetErrorMessage.prototype.getMessageId = function () {
        return PartyNameSetErrorMessage.ID;
    };
    PartyNameSetErrorMessage.prototype.reset = function () {
        this.result = 0;
    };
    PartyNameSetErrorMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyNameSetErrorMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyNameSetErrorMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyNameSetErrorMessage(param1);
    };
    PartyNameSetErrorMessage.prototype.serializeAs_PartyNameSetErrorMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        param1.writeByte(this.result);
    };
    PartyNameSetErrorMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyNameSetErrorMessage(param1);
    };
    PartyNameSetErrorMessage.prototype.deserializeAs_PartyNameSetErrorMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.result = param1.readByte();
        if (this.result < 0) {
            throw new Error('Forbidden value (' + this.result + ') on element of PartyNameSetErrorMessage.result.');
        }
    };
    PartyNameSetErrorMessage.ID = 6501;
    return PartyNameSetErrorMessage;
})(AbstractPartyMessage);
module.exports = PartyNameSetErrorMessage;
