var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var StopToListenRunningFightRequestMessage = function() {

};

util.inherits(StopToListenRunningFightRequestMessage, BaseMessage);

StopToListenRunningFightRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_StopToListenRunningFightRequestMessage(output);
};

StopToListenRunningFightRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_StopToListenRunningFightRequestMessage(input);
};

StopToListenRunningFightRequestMessage.prototype.serializeAs_StopToListenRunningFightRequestMessage = function(param1) {

};

StopToListenRunningFightRequestMessage.prototype.deserializeAs_StopToListenRunningFightRequestMessage = function(param1) {

};

StopToListenRunningFightRequestMessage.prototype.getMessageId = function() {
  return 6124;
};

StopToListenRunningFightRequestMessage.prototype.getClassName = function() {
  return 'StopToListenRunningFightRequestMessage';
};

module.exports.id = 6124;
module.exports.class = StopToListenRunningFightRequestMessage;
module.exports.getInstance = function() {
  return new StopToListenRunningFightRequestMessage();
};