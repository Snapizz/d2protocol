var d2com = require('d2com'),
  BaseMessage = require('./treasure-hunt-dig-request-answer-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var TreasureHuntDigRequestAnswerFailedMessage = function() {
  this.wrongFlagCount = 0;
};

util.inherits(TreasureHuntDigRequestAnswerFailedMessage, BaseMessage);

TreasureHuntDigRequestAnswerFailedMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntDigRequestAnswerFailedMessage(output);
};

TreasureHuntDigRequestAnswerFailedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntDigRequestAnswerFailedMessage(input);
};

TreasureHuntDigRequestAnswerFailedMessage.prototype.serializeAs_TreasureHuntDigRequestAnswerFailedMessage = function(output) {
  this.serializeAs_TreasureHuntDigRequestAnswerMessage(output);
  if (this.wrongFlagCount < 0) {
    throw (new Error((("Forbidden value (" + this.wrongFlagCount) + ") on element wrongFlagCount.")));
  };
  output.writeByte(this.wrongFlagCount);
};

TreasureHuntDigRequestAnswerFailedMessage.prototype.deserializeAs_TreasureHuntDigRequestAnswerFailedMessage = function(input) {
  this.deserialize(input);
  this.wrongFlagCount = input.readByte();
  if (this.wrongFlagCount < 0) {
    throw (new Error((("Forbidden value (" + this.wrongFlagCount) + ") on element of TreasureHuntDigRequestAnswerFailedMessage.wrongFlagCount.")));
  };
};

TreasureHuntDigRequestAnswerFailedMessage.prototype.getMessageId = function() {
  return 6509;
};

TreasureHuntDigRequestAnswerFailedMessage.prototype.getClassName = function() {
  return 'TreasureHuntDigRequestAnswerFailedMessage';
};

module.exports.id = 6509;
module.exports.class = TreasureHuntDigRequestAnswerFailedMessage;