var BaseMessage = require('./actor-alignment-informations.js').class,
  util = require('util');

var ActorExtendedAlignmentInformations = function() {
  this.honor = 0;
  this.honorGradeFloor = 0;
  this.honorNextGradeFloor = 0;
  this.aggressable = 0;
};

util.inherits(ActorExtendedAlignmentInformations, BaseMessage);

ActorExtendedAlignmentInformations.prototype.serialize = function(output) {
  this.serializeAs_ActorExtendedAlignmentInformations(output);
};

ActorExtendedAlignmentInformations.prototype.deserialize = function(input) {
  this.deserializeAs_ActorExtendedAlignmentInformations(input);
};

ActorExtendedAlignmentInformations.prototype.serializeAs_ActorExtendedAlignmentInformations = function(output) {
  this.serializeAs_ActorAlignmentInformations(output);
  if ((((this.honor < 0)) || ((this.honor > 20000)))) {
    throw (new Error((("Forbidden value (" + this.honor) + ") on element honor.")));
  };
  output.writeVarShort(this.honor);
  if ((((this.honorGradeFloor < 0)) || ((this.honorGradeFloor > 20000)))) {
    throw (new Error((("Forbidden value (" + this.honorGradeFloor) + ") on element honorGradeFloor.")));
  };
  output.writeVarShort(this.honorGradeFloor);
  if ((((this.honorNextGradeFloor < 0)) || ((this.honorNextGradeFloor > 20000)))) {
    throw (new Error((("Forbidden value (" + this.honorNextGradeFloor) + ") on element honorNextGradeFloor.")));
  };
  output.writeVarShort(this.honorNextGradeFloor);
  output.writeByte(this.aggressable);
};

ActorExtendedAlignmentInformations.prototype.deserializeAs_ActorExtendedAlignmentInformations = function(input) {
  this.deserialize(input);
  this.honor = input.readVarUhShort();
  if ((((this.honor < 0)) || ((this.honor > 20000)))) {
    throw (new Error((("Forbidden value (" + this.honor) + ") on element of ActorExtendedAlignmentInformations.honor.")));
  };
  this.honorGradeFloor = input.readVarUhShort();
  if ((((this.honorGradeFloor < 0)) || ((this.honorGradeFloor > 20000)))) {
    throw (new Error((("Forbidden value (" + this.honorGradeFloor) + ") on element of ActorExtendedAlignmentInformations.honorGradeFloor.")));
  };
  this.honorNextGradeFloor = input.readVarUhShort();
  if ((((this.honorNextGradeFloor < 0)) || ((this.honorNextGradeFloor > 20000)))) {
    throw (new Error((("Forbidden value (" + this.honorNextGradeFloor) + ") on element of ActorExtendedAlignmentInformations.honorNextGradeFloor.")));
  };
  this.aggressable = input.readByte();
  if (this.aggressable < 0) {
    throw (new Error((("Forbidden value (" + this.aggressable) + ") on element of ActorExtendedAlignmentInformations.aggressable.")));
  };
};

ActorExtendedAlignmentInformations.prototype.getTypeId = function() {
  return 202;
};

ActorExtendedAlignmentInformations.prototype.getClassName = function() {
  return 'ActorExtendedAlignmentInformations';
};

module.exports.id = 202;
module.exports.class = ActorExtendedAlignmentInformations;