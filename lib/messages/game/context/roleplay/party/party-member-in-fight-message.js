var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var MapCoordinatesExtended = require('../../../../../types/game/context/map-coordinates-extended.js');

var PartyMemberInFightMessage = function() {
  this.reason = 0;
  this.memberId = 0;
  this.memberAccountId = 0;
  this.memberName = "";
  this.fightId = 0;
  this.fightMap = new MapCoordinatesExtended();
  this.timeBeforeFightStart = 0;
};

util.inherits(PartyMemberInFightMessage, BaseMessage);

PartyMemberInFightMessage.prototype.serialize = function(output) {
  this.serializeAs_PartyMemberInFightMessage(output);
};

PartyMemberInFightMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PartyMemberInFightMessage(input);
};

PartyMemberInFightMessage.prototype.serializeAs_PartyMemberInFightMessage = function(param1) {
  this.serializeAs_AbstractPartyMessage(param1);
  param1.writeByte(this.reason);
  if (this.memberId < 0) {
    throw new Error("Forbidden value (" + this.memberId + ") on element memberId.");
  } else {
    param1.writeVarInt(this.memberId);
    if (this.memberAccountId < 0) {
      throw new Error("Forbidden value (" + this.memberAccountId + ") on element memberAccountId.");
    } else {
      param1.writeInt(this.memberAccountId);
      param1.writeUTF(this.memberName);
      param1.writeInt(this.fightId);
      this.fightMap.serializeAs_MapCoordinatesExtended(param1);
      param1.writeVarShort(this.timeBeforeFightStart);
      return;
    }
  }
};

PartyMemberInFightMessage.prototype.deserializeAs_PartyMemberInFightMessage = function(param1) {
  this.deserialize(param1);
  this.reason = param1.readByte();
  if (this.reason < 0) {
    throw new Error("Forbidden value (" + this.reason + ") on element of PartyMemberInFightMessage.reason.");
  } else {
    this.memberId = param1.readVarUhInt();
    if (this.memberId < 0) {
      throw new Error("Forbidden value (" + this.memberId + ") on element of PartyMemberInFightMessage.memberId.");
    } else {
      this.memberAccountId = param1.readInt();
      if (this.memberAccountId < 0) {
        throw new Error("Forbidden value (" + this.memberAccountId + ") on element of PartyMemberInFightMessage.memberAccountId.");
      } else {
        this.memberName = param1.readUTF();
        this.fightId = param1.readInt();
        this.fightMap = new MapCoordinatesExtended();
        this.fightMap.deserialize(param1);
        this.timeBeforeFightStart = param1.readVarShort();
        return;
      }
    }
  }
};

PartyMemberInFightMessage.prototype.getMessageId = function() {
  return 6342;
};

PartyMemberInFightMessage.prototype.getClassName = function() {
  return 'PartyMemberInFightMessage';
};

module.exports.id = 6342;
module.exports.class = PartyMemberInFightMessage;