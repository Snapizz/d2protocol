var BaseMessage = require('./game-role-play-actor-informations.js').class,
  util = require('util');

var GameRolePlayNamedActorInformations = function() {
  this.name = "";
};

util.inherits(GameRolePlayNamedActorInformations, BaseMessage);

GameRolePlayNamedActorInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayNamedActorInformations(output);
};

GameRolePlayNamedActorInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayNamedActorInformations(input);
};

GameRolePlayNamedActorInformations.prototype.serializeAs_GameRolePlayNamedActorInformations = function(output) {
  this.serializeAs_GameRolePlayActorInformations(output);
  output.writeUTF(this.name);
};

GameRolePlayNamedActorInformations.prototype.deserializeAs_GameRolePlayNamedActorInformations = function(input) {
  this.deserialize(input);
  this.name = input.readUTF();
};

GameRolePlayNamedActorInformations.prototype.getTypeId = function() {
  return 154;
};

GameRolePlayNamedActorInformations.prototype.getClassName = function() {
  return 'GameRolePlayNamedActorInformations';
};

module.exports.id = 154;
module.exports.class = GameRolePlayNamedActorInformations;