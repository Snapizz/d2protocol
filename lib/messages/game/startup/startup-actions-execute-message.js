var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var StartupActionsExecuteMessage = function() {

};

util.inherits(StartupActionsExecuteMessage, BaseMessage);

StartupActionsExecuteMessage.prototype.serialize = function(output) {
  this.serializeAs_StartupActionsExecuteMessage(output);
};

StartupActionsExecuteMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StartupActionsExecuteMessage(input);
};

StartupActionsExecuteMessage.prototype.serializeAs_StartupActionsExecuteMessage = function(param1) {

};

StartupActionsExecuteMessage.prototype.deserializeAs_StartupActionsExecuteMessage = function(param1) {

};

StartupActionsExecuteMessage.prototype.getMessageId = function() {
  return 1302;
};

StartupActionsExecuteMessage.prototype.getClassName = function() {
  return 'StartupActionsExecuteMessage';
};

module.exports.id = 1302;
module.exports.class = StartupActionsExecuteMessage;
module.exports.getInstance = function() {
  return new StartupActionsExecuteMessage();
};