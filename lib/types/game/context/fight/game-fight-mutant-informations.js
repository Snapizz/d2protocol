var BaseMessage = require('./game-fight-fighter-named-informations.js').class,
  util = require('util');

var GameFightMutantInformations = function() {
  this.powerLevel = 0;
};

util.inherits(GameFightMutantInformations, BaseMessage);

GameFightMutantInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightMutantInformations(output);
};

GameFightMutantInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightMutantInformations(input);
};

GameFightMutantInformations.prototype.serializeAs_GameFightMutantInformations = function(output) {
  this.serializeAs_GameFightFighterNamedInformations(output);
  if (this.powerLevel < 0) {
    throw (new Error((("Forbidden value (" + this.powerLevel) + ") on element powerLevel.")));
  };
  output.writeByte(this.powerLevel);
};

GameFightMutantInformations.prototype.deserializeAs_GameFightMutantInformations = function(input) {
  this.deserialize(input);
  this.powerLevel = input.readByte();
  if (this.powerLevel < 0) {
    throw (new Error((("Forbidden value (" + this.powerLevel) + ") on element of GameFightMutantInformations.powerLevel.")));
  };
};

GameFightMutantInformations.prototype.getTypeId = function() {
  return 50;
};

GameFightMutantInformations.prototype.getClassName = function() {
  return 'GameFightMutantInformations';
};

module.exports.id = 50;
module.exports.class = GameFightMutantInformations;