var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GameContextDestroyMessage = function() {

};

util.inherits(GameContextDestroyMessage, BaseMessage);

GameContextDestroyMessage.prototype.serialize = function(output) {
  this.serializeAs_GameContextDestroyMessage(output);
};

GameContextDestroyMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextDestroyMessage(input);
};

GameContextDestroyMessage.prototype.serializeAs_GameContextDestroyMessage = function(param1) {

};

GameContextDestroyMessage.prototype.deserializeAs_GameContextDestroyMessage = function(param1) {

};

GameContextDestroyMessage.prototype.getMessageId = function() {
  return 201;
};

GameContextDestroyMessage.prototype.getClassName = function() {
  return 'GameContextDestroyMessage';
};

module.exports.id = 201;
module.exports.class = GameContextDestroyMessage;
module.exports.getInstance = function() {
  return new GameContextDestroyMessage();
};