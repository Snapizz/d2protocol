var d2com = require('d2com'),
  BaseMessage = require('../../dialog/leave-dialog-message.js').class,
  CustomDataWrapper = d2com.customDataWrapper,
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

ExchangeLeaveMessage.prototype.serializeAs_ExchangeLeaveMessage = function(output) {
  this.serializeAs_LeaveDialogMessage(output);
  output.writeBoolean(this.success);
};

ExchangeLeaveMessage.prototype.deserializeAs_ExchangeLeaveMessage = function(input) {
  this.deserialize(input);
  this.success = input.readBoolean();
};

ExchangeLeaveMessage.prototype.getMessageId = function() {
  return 5628;
};

ExchangeLeaveMessage.prototype.getClassName = function() {
  return 'ExchangeLeaveMessage';
};

module.exports.id = 5628;
module.exports.class = ExchangeLeaveMessage;