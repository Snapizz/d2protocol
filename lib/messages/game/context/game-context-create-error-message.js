var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GameContextCreateErrorMessage = function() {

};

util.inherits(GameContextCreateErrorMessage, BaseMessage);

GameContextCreateErrorMessage.prototype.serialize = function(output) {
  this.serializeAs_GameContextCreateErrorMessage(output);
};

GameContextCreateErrorMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextCreateErrorMessage(input);
};

GameContextCreateErrorMessage.prototype.serializeAs_GameContextCreateErrorMessage = function(param1) {

};

GameContextCreateErrorMessage.prototype.deserializeAs_GameContextCreateErrorMessage = function(param1) {

};

GameContextCreateErrorMessage.prototype.getMessageId = function() {
  return 6024;
};

GameContextCreateErrorMessage.prototype.getClassName = function() {
  return 'GameContextCreateErrorMessage';
};

module.exports.id = 6024;
module.exports.class = GameContextCreateErrorMessage;
module.exports.getInstance = function() {
  return new GameContextCreateErrorMessage();
};