var BaseMessage = require('./fight-result-additional-data.js').class,
  util = require('util');

var FightResultExperienceData = function() {
  this.experience = 0;
  this.showExperience = false;
  this.experienceLevelFloor = 0;
  this.showExperienceLevelFloor = false;
  this.experienceNextLevelFloor = 0;
  this.showExperienceNextLevelFloor = false;
  this.experienceFightDelta = 0;
  this.showExperienceFightDelta = false;
  this.experienceForGuild = 0;
  this.showExperienceForGuild = false;
  this.experienceForMount = 0;
  this.showExperienceForMount = false;
  this.isIncarnationExperience = false;
  this.rerollExperienceMul = 0;
};

util.inherits(FightResultExperienceData, BaseMessage);

FightResultExperienceData.prototype.serialize = function(output) {
  this.serializeAs_FightResultExperienceData(output);
};

FightResultExperienceData.prototype.deserialize = function(input) {
  this.deserializeAs_FightResultExperienceData(input);
};

FightResultExperienceData.prototype.serializeAs_FightResultExperienceData = function(output) {
  this.serializeAs_FightResultAdditionalData(output);
  var _box0 = 0;
  _box0 = BooleanByteWrapper.setFlag(_box0, 0, this.showExperience);
  _box0 = BooleanByteWrapper.setFlag(_box0, 1, this.showExperienceLevelFloor);
  _box0 = BooleanByteWrapper.setFlag(_box0, 2, this.showExperienceNextLevelFloor);
  _box0 = BooleanByteWrapper.setFlag(_box0, 3, this.showExperienceFightDelta);
  _box0 = BooleanByteWrapper.setFlag(_box0, 4, this.showExperienceForGuild);
  _box0 = BooleanByteWrapper.setFlag(_box0, 5, this.showExperienceForMount);
  _box0 = BooleanByteWrapper.setFlag(_box0, 6, this.isIncarnationExperience);
  output.writeByte(_box0);
  if ((((this.experience < 0)) || ((this.experience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experience) + ") on element experience.")));
  };
  output.writeVarLong(this.experience);
  if ((((this.experienceLevelFloor < 0)) || ((this.experienceLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceLevelFloor) + ") on element experienceLevelFloor.")));
  };
  output.writeVarLong(this.experienceLevelFloor);
  if ((((this.experienceNextLevelFloor < 0)) || ((this.experienceNextLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceNextLevelFloor) + ") on element experienceNextLevelFloor.")));
  };
  output.writeDouble(this.experienceNextLevelFloor);
  output.writeVarInt(this.experienceFightDelta);
  if (this.experienceForGuild < 0) {
    throw (new Error((("Forbidden value (" + this.experienceForGuild) + ") on element experienceForGuild.")));
  };
  output.writeVarInt(this.experienceForGuild);
  if (this.experienceForMount < 0) {
    throw (new Error((("Forbidden value (" + this.experienceForMount) + ") on element experienceForMount.")));
  };
  output.writeVarInt(this.experienceForMount);
  if (this.rerollExperienceMul < 0) {
    throw (new Error((("Forbidden value (" + this.rerollExperienceMul) + ") on element rerollExperienceMul.")));
  };
  output.writeByte(this.rerollExperienceMul);
};

FightResultExperienceData.prototype.deserializeAs_FightResultExperienceData = function(input) {
  this.deserialize(input);
  var _box0 = input.readByte();
  this.showExperience = BooleanByteWrapper.getFlag(_box0, 0);
  this.showExperienceLevelFloor = BooleanByteWrapper.getFlag(_box0, 1);
  this.showExperienceNextLevelFloor = BooleanByteWrapper.getFlag(_box0, 2);
  this.showExperienceFightDelta = BooleanByteWrapper.getFlag(_box0, 3);
  this.showExperienceForGuild = BooleanByteWrapper.getFlag(_box0, 4);
  this.showExperienceForMount = BooleanByteWrapper.getFlag(_box0, 5);
  this.isIncarnationExperience = BooleanByteWrapper.getFlag(_box0, 6);
  this.experience = input.readVarUhLong();
  if ((((this.experience < 0)) || ((this.experience > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experience) + ") on element of FightResultExperienceData.experience.")));
  };
  this.experienceLevelFloor = input.readVarUhLong();
  if ((((this.experienceLevelFloor < 0)) || ((this.experienceLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceLevelFloor) + ") on element of FightResultExperienceData.experienceLevelFloor.")));
  };
  this.experienceNextLevelFloor = input.readDouble();
  if ((((this.experienceNextLevelFloor < 0)) || ((this.experienceNextLevelFloor > 9007199254740992)))) {
    throw (new Error((("Forbidden value (" + this.experienceNextLevelFloor) + ") on element of FightResultExperienceData.experienceNextLevelFloor.")));
  };
  this.experienceFightDelta = input.readVarInt();
  this.experienceForGuild = input.readVarUhInt();
  if (this.experienceForGuild < 0) {
    throw (new Error((("Forbidden value (" + this.experienceForGuild) + ") on element of FightResultExperienceData.experienceForGuild.")));
  };
  this.experienceForMount = input.readVarUhInt();
  if (this.experienceForMount < 0) {
    throw (new Error((("Forbidden value (" + this.experienceForMount) + ") on element of FightResultExperienceData.experienceForMount.")));
  };
  this.rerollExperienceMul = input.readByte();
  if (this.rerollExperienceMul < 0) {
    throw (new Error((("Forbidden value (" + this.rerollExperienceMul) + ") on element of FightResultExperienceData.rerollExperienceMul.")));
  };
};

FightResultExperienceData.prototype.getTypeId = function() {
  return 192;
};

FightResultExperienceData.prototype.getClassName = function() {
  return 'FightResultExperienceData';
};

module.exports.id = 192;
module.exports.class = FightResultExperienceData;