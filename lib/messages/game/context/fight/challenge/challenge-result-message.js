var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ChallengeResultMessage = function() {
  this.challengeId = 0;
  this.success = false;
};

util.inherits(ChallengeResultMessage, BaseMessage);

ChallengeResultMessage.prototype.serialize = function(output) {
  this.serializeAs_ChallengeResultMessage(output);
};

ChallengeResultMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ChallengeResultMessage(input);
};

ChallengeResultMessage.prototype.serializeAs_ChallengeResultMessage = function(output) {
  if (this.challengeId < 0) {
    throw (new Error((("Forbidden value (" + this.challengeId) + ") on element challengeId.")));
  };
  output.writeVarShort(this.challengeId);
  output.writeBoolean(this.success);
};

ChallengeResultMessage.prototype.deserializeAs_ChallengeResultMessage = function(input) {
  this.challengeId = input.readVarUhShort();
  if (this.challengeId < 0) {
    throw (new Error((("Forbidden value (" + this.challengeId) + ") on element of ChallengeResultMessage.challengeId.")));
  };
  this.success = input.readBoolean();
};

ChallengeResultMessage.prototype.getMessageId = function() {
  return 6019;
};

ChallengeResultMessage.prototype.getClassName = function() {
  return 'ChallengeResultMessage';
};

module.exports.id = 6019;
module.exports.class = ChallengeResultMessage;