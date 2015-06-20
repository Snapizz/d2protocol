var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
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

ObjectMovementMessage.prototype.serializeAs_ObjectMovementMessage = function(param1) {
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
  } else {
    param1.writeVarInt(this.objectUID);
    param1.writeByte(this.position);
    return;
  }
};

ObjectMovementMessage.prototype.deserializeAs_ObjectMovementMessage = function(param1) {
  this.objectUID = param1.readVarUhInt();
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectMovementMessage.objectUID.");
  } else {
    this.position = param1.readUnsignedByte();
    if (this.position < 0 || this.position > 255) {
      throw new Error("Forbidden value (" + this.position + ") on element of ObjectMovementMessage.position.");
    } else {
      return;
    }
  }
};

ObjectMovementMessage.prototype.getMessageId = function() {
  return 3010;
};

ObjectMovementMessage.prototype.getClassName = function() {
  return 'ObjectMovementMessage';
};

module.exports.id = 3010;
module.exports.class = ObjectMovementMessage;
module.exports.getInstance = function() {
  return new ObjectMovementMessage();
};