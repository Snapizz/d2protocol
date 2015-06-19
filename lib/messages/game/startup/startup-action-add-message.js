var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var StartupActionAddMessage = function() {
  this.newAction;
};

util.inherits(StartupActionAddMessage, BaseMessage);

StartupActionAddMessage.prototype.serialize = function(output) {
  this.serializeAs_StartupActionAddMessage(output);
};

StartupActionAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StartupActionAddMessage(input);
};

StartupActionAddMessage.prototype.serializeAs_StartupActionAddMessage = function(output) {
  this.newAction.serializeAs_StartupActionAddObject(output);
};

StartupActionAddMessage.prototype.deserializeAs_StartupActionAddMessage = function(input) {
  this.newAction = new StartupActionAddObject();
  this.newAction.deserialize(input);
};

StartupActionAddMessage.prototype.getMessageId = function() {
  return 6538;
};

StartupActionAddMessage.prototype.getClassName = function() {
  return 'StartupActionAddMessage';
};

module.exports.id = 6538;
module.exports.class = StartupActionAddMessage;