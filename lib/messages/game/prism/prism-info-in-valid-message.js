var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var PrismInfoInValidMessage = function() {
  this.reason = 0;
};

util.inherits(PrismInfoInValidMessage, BaseMessage);

PrismInfoInValidMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismInfoInValidMessage(output);
};

PrismInfoInValidMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismInfoInValidMessage(input);
};

PrismInfoInValidMessage.prototype.serializeAs_PrismInfoInValidMessage = function(param1) {
  param1.writeByte(this.reason);
};

PrismInfoInValidMessage.prototype.deserializeAs_PrismInfoInValidMessage = function(param1) {
  this.reason = param1.readByte();
  if (this.reason < 0) {
    throw new Error("Forbidden value (" + this.reason + ") on element of PrismInfoInValidMessage.reason.");
  } else {
    return;
  }
};

PrismInfoInValidMessage.prototype.getMessageId = function() {
  return 5859;
};

PrismInfoInValidMessage.prototype.getClassName = function() {
  return 'PrismInfoInValidMessage';
};

module.exports.id = 5859;
module.exports.class = PrismInfoInValidMessage;
module.exports.getInstance = function() {
  return new PrismInfoInValidMessage();
};