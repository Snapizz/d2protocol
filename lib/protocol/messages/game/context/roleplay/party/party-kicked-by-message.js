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
var PartyKickedByMessage = (function (_super) {
    __extends(PartyKickedByMessage, _super);
    function PartyKickedByMessage() {
        this.kickerId = 0;
        _super.call(this);
    }
    PartyKickedByMessage.prototype.getMessageId = function () {
        return PartyKickedByMessage.ID;
    };
    PartyKickedByMessage.prototype.reset = function () {
        this.kickerId = 0;
    };
    PartyKickedByMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyKickedByMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyKickedByMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyKickedByMessage(param1);
    };
    PartyKickedByMessage.prototype.serializeAs_PartyKickedByMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        if (this.kickerId < 0) {
            throw new Error('Forbidden value (' + this.kickerId + ') on element kickerId.');
        }
        param1.writeVarInt(this.kickerId);
    };
    PartyKickedByMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyKickedByMessage(param1);
    };
    PartyKickedByMessage.prototype.deserializeAs_PartyKickedByMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.kickerId = param1.readVarUhInt();
        if (this.kickerId < 0) {
            throw new Error('Forbidden value (' + this.kickerId + ') on element of PartyKickedByMessage.kickerId.');
        }
    };
    PartyKickedByMessage.ID = 5590;
    return PartyKickedByMessage;
})(AbstractPartyMessage);
module.exports = PartyKickedByMessage;
