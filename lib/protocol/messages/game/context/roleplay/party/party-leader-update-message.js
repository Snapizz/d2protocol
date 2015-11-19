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
var PartyLeaderUpdateMessage = (function (_super) {
    __extends(PartyLeaderUpdateMessage, _super);
    function PartyLeaderUpdateMessage() {
        this.partyLeaderId = 0;
        _super.call(this);
    }
    PartyLeaderUpdateMessage.prototype.getMessageId = function () {
        return PartyLeaderUpdateMessage.ID;
    };
    PartyLeaderUpdateMessage.prototype.reset = function () {
        this.partyLeaderId = 0;
    };
    PartyLeaderUpdateMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyLeaderUpdateMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyLeaderUpdateMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyLeaderUpdateMessage(param1);
    };
    PartyLeaderUpdateMessage.prototype.serializeAs_PartyLeaderUpdateMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyEventMessage.call(this, param1);
        if (this.partyLeaderId < 0) {
            throw new Error('Forbidden value (' + this.partyLeaderId + ') on element partyLeaderId.');
        }
        param1.writeVarInt(this.partyLeaderId);
    };
    PartyLeaderUpdateMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyLeaderUpdateMessage(param1);
    };
    PartyLeaderUpdateMessage.prototype.deserializeAs_PartyLeaderUpdateMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.partyLeaderId = param1.readVarUhInt();
        if (this.partyLeaderId < 0) {
            throw new Error('Forbidden value (' + this.partyLeaderId + ') on element of PartyLeaderUpdateMessage.partyLeaderId.');
        }
    };
    PartyLeaderUpdateMessage.ID = 5578;
    return PartyLeaderUpdateMessage;
})(AbstractPartyEventMessage);
module.exports = PartyLeaderUpdateMessage;
