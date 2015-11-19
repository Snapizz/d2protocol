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
var PartyMemberInformations = require('../../../../../types/game/context/roleplay/party/party-member-informations');
var PartyGuestInformations = require('../../../../../types/game/context/roleplay/party/party-guest-informations');
var ProtocolTypeManager = require('../../../../../protocol-type-manager');
var PartyJoinMessage = (function (_super) {
    __extends(PartyJoinMessage, _super);
    function PartyJoinMessage() {
        this.partyType = 0;
        this.partyLeaderId = 0;
        this.maxParticipants = 0;
        this.members = [];
        this.guests = [];
        this.restricted = false;
        this.partyName = '';
        _super.call(this);
    }
    PartyJoinMessage.prototype.getMessageId = function () {
        return PartyJoinMessage.ID;
    };
    PartyJoinMessage.prototype.reset = function () {
        this.partyType = 0;
        this.partyLeaderId = 0;
        this.maxParticipants = 0;
        this.members = [];
        this.guests = [];
        this.restricted = false;
        this.partyName = '';
    };
    PartyJoinMessage.prototype.pack = function (param1) {
        var loc2 = new ByteArray();
        this.serialize(new custom_data_wrapper_1.CustomDataWrapper(loc2));
        network_message_1.NetworkMessage.writePacket(param1, this.getMessageId(), loc2);
    };
    PartyJoinMessage.prototype.unpack = function (param1, param2) {
        this.deserialize(param1);
    };
    PartyJoinMessage.prototype.serialize = function (param1) {
        this.serializeAs_PartyJoinMessage(param1);
    };
    PartyJoinMessage.prototype.serializeAs_PartyJoinMessage = function (param1) {
        _super.prototype.serializeAs_AbstractPartyMessage.call(this, param1);
        param1.writeByte(this.partyType);
        if (this.partyLeaderId < 0) {
            throw new Error('Forbidden value (' + this.partyLeaderId + ') on element partyLeaderId.');
        }
        param1.writeVarInt(this.partyLeaderId);
        if (this.maxParticipants < 0) {
            throw new Error('Forbidden value (' + this.maxParticipants + ') on element maxParticipants.');
        }
        param1.writeByte(this.maxParticipants);
        param1.writeShort(this.members.length);
        var _loc2_ = 0;
        while (_loc2_ < this.members.length) {
            param1.writeShort((this.members[_loc2_]).getTypeId());
            (this.members[_loc2_]).serialize(param1);
            _loc2_++;
        }
        param1.writeShort(this.guests.length);
        var _loc3_ = 0;
        while (_loc3_ < this.guests.length) {
            (this.guests[_loc3_]).serializeAs_PartyGuestInformations(param1);
            _loc3_++;
        }
        param1.writeBoolean(this.restricted);
        param1.writeUTF(this.partyName);
    };
    PartyJoinMessage.prototype.deserialize = function (param1) {
        this.deserializeAs_PartyJoinMessage(param1);
    };
    PartyJoinMessage.prototype.deserializeAs_PartyJoinMessage = function (param1) {
        var _loc6_ = 0;
        var _loc7_ = null;
        var _loc8_ = null;
        _super.prototype.deserialize.call(this, param1);
        this.partyType = param1.readByte();
        if (this.partyType < 0) {
            throw new Error('Forbidden value (' + this.partyType + ') on element of PartyJoinMessage.partyType.');
        }
        this.partyLeaderId = param1.readVarUhInt();
        if (this.partyLeaderId < 0) {
            throw new Error('Forbidden value (' + this.partyLeaderId + ') on element of PartyJoinMessage.partyLeaderId.');
        }
        this.maxParticipants = param1.readByte();
        if (this.maxParticipants < 0) {
            throw new Error('Forbidden value (' + this.maxParticipants + ') on element of PartyJoinMessage.maxParticipants.');
        }
        var _loc2_ = param1.readUnsignedShort();
        var _loc3_ = 0;
        while (_loc3_ < _loc2_) {
            _loc6_ = param1.readUnsignedShort();
            _loc7_ = ProtocolTypeManager.getInstance(PartyMemberInformations, _loc6_);
            _loc7_.deserialize(param1);
            this.members.push(_loc7_);
            _loc3_++;
        }
        var _loc4_ = param1.readUnsignedShort();
        var _loc5_ = 0;
        while (_loc5_ < _loc4_) {
            _loc8_ = new PartyGuestInformations();
            _loc8_.deserialize(param1);
            this.guests.push(_loc8_);
            _loc5_++;
        }
        this.restricted = param1.readBoolean();
        this.partyName = param1.readUTF();
    };
    PartyJoinMessage.ID = 5576;
    return PartyJoinMessage;
})(AbstractPartyMessage);
module.exports = PartyJoinMessage;
