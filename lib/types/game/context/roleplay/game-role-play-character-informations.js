var BaseMessage = require('./game-role-play-humanoid-informations.js').class,
  util = require('util');

var GameRolePlayCharacterInformations = function() {
  this.alignmentInfos;
};

util.inherits(GameRolePlayCharacterInformations, BaseMessage);

GameRolePlayCharacterInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayCharacterInformations(output);
};

GameRolePlayCharacterInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayCharacterInformations(input);
};

GameRolePlayCharacterInformations.prototype.serializeAs_GameRolePlayCharacterInformations = function(output) {
  this.serializeAs_GameRolePlayHumanoidInformations(output);
  this.alignmentInfos.serializeAs_ActorAlignmentInformations(output);
};

GameRolePlayCharacterInformations.prototype.deserializeAs_GameRolePlayCharacterInformations = function(input) {
  this.deserialize(input);
  this.alignmentInfos = new ActorAlignmentInformations();
  this.alignmentInfos.deserialize(input);
};

GameRolePlayCharacterInformations.prototype.getTypeId = function() {
  return 36;
};

GameRolePlayCharacterInformations.prototype.getClassName = function() {
  return 'GameRolePlayCharacterInformations';
};

module.exports.id = 36;
module.exports.class = GameRolePlayCharacterInformations;