var d2com = require('d2com'),
  BaseMessage = require('./object-set-position-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ObjectSetPositionMessage = function() {
  this.objectUID = 0;
  this.position = 63;
  this.quantity = 0;
};

util.inherits(ObjectSetPositionMessage, BaseMessage);

ObjectSetPositionMessage.prototype.serialize = function(output) {
  this.serializeAs_ObjectSetPositionMessage(output);
};

ObjectSetPositionMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ObjectSetPositionMessage(input);
};

ObjectSetPositionMessage.prototype.serializeAs_ObjectSetPositionMessage = function(param1) {
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element objectUID.");
  } else {
    param1.writeVarInt(this.objectUID);
    param1.writeByte(this.position);
    if (this.quantity < 0) {
      throw new Error("Forbidden value (" + this.quantity + ") on element quantity.");
    } else {
      param1.writeVarInt(this.quantity);
      return;
    }
  }
};

ObjectSetPositionMessage.prototype.deserializeAs_ObjectSetPositionMessage = function(param1) {
  this.objectUID = param1.readVarUhInt();
  if (this.objectUID < 0) {
    throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectSetPositionMessage.objectUID.");
  } else {
    this.position = param1.readUnsignedByte();
    if (this.position < 0 || this.position > 255) {
      throw new Error("Forbidden value (" + this.position + ") on element of ObjectSetPositionMessage.position.");
    } else {
      this.quantity = param1.readVarUhInt();
      if (this.quantity < 0) {
        throw new Error("Forbidden value (" + this.quantity + ") on element of ObjectSetPositionMessage.quantity.");
      } else {
        return;
      }
    }
  }
};

ObjectSetPositionMessage.prototype.getMessageId = function() {
  return 3021;
};

ObjectSetPositionMessage.prototype.getClassName = function() {
  return 'ObjectSetPositionMessage';
};

module.exports.id = 3021;
module.exports.class = ObjectSetPositionMessage;
module.exports.getInstance = function() {
  return new ObjectSetPositionMessage();
};