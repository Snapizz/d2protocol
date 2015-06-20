var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyJoinMessage = function() {
  this.partyType = 0;
  this.partyLeaderId = 0;
  this.maxParticipants = 0;
  this.members = [];
  this.guests = [];
  this.restricted = false;
  this.partyName = "";
};

util.inherits(PartyJoinMessage, BaseMessage);

PartyJoinMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyJoinMessage(output);
};

PartyJoinMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyJoinMessage(input);
};

PartyJoinMessage.prototype.serializeAs_PartyJoinMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  output.writeByte(this.partyType);
  if (this.partyLeaderId < 0) {
    throw (new Error((("Forbidden value (" + this.partyLeaderId) + ") on element partyLeaderId.")));
  };
  output.writeVarInt(this.partyLeaderId);
  if (this.maxParticipants < 0) {
    throw (new Error((("Forbidden value (" + this.maxParticipants) + ") on element maxParticipants.")));
  };
  output.writeByte(this.maxParticipants);
  output.writeShort(this.members.length);
  var _i4 = 0;
  while (_i4 < this.members.length) {
    output.writeShort((this.members[_i4]).getTypeId());
    (this.members[_i4]).serialize(output);
    _i4++;
  };
  output.writeShort(this.guests.length);
  var _i5 = 0;
  while (_i5 < this.guests.length) {
    (this.guests[_i5]).serializeAs_PartyGuestInformations(output);
    _i5++;
  };
  output.writeBoolean(this.restricted);
  output.writeUTF(this.partyName);
};

PartyJoinMessage.prototype.deserializeAs_PartyJoinMessage = function(input) {
  var _id4 = 0;
  var _item4;
  var _item5;
  this.deserialize(input);
  this.partyType = input.readByte();
  if (this.partyType < 0) {
    throw (new Error((("Forbidden value (" + this.partyType) + ") on element of PartyJoinMessage.partyType.")));
  };
  this.partyLeaderId = input.readVarUhInt();
  if (this.partyLeaderId < 0) {
    throw (new Error((("Forbidden value (" + this.partyLeaderId) + ") on element of PartyJoinMessage.partyLeaderId.")));
  };
  this.maxParticipants = input.readByte();
  if (this.maxParticipants < 0) {
    throw (new Error((("Forbidden value (" + this.maxParticipants) + ") on element of PartyJoinMessage.maxParticipants.")));
  };
  var _membersLen = input.readUnsignedShort();
  var _i4 = 0;
  while (_i4 < _membersLen) {
    _id4 = input.readUnsignedShort();
    _item4 = ProtocolTypeManager.getInstance(PartyMemberInformations, _id4);
    _item4.deserialize(input);
    this.members.push(_item4);
    _i4++;
  };
  var _guestsLen = input.readUnsignedShort();
  var _i5 = 0;
  while (_i5 < _guestsLen) {
    _item5 = new PartyGuestInformations();
    _item5.deserialize(input);
    this.guests.push(_item5);
    _i5++;
  };
  this.restricted = input.readBoolean();
  this.partyName = input.readUTF();
};

PartyJoinMessage.prototype.getMessageId = function() {
  return 5576;
};

PartyJoinMessage.prototype.getClassName = function() {
  return 'PartyJoinMessage';
};

module.exports.id = 5576;
module.exports.class = PartyJoinMessage;