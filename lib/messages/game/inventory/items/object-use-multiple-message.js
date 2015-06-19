var d2com = require('d2com'),
  BaseMessage = require('./object-use-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ObjectUseMultipleMessage.prototype.serializeAs_ObjectUseMultipleMessage = function(output) {
  this.serializeAs_ObjectUseMessage(output);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
};

ObjectUseMultipleMessage.prototype.deserializeAs_ObjectUseMultipleMessage = function(input) {
  this.deserialize(input);
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ObjectUseMultipleMessage.quantity.")));
  };
};

ObjectUseMultipleMessage.prototype.getMessageId = function() {
  return 6234;
};

ObjectUseMultipleMessage.prototype.getClassName = function() {
  return 'ObjectUseMultipleMessage';
};

module.exports.id = 6234;
module.exports.class = ObjectUseMultipleMessage;