var d2com = require('d2com'),
  BaseMessage = d2com.NetworkMessage.class,
  CustomDataWrapper = d2com.CustomDataWrapper,
  BooleanByteWrapper = d2com.CustomDataWrapper,
  util = require('util');



var GameRolePlayAttackMonsterRequestMessage = function() {
  this.monsterGroupId = 0;
};

util.inherits(GameRolePlayAttackMonsterRequestMessage, BaseMessage);

GameRolePlayAttackMonsterRequestMessage.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayAttackMonsterRequestMessage(output);
};

GameRolePlayAttackMonsterRequestMessage.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayAttackMonsterRequestMessage(input);
};

GameRolePlayAttackMonsterRequestMessage.prototype.serializeAs_GameRolePlayAttackMonsterRequestMessage = function(param1) {
  param1.writeInt(this.monsterGroupId);
};

GameRolePlayAttackMonsterRequestMessage.prototype.deserializeAs_GameRolePlayAttackMonsterRequestMessage = function(param1) {
  this.monsterGroupId = param1.readInt();
};

GameRolePlayAttackMonsterRequestMessage.prototype.getMessageId = function() {
  return 6191;
};

GameRolePlayAttackMonsterRequestMessage.prototype.getClassName = function() {
  return 'GameRolePlayAttackMonsterRequestMessage';
};

module.exports.id = 6191;
module.exports.class = GameRolePlayAttackMonsterRequestMessage;
module.exports.getInstance = function() {
  return new GameRolePlayAttackMonsterRequestMessage();
};