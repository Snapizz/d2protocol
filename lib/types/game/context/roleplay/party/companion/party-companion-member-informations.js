var PartyCompanionMemberInformations = function() {
  this.initiative = 0;
  this.lifePoints = 0;
  this.maxLifePoints = 0;
  this.prospecting = 0;
  this.regenRate = 0;
};



PartyCompanionMemberInformations.prototype.serialize = function(output) {
  this.serializeAs_PartyCompanionMemberInformations(output);
};

PartyCompanionMemberInformations.prototype.deserialize = function(input) {
  this.deserializeAs_PartyCompanionMemberInformations(input);
};

PartyCompanionMemberInformations.prototype.serializeAs_PartyCompanionMemberInformations = function(output) {
  this.serializeAs_PartyCompanionBaseInformations(param1);
  if (this.initiative < 0) {
    throw new Error("Forbidden value (" + this.initiative + ") on element initiative.");
  } else {
    param1.writeVarShort(this.initiative);
    if (this.lifePoints < 0) {
      throw new Error("Forbidden value (" + this.lifePoints + ") on element lifePoints.");
    } else {
      param1.writeVarInt(this.lifePoints);
      if (this.maxLifePoints < 0) {
        throw new Error("Forbidden value (" + this.maxLifePoints + ") on element maxLifePoints.");
      } else {
        param1.writeVarInt(this.maxLifePoints);
        if (this.prospecting < 0) {
          throw new Error("Forbidden value (" + this.prospecting + ") on element prospecting.");
        } else {
          param1.writeVarShort(this.prospecting);
          if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error("Forbidden value (" + this.regenRate + ") on element regenRate.");
          } else {
            param1.writeByte(this.regenRate);
            return;
          }
        }
      }
    }
  }
};

PartyCompanionMemberInformations.prototype.deserializeAs_PartyCompanionMemberInformations = function(input) {
  this.deserialize(param1);
  this.initiative = param1.readVarUhShort();
  if (this.initiative < 0) {
    throw new Error("Forbidden value (" + this.initiative + ") on element of PartyCompanionMemberInformations.initiative.");
  } else {
    this.lifePoints = param1.readVarUhInt();
    if (this.lifePoints < 0) {
      throw new Error("Forbidden value (" + this.lifePoints + ") on element of PartyCompanionMemberInformations.lifePoints.");
    } else {
      this.maxLifePoints = param1.readVarUhInt();
      if (this.maxLifePoints < 0) {
        throw new Error("Forbidden value (" + this.maxLifePoints + ") on element of PartyCompanionMemberInformations.maxLifePoints.");
      } else {
        this.prospecting = param1.readVarUhShort();
        if (this.prospecting < 0) {
          throw new Error("Forbidden value (" + this.prospecting + ") on element of PartyCompanionMemberInformations.prospecting.");
        } else {
          this.regenRate = param1.readUnsignedByte();
          if (this.regenRate < 0 || this.regenRate > 255) {
            throw new Error("Forbidden value (" + this.regenRate + ") on element of PartyCompanionMemberInformations.regenRate.");
          } else {
            return;
          }
        }
      }
    }
  }
};

PartyCompanionMemberInformations.prototype.getTypeId = function() {
  return 452;
};

PartyCompanionMemberInformations.prototype.getClassName = function() {
  return 'PartyCompanionMemberInformations';
};

module.exports.id = 452;
module.exports.class = PartyCompanionMemberInformations;