var GameFightFighterNamedLightInformations = function() {
  this.name = "";
};



GameFightFighterNamedLightInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightFighterNamedLightInformations(output);
};

GameFightFighterNamedLightInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightFighterNamedLightInformations(input);
};

GameFightFighterNamedLightInformations.prototype.serializeAs_GameFightFighterNamedLightInformations = function(output) {
  super.serializeAs_GameFightFighterLightInformations(param1);
  param1.writeUTF(this.name);
};

GameFightFighterNamedLightInformations.prototype.deserializeAs_GameFightFighterNamedLightInformations = function(input) {
  super.deserialize(param1);
  this.name = param1.readUTF();
};

GameFightFighterNamedLightInformations.prototype.getTypeId = function() {
  return 456;
};

GameFightFighterNamedLightInformations.prototype.getClassName = function() {
  return 'GameFightFighterNamedLightInformations';
};

module.exports.id = 456;
module.exports.class = GameFightFighterNamedLightInformations;