var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GuestLimitationMessage = function() {
  this.reason = 0;
};

util.inherits(GuestLimitationMessage, BaseMessage);

GuestLimitationMessage.prototype.serialize = function(output) {
  this.serializeAs_GuestLimitationMessage(output);
};

GuestLimitationMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GuestLimitationMessage(input);
};

GuestLimitationMessage.prototype.serializeAs_GuestLimitationMessage = function(output) {
  output.writeByte(this.reason);
};

GuestLimitationMessage.prototype.deserializeAs_GuestLimitationMessage = function(input) {
  this.reason = input.readByte();
  if (this.reason < 0) {
    throw (new Error((("Forbidden value (" + this.reason) + ") on element of GuestLimitationMessage.reason.")));
  };
};

GuestLimitationMessage.prototype.getMessageId = function() {
  return 6506;
};

GuestLimitationMessage.prototype.getClassName = function() {
  return 'GuestLimitationMessage';
};

module.exports.id = 6506;
module.exports.class = GuestLimitationMessage;