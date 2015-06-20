var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var HelloGameMessage = function() {

};

util.inherits(HelloGameMessage, BaseMessage);

HelloGameMessage.prototype.serialize = function(output) {
  this.serializeAs_HelloGameMessage(output);
};

HelloGameMessage.prototype.deserialize = function(input) {
  this.deserializeAs_HelloGameMessage(input);
};

HelloGameMessage.prototype.serializeAs_HelloGameMessage = function(param1) {

};

HelloGameMessage.prototype.deserializeAs_HelloGameMessage = function(param1) {

};

HelloGameMessage.prototype.getMessageId = function() {
  return 101;
};

HelloGameMessage.prototype.getClassName = function() {
  return 'HelloGameMessage';
};

module.exports.id = 101;
module.exports.class = HelloGameMessage;
module.exports.getInstance = function() {
  return new HelloGameMessage();
};