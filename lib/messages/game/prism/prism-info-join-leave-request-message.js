var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var PrismInfoJoinLeaveRequestMessage = function() {
  this.join = false;
};

util.inherits(PrismInfoJoinLeaveRequestMessage, BaseMessage);

PrismInfoJoinLeaveRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_PrismInfoJoinLeaveRequestMessage(output);
};

PrismInfoJoinLeaveRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_PrismInfoJoinLeaveRequestMessage(input);
};

PrismInfoJoinLeaveRequestMessage.prototype.serializeAs_PrismInfoJoinLeaveRequestMessage = function(param1) {
  param1.writeBoolean(this.join);
};

PrismInfoJoinLeaveRequestMessage.prototype.deserializeAs_PrismInfoJoinLeaveRequestMessage = function(param1) {
  this.join = param1.readBoolean();
};

PrismInfoJoinLeaveRequestMessage.prototype.getMessageId = function() {
  return 5844;
};

PrismInfoJoinLeaveRequestMessage.prototype.getClassName = function() {
  return 'PrismInfoJoinLeaveRequestMessage';
};

module.exports.id = 5844;
module.exports.class = PrismInfoJoinLeaveRequestMessage;
module.exports.getInstance = function() {
  return new PrismInfoJoinLeaveRequestMessage();
};