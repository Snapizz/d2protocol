var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ObjectSetPositionMessage.prototype.serializeAs_ObjectSetPositionMessage = function(output) {
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element objectUID.")));
  };
  output.writeVarInt(this.objectUID);
  output.writeByte(this.position);
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element quantity.")));
  };
  output.writeVarInt(this.quantity);
};

ObjectSetPositionMessage.prototype.deserializeAs_ObjectSetPositionMessage = function(input) {
  this.objectUID = input.readVarUhInt();
  if (this.objectUID < 0) {
    throw (new Error((("Forbidden value (" + this.objectUID) + ") on element of ObjectSetPositionMessage.objectUID.")));
  };
  this.position = input.readUnsignedByte();
  if ((((this.position < 0)) || ((this.position > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.position) + ") on element of ObjectSetPositionMessage.position.")));
  };
  this.quantity = input.readVarUhInt();
  if (this.quantity < 0) {
    throw (new Error((("Forbidden value (" + this.quantity) + ") on element of ObjectSetPositionMessage.quantity.")));
  };
};

ObjectSetPositionMessage.prototype.getMessageId = function() {
  return 3021;
};

ObjectSetPositionMessage.prototype.getClassName = function() {
  return 'ObjectSetPositionMessage';
};

module.exports.id = 3021;
module.exports.class = ObjectSetPositionMessage;