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
var PartyNameUpdateMessage = (function (_super) {
    __extends(PartyNameUpdateMessage, _super);
    function PartyNameUpdateMessage() {
        this.partyName = '';
        _super.call(this);
    }
    PartyNameUpdateMessage.prototype.getMessageId = function () {
        return PartyNameUpdateMessage.ID;
    };
    PartyNameUpdateMessage.prototype.reset = function () {
        this.partyName = '';
    };
    PartyNameUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyNameUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyNameUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyNameUpdateMessage(param1);
    };
    PartyNameUpdateMessage.prototype.serializeAs_PartyNameUpdateMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        param1.writeUTF(this.partyName);
    };
    PartyNameUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyNameUpdateMessage(param1);
    };
    PartyNameUpdateMessage.prototype.deserializeAs_PartyNameUpdateMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.partyName = param1.readUTF();
    };
    PartyNameUpdateMessage.ID = 6502;
    return PartyNameUpdateMessage;
})(AbstractPartyMessage);
module.exports = PartyNameUpdateMessage;
