var FightTeamMemberCompanionInformations = function() {
  this.companionId = 0;
  this.level = 0;
  this.masterId = 0;
};



FightTeamMemberCompanionInformations.prototype.serialize = function(output) {
  this.serializeAs_FightTeamMemberCompanionInformations(output);
};

FightTeamMemberCompanionInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightTeamMemberCompanionInformations(input);
};

FightTeamMemberCompanionInformations.prototype.serializeAs_FightTeamMemberCompanionInformations = function(output) {
  super.serializeAs_FightTeamMemberInformations(param1);
  if (this.companionId < 0) {
    throw new Error("Forbidden value (" + this.companionId + ") on element companionId.");
  } else {
    param1.writeByte(this.companionId);
    if (this.level < 1 || this.level > 200) {
      throw new Error("Forbidden value (" + this.level + ") on element level.");
    } else {
      param1.writeByte(this.level);
      param1.writeInt(this.masterId);
      return;
    }
  }
};

FightTeamMemberCompanionInformations.prototype.deserializeAs_FightTeamMemberCompanionInformations = function(input) {
  super.deserialize(param1);
  this.companionId = param1.readByte();
  if (this.companionId < 0) {
    throw new Error("Forbidden value (" + this.companionId + ") on element of FightTeamMemberCompanionInformations.companionId.");
  } else {
    this.level = param1.readUnsignedByte();
    if (this.level < 1 || this.level > 200) {
      throw new Error("Forbidden value (" + this.level + ") on element of FightTeamMemberCompanionInformations.level.");
    } else {
      this.masterId = param1.readInt();
      return;
    }
  }
};

FightTeamMemberCompanionInformations.prototype.getTypeId = function() {
  return 451;
};

FightTeamMemberCompanionInformations.prototype.getClassName = function() {
  return 'FightTeamMemberCompanionInformations';
};

module.exports.id = 451;
module.exports.class = FightTeamMemberCompanionInformations;