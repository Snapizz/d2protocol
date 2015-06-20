var FightResultPvpData = function() {
  this.grade = 0;
  this.minHonorForGrade = 0;
  this.maxHonorForGrade = 0;
  this.honor = 0;
  this.honorDelta = 0;
};



FightResultPvpData.prototype.serialize = function(output) {
  this.serializeAs_FightResultPvpData(output);
};

FightResultPvpData.prototype.deserialize = function(input) {
  this.deserializeAs_FightResultPvpData(input);
};

FightResultPvpData.prototype.serializeAs_FightResultPvpData = function(param1) {
  this.serializeAs_FightResultAdditionalData(param1);
  if (this.grade < 0 || this.grade > 255) {
    throw new Error("Forbidden value (" + this.grade + ") on element grade.");
  } else {
    param1.writeByte(this.grade);
    if (this.minHonorForGrade < 0 || this.minHonorForGrade > 20000) {
      throw new Error("Forbidden value (" + this.minHonorForGrade + ") on element minHonorForGrade.");
    } else {
      param1.writeVarShort(this.minHonorForGrade);
      if (this.maxHonorForGrade < 0 || this.maxHonorForGrade > 20000) {
        throw new Error("Forbidden value (" + this.maxHonorForGrade + ") on element maxHonorForGrade.");
      } else {
        param1.writeVarShort(this.maxHonorForGrade);
        if (this.honor < 0 || this.honor > 20000) {
          throw new Error("Forbidden value (" + this.honor + ") on element honor.");
        } else {
          param1.writeVarShort(this.honor);
          param1.writeVarShort(this.honorDelta);
          return;
        }
      }
    }
  }
};

FightResultPvpData.prototype.deserializeAs_FightResultPvpData = function(param1) {
  this.deserialize(param1);
  this.grade = param1.readUnsignedByte();
  if (this.grade < 0 || this.grade > 255) {
    throw new Error("Forbidden value (" + this.grade + ") on element of FightResultPvpData.grade.");
  } else {
    this.minHonorForGrade = param1.readVarUhShort();
    if (this.minHonorForGrade < 0 || this.minHonorForGrade > 20000) {
      throw new Error("Forbidden value (" + this.minHonorForGrade + ") on element of FightResultPvpData.minHonorForGrade.");
    } else {
      this.maxHonorForGrade = param1.readVarUhShort();
      if (this.maxHonorForGrade < 0 || this.maxHonorForGrade > 20000) {
        throw new Error("Forbidden value (" + this.maxHonorForGrade + ") on element of FightResultPvpData.maxHonorForGrade.");
      } else {
        this.honor = param1.readVarUhShort();
        if (this.honor < 0 || this.honor > 20000) {
          throw new Error("Forbidden value (" + this.honor + ") on element of FightResultPvpData.honor.");
        } else {
          this.honorDelta = param1.readVarShort();
          return;
        }
      }
    }
  }
};

FightResultPvpData.prototype.getTypeId = function() {
  return 190;
};

FightResultPvpData.prototype.getClassName = function() {
  return 'FightResultPvpData';
};

module.exports.id = 190;
module.exports.class = FightResultPvpData;
module.exports.getInstance = function() {
  return new FightResultPvpData();
};