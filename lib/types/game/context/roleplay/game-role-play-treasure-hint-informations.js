var BaseMessage = require('./game-role-play-actor-informations.js').class,
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

GameRolePlayTreasureHintInformations.prototype.serializeAs_GameRolePlayTreasureHintInformations = function(output) {
  this.serializeAs_GameRolePlayActorInformations(output);
  if (this.npcId < 0) {
    throw (new Error((("Forbidden value (" + this.npcId) + ") on element npcId.")));
  };
  output.writeVarShort(this.npcId);
};

GameRolePlayTreasureHintInformations.prototype.deserializeAs_GameRolePlayTreasureHintInformations = function(input) {
  this.deserialize(input);
  this.npcId = input.readVarUhShort();
  if (this.npcId < 0) {
    throw (new Error((("Forbidden value (" + this.npcId) + ") on element of GameRolePlayTreasureHintInformations.npcId.")));
  };
};

GameRolePlayTreasureHintInformations.prototype.getTypeId = function() {
  return 471;
};

GameRolePlayTreasureHintInformations.prototype.getClassName = function() {
  return 'GameRolePlayTreasureHintInformations';
};

module.exports.id = 471;
module.exports.class = GameRolePlayTreasureHintInformations;