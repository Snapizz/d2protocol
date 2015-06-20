var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.BooleanByteWrapper,
  util = require('util');



var GameRolePlayGameOverMessage = function() {

};

util.inherits(GameRolePlayGameOverMessage, BaseMessage);

GameRolePlayGameOverMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayGameOverMessage(output);
};

GameRolePlayGameOverMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayGameOverMessage(input);
};

GameRolePlayGameOverMessage.prototype.serializeAs_GameRolePlayGameOverMessage = function(param1) {

};

GameRolePlayGameOverMessage.prototype.deserializeAs_GameRolePlayGameOverMessage = function(param1) {

};

GameRolePlayGameOverMessage.prototype.getMessageId = function() {
  return 746;
};

GameRolePlayGameOverMessage.prototype.getClassName = function() {
  return 'GameRolePlayGameOverMessage';
};

module.exports.id = 746;
module.exports.class = GameRolePlayGameOverMessage;
module.exports.getInstance = function() {
  return new GameRolePlayGameOverMessage();
};