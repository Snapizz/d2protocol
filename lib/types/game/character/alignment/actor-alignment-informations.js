var ActorAlignmentInformations = function() {
  this.alignmentSide = 0;
  this.alignmentValue = 0;
  this.alignmentGrade = 0;
  this.characterPower = 0;
};



ActorAlignmentInformations.prototype.serialize = function(output) {
  this.serializeAs_ActorAlignmentInformations(output);
};

ActorAlignmentInformations.prototype.deserialize = function(input) {
  this.deserializeAs_ActorAlignmentInformations(input);
};

ActorAlignmentInformations.prototype.serializeAs_ActorAlignmentInformations = function(output) {
  output.writeByte(this.alignmentSide);
  if (this.alignmentValue < 0) {
    throw (new Error((("Forbidden value (" + this.alignmentValue) + ") on element alignmentValue.")));
  };
  output.writeByte(this.alignmentValue);
  if (this.alignmentGrade < 0) {
    throw (new Error((("Forbidden value (" + this.alignmentGrade) + ") on element alignmentGrade.")));
  };
  output.writeByte(this.alignmentGrade);
  if (this.characterPower < 0) {
    throw (new Error((("Forbidden value (" + this.characterPower) + ") on element characterPower.")));
  };
  output.writeVarInt(this.characterPower);
};

ActorAlignmentInformations.prototype.deserializeAs_ActorAlignmentInformations = function(input) {
  this.alignmentSide = input.readByte();
  this.alignmentValue = input.readByte();
  if (this.alignmentValue < 0) {
    throw (new Error((("Forbidden value (" + this.alignmentValue) + ") on element of ActorAlignmentInformations.alignmentValue.")));
  };
  this.alignmentGrade = input.readByte();
  if (this.alignmentGrade < 0) {
    throw (new Error((("Forbidden value (" + this.alignmentGrade) + ") on element of ActorAlignmentInformations.alignmentGrade.")));
  };
  this.characterPower = input.readVarUhInt();
  if (this.characterPower < 0) {
    throw (new Error((("Forbidden value (" + this.characterPower) + ") on element of ActorAlignmentInformations.characterPower.")));
  };
};

ActorAlignmentInformations.prototype.getTypeId = function() {
  return 201;
};

ActorAlignmentInformations.prototype.getClassName = function() {
  return 'ActorAlignmentInformations';
};

module.exports.id = 201;
module.exports.class = ActorAlignmentInformations;