var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

TreasureHuntFlagRequestAnswerMessage.prototype.serializeAs_TreasureHuntFlagRequestAnswerMessage = function(output) {
  output.writeByte(this.questType);
  output.writeByte(this.result);
  if (this.index < 0) {
    throw (new Error((("Forbidden value (" + this.index) + ") on element index.")));
  };
  output.writeByte(this.index);
};

TreasureHuntFlagRequestAnswerMessage.prototype.deserializeAs_TreasureHuntFlagRequestAnswerMessage = function(input) {
  this.questType = input.readByte();
  if (this.questType < 0) {
    throw (new Error((("Forbidden value (" + this.questType) + ") on element of TreasureHuntFlagRequestAnswerMessage.questType.")));
  };
  this.result = input.readByte();
  if (this.result < 0) {
    throw (new Error((("Forbidden value (" + this.result) + ") on element of TreasureHuntFlagRequestAnswerMessage.result.")));
  };
  this.index = input.readByte();
  if (this.index < 0) {
    throw (new Error((("Forbidden value (" + this.index) + ") on element of TreasureHuntFlagRequestAnswerMessage.index.")));
  };
};

TreasureHuntFlagRequestAnswerMessage.prototype.getMessageId = function() {
  return 6507;
};

TreasureHuntFlagRequestAnswerMessage.prototype.getClassName = function() {
  return 'TreasureHuntFlagRequestAnswerMessage';
};

module.exports.id = 6507;
module.exports.class = TreasureHuntFlagRequestAnswerMessage;