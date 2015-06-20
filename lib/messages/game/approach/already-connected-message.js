var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var AlreadyConnectedMessage = function() {

};

util.inherits(AlreadyConnectedMessage, BaseMessage);

AlreadyConnectedMessage.prototype.serialize = function(output) {
  this.serializeAs_AlreadyConnectedMessage(output);
};

AlreadyConnectedMessage.prototype.deserialize = function(input) {
  this.deserializeAs_AlreadyConnectedMessage(input);
};

AlreadyConnectedMessage.prototype.serializeAs_AlreadyConnectedMessage = function(param1) {

};

AlreadyConnectedMessage.prototype.deserializeAs_AlreadyConnectedMessage = function(param1) {

};

AlreadyConnectedMessage.prototype.getMessageId = function() {
  return 109;
};

AlreadyConnectedMessage.prototype.getClassName = function() {
  return 'AlreadyConnectedMessage';
};

module.exports.id = 109;
module.exports.class = AlreadyConnectedMessage;
module.exports.getInstance = function() {
  return new AlreadyConnectedMessage();
};