/// <reference path="../../../../../../../node_modules/ts-bytearray/ts-bytearray.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var network_message_1 = require('../../../../../network-message');
var custom_data_wrapper_1 = require('../../../../../custom-data-wrapper');
var ByteArray = require('ts-bytearray');
var AbstractPartyEventMessage = require('./abstract-party-event-message');
var PartyMemberRemoveMessage = (function (_super) {
    __extends(PartyMemberRemoveMessage, _super);
    function PartyMemberRemoveMessage() {
        this.leavingPlayerId = 0;
        _super.call(this);
    }
    PartyMemberRemoveMessage.prototype.getMessageId = function () {
        return PartyMemberRemoveMessage.ID;
    };
    PartyMemberRemoveMessage.prototype.reset = function () {
        this.leavingPlayerId = 0;
    };
    PartyMemberRemoveMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyMemberRemoveMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyMemberRemoveMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyMemberRemoveMessage(param1);
    };
    PartyMemberRemoveMessage.prototype.serializeAs_PartyMemberRemoveMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyEventMessage.call(this, param1);
        if (this.leavingPlayerId < 0) {
            throw new Error('Forbidden value (' + this.leavingPlayerId + ') on element leavingPlayerId.');
        }
        param1.writeVarInt(this.leavingPlayerId);
    };
    PartyMemberRemoveMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyMemberRemoveMessage(param1);
    };
    PartyMemberRemoveMessage.prototype.deserializeAs_PartyMemberRemoveMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.leavingPlayerId = param1.readVarUhInt();
        if (this.leavingPlayerId < 0) {
            throw new Error('Forbidden value (' + this.leavingPlayerId + ') on element of PartyMemberRemoveMessage.leavingPlayerId.');
        }
    };
    PartyMemberRemoveMessage.ID = 5579;
    return PartyMemberRemoveMessage;
})(AbstractPartyEventMessage);
module.exports = PartyMemberRemoveMessage;
