var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
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

ObtainedItemWithBonusMessage.prototype.serializeAs_ObtainedItemWithBonusMessage = function(param1) {
  this.serializeAs_ObtainedItemMessage(param1);
  if (this.bonusQuantity < 0) {
    throw new Error("Forbidden value (" + this.bonusQuantity + ") on element bonusQuantity.");
  } else {
    param1.writeVarInt(this.bonusQuantity);
    return;
  }
};

ObtainedItemWithBonusMessage.prototype.deserializeAs_ObtainedItemWithBonusMessage = function(param1) {
  this.deserialize(param1);
  this.bonusQuantity = param1.readVarUhInt();
  if (this.bonusQuantity < 0) {
    throw new Error("Forbidden value (" + this.bonusQuantity + ") on element of ObtainedItemWithBonusMessage.bonusQuantity.");
  } else {
    return;
  }
};

ObtainedItemWithBonusMessage.prototype.getMessageId = function() {
  return 6520;
};

ObtainedItemWithBonusMessage.prototype.getClassName = function() {
  return 'ObtainedItemWithBonusMessage';
};

module.exports.id = 6520;
module.exports.class = ObtainedItemWithBonusMessage;
module.exports.getInstance = function() {
  return new ObtainedItemWithBonusMessage();
};