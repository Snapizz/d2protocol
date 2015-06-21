var FightTeamMemberInformations = function() {
    this.id = 0;
};

module.exports = function() {
    return new FightTeamMemberInformations();
};

FightTeamMemberInformations.prototype.serialize = function(output) {
    this.serializeAs_FightTeamMemberInformations(output);
};

FightTeamMemberInformations.prototype.deserialize = function(input) {
    this.deserializeAs_FightTeamMemberInformations(input);
};

FightTeamMemberInformations.prototype.serializeAs_FightTeamMemberInformations = function(param1) {
    param1.writeInt(this.id);
};

FightTeamMemberInformations.prototype.deserializeAs_FightTeamMemberInformations = function(param1) {
    this.id = param1.readInt();
};

FightTeamMemberInformations.prototype.getTypeId = function() {
    return 44;
};

FightTeamMemberInformations.prototype.getClassName = function() {
    return 'FightTeamMemberInformations';
};

module.exports.id = 44;
module.exports.FightTeamMemberInformations = FightTeamMemberInformations;