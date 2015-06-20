var d2com = require('d2com'),
  BaseMessage = require('./game-context-kick-message.js').class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameContextKickMessage = function() {
  this.targetId = 0;
};

util.inherits(GameContextKickMessage, BaseMessage);

GameContextKickMessage.prototype.serialize = function(output) {
  this.serializeAs_GameContextKickMessage(output);
};

GameContextKickMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameContextKickMessage(input);
};

GameContextKickMessage.prototype.serializeAs_GameContextKickMessage = function(param1) {
  param1.writeInt(this.targetId);
};

GameContextKickMessage.prototype.deserializeAs_GameContextKickMessage = function(param1) {
  this.targetId = param1.readInt();
};

GameContextKickMessage.prototype.getMessageId = function() {
  return 6081;
};

GameContextKickMessage.prototype.getClassName = function() {
  return 'GameContextKickMessage';
};

module.exports.id = 6081;
module.exports.class = GameContextKickMessage;
module.exports.getInstance = function() {
  return new GameContextKickMessage();
};