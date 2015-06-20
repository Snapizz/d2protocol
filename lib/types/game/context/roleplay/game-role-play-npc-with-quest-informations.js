var GameRolePlayNpcWithQuestInformations = function() {
  this.questFlag;
};



GameRolePlayNpcWithQuestInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayNpcWithQuestInformations(output);
};

GameRolePlayNpcWithQuestInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayNpcWithQuestInformations(input);
};

GameRolePlayNpcWithQuestInformations.prototype.serializeAs_GameRolePlayNpcWithQuestInformations = function(output) {
  this.serializeAs_GameRolePlayNpcInformations(param1);
  this.questFlag.serializeAs_GameRolePlayNpcQuestFlag(param1);
};

GameRolePlayNpcWithQuestInformations.prototype.deserializeAs_GameRolePlayNpcWithQuestInformations = function(input) {
  this.deserialize(param1);
  this.questFlag = new GameRolePlayNpcQuestFlag();
  this.questFlag.deserialize(param1);
};

GameRolePlayNpcWithQuestInformations.prototype.getTypeId = function() {
  return 383;
};

GameRolePlayNpcWithQuestInformations.prototype.getClassName = function() {
  return 'GameRolePlayNpcWithQuestInformations';
};

module.exports.id = 383;
module.exports.class = GameRolePlayNpcWithQuestInformations;