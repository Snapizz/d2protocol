var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectDeleteMessage = function() {
  this.objectUID = 0;
  this.quantity = 0;
};

util.inherits(ObjectDeleteMessage, BaseMessage);

ObjectDeleteMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectDeleteMessage(output);
};

ObjectDeleteMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectDeleteMessage(input);
};

ObjectDeleteMessage.prototype.serializeAs_ObjectDeleteMessage = function(output) {
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
};

ObjectDeleteMessage.prototype.deserializeAs_ObjectDeleteMessage = function(input) {
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ObjectDeleteMessage.objectUID.")));
  };
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ObjectDeleteMessage.quantity.")));
  };
};

ObjectDeleteMessage.prototype.getMessageId = function() {
  return 3022;
};

ObjectDeleteMessage.prototype.getClassName = function() {
  return 'ObjectDeleteMessage';
};

module.exports.id = 3022;
module.exports.class = ObjectDeleteMessage;