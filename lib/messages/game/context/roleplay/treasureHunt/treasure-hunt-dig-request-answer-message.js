var d2com = require('d2com'),
  BaseMessage = require('./treasure-hunt-dig-request-answer-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var TreasureHuntDigRequestAnswerMessage = function() {
  this.questType = 0;
  this.result = 0;
};

util.inherits(TreasureHuntDigRequestAnswerMessage, BaseMessage);

TreasureHuntDigRequestAnswerMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntDigRequestAnswerMessage(output);
};

TreasureHuntDigRequestAnswerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntDigRequestAnswerMessage(input);
};

TreasureHuntDigRequestAnswerMessage.prototype.serializeAs_TreasureHuntDigRequestAnswerMessage = function(param1) {
  param1.writeByte(this.questType);
  param1.writeByte(this.result);
};

TreasureHuntDigRequestAnswerMessage.prototype.deserializeAs_TreasureHuntDigRequestAnswerMessage = function(param1) {
  this.questType = param1.readByte();
  if (this.questType < 0) {
    throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntDigRequestAnswerMessage.questType.");
  } else {
    this.result = param1.readByte();
    if (this.result < 0) {
      throw new Error("Forbidden value (" + this.result + ") on element of TreasureHuntDigRequestAnswerMessage.result.");
    } else {
      return;
    }
  }
};

TreasureHuntDigRequestAnswerMessage.prototype.getMessageId = function() {
  return 6484;
};

TreasureHuntDigRequestAnswerMessage.prototype.getClassName = function() {
  return 'TreasureHuntDigRequestAnswerMessage';
};

module.exports.id = 6484;
module.exports.class = TreasureHuntDigRequestAnswerMessage;
module.exports.getInstance = function() {
  return new TreasureHuntDigRequestAnswerMessage();
};