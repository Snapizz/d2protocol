var ActorExtendedAlignmentInformations = function() {
  this.honor = 0;
  this.honorGradeFloor = 0;
  this.honorNextGradeFloor = 0;
  this.aggressable = 0;
};



ActorExtendedAlignmentInformations.prototype.serialize = function(output) {
  this.serializeAs_ActorExtendedAlignmentInformations(output);
};

ActorExtendedAlignmentInformations.prototype.deserialize = function(input) {
  this.deserializeAs_ActorExtendedAlignmentInformations(input);
};

ActorExtendedAlignmentInformations.prototype.serializeAs_ActorExtendedAlignmentInformations = function(param1) {
  this.serializeAs_ActorAlignmentInformations(param1);
  if (this.honor < 0 || this.honor > 20000) {
    throw new Error("Forbidden value (" + this.honor + ") on element honor.");
  } else {
    param1.writeVarShort(this.honor);
    if (this.honorGradeFloor < 0 || this.honorGradeFloor > 20000) {
      throw new Error("Forbidden value (" + this.honorGradeFloor + ") on element honorGradeFloor.");
    } else {
      param1.writeVarShort(this.honorGradeFloor);
      if (this.honorNextGradeFloor < 0 || this.honorNextGradeFloor > 20000) {
        throw new Error("Forbidden value (" + this.honorNextGradeFloor + ") on element honorNextGradeFloor.");
      } else {
        param1.writeVarShort(this.honorNextGradeFloor);
        param1.writeByte(this.aggressable);
        return;
      }
    }
  }
};

ActorExtendedAlignmentInformations.prototype.deserializeAs_ActorExtendedAlignmentInformations = function(param1) {
  this.deserialize(param1);
  this.honor = param1.readVarUhShort();
  if (this.honor < 0 || this.honor > 20000) {
    throw new Error("Forbidden value (" + this.honor + ") on element of ActorExtendedAlignmentInformations.honor.");
  } else {
    this.honorGradeFloor = param1.readVarUhShort();
    if (this.honorGradeFloor < 0 || this.honorGradeFloor > 20000) {
      throw new Error("Forbidden value (" + this.honorGradeFloor + ") on element of ActorExtendedAlignmentInformations.honorGradeFloor.");
    } else {
      this.honorNextGradeFloor = param1.readVarUhShort();
      if (this.honorNextGradeFloor < 0 || this.honorNextGradeFloor > 20000) {
        throw new Error("Forbidden value (" + this.honorNextGradeFloor + ") on element of ActorExtendedAlignmentInformations.honorNextGradeFloor.");
      } else {
        this.aggressable = param1.readByte();
        if (this.aggressable < 0) {
          throw new Error("Forbidden value (" + this.aggressable + ") on element of ActorExtendedAlignmentInformations.aggressable.");
        } else {
          return;
        }
      }
    }
  }
};

ActorExtendedAlignmentInformations.prototype.getTypeId = function() {
  return 202;
};

ActorExtendedAlignmentInformations.prototype.getClassName = function() {
  return 'ActorExtendedAlignmentInformations';
};

module.exports.id = 202;
module.exports.class = ActorExtendedAlignmentInformations;
module.exports.getInstance = function() {
  return new ActorExtendedAlignmentInformations();
};