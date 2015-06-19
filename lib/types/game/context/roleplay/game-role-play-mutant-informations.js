var BaseMessage = require('./game-role-play-humanoid-informations.js').class,
  util = require('util');

var GameRolePlayMutantInformations = function() {
  this.monsterId = 0;
  this.powerLevel = 0;
};

util.inherits(GameRolePlayMutantInformations, BaseMessage);

GameRolePlayMutantInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayMutantInformations(output);
};

GameRolePlayMutantInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayMutantInformations(input);
};

GameRolePlayMutantInformations.prototype.serializeAs_GameRolePlayMutantInformations = function(output) {
  this.serializeAs_GameRolePlayHumanoidInformations(output);
  if (this.monsterId < 0) {
    throw (new Error((("Forbidden value (" + this.monsterId) + ") on element monsterId.")));
  };
  output.writeVarShort(this.monsterId);
  output.writeByte(this.powerLevel);
};

GameRolePlayMutantInformations.prototype.deserializeAs_GameRolePlayMutantInformations = function(input) {
  this.deserialize(input);
  this.monsterId = input.readVarUhShort();
  if (this.monsterId < 0) {
    throw (new Error((("Forbidden value (" + this.monsterId) + ") on element of GameRolePlayMutantInformations.monsterId.")));
  };
  this.powerLevel = input.readByte();
};

GameRolePlayMutantInformations.prototype.getTypeId = function() {
  return 3;
};

GameRolePlayMutantInformations.prototype.getClassName = function() {
  return 'GameRolePlayMutantInformations';
};

module.exports.id = 3;
module.exports.class = GameRolePlayMutantInformations;