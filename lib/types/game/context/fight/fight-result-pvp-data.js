var BaseMessage = require('./fight-result-additional-data.js').class,
  util = require('util');

var FightResultPvpData = function() {
  this.grade = 0;
  this.minHonorForGrade = 0;
  this.maxHonorForGrade = 0;
  this.honor = 0;
  this.honorDelta = 0;
};

util.inherits(FightResultPvpData, BaseMessage);

FightResultPvpData.prototype.serialize = function(output) {
  this.serializeAs_FightResultPvpData(output);
};

FightResultPvpData.prototype.deserialize = function(input) {
  this.deserializeAs_FightResultPvpData(input);
};

FightResultPvpData.prototype.serializeAs_FightResultPvpData = function(output) {
  this.serializeAs_FightResultAdditionalData(output);
  if ((((this.grade < 0)) || ((this.grade > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.grade) + ") on element grade.")));
  };
  output.writeByte(this.grade);
  if ((((this.minHonorForGrade < 0)) || ((this.minHonorForGrade > 20000)))) {
    throw (new Error((("Forbidden value (" + this.minHonorForGrade) + ") on element minHonorForGrade.")));
  };
  output.writeVarShort(this.minHonorForGrade);
  if ((((this.maxHonorForGrade < 0)) || ((this.maxHonorForGrade > 20000)))) {
    throw (new Error((("Forbidden value (" + this.maxHonorForGrade) + ") on element maxHonorForGrade.")));
  };
  output.writeVarShort(this.maxHonorForGrade);
  if ((((this.honor < 0)) || ((this.honor > 20000)))) {
    throw (new Error((("Forbidden value (" + this.honor) + ") on element honor.")));
  };
  output.writeVarShort(this.honor);
  output.writeVarShort(this.honorDelta);
};

FightResultPvpData.prototype.deserializeAs_FightResultPvpData = function(input) {
  this.deserialize(input);
  this.grade = input.readUnsignedByte();
  if ((((this.grade < 0)) || ((this.grade > 0xFF)))) {
    throw (new Error((("Forbidden value (" + this.grade) + ") on element of FightResultPvpData.grade.")));
  };
  this.minHonorForGrade = input.readVarUhShort();
  if ((((this.minHonorForGrade < 0)) || ((this.minHonorForGrade > 20000)))) {
    throw (new Error((("Forbidden value (" + this.minHonorForGrade) + ") on element of FightResultPvpData.minHonorForGrade.")));
  };
  this.maxHonorForGrade = input.readVarUhShort();
  if ((((this.maxHonorForGrade < 0)) || ((this.maxHonorForGrade > 20000)))) {
    throw (new Error((("Forbidden value (" + this.maxHonorForGrade) + ") on element of FightResultPvpData.maxHonorForGrade.")));
  };
  this.honor = input.readVarUhShort();
  if ((((this.honor < 0)) || ((this.honor > 20000)))) {
    throw (new Error((("Forbidden value (" + this.honor) + ") on element of FightResultPvpData.honor.")));
  };
  this.honorDelta = input.readVarShort();
};

FightResultPvpData.prototype.getTypeId = function() {
  return 190;
};

FightResultPvpData.prototype.getClassName = function() {
  return 'FightResultPvpData';
};

module.exports.id = 190;
module.exports.class = FightResultPvpData;