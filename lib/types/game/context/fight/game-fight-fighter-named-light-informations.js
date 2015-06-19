var BaseMessage = require('./game-fight-fighter-light-informations.js').class,
  util = require('util');

var GameFightFighterNamedLightInformations = function() {
  this.name = "";
};

util.inherits(GameFightFighterNamedLightInformations, BaseMessage);

GameFightFighterNamedLightInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightFighterNamedLightInformations(output);
};

GameFightFighterNamedLightInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightFighterNamedLightInformations(input);
};

GameFightFighterNamedLightInformations.prototype.serializeAs_GameFightFighterNamedLightInformations = function(output) {
  this.serializeAs_GameFightFighterLightInformations(output);
  output.writeUTF(this.name);
};

GameFightFighterNamedLightInformations.prototype.deserializeAs_GameFightFighterNamedLightInformations = function(input) {
  this.deserialize(input);
  this.name = input.readUTF();
};

GameFightFighterNamedLightInformations.prototype.getTypeId = function() {
  return 456;
};

GameFightFighterNamedLightInformations.prototype.getClassName = function() {
  return 'GameFightFighterNamedLightInformations';
};

module.exports.id = 456;
module.exports.class = GameFightFighterNamedLightInformations;