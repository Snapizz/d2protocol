var BaseMessage = require('./game-fight-a-i-informations.js').class,
  util = require('util');

var GameFightTaxCollectorInformations = function() {
  this.firstNameId = 0;
  this.lastNameId = 0;
  this.level = 0;
};

util.inherits(GameFightTaxCollectorInformations, BaseMessage);

GameFightTaxCollectorInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightTaxCollectorInformations(output);
};

GameFightTaxCollectorInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightTaxCollectorInformations(input);
};

GameFightTaxCollectorInformations.prototype.serializeAs_GameFightTaxCollectorInformations = function(output) {
  this.serializeAs_GameFightAIInformations(output);
  if (this.firstNameId < 0) {
    throw (new Error((("Forbidden value (" + this.firstNameId) + ") on element firstNameId.")));
  };
  output.writeVarShort(this.firstNameId);
  if (this.lastNameId < 0) {
    throw (new Error((("Forbidden value (" + this.lastNameId) + ") on element lastNameId.")));
  };
  output.writeVarShort(this.lastNameId);
  if ((((this.level < 0)) || ((this.level > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeByte(this.level);
};

GameFightTaxCollectorInformations.prototype.deserializeAs_GameFightTaxCollectorInformations = function(input) {
  this.deserialize(input);
  this.firstNameId = input.readVarUhShort();
  if (this.firstNameId < 0) {
    throw (new Error((("Forbidden value (" + this.firstNameId) + ") on element of GameFightTaxCollectorInformations.firstNameId.")));
  };
  this.lastNameId = input.readVarUhShort();
  if (this.lastNameId < 0) {
    throw (new Error((("Forbidden value (" + this.lastNameId) + ") on element of GameFightTaxCollectorInformations.lastNameId.")));
  };
  this.level = input.readUnsignedByte();
  if ((((this.level < 0)) || ((this.level > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of GameFightTaxCollectorInformations.level.")));
  };
};

GameFightTaxCollectorInformations.prototype.getTypeId = function() {
  return 48;
};

GameFightTaxCollectorInformations.prototype.getClassName = function() {
  return 'GameFightTaxCollectorInformations';
};

module.exports.id = 48;
module.exports.class = GameFightTaxCollectorInformations;