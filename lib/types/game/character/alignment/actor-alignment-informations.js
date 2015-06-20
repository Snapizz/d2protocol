var BaseMessage = require('./actor-alignment-informations.js').class,
  util = require('util');

var ActorAlignmentInformations = function() {
  this.alignmentSide = 0;
  this.alignmentValue = 0;
  this.alignmentGrade = 0;
  this.characterPower = 0;
};

util.inherits(ActorAlignmentInformations, BaseMessage);

ActorAlignmentInformations.prototype.serialize = function(output) {
  this.serializeAs_ActorAlignmentInformations(output);
};

ActorAlignmentInformations.prototype.deserialize = function(input) {
  this.deserializeAs_ActorAlignmentInformations(input);
};

ActorAlignmentInformations.prototype.serializeAs_ActorAlignmentInformations = function(param1) {
  param1.writeByte(this.alignmentSide);
  if (this.alignmentValue < 0) {
    throw new Error("Forbidden value (" + this.alignmentValue + ") on element alignmentValue.");
  } else {
    param1.writeByte(this.alignmentValue);
    if (this.alignmentGrade < 0) {
      throw new Error("Forbidden value (" + this.alignmentGrade + ") on element alignmentGrade.");
    } else {
      param1.writeByte(this.alignmentGrade);
      if (this.characterPower < 0) {
        throw new Error("Forbidden value (" + this.characterPower + ") on element characterPower.");
      } else {
        param1.writeVarInt(this.characterPower);
        return;
      }
    }
  }
};

ActorAlignmentInformations.prototype.deserializeAs_ActorAlignmentInformations = function(param1) {
  this.alignmentSide = param1.readByte();
  this.alignmentValue = param1.readByte();
  if (this.alignmentValue < 0) {
    throw new Error("Forbidden value (" + this.alignmentValue + ") on element of ActorAlignmentInformations.alignmentValue.");
  } else {
    this.alignmentGrade = param1.readByte();
    if (this.alignmentGrade < 0) {
      throw new Error("Forbidden value (" + this.alignmentGrade + ") on element of ActorAlignmentInformations.alignmentGrade.");
    } else {
      this.characterPower = param1.readVarUhInt();
      if (this.characterPower < 0) {
        throw new Error("Forbidden value (" + this.characterPower + ") on element of ActorAlignmentInformations.characterPower.");
      } else {
        return;
      }
    }
  }
};

ActorAlignmentInformations.prototype.getTypeId = function() {
  return 201;
};

ActorAlignmentInformations.prototype.getClassName = function() {
  return 'ActorAlignmentInformations';
};

module.exports.id = 201;
module.exports.class = ActorAlignmentInformations;
module.exports.getInstance = function() {
  return new ActorAlignmentInformations();
};