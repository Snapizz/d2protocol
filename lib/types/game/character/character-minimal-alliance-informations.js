var CharacterMinimalAllianceInformations = function() {
  this.alliance;
};



CharacterMinimalAllianceInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterMinimalAllianceInformations(output);
};

CharacterMinimalAllianceInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterMinimalAllianceInformations(input);
};

CharacterMinimalAllianceInformations.prototype.serializeAs_CharacterMinimalAllianceInformations = function(param1) {
  this.serializeAs_CharacterMinimalGuildInformations(param1);
  this.alliance.serializeAs_BasicAllianceInformations(param1);
};

CharacterMinimalAllianceInformations.prototype.deserializeAs_CharacterMinimalAllianceInformations = function(param1) {
  this.deserialize(param1);
  this.alliance = new BasicAllianceInformations();
  this.alliance.deserialize(param1);
};

CharacterMinimalAllianceInformations.prototype.getTypeId = function() {
  return 444;
};

CharacterMinimalAllianceInformations.prototype.getClassName = function() {
  return 'CharacterMinimalAllianceInformations';
};

module.exports.id = 444;
module.exports.class = CharacterMinimalAllianceInformations;