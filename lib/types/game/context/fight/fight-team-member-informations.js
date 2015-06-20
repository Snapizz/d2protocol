var FightTeamMemberInformations = function() {
  this.id = 0;
};



FightTeamMemberInformations.prototype.serialize = function(output) {
  this.serializeAs_FightTeamMemberInformations(output);
};

FightTeamMemberInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightTeamMemberInformations(input);
};

FightTeamMemberInformations.prototype.serializeAs_FightTeamMemberInformations = function(output) {
  param1.writeInt(this.id);
};

FightTeamMemberInformations.prototype.deserializeAs_FightTeamMemberInformations = function(input) {
  this.id = param1.readInt();
};

FightTeamMemberInformations.prototype.getTypeId = function() {
  return 44;
};

FightTeamMemberInformations.prototype.getClassName = function() {
  return 'FightTeamMemberInformations';
};

module.exports.id = 44;
module.exports.class = FightTeamMemberInformations;