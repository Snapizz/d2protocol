var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

PartyInvitationMessage.prototype.serializeAs_PartyInvitationMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  output.writeByte(this.partyType);
  output.writeUTF(this.partyName);
  if (this.maxParticipants < 0) {
    throw (new Error((("Forbidden value (" + this.maxParticipants) + ") on element maxParticipants.")));
  };
  output.writeByte(this.maxParticipants);
  if (this.fromId < 0) {
    throw (new Error((("Forbidden value (" + this.fromId) + ") on element fromId.")));
  };
  output.writeVarInt(this.fromId);
  output.writeUTF(this.fromName);
  if (this.toId < 0) {
    throw (new Error((("Forbidden value (" + this.toId) + ") on element toId.")));
  };
  output.writeVarInt(this.toId);
};

PartyInvitationMessage.prototype.deserializeAs_PartyInvitationMessage = function(input) {
  this.deserialize(input);
  this.partyType = input.readByte();
  if (this.partyType < 0) {
    throw (new Error((("Forbidden value (" + this.partyType) + ") on element of PartyInvitationMessage.partyType.")));
  };
  this.partyName = input.readUTF();
  this.maxParticipants = input.readByte();
  if (this.maxParticipants < 0) {
    throw (new Error((("Forbidden value (" + this.maxParticipants) + ") on element of PartyInvitationMessage.maxParticipants.")));
  };
  this.fromId = input.readVarUhInt();
  if (this.fromId < 0) {
    throw (new Error((("Forbidden value (" + this.fromId) + ") on element of PartyInvitationMessage.fromId.")));
  };
  this.fromName = input.readUTF();
  this.toId = input.readVarUhInt();
  if (this.toId < 0) {
    throw (new Error((("Forbidden value (" + this.toId) + ") on element of PartyInvitationMessage.toId.")));
  };
};

PartyInvitationMessage.prototype.getMessageId = function() {
  return 5586;
};

PartyInvitationMessage.prototype.getClassName = function() {
  return 'PartyInvitationMessage';
};

module.exports.id = 5586;
module.exports.class = PartyInvitationMessage;