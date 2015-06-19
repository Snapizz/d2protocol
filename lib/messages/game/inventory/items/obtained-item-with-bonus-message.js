var d2com = require('d2com'),
  BaseMessage = require('./obtained-item-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObtainedItemWithBonusMessage = function() {
  this.bonusQuantity = 0;
};

util.inherits(ObtainedItemWithBonusMessage, BaseMessage);

ObtainedItemWithBonusMessage.prototype.serialize = function(output) {
  this.serializeAs_ObtainedItemWithBonusMessage(output);
};

ObtainedItemWithBonusMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObtainedItemWithBonusMessage(input);
};

ObtainedItemWithBonusMessage.prototype.serializeAs_ObtainedItemWithBonusMessage = function(output) {
  this.serializeAs_ObtainedItemMessage(output);
  if (this.bonusQuantity < 0) {
    throw (new Error((("Forbidden value (" + this.bonusQuantity) + ") on element bonusQuantity.")));
  };
  output.writeVarInt(this.bonusQuantity);
};

ObtainedItemWithBonusMessage.prototype.deserializeAs_ObtainedItemWithBonusMessage = function(input) {
  this.deserialize(input);
  this.bonusQuantity = input.readVarUhInt();
  if (this.bonusQuantity < 0) {
    throw (new Error((("Forbidden value (" + this.bonusQuantity) + ") on element of ObtainedItemWithBonusMessage.bonusQuantity.")));
  };
};

ObtainedItemWithBonusMessage.prototype.getMessageId = function() {
  return 6520;
};

ObtainedItemWithBonusMessage.prototype.getClassName = function() {
  return 'ObtainedItemWithBonusMessage';
};

module.exports.id = 6520;
module.exports.class = ObtainedItemWithBonusMessage;