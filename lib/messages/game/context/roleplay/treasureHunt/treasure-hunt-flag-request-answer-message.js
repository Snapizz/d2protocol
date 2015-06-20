var d2com = require('d2com'),
  BaseMessage = require('./treasure-hunt-flag-request-answer-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var TreasureHuntFlagRequestAnswerMessage = function() {
  this.questType = 0;
  this.result = 0;
  this.index = 0;
};

util.inherits(TreasureHuntFlagRequestAnswerMessage, BaseMessage);

TreasureHuntFlagRequestAnswerMessage.prototype.serialize = function(output) {
  this.serializeAs_TreasureHuntFlagRequestAnswerMessage(output);
};

TreasureHuntFlagRequestAnswerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_TreasureHuntFlagRequestAnswerMessage(input);
};

TreasureHuntFlagRequestAnswerMessage.prototype.serializeAs_TreasureHuntFlagRequestAnswerMessage = function(param1) {
  param1.writeByte(this.questType);
  param1.writeByte(this.result);
  if (this.index < 0) {
    throw new Error("Forbidden value (" + this.index + ") on element index.");
  } else {
    param1.writeByte(this.index);
    return;
  }
};

TreasureHuntFlagRequestAnswerMessage.prototype.deserializeAs_TreasureHuntFlagRequestAnswerMessage = function(param1) {
  this.questType = param1.readByte();
  if (this.questType < 0) {
    throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntFlagRequestAnswerMessage.questType.");
  } else {
    this.result = param1.readByte();
    if (this.result < 0) {
      throw new Error("Forbidden value (" + this.result + ") on element of TreasureHuntFlagRequestAnswerMessage.result.");
    } else {
      this.index = param1.readByte();
      if (this.index < 0) {
        throw new Error("Forbidden value (" + this.index + ") on element of TreasureHuntFlagRequestAnswerMessage.index.");
      } else {
        return;
      }
    }
  }
};

TreasureHuntFlagRequestAnswerMessage.prototype.getMessageId = function() {
  return 6507;
};

TreasureHuntFlagRequestAnswerMessage.prototype.getClassName = function() {
  return 'TreasureHuntFlagRequestAnswerMessage';
};

module.exports.id = 6507;
module.exports.class = TreasureHuntFlagRequestAnswerMessage;
module.exports.getInstance = function() {
  return new TreasureHuntFlagRequestAnswerMessage();
};