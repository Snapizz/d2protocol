var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GameRolePlayFreeSoulRequestMessage = function() {

};

util.inherits(GameRolePlayFreeSoulRequestMessage, BaseMessage);

GameRolePlayFreeSoulRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayFreeSoulRequestMessage(output);
};

GameRolePlayFreeSoulRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayFreeSoulRequestMessage(input);
};

GameRolePlayFreeSoulRequestMessage.prototype.serializeAs_GameRolePlayFreeSoulRequestMessage = function(param1) {

};

GameRolePlayFreeSoulRequestMessage.prototype.deserializeAs_GameRolePlayFreeSoulRequestMessage = function(param1) {

};

GameRolePlayFreeSoulRequestMessage.prototype.getMessageId = function() {
  return 745;
};

GameRolePlayFreeSoulRequestMessage.prototype.getClassName = function() {
  return 'GameRolePlayFreeSoulRequestMessage';
};

module.exports.id = 745;
module.exports.class = GameRolePlayFreeSoulRequestMessage;
module.exports.getInstance = function() {
  return new GameRolePlayFreeSoulRequestMessage();
};