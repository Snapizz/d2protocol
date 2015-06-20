var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var ExchangeLeaveMessage = function() {
  this.success = false;
};

util.inherits(ExchangeLeaveMessage, BaseMessage);

ExchangeLeaveMessage.prototype.serialize = function(output) {
  this.serializeAs_ExchangeLeaveMessage(output);
};

ExchangeLeaveMessage.prototype.deserialize = function(input) {
  this.deserializeAs_ExchangeLeaveMessage(input);
};

ExchangeLeaveMessage.prototype.serializeAs_ExchangeLeaveMessage = function(param1) {
  this.serializeAs_LeaveDialogMessage(param1);
  param1.writeBoolean(this.success);
};

ExchangeLeaveMessage.prototype.deserializeAs_ExchangeLeaveMessage = function(param1) {
  super.deserialize(param1);
  this.success = param1.readBoolean();
};

ExchangeLeaveMessage.prototype.getMessageId = function() {
  return 5628;
};

ExchangeLeaveMessage.prototype.getClassName = function() {
  return 'ExchangeLeaveMessage';
};

module.exports.id = 5628;
module.exports.class = ExchangeLeaveMessage;
module.exports.getInstance = function() {
  return new ExchangeLeaveMessage();
};