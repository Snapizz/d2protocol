var FightTeamMemberWithAllianceCharacterInformations = function() {
    this.allianceInfos = new BasicAllianceInformations();
};

require('util').inherits(FightTeamMemberWithAllianceCharacterInformations, require('./fight-team-member-character-informations.js'));

module.exports = function() {
    return new FightTeamMemberWithAllianceCharacterInformations();
};

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
    this.deserializeAs_FightTeamMemberCharacterInformations(param1);
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
module.exports.FightTeamMemberWithAllianceCharacterInformations = FightTeamMemberWithAllianceCharacterInformations;