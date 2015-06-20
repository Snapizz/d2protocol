var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
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
  super.serializeAs_TreasureHuntDigRequestAnswerMessage(param1);
  if (this.wrongFlagCount < 0) {
    throw new Error("Forbidden value (" + this.wrongFlagCount + ") on element wrongFlagCount.");
  } else {
    param1.writeByte(this.wrongFlagCount);
    return;
  }
};

TreasureHuntDigRequestAnswerFailedMessage.prototype.deserializeAs_TreasureHuntDigRequestAnswerFailedMessage = function(input) {
  super.deserialize(param1);
  this.wrongFlagCount = param1.readByte();
  if (this.wrongFlagCount < 0) {
    throw new Error("Forbidden value (" + this.wrongFlagCount + ") on element of TreasureHuntDigRequestAnswerFailedMessage.wrongFlagCount.");
  } else {
    return;
  }
};

TreasureHuntDigRequestAnswerFailedMessage.prototype.getMessageId = function() {
  return 6509;
};

TreasureHuntDigRequestAnswerFailedMessage.prototype.getClassName = function() {
  return 'TreasureHuntDigRequestAnswerFailedMessage';
};

module.exports.id = 6509;
module.exports.class = TreasureHuntDigRequestAnswerFailedMessage;