var FightTeamMemberTaxCollectorInformations = function() {
  this.firstNameId = 0;
  this.lastNameId = 0;
  this.level = 0;
  this.guildId = 0;
  this.uid = 0;
};



FightTeamMemberTaxCollectorInformations.prototype.serialize = function(output) {
  this.serializeAs_FightTeamMemberTaxCollectorInformations(output);
};

FightTeamMemberTaxCollectorInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightTeamMemberTaxCollectorInformations(input);
};

FightTeamMemberTaxCollectorInformations.prototype.serializeAs_FightTeamMemberTaxCollectorInformations = function(param1) {
  this.serializeAs_FightTeamMemberInformations(param1);
  if (this.firstNameId < 0) {
    throw new Error("Forbidden value (" + this.firstNameId + ") on element firstNameId.");
  } else {
    param1.writeVarShort(this.firstNameId);
    if (this.lastNameId < 0) {
      throw new Error("Forbidden value (" + this.lastNameId + ") on element lastNameId.");
    } else {
      param1.writeVarShort(this.lastNameId);
      if (this.level < 1 || this.level > 200) {
        throw new Error("Forbidden value (" + this.level + ") on element level.");
      } else {
        param1.writeByte(this.level);
        if (this.guildId < 0) {
          throw new Error("Forbidden value (" + this.guildId + ") on element guildId.");
        } else {
          param1.writeVarInt(this.guildId);
          if (this.uid < 0) {
            throw new Error("Forbidden value (" + this.uid + ") on element uid.");
          } else {
            param1.writeVarInt(this.uid);
            return;
          }
        }
      }
    }
  }
};

FightTeamMemberTaxCollectorInformations.prototype.deserializeAs_FightTeamMemberTaxCollectorInformations = function(param1) {
  this.deserialize(param1);
  this.firstNameId = param1.readVarUhShort();
  if (this.firstNameId < 0) {
    throw new Error("Forbidden value (" + this.firstNameId + ") on element of FightTeamMemberTaxCollectorInformations.firstNameId.");
  } else {
    this.lastNameId = param1.readVarUhShort();
    if (this.lastNameId < 0) {
      throw new Error("Forbidden value (" + this.lastNameId + ") on element of FightTeamMemberTaxCollectorInformations.lastNameId.");
    } else {
      this.level = param1.readUnsignedByte();
      if (this.level < 1 || this.level > 200) {
        throw new Error("Forbidden value (" + this.level + ") on element of FightTeamMemberTaxCollectorInformations.level.");
      } else {
        this.guildId = param1.readVarUhInt();
        if (this.guildId < 0) {
          throw new Error("Forbidden value (" + this.guildId + ") on element of FightTeamMemberTaxCollectorInformations.guildId.");
        } else {
          this.uid = param1.readVarUhInt();
          if (this.uid < 0) {
            throw new Error("Forbidden value (" + this.uid + ") on element of FightTeamMemberTaxCollectorInformations.uid.");
          } else {
            return;
          }
        }
      }
    }
  }
};

FightTeamMemberTaxCollectorInformations.prototype.getTypeId = function() {
  return 177;
};

FightTeamMemberTaxCollectorInformations.prototype.getClassName = function() {
  return 'FightTeamMemberTaxCollectorInformations';
};

module.exports.id = 177;
module.exports.class = FightTeamMemberTaxCollectorInformations;
module.exports.getInstance = function() {
  return new FightTeamMemberTaxCollectorInformations();
};