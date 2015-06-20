var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

TreasureHuntDigRequestAnswerFailedMessage.prototype.serializeAs_TreasureHuntDigRequestAnswerFailedMessage = function(param1) {
  this.serializeAs_TreasureHuntDigRequestAnswerMessage(param1);
  if (this.wrongFlagCount < 0) {
    throw new Error("Forbidden value (" + this.wrongFlagCount + ") on element wrongFlagCount.");
  } else {
    param1.writeByte(this.wrongFlagCount);
    return;
  }
};

TreasureHuntDigRequestAnswerFailedMessage.prototype.deserializeAs_TreasureHuntDigRequestAnswerFailedMessage = function(param1) {
  this.deserialize(param1);
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
module.exports.getInstance = function() {
  return new TreasureHuntDigRequestAnswerFailedMessage();
};