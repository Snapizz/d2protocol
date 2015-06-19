var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var ObjectMovementMessage = function() {
  this.objectUID = 0;
  this.position = 63;
};

util.inherits(ObjectMovementMessage, BaseMessage);

ObjectMovementMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectMovementMessage(output);
};

ObjectMovementMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectMovementMessage(input);
};

ObjectMovementMessage.prototype.serializeAs_ObjectMovementMessage = function(output) {
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
  output.writeByte(this.position);
};

ObjectMovementMessage.prototype.deserializeAs_ObjectMovementMessage = function(input) {
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ObjectMovementMessage.objectUID.")));
  };
  this.position = input.readUnsignedByte();
  if ((((this.position < 0)) || ((this.position > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.position) + ") on element of ObjectMovementMessage.position.")));
  };
};

ObjectMovementMessage.prototype.getMessageId = function() {
  return 3010;
};

ObjectMovementMessage.prototype.getClassName = function() {
  return 'ObjectMovementMessage';
};

module.exports.id = 3010;
module.exports.class = ObjectMovementMessage;