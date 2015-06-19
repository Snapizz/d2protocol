var d2com = require('d2com'),
  BaseMessage = require('./abstract-party-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var PartyMemberInFightMessage = function() {
  this.reason = 0;
  this.memberId = 0;
  this.memberAccountId = 0;
  this.memberName = "";
  this.fightId = 0;
  this.fightMap;
  this.secondsBeforeFightStart = 0;
};

util.inherits(PartyMemberInFightMessage, BaseMessage);

PartyMemberInFightMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyMemberInFightMessage(output);
};

PartyMemberInFightMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyMemberInFightMessage(input);
};

PartyMemberInFightMessage.prototype.serializeAs_PartyMemberInFightMessage = function(output) {
  this.serializeAs_AbstractPartyMessage(output);
  output.writeByte(this.reason);
  if (this.memberId < 0) {
    throw (new Error((("Forbidden value (" + this.memberId) + ") on element memberId.")));
  };
  output.writeVarInt(this.memberId);
  if (this.memberAccountId < 0) {
    throw (new Error((("Forbidden value (" + this.memberAccountId) + ") on element memberAccountId.")));
  };
  output.writeInt(this.memberAccountId);
  output.writeUTF(this.memberName);
  output.writeInt(this.fightId);
  this.fightMap.serializeAs_MapCoordinatesExtended(output);
  output.writeVarShort(this.secondsBeforeFightStart);
};

PartyMemberInFightMessage.prototype.deserializeAs_PartyMemberInFightMessage = function(input) {
  this.deserialize(input);
  this.reason = input.readByte();
  if (this.reason < 0) {
    throw (new Error((("Forbidden value (" + this.reason) + ") on element of PartyMemberInFightMessage.reason.")));
  };
  this.memberId = input.readVarUhInt();
  if (this.memberId < 0) {
    throw (new Error((("Forbidden value (" + this.memberId) + ") on element of PartyMemberInFightMessage.memberId.")));
  };
  this.memberAccountId = input.readInt();
  if (this.memberAccountId < 0) {
    throw (new Error((("Forbidden value (" + this.memberAccountId) + ") on element of PartyMemberInFightMessage.memberAccountId.")));
  };
  this.memberName = input.readUTF();
  this.fightId = input.readInt();
  this.fightMap = new MapCoordinatesExtended();
  this.fightMap.deserialize(input);
  this.secondsBeforeFightStart = input.readVarShort();
};

PartyMemberInFightMessage.prototype.getMessageId = function() {
  return 6342;
};

PartyMemberInFightMessage.prototype.getClassName = function() {
  return 'PartyMemberInFightMessage';
};

module.exports.id = 6342;
module.exports.class = PartyMemberInFightMessage;