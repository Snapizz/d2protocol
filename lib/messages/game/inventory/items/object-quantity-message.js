var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectQuantityMessage = function() {
  this.objectUID = 0;
  this.quantity = 0;
};

util.inherits(ObjectQuantityMessage, BaseMessage);

ObjectQuantityMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectQuantityMessage(output);
};

ObjectQuantityMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectQuantityMessage(input);
};

ObjectQuantityMessage.prototype.serializeAs_ObjectQuantityMessage = function(output) {
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
};

ObjectQuantityMessage.prototype.deserializeAs_ObjectQuantityMessage = function(input) {
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ObjectQuantityMessage.objectUID.")));
  };
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ObjectQuantityMessage.quantity.")));
  };
};

ObjectQuantityMessage.prototype.getMessageId = function() {
  return 3023;
};

ObjectQuantityMessage.prototype.getClassName = function() {
  return 'ObjectQuantityMessage';
};

module.exports.id = 3023;
module.exports.class = ObjectQuantityMessage;