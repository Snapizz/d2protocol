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
var PartyInvitationMemberInformations = require('../../../../../types/game/context/roleplay/party/party-invitation-member-informations');
var PartyGuestInformations = require('../../../../../types/game/context/roleplay/party/party-guest-informations');
var PartyInvitationDetailsMessage = (function (_super) {
    __extends(PartyInvitationDetailsMessage, _super);
    function PartyInvitationDetailsMessage() {
        this.partyType = 0;
        this.partyName = '';
        this.fromId = 0;
        this.fromName = '';
        this.leaderId = 0;
        this.members = [];
        this.guests = [];
        _super.call(this);
    }
    PartyInvitationDetailsMessage.prototype.getMessageId = function () {
        return PartyInvitationDetailsMessage.ID;
    };
    PartyInvitationDetailsMessage.prototype.reset = function () {
        this.partyType = 0;
        this.partyName = '';
        this.fromId = 0;
        this.fromName = '';
        this.leaderId = 0;
        this.members = [];
        this.guests = [];
    };
    PartyInvitationDetailsMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyInvitationDetailsMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyInvitationDetailsMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyInvitationDetailsMessage(param1);
    };
    PartyInvitationDetailsMessage.prototype.serializeAs_PartyInvitationDetailsMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        param1.writeByte(this.partyType);
        param1.writeUTF(this.partyName);
        if (this.fromId < 0) {
            throw new Error('Forbidden value (' + this.fromId + ') on element fromId.');
        }
        param1.writeVarInt(this.fromId);
        param1.writeUTF(this.fromName);
        if (this.leaderId < 0) {
            throw new Error('Forbidden value (' + this.leaderId + ') on element leaderId.');
        }
        param1.writeVarInt(this.leaderId);
        param1.writeShort(this.members.length);
        var _loc2_ = 0;
        while (_loc2_ < this.members.length) {
            (this.members[_loc2_]).serializeAs_PartyInvitationMemberInformations(param1);
            _loc2_++;
        }
        param1.writeShort(this.guests.length);
        var _loc3_ = 0;
        while (_loc3_ < this.guests.length) {
            (this.guests[_loc3_]).serializeAs_PartyGuestInformations(param1);
            _loc3_++;
        }
    };
    PartyInvitationDetailsMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyInvitationDetailsMessage(param1);
    };
    PartyInvitationDetailsMessage.prototype.deserializeAs_PartyInvitationDetailsMessage = function (param1) {
        var _loc6_ = null;
        var _loc7_ = null;
        _super.prototype.deserialize.call(this, param1);
        this.partyType = param1.readByte();
        if (this.partyType < 0) {
            throw new Error('Forbidden value (' + this.partyType + ') on element of PartyInvitationDetailsMessage.partyType.');
        }
        this.partyName = param1.readUTF();
        this.fromId = param1.readVarUhInt();
        if (this.fromId < 0) {
            throw new Error('Forbidden value (' + this.fromId + ') on element of PartyInvitationDetailsMessage.fromId.');
        }
        this.fromName = param1.readUTF();
        this.leaderId = param1.readVarUhInt();
        if (this.leaderId < 0) {
            throw new Error('Forbidden value (' + this.leaderId + ') on element of PartyInvitationDetailsMessage.leaderId.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = new PartyInvitationMemberInformations();
            _loc6_.deserialize(param1);
            this.members.push(_loc6_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc7_ = new PartyGuestInformations();
            _loc7_.deserialize(param1);
            this.guests.push(_loc7_);
            _loc5_++;
        }
    };
    PartyInvitationDetailsMessage.ID = 6263;
    return PartyInvitationDetailsMessage;
})(AbstractPartyMessage);
module.exports = PartyInvitationDetailsMessage;
