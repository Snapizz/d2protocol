var BaseMessage = require('./fight-team-member-with-alliance-character-informations.js').class,
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

FightTeamMemberWithAllianceCharacterInformations.prototype.serializeAs_FightTeamMemberWithAllianceCharacterInformations = function(param1) {
  this.serializeAs_FightTeamMemberCharacterInformations(param1);
  this.allianceInfos.serializeAs_BasicAllianceInformations(param1);
};

FightTeamMemberWithAllianceCharacterInformations.prototype.deserializeAs_FightTeamMemberWithAllianceCharacterInformations = function(param1) {
  this.deserialize(param1);
  this.allianceInfos = new BasicAllianceInformations();
  this.allianceInfos.deserialize(param1);
};

FightTeamMemberWithAllianceCharacterInformations.prototype.getTypeId = function() {
  return 426;
};

FightTeamMemberWithAllianceCharacterInformations.prototype.getClassName = function() {
  return 'FightTeamMemberWithAllianceCharacterInformations';
};

module.exports.id = 426;
module.exports.class = FightTeamMemberWithAllianceCharacterInformations;
module.exports.getInstance = function() {
  return new FightTeamMemberWithAllianceCharacterInformations();
};