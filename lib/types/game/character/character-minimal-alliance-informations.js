var BaseMessage = require('./character-minimal-guild-informations.js').class,
  util = require('util');

var CharacterMinimalAllianceInformations = function() {
  this.alliance;
};

util.inherits(CharacterMinimalAllianceInformations, BaseMessage);

CharacterMinimalAllianceInformations.prototype.serialize = function(output) {
  this.serializeAs_CharacterMinimalAllianceInformations(output);
};

CharacterMinimalAllianceInformations.prototype.deserialize = function(input) {
  this.deserializeAs_CharacterMinimalAllianceInformations(input);
};

CharacterMinimalAllianceInformations.prototype.serializeAs_CharacterMinimalAllianceInformations = function(output) {
  this.serializeAs_CharacterMinimalGuildInformations(output);
  this.alliance.serializeAs_BasicAllianceInformations(output);
};

CharacterMinimalAllianceInformations.prototype.deserializeAs_CharacterMinimalAllianceInformations = function(input) {
  this.deserialize(input);
  this.alliance = new BasicAllianceInformations();
  this.alliance.deserialize(input);
};

CharacterMinimalAllianceInformations.prototype.getTypeId = function() {
  return 444;
};

CharacterMinimalAllianceInformations.prototype.getClassName = function() {
  return 'CharacterMinimalAllianceInformations';
};

module.exports.id = 444;
module.exports.class = CharacterMinimalAllianceInformations;