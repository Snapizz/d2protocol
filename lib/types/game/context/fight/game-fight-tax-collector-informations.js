var BaseMessage = require('./game-fight-tax-collector-informations.js').class,
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

GameFightTaxCollectorInformations.prototype.serializeAs_GameFightTaxCollectorInformations = function(param1) {
  this.serializeAs_GameFightAIInformations(param1);
  if (this.firstNameId < 0) {
    throw new Error("Forbidden value (" + this.firstNameId + ") on element firstNameId.");
  } else {
    param1.writeVarShort(this.firstNameId);
    if (this.lastNameId < 0) {
      throw new Error("Forbidden value (" + this.lastNameId + ") on element lastNameId.");
    } else {
      param1.writeVarShort(this.lastNameId);
      if (this.level < 0 || this.level > 255) {
        throw new Error("Forbidden value (" + this.level + ") on element level.");
      } else {
        param1.writeByte(this.level);
        return;
      }
    }
  }
};

GameFightTaxCollectorInformations.prototype.deserializeAs_GameFightTaxCollectorInformations = function(param1) {
  this.deserialize(param1);
  this.firstNameId = param1.readVarUhShort();
  if (this.firstNameId < 0) {
    throw new Error("Forbidden value (" + this.firstNameId + ") on element of GameFightTaxCollectorInformations.firstNameId.");
  } else {
    this.lastNameId = param1.readVarUhShort();
    if (this.lastNameId < 0) {
      throw new Error("Forbidden value (" + this.lastNameId + ") on element of GameFightTaxCollectorInformations.lastNameId.");
    } else {
      this.level = param1.readUnsignedByte();
      if (this.level < 0 || this.level > 255) {
        throw new Error("Forbidden value (" + this.level + ") on element of GameFightTaxCollectorInformations.level.");
      } else {
        return;
      }
    }
  }
};

GameFightTaxCollectorInformations.prototype.getTypeId = function() {
  return 48;
};

GameFightTaxCollectorInformations.prototype.getClassName = function() {
  return 'GameFightTaxCollectorInformations';
};

module.exports.id = 48;
module.exports.class = GameFightTaxCollectorInformations;
module.exports.getInstance = function() {
  return new GameFightTaxCollectorInformations();
};