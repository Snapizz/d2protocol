var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var BasicTimeMessage = function() {
  this.timestamp = 0;
  this.timezoneOffset = 0;
};

util.inherits(BasicTimeMessage, BaseMessage);

BasicTimeMessage.prototype.serialize = function(output) {
  this.serializeAs_BasicTimeMessage(output);
};

BasicTimeMessage.prototype.deserialize = function(input) {
  this.deserializeAs_BasicTimeMessage(input);
};

BasicTimeMessage.prototype.serializeAs_BasicTimeMessage = function(output) {
  if ((((this.timestamp < 0)) || ((this.timestamp > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.timestamp) + ") on element timestamp.")));
  };
  output.writeDouble(this.timestamp);
  output.writeShort(this.timezoneOffset);
};

BasicTimeMessage.prototype.deserializeAs_BasicTimeMessage = function(input) {
  this.timestamp = input.readDouble();
  if ((((this.timestamp < 0)) || ((this.timestamp > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.timestamp) + ") on element of BasicTimeMessage.timestamp.")));
  };
  this.timezoneOffset = input.readShort();
};

BasicTimeMessage.prototype.getMessageId = function() {
  return 175;
};

BasicTimeMessage.prototype.getClassName = function() {
  return 'BasicTimeMessage';
};

module.exports.id = 175;
module.exports.class = BasicTimeMessage;