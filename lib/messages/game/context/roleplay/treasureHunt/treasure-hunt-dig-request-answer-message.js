var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

TreasureHuntDigRequestAnswerMessage.prototype.serializeAs_TreasureHuntDigRequestAnswerMessage = function(output) {
  output.writeByte(this.questType);
  output.writeByte(this.result);
};

TreasureHuntDigRequestAnswerMessage.prototype.deserializeAs_TreasureHuntDigRequestAnswerMessage = function(input) {
  this.questType = input.readByte();
  if (this.questType < 0) {
    throw (new Error((("Forbidden value (" + this.questType) + ") on element of TreasureHuntDigRequestAnswerMessage.questType.")));
  };
  this.result = input.readByte();
  if (this.result < 0) {
    throw (new Error((("Forbidden value (" + this.result) + ") on element of TreasureHuntDigRequestAnswerMessage.result.")));
  };
};

TreasureHuntDigRequestAnswerMessage.prototype.getMessageId = function() {
  return 6484;
};

TreasureHuntDigRequestAnswerMessage.prototype.getClassName = function() {
  return 'TreasureHuntDigRequestAnswerMessage';
};

module.exports.id = 6484;
module.exports.class = TreasureHuntDigRequestAnswerMessage;