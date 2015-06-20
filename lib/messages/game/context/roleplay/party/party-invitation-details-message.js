var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyInvitationDetailsMessage = function() {
  this.partyType = 0;
  this.partyName = "";
  this.fromId = 0;
  this.fromName = "";
  this.leaderId = 0;
  this.members = [];
  this.guests = [];
};

util.inherits(PartyInvitationDetailsMessage, BaseMessage);

PartyInvitationDetailsMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyInvitationDetailsMessage(output);
};

PartyInvitationDetailsMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyInvitationDetailsMessage(input);
};

PartyInvitationDetailsMessage.prototype.serializeAs_PartyInvitationDetailsMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  output.writeByte(this.partyType);
  output.writeUTF(this.partyName);
  if (this.fromId < 0) {
    throw (new Error((("Forbidden value (" + this.fromId) + ") on element fromId.")));
  };
  output.writeVarInt(this.fromId);
  output.writeUTF(this.fromName);
  if (this.leaderId < 0) {
    throw (new Error((("Forbidden value (" + this.leaderId) + ") on element leaderId.")));
  };
  output.writeVarInt(this.leaderId);
  output.writeShort(this.members.length);
  var _i6 = 0;
  while (_i6 < this.members.length) {
    (this.members[_i6]).serializeAs_PartyInvitationMemberInformations(output);
    _i6++;
  };
  output.writeShort(this.guests.length);
  var _i7 = 0;
  while (_i7 < this.guests.length) {
    (this.guests[_i7]).serializeAs_PartyGuestInformations(output);
    _i7++;
  };
};

PartyInvitationDetailsMessage.prototype.deserializeAs_PartyInvitationDetailsMessage = function(input) {
  var _item6;
  var _item7;
  this.deserialize(input);
  this.partyType = input.readByte();
  if (this.partyType < 0) {
    throw (new Error((("Forbidden value (" + this.partyType) + ") on element of PartyInvitationDetailsMessage.partyType.")));
  };
  this.partyName = input.readUTF();
  this.fromId = input.readVarUhInt();
  if (this.fromId < 0) {
    throw (new Error((("Forbidden value (" + this.fromId) + ") on element of PartyInvitationDetailsMessage.fromId.")));
  };
  this.fromName = input.readUTF();
  this.leaderId = input.readVarUhInt();
  if (this.leaderId < 0) {
    throw (new Error((("Forbidden value (" + this.leaderId) + ") on element of PartyInvitationDetailsMessage.leaderId.")));
  };
  var _membersLen = input.readUnsignedShort();
  var _i6 = 0;
  while (_i6 < _membersLen) {
    _item6 = new PartyInvitationMemberInformations();
    _item6.deserialize(input);
    this.members.push(_item6);
    _i6++;
  };
  var _guestsLen = input.readUnsignedShort();
  var _i7 = 0;
  while (_i7 < _guestsLen) {
    _item7 = new PartyGuestInformations();
    _item7.deserialize(input);
    this.guests.push(_item7);
    _i7++;
  };
};

PartyInvitationDetailsMessage.prototype.getMessageId = function() {
  return 6263;
};

PartyInvitationDetailsMessage.prototype.getClassName = function() {
  return 'PartyInvitationDetailsMessage';
};

module.exports.id = 6263;
module.exports.class = PartyInvitationDetailsMessage;