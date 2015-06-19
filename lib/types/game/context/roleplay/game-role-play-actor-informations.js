var BaseMessage = require('../game-context-actor-informations.js').class,
  util = require('util');

var GameRolePlayActorInformations = function() {

};

util.inherits(GameRolePlayActorInformations, BaseMessage);

GameRolePlayActorInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayActorInformations(output);
};

GameRolePlayActorInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayActorInformations(input);
};

GameRolePlayActorInformations.prototype.serializeAs_GameRolePlayActorInformations = function(output) {
  this.serializeAs_GameContextActorInformations(output);
};

GameRolePlayActorInformations.prototype.deserializeAs_GameRolePlayActorInformations = function(input) {
  this.deserialize(input);
};

GameRolePlayActorInformations.prototype.getTypeId = function() {
  return 141;
};

GameRolePlayActorInformations.prototype.getClassName = function() {
  return 'GameRolePlayActorInformations';
};

module.exports.id = 141;
module.exports.class = GameRolePlayActorInformations;