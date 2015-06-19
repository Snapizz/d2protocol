var BaseMessage = require('./game-fight-a-i-informations.js').class,
  util = require('util');

var GameFightMonsterInformations = function() {
  this.creatureGenericId = 0;
  this.creatureGrade = 0;
};

util.inherits(GameFightMonsterInformations, BaseMessage);

GameFightMonsterInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightMonsterInformations(output);
};

GameFightMonsterInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightMonsterInformations(input);
};

GameFightMonsterInformations.prototype.serializeAs_GameFightMonsterInformations = function(output) {
  this.serializeAs_GameFightAIInformations(output);
  if (this.creatureGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.creatureGenericId) + ") on element creatureGenericId.")));
  };
  output.writeVarShort(this.creatureGenericId);
  if (this.creatureGrade < 0) {
    throw (new Error((("Forbidden value (" + this.creatureGrade) + ") on element creatureGrade.")));
  };
  output.writeByte(this.creatureGrade);
};

GameFightMonsterInformations.prototype.deserializeAs_GameFightMonsterInformations = function(input) {
  this.deserialize(input);
  this.creatureGenericId = input.readVarUhShort();
  if (this.creatureGenericId < 0) {
    throw (new Error((("Forbidden value (" + this.creatureGenericId) + ") on element of GameFightMonsterInformations.creatureGenericId.")));
  };
  this.creatureGrade = input.readByte();
  if (this.creatureGrade < 0) {
    throw (new Error((("Forbidden value (" + this.creatureGrade) + ") on element of GameFightMonsterInformations.creatureGrade.")));
  };
};

GameFightMonsterInformations.prototype.getTypeId = function() {
  return 29;
};

GameFightMonsterInformations.prototype.getClassName = function() {
  return 'GameFightMonsterInformations';
};

module.exports.id = 29;
module.exports.class = GameFightMonsterInformations;