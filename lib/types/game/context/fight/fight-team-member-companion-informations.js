var BaseMessage = require('./fight-team-member-informations.js').class,
  util = require('util');

var FightTeamMemberCompanionInformations = function() {
  this.companionId = 0;
  this.level = 0;
  this.masterId = 0;
};

util.inherits(FightTeamMemberCompanionInformations, BaseMessage);

FightTeamMemberCompanionInformations.prototype.serialize = function(output) {
  this.serializeAs_FightTeamMemberCompanionInformations(output);
};

FightTeamMemberCompanionInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightTeamMemberCompanionInformations(input);
};

FightTeamMemberCompanionInformations.prototype.serializeAs_FightTeamMemberCompanionInformations = function(output) {
  this.serializeAs_FightTeamMemberInformations(output);
  if (this.companionId < 0) {
    throw (new Error((("Forbidden value (" + this.companionId) + ") on element companionId.")));
  };
  output.writeByte(this.companionId);
  if ((((this.level < 1)) || ((this.level > 200)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element level.")));
  };
  output.writeByte(this.level);
  output.writeInt(this.masterId);
};

FightTeamMemberCompanionInformations.prototype.deserializeAs_FightTeamMemberCompanionInformations = function(input) {
  this.deserialize(input);
  this.companionId = input.readByte();
  if (this.companionId < 0) {
    throw (new Error((("Forbidden value (" + this.companionId) + ") on element of FightTeamMemberCompanionInformations.companionId.")));
  };
  this.level = input.readUnsignedByte();
  if ((((this.level < 1)) || ((this.level > 200)))) {
    throw (new Error((("Forbidden value (" + this.level) + ") on element of FightTeamMemberCompanionInformations.level.")));
  };
  this.masterId = input.readInt();
};

FightTeamMemberCompanionInformations.prototype.getTypeId = function() {
  return 451;
};

FightTeamMemberCompanionInformations.prototype.getClassName = function() {
  return 'FightTeamMemberCompanionInformations';
};

module.exports.id = 451;
module.exports.class = FightTeamMemberCompanionInformations;