var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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

StartupActionsExecuteMessage.prototype.serializeAs_StartupActionsExecuteMessage = function(output) {

};

StartupActionsExecuteMessage.prototype.deserializeAs_StartupActionsExecuteMessage = function(input) {

};

StartupActionsExecuteMessage.prototype.getMessageId = function() {
  return 1302;
};

StartupActionsExecuteMessage.prototype.getClassName = function() {
  return 'StartupActionsExecuteMessage';
};

module.exports.id = 1302;
module.exports.class = StartupActionsExecuteMessage;