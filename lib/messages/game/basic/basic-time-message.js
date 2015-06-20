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

BasicTimeMessage.prototype.serializeAs_BasicTimeMessage = function(param1) {
  if (this.timestamp < 0 || this.timestamp > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.timestamp + ") on element timestamp.");
  } else {
    param1.writeDouble(this.timestamp);
    param1.writeShort(this.timezoneOffset);
    return;
  }
};

BasicTimeMessage.prototype.deserializeAs_BasicTimeMessage = function(param1) {
  this.timestamp = param1.readDouble();
  if (this.timestamp < 0 || this.timestamp > 9.007199254740992E15) {
    throw new Error("Forbidden value (" + this.timestamp + ") on element of BasicTimeMessage.timestamp.");
  } else {
    this.timezoneOffset = param1.readShort();
    return;
  }
};

BasicTimeMessage.prototype.getMessageId = function() {
  return 175;
};

BasicTimeMessage.prototype.getClassName = function() {
  return 'BasicTimeMessage';
};

module.exports.id = 175;
module.exports.class = BasicTimeMessage;
module.exports.getInstance = function() {
  return new BasicTimeMessage();
};