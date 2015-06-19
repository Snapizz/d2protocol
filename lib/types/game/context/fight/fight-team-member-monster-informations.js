var BaseMessage = require('./fight-team-member-informations.js').class,
  util = require('util');

var FightTeamMemberMonsterInformations = function() {
  this.monsterId = 0;
  this.grade = 0;
};

util.inherits(FightTeamMemberMonsterInformations, BaseMessage);

FightTeamMemberMonsterInformations.prototype.serialize = function(output) {
  this.serializeAs_FightTeamMemberMonsterInformations(output);
};

FightTeamMemberMonsterInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightTeamMemberMonsterInformations(input);
};

FightTeamMemberMonsterInformations.prototype.serializeAs_FightTeamMemberMonsterInformations = function(output) {
  this.serializeAs_FightTeamMemberInformations(output);
  output.writeInt(this.monsterId);
  if (this.grade < 0) {
    throw (new Error((("Forbidden value (" + this.grade) + ") on element grade.")));
  };
  output.writeByte(this.grade);
};

FightTeamMemberMonsterInformations.prototype.deserializeAs_FightTeamMemberMonsterInformations = function(input) {
  this.deserialize(input);
  this.monsterId = input.readInt();
  this.grade = input.readByte();
  if (this.grade < 0) {
    throw (new Error((("Forbidden value (" + this.grade) + ") on element of FightTeamMemberMonsterInformations.grade.")));
  };
};

FightTeamMemberMonsterInformations.prototype.getTypeId = function() {
  return 6;
};

FightTeamMemberMonsterInformations.prototype.getClassName = function() {
  return 'FightTeamMemberMonsterInformations';
};

module.exports.id = 6;
module.exports.class = FightTeamMemberMonsterInformations;