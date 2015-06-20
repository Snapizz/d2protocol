var d2com = require('d2com'),
  BaseMessage = require('./current-server-status-update-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var CurrentServerStatusUpdateMessage = function() {
  this.status = 1;
};

util.inherits(CurrentServerStatusUpdateMessage, BaseMessage);

CurrentServerStatusUpdateMessage.prototype.serialize = function(output) {
  this.serializeAs_CurrentServerStatusUpdateMessage(output);
};

CurrentServerStatusUpdateMessage.prototype.deserialize = function(input) {
  this.deserializeAs_CurrentServerStatusUpdateMessage(input);
};

CurrentServerStatusUpdateMessage.prototype.serializeAs_CurrentServerStatusUpdateMessage = function(param1) {
  param1.writeByte(this.status);
};

CurrentServerStatusUpdateMessage.prototype.deserializeAs_CurrentServerStatusUpdateMessage = function(param1) {
  this.status = param1.readByte();
  if (this.status < 0) {
    throw new Error("Forbidden value (" + this.status + ") on element of CurrentServerStatusUpdateMessage.status.");
  } else {
    return;
  }
};

CurrentServerStatusUpdateMessage.prototype.getMessageId = function() {
  return 6525;
};

CurrentServerStatusUpdateMessage.prototype.getClassName = function() {
  return 'CurrentServerStatusUpdateMessage';
};

module.exports.id = 6525;
module.exports.class = CurrentServerStatusUpdateMessage;
module.exports.getInstance = function() {
  return new CurrentServerStatusUpdateMessage();
};