var BaseMessage = require('./game-fight-monster-informations.js').class,
  util = require('util');

var GameFightMonsterWithAlignmentInformations = function() {
  this.alignmentInfos;
};

util.inherits(GameFightMonsterWithAlignmentInformations, BaseMessage);

GameFightMonsterWithAlignmentInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightMonsterWithAlignmentInformations(output);
};

GameFightMonsterWithAlignmentInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightMonsterWithAlignmentInformations(input);
};

GameFightMonsterWithAlignmentInformations.prototype.serializeAs_GameFightMonsterWithAlignmentInformations = function(output) {
  this.serializeAs_GameFightMonsterInformations(output);
  this.alignmentInfos.serializeAs_ActorAlignmentInformations(output);
};

GameFightMonsterWithAlignmentInformations.prototype.deserializeAs_GameFightMonsterWithAlignmentInformations = function(input) {
  this.deserialize(input);
  this.alignmentInfos = new ActorAlignmentInformations();
  this.alignmentInfos.deserialize(input);
};

GameFightMonsterWithAlignmentInformations.prototype.getTypeId = function() {
  return 203;
};

GameFightMonsterWithAlignmentInformations.prototype.getClassName = function() {
  return 'GameFightMonsterWithAlignmentInformations';
};

module.exports.id = 203;
module.exports.class = GameFightMonsterWithAlignmentInformations;