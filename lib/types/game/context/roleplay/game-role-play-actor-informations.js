var GameRolePlayActorInformations = function() {

};



GameRolePlayActorInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayActorInformations(output);
};

GameRolePlayActorInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayActorInformations(input);
};

GameRolePlayActorInformations.prototype.serializeAs_GameRolePlayActorInformations = function(output) {
  super.serializeAs_GameContextActorInformations(param1);
};

GameRolePlayActorInformations.prototype.deserializeAs_GameRolePlayActorInformations = function(input) {
  super.deserialize(param1);
};

GameRolePlayActorInformations.prototype.getTypeId = function() {
  return 141;
};

GameRolePlayActorInformations.prototype.getClassName = function() {
  return 'GameRolePlayActorInformations';
};

module.exports.id = 141;
module.exports.class = GameRolePlayActorInformations;