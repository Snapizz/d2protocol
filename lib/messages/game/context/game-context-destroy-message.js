var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
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