var d2com = require('d2com');
var CustomDataWrapper = d2com.CustomDataWrapper;
var BooleanByteWrapper = d2com.BooleanByteWrapper;

var PartyInvitationMemberInformations = require('../../../../../types/game/context/roleplay/party/party-invitation-member-informations.js').PartyInvitationMemberInformations;
var PartyGuestInformations = require('../../../../../types/game/context/roleplay/party/party-guest-informations.js').PartyGuestInformations;

var PartyInvitationDetailsMessage = function() {
    this.partyType = 0;
    this.partyName = "";
    this.fromId = 0;
    this.fromName = "";
    this.leaderId = 0;
    this.members = [];
    this.guests = [];
};

require('util').inherits(PartyInvitationDetailsMessage, require('./abstract-party-message.js').AbstractPartyMessage);

module.exports = function() {
    return new PartyInvitationDetailsMessage();
};

PartyInvitationDetailsMessage.prototype.serialize = function(output) {
    this.serializeAs_PartyInvitationDetailsMessage(output);
};

PartyInvitationDetailsMessage.prototype.deserialize = function(input) {
    this.deserializeAs_PartyInvitationDetailsMessage(input);
};

PartyInvitationDetailsMessage.prototype.serializeAs_PartyInvitationDetailsMessage = function(param1) {
    this.serializeAs_AbstractPartyMessage(param1);
    param1.writeByte(this.partyType);
    param1.writeUTF(this.partyName);
    if (this.fromId < 0) {
        throw new Error("Forbidden value (" + this.fromId + ") on element fromId.");
    } else {
        param1.writeVarInt(this.fromId);
        param1.writeUTF(this.fromName);
        if (this.leaderId < 0) {
            throw new Error("Forbidden value (" + this.leaderId + ") on element leaderId.");
        } else {
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
            return;
        }
    }
};

PartyInvitationDetailsMessage.prototype.deserializeAs_PartyInvitationDetailsMessage = function(param1) {
    var _loc6_ = null;
    var _loc7_ = null;
    this.deserializeAs_AbstractPartyMessage(param1);
    this.partyType = param1.readByte();
    if (this.partyType < 0) {
        throw new Error("Forbidden value (" + this.partyType + ") on element of PartyInvitationDetailsMessage.partyType.");
    } else {
        this.partyName = param1.readUTF();
        this.fromId = param1.readVarUhInt();
        if (this.fromId < 0) {
            throw new Error("Forbidden value (" + this.fromId + ") on element of PartyInvitationDetailsMessage.fromId.");
        } else {
            this.fromName = param1.readUTF();
            this.leaderId = param1.readVarUhInt();
            if (this.leaderId < 0) {
                throw new Error("Forbidden value (" + this.leaderId + ") on element of PartyInvitationDetailsMessage.leaderId.");
            } else {
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
                return;
            }
        }
    }
};

PartyInvitationDetailsMessage.prototype.getMessageId = function() {
    return 6263;
};

PartyInvitationDetailsMessage.prototype.getClassName = function() {
    return 'PartyInvitationDetailsMessage';
};

module.exports.id = 6263;
module.exports.PartyInvitationDetailsMessage = PartyInvitationDetailsMessage;