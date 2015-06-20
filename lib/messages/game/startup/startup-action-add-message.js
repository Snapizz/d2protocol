var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');

var StartupActionAddObject = require('../../../types/game/startup/startup-action-add-object.js').class;

var StartupActionAddMessage = function() {
  this.newAction = new StartupActionAddObject();
};

util.inherits(StartupActionAddMessage, BaseMessage);

StartupActionAddMessage.prototype.serialize = function(output) {
  this.serializeAs_StartupActionAddMessage(output);
};

StartupActionAddMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StartupActionAddMessage(input);
};

StartupActionAddMessage.prototype.serializeAs_StartupActionAddMessage = function(param1) {
  this.newAction.serializeAs_StartupActionAddObject(param1);
};

StartupActionAddMessage.prototype.deserializeAs_StartupActionAddMessage = function(param1) {
  this.newAction = new StartupActionAddObject();
  this.newAction.deserialize(param1);
};

StartupActionAddMessage.prototype.getMessageId = function() {
  return 6538;
};

StartupActionAddMessage.prototype.getClassName = function() {
  return 'StartupActionAddMessage';
};

module.exports.id = 6538;
module.exports.class = StartupActionAddMessage;
module.exports.getInstance = function() {
  return new StartupActionAddMessage();
};