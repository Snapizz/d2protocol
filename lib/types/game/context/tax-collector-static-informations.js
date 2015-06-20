var TaxCollectorStaticInformations = function() {
  this.firstNameId = 0;
  this.lastNameId = 0;
  this.guildIdentity;
};



TaxCollectorStaticInformations.prototype.serialize = function(output) {
  this.serializeAs_TaxCollectorStaticInformations(output);
};

TaxCollectorStaticInformations.prototype.deserialize = function(input) {
  this.deserializeAs_TaxCollectorStaticInformations(input);
};

TaxCollectorStaticInformations.prototype.serializeAs_TaxCollectorStaticInformations = function(output) {
  if (this.firstNameId < 0) {
    throw new Error("Forbidden value (" + this.firstNameId + ") on element firstNameId.");
  } else {
    param1.writeVarShort(this.firstNameId);
    if (this.lastNameId < 0) {
      throw new Error("Forbidden value (" + this.lastNameId + ") on element lastNameId.");
    } else {
      param1.writeVarShort(this.lastNameId);
      this.guildIdentity.serializeAs_GuildInformations(param1);
      return;
    }
  }
};

TaxCollectorStaticInformations.prototype.deserializeAs_TaxCollectorStaticInformations = function(input) {
  this.firstNameId = param1.readVarUhShort();
  if (this.firstNameId < 0) {
    throw new Error("Forbidden value (" + this.firstNameId + ") on element of TaxCollectorStaticInformations.firstNameId.");
  } else {
    this.lastNameId = param1.readVarUhShort();
    if (this.lastNameId < 0) {
      throw new Error("Forbidden value (" + this.lastNameId + ") on element of TaxCollectorStaticInformations.lastNameId.");
    } else {
      this.guildIdentity = new GuildInformations();
      this.guildIdentity.deserialize(param1);
      return;
    }
  }
};

TaxCollectorStaticInformations.prototype.getTypeId = function() {
  return 147;
};

TaxCollectorStaticInformations.prototype.getClassName = function() {
  return 'TaxCollectorStaticInformations';
};

module.exports.id = 147;
module.exports.class = TaxCollectorStaticInformations;