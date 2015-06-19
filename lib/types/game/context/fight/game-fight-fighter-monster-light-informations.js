var BaseMessage = require('./game-fight-fighter-light-informations.js').class,
  util = require('util');

var GameFightFighterMonsterLightInformations = function() {
  this.creatureGenericId = 0;
};

util.inherits(GameFightFighterMonsterLightInformations, BaseMessage);

GameFightFighterMonsterLightInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightFighterMonsterLightInformations(output);
};

GameFightFighterMonsterLightInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightFighterMonsterLightInformations(input);
};

GameFightFighterMonsterLightInformations.prototype.serializeAs_GameFightFighterMonsterLightInformations = function(output) {
  this.serializeAs_GameFightFighterLightInformations(output);
  if (this.creatureGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.creatureGenericId) + ") on element creatureGenericId.")));
  };
  output.writeVarShort(this.creatureGenericId);
};

GameFightFighterMonsterLightInformations.prototype.deserializeAs_GameFightFighterMonsterLightInformations = function(input) {
  this.deserialize(input);
  this.creatureGenericId = input.readVarUhShort();
  if (this.creatureGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.creatureGenericId) + ") on element of GameFightFighterMonsterLightInformations.creatureGenericId.")));
  };
};

GameFightFighterMonsterLightInformations.prototype.getTypeId = function() {
  return 455;
};

GameFightFighterMonsterLightInformations.prototype.getClassName = function() {
  return 'GameFightFighterMonsterLightInformations';
};

module.exports.id = 455;
module.exports.class = GameFightFighterMonsterLightInformations;