var d2com = require('d2com'),
  BaseMessage = d2com.networkMessage.class,
  CustomDataWrapper = d2com.customDataWrapper,
  util = require('util');



var GameRolePlayArenaUnregisterMessage = function() {

};

util.inherits(GameRolePlayArenaUnregisterMessage, BaseMessage);

GameRolePlayArenaUnregisterMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayArenaUnregisterMessage(output);
};

GameRolePlayArenaUnregisterMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayArenaUnregisterMessage(input);
};

GameRolePlayArenaUnregisterMessage.prototype.serializeAs_GameRolePlayArenaUnregisterMessage = function(param1) {

};

GameRolePlayArenaUnregisterMessage.prototype.deserializeAs_GameRolePlayArenaUnregisterMessage = function(param1) {

};

GameRolePlayArenaUnregisterMessage.prototype.getMessageId = function() {
  return 6282;
};

GameRolePlayArenaUnregisterMessage.prototype.getClassName = function() {
  return 'GameRolePlayArenaUnregisterMessage';
};

module.exports.id = 6282;
module.exports.class = GameRolePlayArenaUnregisterMessage;