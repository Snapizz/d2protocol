var BaseMessage = require('./fight-team-member-character-informations.js').class,
  util = require('util');

var FightTeamMemberWithAllianceCharacterInformations = function() {
  this.allianceInfos;
};

util.inherits(FightTeamMemberWithAllianceCharacterInformations, BaseMessage);

FightTeamMemberWithAllianceCharacterInformations.prototype.serialize = function(output) {
  this.serializeAs_FightTeamMemberWithAllianceCharacterInformations(output);
};

FightTeamMemberWithAllianceCharacterInformations.prototype.deserialize = function(input) {
  this.deserializeAs_FightTeamMemberWithAllianceCharacterInformations(input);
};

FightTeamMemberWithAllianceCharacterInformations.prototype.serializeAs_FightTeamMemberWithAllianceCharacterInformations = function(output) {
  this.serializeAs_FightTeamMemberCharacterInformations(output);
  this.allianceInfos.serializeAs_BasicAllianceInformations(output);
};

FightTeamMemberWithAllianceCharacterInformations.prototype.deserializeAs_FightTeamMemberWithAllianceCharacterInformations = function(input) {
  this.deserialize(input);
  this.allianceInfos = new BasicAllianceInformations();
  this.allianceInfos.deserialize(input);
};

FightTeamMemberWithAllianceCharacterInformations.prototype.getTypeId = function() {
  return 426;
};

FightTeamMemberWithAllianceCharacterInformations.prototype.getClassName = function() {
  return 'FightTeamMemberWithAllianceCharacterInformations';
};

module.exports.id = 426;
module.exports.class = FightTeamMemberWithAllianceCharacterInformations;