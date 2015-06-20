var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var DisplayNumericalValuePaddockMessage = function() {
  this.rideId = 0;
  this.value = 0;
  this.type = 0;
};

util.inherits(DisplayNumericalValuePaddockMessage, BaseMessage);

DisplayNumericalValuePaddockMessage.prototype.serialize = function(output) {
  this.serializeAs_DisplayNumericalValuePaddockMessage(output);
};

DisplayNumericalValuePaddockMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DisplayNumericalValuePaddockMessage(input);
};

DisplayNumericalValuePaddockMessage.prototype.serializeAs_DisplayNumericalValuePaddockMessage = function(param1) {
  param1.writeInt(this.rideId);
  param1.writeInt(this.value);
  param1.writeByte(this.type);
};

DisplayNumericalValuePaddockMessage.prototype.deserializeAs_DisplayNumericalValuePaddockMessage = function(param1) {
  this.rideId = param1.readInt();
  this.value = param1.readInt();
  this.type = param1.readByte();
  if (this.type < 0) {
    throw new Error("Forbidden value (" + this.type + ") on element of DisplayNumericalValuePaddockMessage.type.");
  } else {
    return;
  }
};

DisplayNumericalValuePaddockMessage.prototype.getMessageId = function() {
  return 6563;
};

DisplayNumericalValuePaddockMessage.prototype.getClassName = function() {
  return 'DisplayNumericalValuePaddockMessage';
};

module.exports.id = 6563;
module.exports.class = DisplayNumericalValuePaddockMessage;
module.exports.getInstance = function() {
  return new DisplayNumericalValuePaddockMessage();
};