var BaseMessage = require('./game-fight-fighter-informations.js').class,
  util = require('util');

var GameFightFighterNamedInformations = function() {
  this.name = "";
  this.status;
};

util.inherits(GameFightFighterNamedInformations, BaseMessage);

GameFightFighterNamedInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightFighterNamedInformations(output);
};

GameFightFighterNamedInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightFighterNamedInformations(input);
};

GameFightFighterNamedInformations.prototype.serializeAs_GameFightFighterNamedInformations = function(output) {
  this.serializeAs_GameFightFighterInformations(output);
  output.writeUTF(this.name);
  this.status.serializeAs_PlayerStatus(output);
};

GameFightFighterNamedInformations.prototype.deserializeAs_GameFightFighterNamedInformations = function(input) {
  this.deserialize(input);
  this.name = input.readUTF();
  this.status = new PlayerStatus();
  this.status.deserialize(input);
};

GameFightFighterNamedInformations.prototype.getTypeId = function() {
  return 158;
};

GameFightFighterNamedInformations.prototype.getClassName = function() {
  return 'GameFightFighterNamedInformations';
};

module.exports.id = 158;
module.exports.class = GameFightFighterNamedInformations;