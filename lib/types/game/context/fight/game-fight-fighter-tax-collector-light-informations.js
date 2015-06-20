var GameFightFighterTaxCollectorLightInformations = function() {
  this.firstNameId = 0;
  this.lastNameId = 0;
};



GameFightFighterTaxCollectorLightInformations.prototype.serialize = function(output) {
  this.serializeAs_GameFightFighterTaxCollectorLightInformations(output);
};

GameFightFighterTaxCollectorLightInformations.prototype.deserialize = function(input) {
  this.deserializeAs_GameFightFighterTaxCollectorLightInformations(input);
};

GameFightFighterTaxCollectorLightInformations.prototype.serializeAs_GameFightFighterTaxCollectorLightInformations = function(output) {
  super.serializeAs_GameFightFighterLightInformations(param1);
  if (this.firstNameId < 0) {
    throw new Error("Forbidden value (" + this.firstNameId + ") on element firstNameId.");
  } else {
    param1.writeVarShort(this.firstNameId);
    if (this.lastNameId < 0) {
      throw new Error("Forbidden value (" + this.lastNameId + ") on element lastNameId.");
    } else {
      param1.writeVarShort(this.lastNameId);
      return;
    }
  }
};

GameFightFighterTaxCollectorLightInformations.prototype.deserializeAs_GameFightFighterTaxCollectorLightInformations = function(input) {
  super.deserialize(param1);
  this.firstNameId = param1.readVarUhShort();
  if (this.firstNameId < 0) {
    throw new Error("Forbidden value (" + this.firstNameId + ") on element of GameFightFighterTaxCollectorLightInformations.firstNameId.");
  } else {
    this.lastNameId = param1.readVarUhShort();
    if (this.lastNameId < 0) {
      throw new Error("Forbidden value (" + this.lastNameId + ") on element of GameFightFighterTaxCollectorLightInformations.lastNameId.");
    } else {
      return;
    }
  }
};

GameFightFighterTaxCollectorLightInformations.prototype.getTypeId = function() {
  return 457;
};

GameFightFighterTaxCollectorLightInformations.prototype.getClassName = function() {
  return 'GameFightFighterTaxCollectorLightInformations';
};

module.exports.id = 457;
module.exports.class = GameFightFighterTaxCollectorLightInformations;