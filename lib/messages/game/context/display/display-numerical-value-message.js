var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var DisplayNumericalValueMessage = function() {
  this.entityId = 0;
  this.value = 0;
  this.type = 0;
};

util.inherits(DisplayNumericalValueMessage, BaseMessage);

DisplayNumericalValueMessage.prototype.serialize = function(output) {
  this.serializeAs_DisplayNumericalValueMessage(output);
};

DisplayNumericalValueMessage.prototype.deserialize = function(input) {
  this.deserializeAs_DisplayNumericalValueMessage(input);
};

DisplayNumericalValueMessage.prototype.serializeAs_DisplayNumericalValueMessage = function(output) {
  output.writeInt(this.entityId);
  output.writeInt(this.value);
  output.writeByte(this.type);
};

DisplayNumericalValueMessage.prototype.deserializeAs_DisplayNumericalValueMessage = function(input) {
  this.entityId = input.readInt();
  this.value = input.readInt();
  this.type = input.readByte();
  if (this.type < 0) {
    throw (new Error((("Forbidden value (" + this.type) + ") on element of DisplayNumericalValueMessage.type.")));
  };
};

DisplayNumericalValueMessage.prototype.getMessageId = function() {
  return 5808;
};

DisplayNumericalValueMessage.prototype.getClassName = function() {
  return 'DisplayNumericalValueMessage';
};

module.exports.id = 5808;
module.exports.class = DisplayNumericalValueMessage;