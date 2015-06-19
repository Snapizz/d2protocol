var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ChallengeInfoMessage.prototype.serializeAs_ChallengeInfoMessage = function(output) {
  if (this.challengeId < 0) {
    throw (new Error((("Forbidden value (" + this.challengeId) + ") on element challengeId.")));
  };
  output.writeVarShort(this.challengeId);
  output.writeInt(this.targetId);
  if (this.xpBonus < 0) {
    throw (new Error((("Forbidden value (" + this.xpBonus) + ") on element xpBonus.")));
  };
  output.writeVarInt(this.xpBonus);
  if (this.dropBonus < 0) {
    throw (new Error((("Forbidden value (" + this.dropBonus) + ") on element dropBonus.")));
  };
  output.writeVarInt(this.dropBonus);
};

ChallengeInfoMessage.prototype.deserializeAs_ChallengeInfoMessage = function(input) {
  this.challengeId = input.readVarUhShort();
  if (this.challengeId < 0) {
    throw (new Error((("Forbidden value (" + this.challengeId) + ") on element of ChallengeInfoMessage.challengeId.")));
  };
  this.targetId = input.readInt();
  this.xpBonus = input.readVarUhInt();
  if (this.xpBonus < 0) {
    throw (new Error((("Forbidden value (" + this.xpBonus) + ") on element of ChallengeInfoMessage.xpBonus.")));
  };
  this.dropBonus = input.readVarUhInt();
  if (this.dropBonus < 0) {
    throw (new Error((("Forbidden value (" + this.dropBonus) + ") on element of ChallengeInfoMessage.dropBonus.")));
  };
};

ChallengeInfoMessage.prototype.getMessageId = function() {
  return 6022;
};

ChallengeInfoMessage.prototype.getClassName = function() {
  return 'ChallengeInfoMessage';
};

module.exports.id = 6022;
module.exports.class = ChallengeInfoMessage;