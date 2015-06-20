var GameRolePlayNamedActorInformations = function() {
  this.name = "";
};



GameRolePlayNamedActorInformations.prototype.serialize = function(output) {
  this.serializeAs_GameRolePlayNamedActorInformations(output);
};

GameRolePlayNamedActorInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameRolePlayNamedActorInformations(input);
};

GameRolePlayNamedActorInformations.prototype.serializeAs_GameRolePlayNamedActorInformations = function(output) {
  this.serializeAs_GameRolePlayActorInformations(param1);
  param1.writeUTF(this.name);
};

GameRolePlayNamedActorInformations.prototype.deserializeAs_GameRolePlayNamedActorInformations = function(input) {
  this.deserialize(param1);
  this.name = param1.readUTF();
};

GameRolePlayNamedActorInformations.prototype.getTypeId = function() {
  return 154;
};

GameRolePlayNamedActorInformations.prototype.getClassName = function() {
  return 'GameRolePlayNamedActorInformations';
};

module.exports.id = 154;
module.exports.class = GameRolePlayNamedActorInformations;