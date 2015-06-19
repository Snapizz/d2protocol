var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var CompassResetMessage = function() {
  this.type = 0;
};

util.inherits(CompassResetMessage, BaseMessage);

CompassResetMessage.prototype.serialize = function(output) {
  this.serializeAs_CompassResetMessage(output);
};

CompassResetMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CompassResetMessage(input);
};

CompassResetMessage.prototype.serializeAs_CompassResetMessage = function(output) {
  output.writeByte(this.type);
};

CompassResetMessage.prototype.deserializeAs_CompassResetMessage = function(input) {
  this.type = input.readByte();
  if (this.type < 0) {
    throw (new Error((("Forbidden value (" + this.type) + ") on element of CompassResetMessage.type.")));
  };
};

CompassResetMessage.prototype.getMessageId = function() {
  return 5584;
};

CompassResetMessage.prototype.getClassName = function() {
  return 'CompassResetMessage';
};

module.exports.id = 5584;
module.exports.class = CompassResetMessage;