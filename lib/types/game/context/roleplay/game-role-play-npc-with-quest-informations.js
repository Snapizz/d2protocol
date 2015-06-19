var BaseMessage = require('./game-role-play-npc-informations.js').class,
  util = require('util');

var GameRolePlayNpcWithQuestInformations = function() {
  this.questFlag;
};

util.inherits(GameRolePlayNpcWithQuestInformations, BaseMessage);

GameRolePlayNpcWithQuestInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayNpcWithQuestInformations(output);
};

GameRolePlayNpcWithQuestInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayNpcWithQuestInformations(input);
};

GameRolePlayNpcWithQuestInformations.prototype.serializeAs_GameRolePlayNpcWithQuestInformations = function(output) {
  this.serializeAs_GameRolePlayNpcInformations(output);
  this.questFlag.serializeAs_GameRolePlayNpcQuestFlag(output);
};

GameRolePlayNpcWithQuestInformations.prototype.deserializeAs_GameRolePlayNpcWithQuestInformations = function(input) {
  this.deserialize(input);
  this.questFlag = new GameRolePlayNpcQuestFlag();
  this.questFlag.deserialize(input);
};

GameRolePlayNpcWithQuestInformations.prototype.getTypeId = function() {
  return 383;
};

GameRolePlayNpcWithQuestInformations.prototype.getClassName = function() {
  return 'GameRolePlayNpcWithQuestInformations';
};

module.exports.id = 383;
module.exports.class = GameRolePlayNpcWithQuestInformations;