var BaseMessage = require('./game-fight-fighter-light-informations.js').class,
  util = require('util');

var GameFightFighterTaxCollectorLightInformations = function() {
  this.firstNameId = 0;
  this.lastNameId = 0;
};

util.inherits(GameFightFighterTaxCollectorLightInformations, BaseMessage);

GameFightFighterTaxCollectorLightInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightFighterTaxCollectorLightInformations(output);
};

GameFightFighterTaxCollectorLightInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightFighterTaxCollectorLightInformations(input);
};

GameFightFighterTaxCollectorLightInformations.prototype.serializeAs_GameFightFighterTaxCollectorLightInformations = function(output) {
  this.serializeAs_GameFightFighterLightInformations(output);
  if (this.firstNameId < 0) {
    throw (new Error((("Forbidden value (" + this.firstNameId) + ") on element firstNameId.")));
  };
  output.writeVarShort(this.firstNameId);
  if (this.lastNameId < 0) {
    throw (new Error((("Forbidden value (" + this.lastNameId) + ") on element lastNameId.")));
  };
  output.writeVarShort(this.lastNameId);
};

GameFightFighterTaxCollectorLightInformations.prototype.deserializeAs_GameFightFighterTaxCollectorLightInformations = function(input) {
  this.deserialize(input);
  this.firstNameId = input.readVarUhShort();
  if (this.firstNameId < 0) {
    throw (new Error((("Forbidden value (" + this.firstNameId) + ") on element of GameFightFighterTaxCollectorLightInformations.firstNameId.")));
  };
  this.lastNameId = input.readVarUhShort();
  if (this.lastNameId < 0) {
    throw (new Error((("Forbidden value (" + this.lastNameId) + ") on element of GameFightFighterTaxCollectorLightInformations.lastNameId.")));
  };
};

GameFightFighterTaxCollectorLightInformations.prototype.getTypeId = function() {
  return 457;
};

GameFightFighterTaxCollectorLightInformations.prototype.getClassName = function() {
  return 'GameFightFighterTaxCollectorLightInformations';
};

module.exports.id = 457;
module.exports.class = GameFightFighterTaxCollectorLightInformations;