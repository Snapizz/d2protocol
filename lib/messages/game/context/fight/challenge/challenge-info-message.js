var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var ChallengeInfoMessage = function() {
  this.challengeId = 0;
  this.targetId = 0;
  this.xpBonus = 0;
  this.dropBonus = 0;
};

util.inherits(ChallengeInfoMessage, BaseMessage);

ChallengeInfoMessage.prototype.serialize = function(output) {
  this.serializeAs_ChallengeInfoMessage(output);
};

ChallengeInfoMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChallengeInfoMessage(input);
};

ChallengeInfoMessage.prototype.serializeAs_ChallengeInfoMessage = function(param1) {
  if (this.challengeId < 0) {
    throw new Error("Forbidden value (" + this.challengeId + ") on element challengeId.");
  } else {
    param1.writeVarShort(this.challengeId);
    param1.writeInt(this.targetId);
    if (this.xpBonus < 0) {
      throw new Error("Forbidden value (" + this.xpBonus + ") on element xpBonus.");
    } else {
      param1.writeVarInt(this.xpBonus);
      if (this.dropBonus < 0) {
        throw new Error("Forbidden value (" + this.dropBonus + ") on element dropBonus.");
      } else {
        param1.writeVarInt(this.dropBonus);
        return;
      }
    }
  }
};

ChallengeInfoMessage.prototype.deserializeAs_ChallengeInfoMessage = function(param1) {
  this.challengeId = param1.readVarUhShort();
  if (this.challengeId < 0) {
    throw new Error("Forbidden value (" + this.challengeId + ") on element of ChallengeInfoMessage.challengeId.");
  } else {
    this.targetId = param1.readInt();
    this.xpBonus = param1.readVarUhInt();
    if (this.xpBonus < 0) {
      throw new Error("Forbidden value (" + this.xpBonus + ") on element of ChallengeInfoMessage.xpBonus.");
    } else {
      this.dropBonus = param1.readVarUhInt();
      if (this.dropBonus < 0) {
        throw new Error("Forbidden value (" + this.dropBonus + ") on element of ChallengeInfoMessage.dropBonus.");
      } else {
        return;
      }
    }
  }
};

ChallengeInfoMessage.prototype.getMessageId = function() {
  return 6022;
};

ChallengeInfoMessage.prototype.getClassName = function() {
  return 'ChallengeInfoMessage';
};

module.exports.id = 6022;
module.exports.class = ChallengeInfoMessage;
module.exports.getInstance = function() {
  return new ChallengeInfoMessage();
};