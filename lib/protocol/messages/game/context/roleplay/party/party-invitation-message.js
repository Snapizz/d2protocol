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
var PartyInvitationMessage = (function (_super) {
    __extends(PartyInvitationMessage, _super);
    function PartyInvitationMessage() {
        this.partyType = 0;
        this.partyName = '';
        this.maxParticipants = 0;
        this.fromId = 0;
        this.fromName = '';
        this.toId = 0;
        _super.call(this);
    }
    PartyInvitationMessage.prototype.getMessageId = function () {
        return PartyInvitationMessage.ID;
    };
    PartyInvitationMessage.prototype.reset = function () {
        this.partyType = 0;
        this.partyName = '';
        this.maxParticipants = 0;
        this.fromId = 0;
        this.fromName = '';
        this.toId = 0;
    };
    PartyInvitationMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyInvitationMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyInvitationMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyInvitationMessage(param1);
    };
    PartyInvitationMessage.prototype.serializeAs_PartyInvitationMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        param1.writeByte(this.partyType);
        param1.writeUTF(this.partyName);
        if (this.maxParticipants < 0) {
            throw new Error('Forbidden value (' + this.maxParticipants + ') on element maxParticipants.');
        }
        param1.writeByte(this.maxParticipants);
        if (this.fromId < 0) {
            throw new Error('Forbidden value (' + this.fromId + ') on element fromId.');
        }
        param1.writeVarInt(this.fromId);
        param1.writeUTF(this.fromName);
        if (this.toId < 0) {
            throw new Error('Forbidden value (' + this.toId + ') on element toId.');
        }
        param1.writeVarInt(this.toId);
    };
    PartyInvitationMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyInvitationMessage(param1);
    };
    PartyInvitationMessage.prototype.deserializeAs_PartyInvitationMessage = function (param1) {
        _super.prototype.deserialize.call(this, param1);
        this.partyType = param1.readByte();
        if (this.partyType < 0) {
            throw new Error('Forbidden value (' + this.partyType + ') on element of PartyInvitationMessage.partyType.');
        }
        this.partyName = param1.readUTF();
        this.maxParticipants = param1.readByte();
        if (this.maxParticipants < 0) {
            throw new Error('Forbidden value (' + this.maxParticipants + ') on element of PartyInvitationMessage.maxParticipants.');
        }
        this.fromId = param1.readVarUhInt();
        if (this.fromId < 0) {
            throw new Error('Forbidden value (' + this.fromId + ') on element of PartyInvitationMessage.fromId.');
        }
        this.fromName = param1.readUTF();
        this.toId = param1.readVarUhInt();
        if (this.toId < 0) {
            throw new Error('Forbidden value (' + this.toId + ') on element of PartyInvitationMessage.toId.');
        }
    };
    PartyInvitationMessage.ID = 5586;
    return PartyInvitationMessage;
})(AbstractPartyMessage);
module.exports = PartyInvitationMessage;
