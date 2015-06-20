var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var NotificationByServerMessage = function() {
  this.id = 0;
  this.parameters = [];
  this.forceOpen = false;
};

util.inherits(NotificationByServerMessage, BaseMessage);

NotificationByServerMessage.prototype.serialize = function(output) {
  this.serializeAs_NotificationByServerMessage(output);
};

NotificationByServerMessage.prototype.deserialize = function(input) {
  this.deserializeAs_NotificationByServerMessage(input);
};

NotificationByServerMessage.prototype.serializeAs_NotificationByServerMessage = function(output) {
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element id.")));
  };
  output.writeVarShort(this.id);
  output.writeShort(this.parameters.length);
  var _i2 = 0;
  while (_i2 < this.parameters.length) {
    output.writeUTF(this.parameters[_i2]);
    _i2++;
  };
  output.writeBoolean(this.forceOpen);
};

NotificationByServerMessage.prototype.deserializeAs_NotificationByServerMessage = function(input) {
  var _val2;
  this.id = input.readVarUhShort();
  if (this.id < 0) {
    throw (new Error((("Forbidden value (" + this.id) + ") on element of NotificationByServerMessage.id.")));
  };
  var _parametersLen = input.readUnsignedShort();
  var _i2 = 0;
  while (_i2 < _parametersLen) {
    _val2 = input.readUTF();
    this.parameters.push(_val2);
    _i2++;
  };
  this.forceOpen = input.readBoolean();
};

NotificationByServerMessage.prototype.getMessageId = function() {
  return 6103;
};

NotificationByServerMessage.prototype.getClassName = function() {
  return 'NotificationByServerMessage';
};

module.exports.id = 6103;
module.exports.class = NotificationByServerMessage;