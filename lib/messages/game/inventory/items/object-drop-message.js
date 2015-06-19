var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectDropMessage = function() {
  this.objectUID = 0;
  this.quantity = 0;
};

util.inherits(ObjectDropMessage, BaseMessage);

ObjectDropMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectDropMessage(output);
};

ObjectDropMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectDropMessage(input);
};

ObjectDropMessage.prototype.serializeAs_ObjectDropMessage = function(output) {
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
};

ObjectDropMessage.prototype.deserializeAs_ObjectDropMessage = function(input) {
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ObjectDropMessage.objectUID.")));
  };
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ObjectDropMessage.quantity.")));
  };
};

ObjectDropMessage.prototype.getMessageId = function() {
  return 3005;
};

ObjectDropMessage.prototype.getClassName = function() {
  return 'ObjectDropMessage';
};

module.exports.id = 3005;
module.exports.class = ObjectDropMessage;