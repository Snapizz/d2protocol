var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var PartyInvitationMessage = function() {
  this.partyType = 0;
  this.partyName = "";
  this.maxParticipants = 0;
  this.fromId = 0;
  this.fromName = "";
  this.toId = 0;
};

util.inherits(PartyInvitationMessage, BaseMessage);

PartyInvitationMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyInvitationMessage(output);
};

PartyInvitationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyInvitationMessage(input);
};

PartyInvitationMessage.prototype.serializeAs_PartyInvitationMessage = function(param1) {
  this.serializeAs_AbstractPartyMessage(param1);
  param1.writeByte(this.partyType);
  param1.writeUTF(this.partyName);
  if (this.maxParticipants < 0) {
    throw new Error("Forbidden value (" + this.maxParticipants + ") on element maxParticipants.");
  } else {
    param1.writeByte(this.maxParticipants);
    if (this.fromId < 0) {
      throw new Error("Forbidden value (" + this.fromId + ") on element fromId.");
    } else {
      param1.writeVarInt(this.fromId);
      param1.writeUTF(this.fromName);
      if (this.toId < 0) {
        throw new Error("Forbidden value (" + this.toId + ") on element toId.");
      } else {
        param1.writeVarInt(this.toId);
        return;
      }
    }
  }
};

PartyInvitationMessage.prototype.deserializeAs_PartyInvitationMessage = function(param1) {
  this.deserialize(param1);
  this.partyType = param1.readByte();
  if (this.partyType < 0) {
    throw new Error("Forbidden value (" + this.partyType + ") on element of PartyInvitationMessage.partyType.");
  } else {
    this.partyName = param1.readUTF();
    this.maxParticipants = param1.readByte();
    if (this.maxParticipants < 0) {
      throw new Error("Forbidden value (" + this.maxParticipants + ") on element of PartyInvitationMessage.maxParticipants.");
    } else {
      this.fromId = param1.readVarUhInt();
      if (this.fromId < 0) {
        throw new Error("Forbidden value (" + this.fromId + ") on element of PartyInvitationMessage.fromId.");
      } else {
        this.fromName = param1.readUTF();
        this.toId = param1.readVarUhInt();
        if (this.toId < 0) {
          throw new Error("Forbidden value (" + this.toId + ") on element of PartyInvitationMessage.toId.");
        } else {
          return;
        }
      }
    }
  }
};

PartyInvitationMessage.prototype.getMessageId = function() {
  return 5586;
};

PartyInvitationMessage.prototype.getClassName = function() {
  return 'PartyInvitationMessage';
};

module.exports.id = 5586;
module.exports.class = PartyInvitationMessage;
module.exports.getInstance = function() {
  return new PartyInvitationMessage();
};