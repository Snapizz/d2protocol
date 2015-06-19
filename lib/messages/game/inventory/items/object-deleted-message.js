var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectDeletedMessage = function() {
  this.objectUID = 0;
};

util.inherits(ObjectDeletedMessage, BaseMessage);

ObjectDeletedMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectDeletedMessage(output);
};

ObjectDeletedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectDeletedMessage(input);
};

ObjectDeletedMessage.prototype.serializeAs_ObjectDeletedMessage = function(output) {
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
};

ObjectDeletedMessage.prototype.deserializeAs_ObjectDeletedMessage = function(input) {
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ObjectDeletedMessage.objectUID.")));
  };
};

ObjectDeletedMessage.prototype.getMessageId = function() {
  return 3024;
};

ObjectDeletedMessage.prototype.getClassName = function() {
  return 'ObjectDeletedMessage';
};

module.exports.id = 3024;
module.exports.class = ObjectDeletedMessage;