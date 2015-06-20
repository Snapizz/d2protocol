var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ObjectUseMultipleMessage = function() {
  this.quantity = 0;
};

util.inherits(ObjectUseMultipleMessage, BaseMessage);

ObjectUseMultipleMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectUseMultipleMessage(output);
};

ObjectUseMultipleMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectUseMultipleMessage(input);
};

ObjectUseMultipleMessage.prototype.serializeAs_ObjectUseMultipleMessage = function(param1) {
  this.serializeAs_ObjectUseMessage(param1);
  if (this.quantity < 0) {
    throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
  } else {
    param1.writeVarInt(this.quantity);
    return;
  }
};

ObjectUseMultipleMessage.prototype.deserializeAs_ObjectUseMultipleMessage = function(param1) {
  super.deserialize(param1);
  this.quantity = param1.readVarUhInt();
  if (this.quantity < 0) {
    throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectUseMultipleMessage.quantity.");
  } else {
    return;
  }
};

ObjectUseMultipleMessage.prototype.getMessageId = function() {
  return 6234;
};

ObjectUseMultipleMessage.prototype.getClassName = function() {
  return 'ObjectUseMultipleMessage';
};

module.exports.id = 6234;
module.exports.class = ObjectUseMultipleMessage;
module.exports.getInstance = function() {
  return new ObjectUseMultipleMessage();
};