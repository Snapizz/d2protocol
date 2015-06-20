var BaseMessage = require('./game-role-play-treasure-hint-informations.js').class,
  util = require('util');

var GameRolePlayTreasureHintInformations = function() {
  this.npcId = 0;
};

util.inherits(GameRolePlayTreasureHintInformations, BaseMessage);

GameRolePlayTreasureHintInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayTreasureHintInformations(output);
};

GameRolePlayTreasureHintInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayTreasureHintInformations(input);
};

GameRolePlayTreasureHintInformations.prototype.serializeAs_GameRolePlayTreasureHintInformations = function(param1) {
  this.serializeAs_GameRolePlayActorInformations(param1);
  if (this.npcId < 0) {
    throw new Error("Forbidden value (" + this.npcId + ") on element npcId.");
  } else {
    param1.writeVarShort(this.npcId);
    return;
  }
};

GameRolePlayTreasureHintInformations.prototype.deserializeAs_GameRolePlayTreasureHintInformations = function(param1) {
  this.deserialize(param1);
  this.npcId = param1.readVarUhShort();
  if (this.npcId < 0) {
    throw new Error("Forbidden value (" + this.npcId + ") on element of GameRolePlayTreasureHintInformations.npcId.");
  } else {
    return;
  }
};

GameRolePlayTreasureHintInformations.prototype.getTypeId = function() {
  return 471;
};

GameRolePlayTreasureHintInformations.prototype.getClassName = function() {
  return 'GameRolePlayTreasureHintInformations';
};

module.exports.id = 471;
module.exports.class = GameRolePlayTreasureHintInformations;
module.exports.getInstance = function() {
  return new GameRolePlayTreasureHintInformations();
};