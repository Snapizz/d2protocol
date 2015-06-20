var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');

var GameContextCreateRequestMessage = function() {

};

util.inherits(GameContextCreateRequestMessage, BaseMessage);

GameContextCreateRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameContextCreateRequestMessage(output);
};

GameContextCreateRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextCreateRequestMessage(input);
};

GameContextCreateRequestMessage.prototype.serializeAs_GameContextCreateRequestMessage = function(param1) {

};

GameContextCreateRequestMessage.prototype.deserializeAs_GameContextCreateRequestMessage = function(param1) {

};

GameContextCreateRequestMessage.prototype.getMessageId = function() {
  return 250;
};

GameContextCreateRequestMessage.prototype.getClassName = function() {
  return 'GameContextCreateRequestMessage';
};

module.exports.id = 250;
module.exports.class = GameContextCreateRequestMessage;