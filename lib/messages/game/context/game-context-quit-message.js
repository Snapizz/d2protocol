var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameContextQuitMessage = function() {

};

util.inherits(GameContextQuitMessage, BaseMessage);

GameContextQuitMessage.prototype.serialize = function(output) {
  this.serializeAs_GameContextQuitMessage(output);
};

GameContextQuitMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextQuitMessage(input);
};

GameContextQuitMessage.prototype.serializeAs_GameContextQuitMessage = function(param1) {

};

GameContextQuitMessage.prototype.deserializeAs_GameContextQuitMessage = function(param1) {

};

GameContextQuitMessage.prototype.getMessageId = function() {
  return 255;
};

GameContextQuitMessage.prototype.getClassName = function() {
  return 'GameContextQuitMessage';
};

module.exports.id = 255;
module.exports.class = GameContextQuitMessage;
module.exports.getInstance = function() {
  return new GameContextQuitMessage();
};