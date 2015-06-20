var GameFightMonsterWithAlignmentInformations = function() {
  this.alignmentInfos;
};



GameFightMonsterWithAlignmentInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightMonsterWithAlignmentInformations(output);
};

GameFightMonsterWithAlignmentInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightMonsterWithAlignmentInformations(input);
};

GameFightMonsterWithAlignmentInformations.prototype.serializeAs_GameFightMonsterWithAlignmentInformations = function(param1) {
  this.serializeAs_GameFightMonsterInformations(param1);
  this.alignmentInfos.serializeAs_ActorAlignmentInformations(param1);
};

GameFightMonsterWithAlignmentInformations.prototype.deserializeAs_GameFightMonsterWithAlignmentInformations = function(param1) {
  this.deserialize(param1);
  this.alignmentInfos = new ActorAlignmentInformations();
  this.alignmentInfos.deserialize(param1);
};

GameFightMonsterWithAlignmentInformations.prototype.getTypeId = function() {
  return 203;
};

GameFightMonsterWithAlignmentInformations.prototype.getClassName = function() {
  return 'GameFightMonsterWithAlignmentInformations';
};

module.exports.id = 203;
module.exports.class = GameFightMonsterWithAlignmentInformations;
module.exports.getInstance = function() {
  return new GameFightMonsterWithAlignmentInformations();
};